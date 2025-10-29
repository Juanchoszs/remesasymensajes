/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [
      'www.sotcarga.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'source.unsplash.com'
    ],
    minimumCacheTTL: 60,
  },
  // Configuración para manejar rutas en producción
  trailingSlash: true,
  // Configuración de encabezados de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
