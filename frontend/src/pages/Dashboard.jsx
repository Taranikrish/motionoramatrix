import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, isAdmin } = useAdmin();
  const [videoCount, setVideoCount] = useState(0);
  const [logoCount, setLogoCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideoCount = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/`, {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        setVideoCount(data.data.videos.length);
      } catch (err) {
        setError('Failed to load video count');
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoCount();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddVideo = () => {
    navigate('/add-video');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <NavBar />
      <div className="flex-1 pt-20">
        {/* Subtle background effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
              {/* Hero Section */}
             

              {/* Stats Cards */}
              <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Video Count Card */}
                <div className="group flex flex-col gap-4 rounded-xl border border-white/20 justify-center p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">Total Videos</h3>
                      {loading ? (
                        <div className="text-white/60">Loading...</div>
                      ) : error ? (
                        <div className="text-red-400">{error}</div>
                      ) : (
                        <div className="text-3xl font-bold text-white text-center">{videoCount}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Add Video Card */}
                <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">Add New Video</h3>
                      <button
                        onClick={handleAddVideo}
                        className="mt-2 w-full bg-white hover:bg-white/80 text-black font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Add Video
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add Logo Card */}
                <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">Add New Logo</h3>
                      <button
                        onClick={() => navigate('/add-logo')}
                        className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Add Logo
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Actions */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Quick Actions</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow bg-gray-900/50">
                    <h3 className="text-lg font-bold text-white">Manage Long Videos</h3>
                    <p className="text-white/70">View and manage your long-form video content</p>
                    <button
                      onClick={() => navigate('/see-more/videos')}
                      className="w-full bg-white hover:bg-white/80 text-black font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Manage Videos
                    </button>
                  </div>
                  <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow bg-gray-900/50">
                    <h3 className="text-lg font-bold text-white">Manage Reel Videos</h3>
                    <p className="text-white/70">View and manage your short-form reel content</p>
                    <button
                      onClick={() => navigate('/see-more/reels')}
                      className="w-full bg-white hover:bg-white/80 text-black font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Manage Reels
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
)}