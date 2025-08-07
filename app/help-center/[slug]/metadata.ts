import type { Metadata } from 'next'
import { articles } from "@/lib/articles"

// Helper function to extract text from HTML without using document (server-compatible)
function extractTextFromHtml(html: string): string {
  // Simple regex to remove HTML tags
  return html.replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Generate dynamic metadata for each article
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((article) => article.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found - Tech Support Pal',
      description: 'The requested article could not be found.',
    }
  }

  // Extract a clean description from the article content (first 160 characters)
  const textContent = extractTextFromHtml(article.content)
  const description = textContent.substring(0, 160).trim() + '...'

  return {
    title: `${article.title} - Tech Support Pal Help Center`,
    description: article.summary || description,
    alternates: {
      canonical: `/help-center/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} - Tech Support Pal Help Center`,
      description: article.summary || description,
      url: `/help-center/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      images: [
        {
          url: article.image || '/help-center-image.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - Tech Support Pal Help Center`,
      description: article.summary || description,
    }
  }
}
