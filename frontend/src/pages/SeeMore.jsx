import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';

export default function SeeMore() {
  const { type } = useParams(); // 'videos' or 'reels'
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const endpoint =
          type === 'videos'
            ? `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/see-more/videos`
            : `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/see-more/reels`;

        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch videos');

        const data = await response.json();
        setVideos(data.data.videos || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [type]);

  const handleDelete = async (videoId) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/${videoId}`,
        {
          method: 'DELETE',
          credentials: 'include',
        }
      );

      if (!response.ok) throw new Error('Failed to delete video');

      setVideos(videos.filter((video) => video._id !== videoId));
    } catch (error) {
      console.error('Error deleting video:', error);
      alert('Failed to delete video');
    }
  };

  const handleTogglePublish = async (videoId, currentStatus) => {
    const maxPublished = type === 'videos' ? 4 : 3;
    const publishedCount = videos.filter((v) => v.isPublished).length;

    if (!currentStatus && publishedCount >= maxPublished) {
      alert(`Maximum ${maxPublished} ${type === 'videos' ? 'videos' : 'reels'} can be published at once.`);
      return;
    }

    if (!window.confirm(`Are you sure you want to ${currentStatus ? 'unpublish' : 'publish'} this video?`)) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/toggle/publish/${videoId}`,
        {
          method: 'PATCH',
          credentials: 'include',
        }
      );

      if (!response.ok) throw new Error('Failed to toggle publish status');

      setVideos(
        videos.map((video) =>
          video._id === videoId ? { ...video, isPublished: !video.isPublished } : video
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
          {type === 'videos' ? 'Long Videos' : 'Reel Videos'}
        </h1>

        {videos.length === 0 ? (
          <div className="text-center text-white text-xl">
            No {type === 'videos' ? 'videos' : 'reels'} available
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video._id}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg relative ${
                  type === 'reels'
                    ? 'aspect-9/16 max-h-[80vh] mx-auto'
                    : 'aspect-video'
                }`}
              >
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
                      title="Delete video"
                    >
                      ×
                    </button>
                    <input
                      type="checkbox"
                      checked={video.isPublished}
                      onChange={() =>
                        handleTogglePublish(video._id, video.isPublished)
                      }
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      title={video.isPublished ? 'Unpublish video' : 'Publish video'}
                    />
                  </div>
                )}

                <video
                  src={video.videoFile}
                  controls
                  controlsList="nodownload"
                  className="w-full h-full object-cover relative"
                  onError={(e) => {
                    console.error('Video failed to load:', video.videoFile);
                    e.target.style.display = 'none';
                  }}
                />
                <div className=" absolute bottom-0 bg-black  flex justify-around items-center space-x-1 w-full ">
                  <h3 className="text-white text-sm font-semibold ">
                    {video.title}
                  </h3>
                  {isAdmin && (
                    <div className=" text-xs text-gray-400">
                      Status: {video.isPublished ? 'Published' : 'Unpublished'}
                    </div>
                  )}
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
