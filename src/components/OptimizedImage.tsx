import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const OptimizedImage = ({ src, alt, className, onClick }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className} style={{ position: 'relative' }} onClick={onClick}>
      {!isLoaded && (
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a)',
          backgroundSize: '20px 20px',
          animation: 'shimmer 2s infinite linear'
        }} />
      )}
      <img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.5s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};
