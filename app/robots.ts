import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/auth/', '/dashboard/', '/admin/', '/api/'],
    },
    sitemap: 'https://officeblindsdubai.com/sitemap.xml',
  };
}