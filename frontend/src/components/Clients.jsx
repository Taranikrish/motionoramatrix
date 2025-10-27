import { useEffect, useRef, useState } from "react";

export default function Clients() {
  const scrollRef = useRef(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/v1/logos/published`);
        if (!response.ok) {
          throw new Error('Failed to fetch logos');
        }
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

  useEffect(() => {
    if (logos.length === 0) return;

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
  }, [logos]);

  return (
    <div className="overflow-hidden bg-black mt-20">
      <div
        ref={scrollRef}
        className="flex space-x-10"
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: Math.max(20, logos.length * 4) }, (_, i) => (
          <img
            key={i}
            src={logos[i % logos.length]?.logoFile}
            alt={`Client logo ${(i % logos.length) + 1}`}
            className="w-32 h-16 object-contain rounded-lg shrink-0"
            onError={(e) => {
              console.error('Logo failed to load:', logos[i % logos.length]?.logoFile);
              e.target.style.display = 'none';
            }}
          />
        ))}
      </div>
    </div>
  );
}