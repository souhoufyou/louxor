import type { NextConfig } from 'next';

const SECURITY_HEADERS = [
  { key: 'X-Content-Type-Options',    value: 'nosniff' },
  { key: 'X-Frame-Options',           value: 'DENY' },
  { key: 'X-XSS-Protection',          value: '1; mode=block' },
  { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: '/(.*)', headers: SECURITY_HEADERS },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  async redirects() {
    return [
      // Anciennes URLs Jimdo
      { source: '/accueil',   destination: '/',           permanent: true },
      { source: '/visites',   destination: '/excursions', permanent: true },
      { source: '/livre-dor', destination: '/avis',       permanent: true },
      // Anciennes URLs Jimdo avec ?mobile=true — Google les traite comme du contenu duplique.
      // Les keys nommees dans `has` sont automatiquement retirees de la destination par Next.
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'mobile', value: 'true' }],
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      // Interface d'administration Decap CMS (fichier statique public/admin/index.html)
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1280, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640],
    qualities: [75, 85, 90, 95],
    remotePatterns: [],
  },
};

export default nextConfig;
