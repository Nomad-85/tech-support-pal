import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the ImageShowcase component for code splitting
const ImageShowcase = dynamic(() => import('@/components/image-showcase'), {
  loading: () => <div className="p-8 text-center">Loading image showcase...</div>,
  ssr: true
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Image Optimization | Tech Support Pal',
  description: 'Demonstration of optimized images with accessibility features and performance best practices',
  openGraph: {
    title: 'Image Optimization | Tech Support Pal',
    description: 'Demonstration of optimized images with accessibility features and performance best practices',
    type: 'website',
    url: '/image-optimization',
  },
  alternates: {
    canonical: '/image-optimization',
  },
};

export default function ImageOptimizationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section 
        className="mb-10"
        aria-labelledby="page-title"
        role="region"
      >
        <h1 
          id="page-title"
          className="text-3xl font-bold mb-4"
        >
          Image Optimization
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This page demonstrates the use of optimized images with accessibility features and performance best practices.
        </p>
      </section>

      <section
        className="mb-10"
        aria-labelledby="optimization-features"
        role="region"
      >
        <h2 
          id="optimization-features"
          className="text-2xl font-bold mb-4"
        >
          Optimization Features
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js Image component for automatic optimization</li>
            <li>WebP and AVIF format support for better compression</li>
            <li>Responsive images that adapt to different screen sizes</li>
            <li>Lazy loading for improved page performance</li>
            <li>Proper accessibility attributes for screen readers</li>
            <li>Error handling with accessible fallback content</li>
            <li>Loading states with visual indicators</li>
          </ul>
        </div>
      </section>

      <ImageShowcase />
      
      <section 
        className="mt-12 bg-gray-50 p-6 rounded-lg"
        aria-labelledby="implementation-notes"
        role="region"
      >
        <h2 
          id="implementation-notes"
          className="text-2xl font-bold mb-4"
        >
          Implementation Notes
        </h2>
        <p className="mb-4">
          The image optimization is implemented using Next.js built-in Image component with additional accessibility and user experience enhancements. The custom OptimizedImage component provides:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Proper ARIA attributes for screen reader support</li>
          <li>Loading state indicators with reduced motion support</li>
          <li>Error handling with accessible fallback content</li>
          <li>Automatic responsive sizing based on image type</li>
          <li>Priority loading for critical above-fold images</li>
        </ul>
      </section>
    </main>
  );
}
