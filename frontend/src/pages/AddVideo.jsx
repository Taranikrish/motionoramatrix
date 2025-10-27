import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';

export default function AddVideo() {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();
  const [formData, setFormData] = useState({
    title: '',
    isReel: false,
    videoFile: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('video/')) {
        setError('Please select a valid video file');
        return;
      }
      // Validate file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        setError('File size must be less than 100MB');
        return;
      }
      setFormData({ ...formData, videoFile: file });
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.videoFile) {
      setError('Please select a video file');
      setLoading(false);
      return;
    }

    if (!formData.title.trim()) {
      setError('Please enter a title');
      setLoading(false);
      return;
    }

    try {
      const uploadData = new FormData();
      uploadData.append('videoFile', formData.videoFile);
      uploadData.append('title', formData.title);

      uploadData.append('type', formData.isReel ? 'reel' : 'video');

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/upload`, {
        method: 'POST',
        credentials: 'include',
        body: uploadData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      setSuccess('Video uploaded successfully!');
      // Reset form
      setFormData({
        title: '',
        description: '',
        isReel: false,
        videoFile: null
      });
      // Reset file input
      document.getElementById('videoFile').value = '';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <div className="flex-1 p-8 mt-40">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            
            <h1 className="text-4xl font-bold text-white
             text-center" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>
              Add New Video
            </h1>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            {error && (
              <div className="bg-red-600 text-white
               p-4 rounded mb-6 text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-600 text-white
               p-4 rounded mb-6 text-center">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-white
                 text-sm font-medium mb-2">
                  Video Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 text-white
                   rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter video title"
                />
              </div>



              <div>
                <label className="flex items-center text-white
                ">
                  <input
                    type="checkbox"
                    name="isReel"
                    checked={formData.isReel}
                    onChange={handleInputChange}
                    className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  This is a reel video (short video)
                </label>
              </div>

              <div>
                <label htmlFor="videoFile" className="block text-white
                 text-sm font-medium mb-2">
                  Video File *
                </label>
                <input
                  type="file"
                  id="videoFile"
                  accept="video/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 text-white
                   rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white
                   hover:file:bg-blue-700"
                />
                <p className="text-gray-400 text-sm mt-1">Max file size: 100MB. Supported formats: MP4, MOV, AVI, etc.</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white
                 font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {loading ? 'Uploading...' : 'Upload Video'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
