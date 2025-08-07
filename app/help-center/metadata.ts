import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tech Support Pal Help Center - Technology Guides & Solutions",
  description: "Browse our collection of helpful technology guides, tutorials, and solutions for common tech problems. Find answers to your tech questions in our comprehensive knowledge base.",
  alternates: {
    canonical: "/help-center",
  },
  openGraph: {
    title: "Tech Support Pal Help Center - Technology Guides & Solutions",
    description: "Browse our collection of helpful technology guides, tutorials, and solutions for common tech problems. Find answers to your tech questions in our comprehensive knowledge base.",
    url: "/help-center",
    type: "website",
    images: [
      {
        url: "/help-center-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Support Pal Help Center Knowledge Base",
      },
    ],
  },
}
