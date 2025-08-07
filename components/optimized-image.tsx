'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { OptimizedImageProps, createImageProps } from '@/lib/image-optimization';

interface OptimizedImageComponentProps extends OptimizedImageProps {
  type?: 'hero' | 'card' | 'thumbnail' | 'icon' | 'default';
  position?: 'above-fold' | 'below-fold';
  format?: 'jpg' | 'jpeg' | 'png' | 'gif' | 'webp' | 'avif' | 'svg';
  importance?: 'high' | 'medium' | 'low';
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  useBlur?: boolean;
}

// Default tiny placeholder SVG for use when blur is not needed
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';

/**
 * OptimizedImage component that wraps Next.js Image with accessibility and optimization features
 */
export default function OptimizedImage({
  src,
  alt,
  type = 'default',
  position = 'below-fold',
  format = 'webp',
  importance = 'medium',
  className = '',
  style = {},
  width,
  height,
  quality,
  priority,
  sizes,
  role,
  ariaLabel,
  useBlur = false,
}: OptimizedImageComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Use our utility to create optimized image props
  const imageProps = createImageProps(
    src,
    alt,
    type,
    position,
    format,
    importance
  );

  // Allow overriding specific props if provided
  const finalProps = {
    ...imageProps,
    width: width || imageProps.width,
    height: height || imageProps.height,
    quality: quality || imageProps.quality,
    priority: priority !== undefined ? priority : imageProps.priority,
    sizes: sizes || imageProps.sizes,
  };

  // Add accessibility attributes
  const accessibilityProps: Record<string, string> = {};
  
  // If it's a decorative image, hide it from screen readers
  if (alt === '') {
    accessibilityProps['aria-hidden'] = 'true';
    accessibilityProps.role = 'presentation';
  } else {
    // Otherwise, add appropriate ARIA attributes
    if (role) accessibilityProps.role = role;
    if (ariaLabel) accessibilityProps['aria-label'] = ariaLabel;
  }

  // Handle image load and error states
  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setIsError(true);

  return (
    <div 
      className={`optimized-image-container ${className} ${isLoaded ? 'loaded' : 'loading'} ${isError ? 'error' : ''}`} 
      style={style}
      data-testid="optimized-image-container"
    >
      <Image
        {...finalProps}
        {...accessibilityProps}
        className={`optimized-image ${isLoaded ? 'visible' : 'invisible'}`}
        // Add loading strategy based on priority
        loading={finalProps.priority ? 'eager' : 'lazy'}
        // Only use blur placeholder if explicitly requested
        // This avoids issues with static export and non-imported images
        {...(useBlur ? {
          placeholder: 'blur',
          blurDataURL: DEFAULT_PLACEHOLDER
        } : {})}
        onLoad={handleLoad}
        onError={handleError}
        // Add appropriate ARIA attributes for accessibility
        aria-busy={!isLoaded}
        aria-hidden={alt === ''}
      />
      
      {/* Show fallback for error state */}
      {isError && (
        <div 
          className="image-error-fallback" 
          style={{
            width: finalProps.width,
            height: finalProps.height,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
            padding: '1rem'
          }}
          role="img"
          aria-label={alt || 'Image failed to load'}
        >
          Image not available
        </div>
      )}
    </div>
  );
}
