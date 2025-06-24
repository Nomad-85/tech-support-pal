import { articles } from "@/lib/articles";

export async function GET() {
  // Base URL of your website
  const baseUrl = "https://techsupportpal.com";
  
  // Get current date in the format YYYY-MM-DD
  const date = new Date().toISOString().split('T')[0];
  
  // Define your static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/help-center",
  ];
  
  // Generate sitemap XML content
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static routes to sitemap
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <lastmod>${date}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${route === "" ? "1.0" : "0.8"}</priority>\n`;
    xml += `  </url>\n`;
  }
  
  // Add dynamic article routes to sitemap
  for (const article of articles) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/help-center/${article.slug}</loc>\n`;
    xml += `    <lastmod>${article.date}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  }
  
  xml += '</urlset>';
  
  // Return the XML with appropriate headers
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
