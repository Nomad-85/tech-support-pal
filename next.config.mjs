/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"
    
    if (isMaintenanceMode) {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex, nofollow',
            },
          ],
        },
      ]
    }
    
    return []
  },
}

export default nextConfig