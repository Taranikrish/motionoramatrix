import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';

export default function SeeMoreLogos() {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/logos/`, {
            method: 'GET',
            credentials: 'include',
        });
        if (!response.ok) throw new Error('Failed to fetch logos');

        const data = await response.json();
        setLogos(data.data.logos || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching logos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  const handleDelete = async (logoId) => {
    if (!window.confirm('Are you sure you want to delete this logo?')) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/logos/${logoId}`,
        {
          method: 'DELETE',
          credentials: 'include',
        }
      );

      if (!response.ok) throw new Error('Failed to delete logo');

      setLogos(logos.filter((logo) => logo._id !== logoId));
    } catch (error) {
      console.error('Error deleting logo:', error);
      alert('Failed to delete logo');
    }
  };

  const handleTogglePublish = async (logoId, currentStatus) => {
    if (!window.confirm(`Are you sure you want to ${currentStatus ? 'unpublish' : 'publish'} this logo?`)) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/logos/toggle/publish/${logoId}`,
        {
          method: 'PATCH',
          credentials: 'include',
        }
      );

      if (!response.ok) throw new Error('Failed to toggle publish status');

      setLogos(
        logos.map((logo) =>
          logo._id === logoId ? { ...logo, isPublished: !logo.isPublished } : logo
        )
      );
    } catch (error) {
      console.error('Error toggling publish status:', error);
      alert('Failed to toggle publish status');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-xl">Error: {error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-1 mb-10">
        <NavBar />
      </div>

      <div className="flex-1 p-8 pt-44 pb-20">
        <h1
          className="text-4xl font-bold text-white text-center mb-8"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)',
          }}
        >
          Manage Logos
        </h1>

        {logos.length === 0 ? (
          <div className="text-center text-white text-xl">
            No logos available
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logos.map((logo) => (
              <div
                key={logo._id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg relative"
              >
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <button
                      onClick={() => handleDelete(logo._id)}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
                      title="Delete logo"
                    >
                      ×
                    </button>
                    <input
                      type="checkbox"
                      checked={logo.isPublished}
                      onChange={() =>
                        handleTogglePublish(logo._id, logo.isPublished)
                      }
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      title={logo.isPublished ? 'Unpublish logo' : 'Publish logo'}
                    />
                  </div>
                )}

                <img
                  src={logo.logoFile}
                  alt="Logo"
                  className="w-full h-48 object-contain bg-white p-4"
                  onError={(e) => {
                    console.error('Logo failed to load:', logo.logoFile);
                    e.target.style.display = 'none';
                  }}
                />
                <div className="p-4">
                  <div className="text-xs text-gray-400">
                    Status: {logo.isPublished ? 'Published' : 'Unpublished'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
