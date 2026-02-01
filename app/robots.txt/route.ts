import { NextResponse } from 'next/server'

export function GET() {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"
  
  if (isMaintenanceMode) {
    // Disallow all crawling during maintenance
    return new NextResponse(
      `User-agent: *
Disallow: /

# Maintenance mode - temporarily disallow all crawling
`,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    )
  }
  
  // Normal robots.txt content (you can customize this based on your existing robots.txt)
  return new NextResponse(
    `User-agent: *
Allow: /

Sitemap: https://techsupportpal.com/sitemap.xml
`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  )
}
