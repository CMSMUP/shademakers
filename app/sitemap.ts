import type { MetadataRoute } from 'next';
import { PRODUCTS_SEED } from '@/src/data/products';
import { ABU_DHABI_AREAS } from '@/src/data/areas-abu-dhabi';

const BASE_URL = 'https://curtainmakers.ae';

const BLOG_SLUGS = [
  'choosing-office-blinds-dubai',
  'benefits-smart-motorized-blinds',
  'roller-vs-venetian-blinds',
  'curtains-vs-blinds-abu-dhabi',
  'energy-saving-blinds-dubai',
  'curtain-fabric-guide-abu-dhabi',
  'dubai-building-regulations-blinds',
  'blackout-curtains-abu-dhabi-guide',
  'how-much-do-motorized-curtains-cost',
  'how-to-measure-curtains',
  'roller-blinds-vs-roman-blinds',
  'villa-curtains-abu-dhabi-luxury-guide',
  'curtain-cleaning-maintenance-uae',
];

const DUBAI_AREA_SLUGS = [
  'dubai-marina',
  'difc',
  'business-bay',
  'downtown-dubai',
  'jlt',
  'silicon-oasis',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/estimate`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/estimate/curtains`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/dubai/office-blinds`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/dubai/office-curtains`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
  ];

  const productPages = PRODUCTS_SEED.map(p => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_SLUGS.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Abu Dhabi area pages (from areas-abu-dhabi data)
  const abuDhabiAreaPages = ABU_DHABI_AREAS.map(area => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dubai area pages (from AREAS data, excluding Abu Dhabi-specific ones)
  const dubaiAreaPages = DUBAI_AREA_SLUGS.map(slug => ({
    url: `${BASE_URL}/dubai/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
    ...abuDhabiAreaPages,
    ...dubaiAreaPages,
  ];
}
