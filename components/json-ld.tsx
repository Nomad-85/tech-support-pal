import React from 'react'

interface JsonLdProps {
  data: Record<string, any>
}

// Component to add structured data to pages
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper function to create LocalBusiness schema
export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tech Support Pal',
    description: 'Friendly, patient technology help in the comfort of your own home. We specialize in making technology simple for everyone.',
    url: 'https://techsupportpal.com',
    telephone: '(510) 316-7632',
    email: 'support@techsupportpal.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Naperville',
      addressRegion: 'IL',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.7508',
      longitude: '-88.1535'
    },
    image: 'https://techsupportpal.com/logo.png',
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [
      'https://www.facebook.com/techsupportpal',
      'https://twitter.com/techsupportpal'
    ]
  }
}

// Helper function to create Service schema
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tech Support Pal',
      url: 'https://techsupportpal.com'
    },
    serviceType: 'Technology Support',
    url: service.url
  }
}

// Helper function to create Article schema for help center articles
export function createArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tech Support Pal',
      logo: {
        '@type': 'ImageObject',
        url: 'https://techsupportpal.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  }
}

// Helper function to create FAQPage schema
export function createFAQPageSchema(faqs: Array<{
  question: string
  answer: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}
