import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';

export default function ProtectedRoute({ children }) {
  const { isAdmin, loading } = useAdmin();

  // Show loading while checking admin status
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-jet-black">
        <div className="text-ivory-white text-xl">Loading...</div>
      </div>
    );
  }

  // Redirect to admin login if not admin
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  // Render the protected component
  return children;
}