/**
 * Configuration next-sitemap.
 * Génère sitemap.xml + robots.txt après `next build` (script "postbuild").
 */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.guidefrancophonelouxor.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: 'public',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/'] },
    ],
  },
  transform: async (_config, path) => {
    const PRIORITIES = {
      '/': 1.0,
      '/louxor': 0.9,
      '/caire': 0.9,
      '/assouan': 0.9,
      '/hurghada': 0.9,
      '/croisieres-en-egypte-sur-le-nil': 0.9,
      '/montgolfiere': 0.85,
      '/service-de-transfert-aeroport': 0.8,
      '/excursions': 0.85,
      '/avis': 0.8,
      '/contact': 0.8,
      '/a-propos': 0.7,
      '/blog': 0.75,
    };

    const CHANGEFREQ = {
      '/': 'weekly',
      '/avis': 'monthly',
      '/blog': 'weekly',
    };

    return {
      loc: path,
      changefreq: CHANGEFREQ[path] ?? 'monthly',
      priority: PRIORITIES[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
