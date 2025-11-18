import { useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export const OptimizedVideo = ({ src, className, poster }: OptimizedVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className} style={{ position: 'relative' }}>
      {!isLoaded && (
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a)',
          backgroundSize: '20px 20px',
          animation: 'shimmer 2s infinite linear',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '18px'
        }}>
          Loading video...
        </div>
      )}
      <video 
        controls 
        preload="metadata"
        poster={poster}
        onLoadedData={() => setIsLoaded(true)}
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.5s ease-in-out',
          width: '100%',
          height: '100%'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
