import { articles } from './articles';

// Function to increment article views
export function incrementArticleViews(slug: string): void {
  // Find the article by slug
  const article = articles.find(article => article.slug === slug);
  
  // If article exists, increment its views
  if (article) {
    article.views += 1;
    
    // In a real application, you would save this to a database
    // For now, we're just updating the in-memory object
    // This implementation is just a stub as requested
    console.log(`Incremented views for article: ${slug}. New count: ${article.views}`);
  }
}

// Function to get most viewed articles
export function getMostViewedArticles(limit = 5) {
  return [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

// Function to get latest articles
export function getLatestArticles(limit = 5) {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Function to search articles
export function searchArticles(query: string) {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(
    article => 
      article.title.toLowerCase().includes(lowercaseQuery) || 
      article.summary.toLowerCase().includes(lowercaseQuery)
  );
}
