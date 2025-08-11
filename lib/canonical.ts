/**
 * Helper function to generate canonical URLs for pages
 * @param path - The path of the page (e.g., '/about', '/services')
 * @returns The full canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  // Base URL of the website
  const baseUrl = 'https://techsupportpal.com';
  
  // Normalize the path (ensure it starts with '/' and remove trailing '/')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // For the homepage, return just the base URL
  if (normalizedPath === '/' || normalizedPath === '') {
    return baseUrl;
  }
  
  // Combine base URL with the normalized path
  return `${baseUrl}${normalizedPath}`;
}
