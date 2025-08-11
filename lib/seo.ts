import { Metadata } from 'next';
import { generateCanonicalUrl } from './canonical';

/**
 * Interface for page metadata options
 */
interface SeoMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Generate consistent SEO metadata for pages
 * @param options - Metadata options
 * @returns Next.js Metadata object
 */
export function generateSeoMetadata(options: SeoMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    ogImage = '/logo.png',
    noIndex = false,
  } = options;

  // Ensure title is within recommended length (50-60 chars)
  const titleWithSuffix = title.includes('Tech Support Pal') 
    ? title 
    : `${title} | Tech Support Pal`;

  // Base keywords for all pages
  const baseKeywords = [
    'tech support Naperville IL',
    'tech support Wheaton IL',
    'in-home computer help',
    'senior tech support',
    'computer help Naperville seniors',
    'friendly tech support',
  ];

  // Combine base and page-specific keywords
  const allKeywords = [...baseKeywords, ...keywords].join(', ');

  return {
    title: titleWithSuffix,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: generateCanonicalUrl(path),
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: titleWithSuffix,
      description,
      url: generateCanonicalUrl(path),
      siteName: 'Tech Support Pal',
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: 'Tech Support Pal',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titleWithSuffix,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generate schema markup for LocalBusiness
 * @returns LocalBusiness schema as string
 */
export function generateLocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tech Support Pal',
    url: 'https://techsupportpal.com',
    telephone: '510-316-7632',
    description: 'In-home technology support for seniors in Naperville & Wheaton, IL',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Naperville',
      addressRegion: 'IL',
      postalCode: '60540',
      addressCountry: 'US',
    },
    areaServed: [
      'Naperville IL',
      'Wheaton IL',
      'DuPage County IL',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    image: 'https://techsupportpal.com/logo.png',
  };

  return JSON.stringify(schema);
}

/**
 * Generate schema markup for Service
 * @param serviceName - Name of the service
 * @param serviceDescription - Description of the service
 * @returns Service schema as string
 */
export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tech Support Pal',
      areaServed: [
        'Naperville IL',
        'Wheaton IL',
        'DuPage County IL',
      ],
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 41.7508,
        longitude: -88.1535,
      },
      geoRadius: '20000',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Generate schema markup for Article
 * @param options - Article schema options
 * @returns Article schema as string
 */
export function generateArticleSchema(options: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  path?: string;
}) {
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    authorName = 'Tech Support Pal',
    path = '/',
  } = options;

  // Ensure absolute URLs
  const absoluteUrl = generateCanonicalUrl(path);
  const absoluteImageUrl = image.startsWith('http') ? image : `https://techsupportpal.com${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: absoluteImageUrl,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tech Support Pal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://techsupportpal.com/logo.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
  };

  return JSON.stringify(schema);
}
