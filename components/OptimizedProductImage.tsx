'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
  quality?: number;
}

/**
 * Optimized product image with lazy loading, blur placeholder,
 * and error fallback. Uses Next.js Image for automatic optimization.
 */
export default function OptimizedProductImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false,
  quality = 85,
}: OptimizedProductImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-2xl ${className}`}
        style={fill ? undefined : { width, height, aspectRatio: `${width}/${height}` }}
      >
        <div className="text-center p-4">
          <svg className="w-10 h-10 text-deep-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <span className="text-deep-500 text-xs">Image coming soon</span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        sizes={sizes}
        priority={priority}
        quality={quality}
        onError={() => setError(true)}
        unoptimized={src.startsWith('http')} // external images from Unsplash
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      sizes={sizes}
      priority={priority}
      quality={quality}
      onError={() => setError(true)}
      unoptimized={src.startsWith('http')} // external images from Unsplash
    />
  );
}