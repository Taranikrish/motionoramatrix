import { useEffect, useRef, useState } from "react";

export default function AutoVideoScroll() {
  const scrollRef = useRef(null);
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

  useEffect(() => {
    if (videos.length === 0) return;

    const container = scrollRef.current;
    let position = 0;
    const speed = 0.5; // adjust for slower/faster scroll

    function animate() {
      if (!container) return;

      position -= speed;
      container.style.transform = `translateX(${position}px)`;

      // Smooth reset: when scrolled past half, add back the half width to continue seamlessly
      if (Math.abs(position) >= container.scrollWidth / 2) {
        position += container.scrollWidth / 2;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [videos]);

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

  return (
    <div className="overflow-hidden bg-jet-black py-6">
      <div
        ref={scrollRef}
        className="flex space-x-6"
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: Math.max(8, videos.length * 2) }, (_, i) => {
          const video = videos[i % videos.length];
          return (
            <div key={i} className="w-96 h-48 rounded-xl shrink-0 flex flex-col justify-center items-center">
              <video
                src={video.videoFile}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full rounded-xl object-contain"
                onError={(e) => {
                  console.error('Video failed to load:', video.videoFile);
                  e.target.style.display = 'none';
                }}
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
}