import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"
  
  if (isMaintenanceMode) {
    // Add X-Robots-Tag header for all requests during maintenance
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    
    // For root path, rewrite to maintenance page component
    if (request.nextUrl.pathname === '/') {
      const url = request.nextUrl.clone()
      url.pathname = '/maintenance-page'
      return NextResponse.rewrite(url)
    }
    
    // Redirect all other paths to root with 307 (temporary) redirect
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 307)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     * - robots.txt (robots file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|robots.txt).*)',
  ],
}
