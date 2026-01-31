import { useState, useRef, useCallback } from 'react';

interface ImageCompareSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ImageCompareSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Product photo',
  afterLabel = 'Shopper photo'
}: ImageCompareSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="image-compare-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '16px',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none',
        display: 'flex'
      }}
    >
      {/* After Image (Shopper - Full width, behind) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#f5f5f5',
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          zIndex: 1
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${afterImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Before Image (Product - Full width, clipped from right) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#f5f5f5',
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          zIndex: 2
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Slider Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          width: '3px',
          height: '100%',
          background: '#843CFC',
          zIndex: 10
        }}
      />

      {/* Slider Handle */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${sliderPosition}%`,
          transform: 'translate(-50%, -50%)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#843CFC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(132, 60, 252, 0.4)',
          zIndex: 11,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        {/* Arrow Icons */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 6 4 12 9 18" />
          <polyline points="15 6 20 12 15 18" />
        </svg>
      </div>

      {/* Before Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          background: 'white',
          padding: '10px 20px',
          borderRadius: '50px',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1a1a1a',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 5,
          opacity: sliderPosition > 20 ? 1 : 0,
          transition: 'opacity 0.2s ease'
        }}
      >
        {beforeLabel}
      </div>

      {/* After Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: 'white',
          padding: '10px 20px',
          borderRadius: '50px',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1a1a1a',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 5,
          opacity: sliderPosition < 80 ? 1 : 0,
          transition: 'opacity 0.2s ease'
        }}
      >
        {afterLabel}
      </div>
    </div>
  );
}
