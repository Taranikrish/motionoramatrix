import { useState, useEffect, useRef } from "react";

export default function ReelCarousel() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/videos/reels`);
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setVideos(data.data.videos || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // 🧠 Play only the current video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          // Delay play slightly to allow rotation to complete
          setTimeout(() => {
            video.play().catch((err) => console.log("Play failed:", err));
          }, 700);
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  // 🧠 When one video ends, move to next
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    // Start first video
    if (videos.length > 0 && videoRefs.current[0]) {
      videoRefs.current[0].play().catch((err) => console.log("Initial play failed:", err));
    }
  }, [videos.length]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-96 bg-jet-black text-ivory-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-96 bg-jet-black text-ivory-white">
        Error: {error}
      </div>
    );

  if (videos.length === 0)
    return (
      <div className="flex justify-center items-center h-96 bg-jet-black text-ivory-white">
        No videos available
      </div>
    );

  return (
    <div className="flex justify-center items-center h-96 bg-jet-black">
      <div
        className="relative w-64 h-64 md:w-80 md:h-80"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(-${currentIndex * (360 / videos.length)}deg)`,
          }}
        >
          {videos.map((video, index) => {
            const angle = (index * 360) / videos.length;
            const translateZ = 300; // distance from center
            const isFront = index === currentIndex;

            return (
              <div
                key={video._id}
                className="absolute aspect-9/16 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-in-out"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                  opacity: isFront ? 1 : 0.6,
                  filter: isFront ? "blur(0px)" : "blur(6px)",
                  scale: isFront ? 1 : 0.9,
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoFile}
                  muted
                  playsInline
                  loop={false}
                  onEnded={isFront ? handleVideoEnd : undefined}
                  className="w-full h-[60%] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}