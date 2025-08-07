'use client';

import React from 'react';
import OptimizedImage from './optimized-image';
import '@/styles/optimized-image.css';

/**
 * ImageShowcase component to demonstrate the use of OptimizedImage component
 * with different image types and configurations
 */
export default function ImageShowcase() {
  return (
    <div className="image-showcase">
      <h2 className="text-2xl font-bold mb-6">Optimized Images</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hero image example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">Hero Image</h3>
          <OptimizedImage
            src="/header-image.png"
            alt="Tech Support Pal hero image"
            type="hero"
            position="above-fold"
            importance="high"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">
            Hero image with high priority loading
          </p>
        </div>
        
        {/* Service card image example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">Service Card Image</h3>
          <OptimizedImage
            src="/computer-support.png"
            alt="Computer support service"
            type="card"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">
            Service card image with standard loading
          </p>
        </div>
        
        {/* Thumbnail example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">Thumbnail</h3>
          <OptimizedImage
            src="/testimonial-pic.png"
            alt="Customer testimonial"
            type="thumbnail"
            className="rounded-full"
          />
          <p className="mt-2 text-sm text-gray-600">
            Thumbnail image with optimized loading
          </p>
        </div>
        
        {/* WebP format example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">WebP Format</h3>
          <OptimizedImage
            src="/streaming-devices.webp"
            alt="Streaming devices"
            type="card"
            format="webp"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">
            WebP format for better compression
          </p>
        </div>
        
        {/* Decorative image example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">Decorative Image (Hidden from Screen Readers)</h3>
          <OptimizedImage
            src="/placeholder.svg"
            alt=""
            type="default"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">
            Decorative image hidden from screen readers with empty alt text
          </p>
        </div>
        
        {/* Error handling example */}
        <div className="showcase-item">
          <h3 className="text-lg font-medium mb-2">Error Handling</h3>
          <OptimizedImage
            src="/non-existent-image.jpg"
            alt="This image doesn't exist"
            type="card"
            className="w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">
            Example of error handling for non-existent images
          </p>
        </div>
      </div>
      
      <div className="mt-10 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Accessibility Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>All images have appropriate alt text</li>
          <li>Decorative images are hidden from screen readers</li>
          <li>Loading states are communicated with aria-busy</li>
          <li>Error states provide clear fallback content</li>
          <li>Reduced motion preference is respected</li>
        </ul>
      </div>
      
      <div className="mt-10 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Performance Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Automatic responsive sizing based on viewport</li>
          <li>Lazy loading for below-fold images</li>
          <li>Priority loading for critical above-fold images</li>
          <li>WebP format support for better compression</li>
          <li>Placeholder during loading for better user experience</li>
        </ul>
      </div>
    </div>
  );
}
