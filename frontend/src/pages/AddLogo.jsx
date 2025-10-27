import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

export default function AddLogo() {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();
  const [formData, setFormData] = useState({
    logoFile: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      logoFile: file
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('logoFile', formData.logoFile);

    const token = localStorage.getItem('adminToken');

    const response = await fetch(
      `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/logos/upload`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      }
    );

    if (response.status === 401) {
      alert('Session expired. Please log in again.');
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
      return;
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upload logo');
    }

    alert('Logo uploaded successfully!');
    navigate('/dashboard');
  } catch (err) {
    setError(err.message);
    console.error('Error uploading logo:', err);
  } finally {
    setLoading(false);
  }
};


  const handleBack = () => {
    navigate('/dashboard');
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-xl">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white ">
      <NavBar />
      <div className="container mx-auto px-4 mt-24 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <button
              onClick={handleBack}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-200 self-start sm:self-auto"
            >
              ← Back
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Add New Logo</h1>
            <div></div> {/* Spacer for centering */}
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 shadow-lg">
            {error && (
              <div className="mb-4 p-3 bg-red-600 text-white rounded-lg">
                {error}
              </div>
            )}



            <div className="mb-6">
              <label htmlFor="logoFile" className="block text-sm font-medium mb-2">
                Logo File *
              </label>
              <input
                type="file"
                id="logoFile"
                name="logoFile"
                onChange={handleFileChange}
                required
                accept="image/*"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
              <p className="text-sm text-gray-400 mt-1">
                Supported formats: PNG, JPG, JPEG, SVG. Max size: 5MB
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {loading ? 'Uploading...' : 'Upload Logo'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
