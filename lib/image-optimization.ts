/**
 * Image Optimization Utility
 * 
 * This utility provides functions to work with optimized images in the application.
 * It leverages Next.js Image component for optimization.
 */

import { StaticImageData } from 'next/image';

// Define image types for better type safety
export type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'gif' | 'webp' | 'avif' | 'svg';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Get the appropriate sizes attribute for responsive images
 * @param type The type of image (hero, card, thumbnail, etc.)
 * @returns The sizes attribute string
 */
export function getImageSizes(type: 'hero' | 'card' | 'thumbnail' | 'icon' | 'default'): string {
  switch (type) {
    case 'hero':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px';
    case 'card':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'thumbnail':
      return '(max-width: 640px) 50vw, 25vw';
    case 'icon':
      return '32px';
    default:
      return '100vw';
  }
}

/**
 * Get image dimensions based on the image type
 * @param type The type of image (hero, card, thumbnail, etc.)
 * @returns Object containing width and height
 */
export function getImageDimensions(type: 'hero' | 'card' | 'thumbnail' | 'icon' | 'default'): { width: number, height: number } {
  switch (type) {
    case 'hero':
      return { width: 1200, height: 600 };
    case 'card':
      return { width: 400, height: 300 };
    case 'thumbnail':
      return { width: 200, height: 200 };
    case 'icon':
      return { width: 32, height: 32 };
    default:
      return { width: 800, height: 600 };
  }
}

/**
 * Determine if an image should be loaded with priority
 * @param position The position of the image in the viewport
 * @returns Boolean indicating if the image should be loaded with priority
 */
export function shouldPrioritizeImage(position: 'above-fold' | 'below-fold'): boolean {
  return position === 'above-fold';
}

/**
 * Generate image metadata for SEO
 * @param image Image data
 * @returns Object containing image metadata for SEO
 */
export function generateImageMetadata(
  image: { url: string, alt: string, width: number, height: number }
): { url: string, alt: string, width: number, height: number } {
  return {
    url: image.url,
    alt: image.alt,
    width: image.width,
    height: image.height
  };
}

/**
 * Get the appropriate quality setting for different image types
 * @param format Image format
 * @param importance Importance of the image
 * @returns Quality value (1-100)
 */
export function getImageQuality(format: ImageFormat, importance: 'high' | 'medium' | 'low'): number {
  // SVG doesn't need quality settings
  if (format === 'svg') return 100;
  
  // For lossy formats
  switch (importance) {
    case 'high':
      return 85;
    case 'medium':
      return 75;
    case 'low':
      return 65;
    default:
      return 80;
  }
}

/**
 * Helper to create image props for Next.js Image component
 * @param src Image source path
 * @param alt Alt text
 * @param type Image type
 * @param position Image position in viewport
 * @param format Image format
 * @param importance Image importance
 * @returns Props for Next.js Image component
 */
export function createImageProps(
  src: string,
  alt: string,
  type: 'hero' | 'card' | 'thumbnail' | 'icon' | 'default' = 'default',
  position: 'above-fold' | 'below-fold' = 'below-fold',
  format: ImageFormat = 'webp',
  importance: 'high' | 'medium' | 'low' = 'medium'
): OptimizedImageProps {
  const dimensions = getImageDimensions(type);
  const priority = shouldPrioritizeImage(position);
  const quality = getImageQuality(format, importance);
  const sizes = getImageSizes(type);
  
  return {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    quality,
    priority,
    sizes,
  };
}
