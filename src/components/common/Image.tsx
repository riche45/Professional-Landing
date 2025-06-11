import { useState } from 'react';

interface ImageProps {
  src: string | { src: string }; // Permitir tanto strings como módulos importados
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ImageProps) {
  const [error, setError] = useState(false);

  // Manejar tanto strings como módulos importados
  const imgSrc = typeof src === 'string' ? src : src.src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setError(true)}
        className="w-full h-full object-cover"
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-dark-700">
          <span className="text-sm text-gray-500">Error al cargar la imagen</span>
        </div>
      )}
    </div>
  );
} 