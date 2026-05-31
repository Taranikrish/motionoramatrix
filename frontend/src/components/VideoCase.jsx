import { useEffect, useState } from "react";

export default function AutoVideoScroll() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/published`,{
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
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
  }, []);

  if (loading) {
    return (
      <div className="overflow-hidden bg-jet-black py-6">
        <div className="flex space-x-6 justify-center">
          <div className="w-96 h-48 rounded-xl bg-gray-700 animate-pulse"></div>
          <div className="w-96 h-48 rounded-xl bg-gray-700 animate-pulse"></div>
          <div className="w-96 h-48 rounded-xl bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="overflow-hidden bg-jet-black py-6">
        <div className="flex justify-center items-center h-48">
          <p className="text-ivory-white">Failed to load videos: {error}</p>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="overflow-hidden bg-jet-black py-6">
        <div className="flex justify-center items-center h-48">
          <p className="text-ivory-white">No videos available</p>
        </div>
      </div>
    );
  }

  const marqueeStyle = `
    @keyframes marquee {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-50%, 0, 0);
      }
    }
    .marquee-wrapper {
      overflow: hidden;
      background-color: #0B0B0B;
      padding: 1.5rem 0;
      width: 100%;
    }
    .marquee-container {
      display: flex;
      width: max-content;
      gap: 1.5rem;
      animation: marquee 30s linear infinite;
      will-change: transform;
    }
    .marquee-container:hover {
      animation-play-state: paused;
    }
    .video-card {
      width: 24rem; /* w-96 */
      height: 12rem; /* h-48 */
      border-radius: 0.75rem; /* rounded-xl */
      overflow: hidden;
      flex-shrink: 0;
      background-color: #1A1A1A;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      cursor: pointer;
      position: relative;
    }
    .video-card:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
    }
    .video-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
      display: flex;
      align-items: flex-end;
      padding: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    .video-card:hover .video-overlay {
      opacity: 1;
    }
  `;

  // We repeat items to ensure seamless loop
  const displayVideos = [...videos, ...videos];

  return (
    <div className="marquee-wrapper">
      <style>{marqueeStyle}</style>
      <div className="marquee-container">
        {displayVideos.map((video, idx) => {
          return (
            <div key={`${video._id}-${idx}`} className="video-card">
              <video
                src={video.videoFile}
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-xl"
                onMouseEnter={(e) => {
                  e.target.play().catch((err) => console.log("Play failed:", err));
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
                onError={(e) => {
                  console.error('Video failed to load:', video.videoFile);
                  e.target.style.display = 'none';
                }}
              />
              <div className="video-overlay">
                <p className="text-white font-semibold text-sm truncate w-full">
                  {video.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}