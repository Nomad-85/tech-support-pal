import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for the site
  const baseUrl = 'https://techsupportpal.com'
  
  // Get current date for lastModified
  const currentDate = new Date()
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/help-center`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
  
  // Dynamic routes for help center articles
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/help-center/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  
  return [...staticRoutes, ...articleRoutes]
}
