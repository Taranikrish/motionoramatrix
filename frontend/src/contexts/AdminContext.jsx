import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * AdminContext provides:
 *  - isAdmin: boolean
 *  - loading: boolean (while verifying token)
 *  - login(token) : store token and mark admin
 *  - logout() : remove token and mark not admin
 *
 * By default if REACT_APP_API_URL is set this context will try to verify
 * the token against `${REACT_APP_API_URL}/admin/verify` with Authorization: Bearer <token>.
 * If no API URL is configured the presence of adminToken in localStorage is treated as "logged-in".
 */

const AdminContext = createContext(null);

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const verify = async () => {
      const token = localStorage.getItem('adminToken');
      const apiBase = import.meta.env.VITE_API_URL || '';

      if (!token) {
        if (mounted) {
          setIsAdmin(false);
          setLoading(false);
        }
        return;
      }

      // If no API provided, assume token presence means admin (useful for local/dev)
      if (!apiBase) {
        if (mounted) {
          setIsAdmin(true);
          setLoading(false);
        }
        return;
      }

      try {
        const url = `${apiBase.replace(/\/$/, '')}/admin/verify`;
        const res = await fetch(url, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });

        if (mounted) setIsAdmin(res.ok);
      } catch (err) {
        if (mounted) setIsAdmin(false);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    verify();
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (token, { persist = true } = {}) => {
    if (persist) localStorage.setItem('adminToken', token);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loading, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return ctx;
}

