// ============================================================
// CurtainMakers — JSON-LD Schema Helpers
// Reusable structured data for SEO (FAQPage, Product, etc.)
// ============================================================

import type { ReactNode } from 'react';

/**
 * Renders a JSON-LD script tag. Server-component safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQPage schema — Google rich result for FAQ sections.
 */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Product schema — Google rich result for product pages.
 */
export function buildProductSchema(opts: {
  name: string;
  description: string;
  slug: string;
  imageUrl?: string;
  priceAed?: number;
  category?: string;
}) {
  const url = `https://curtainmakers.ae/products/${opts.slug}`;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url,
    brand: {
      '@type': 'Brand',
      name: 'Curtain Makers',
    },
    image: opts.imageUrl || `https://curtainmakers.ae/images/products/${opts.slug}.svg`,
  };

  if (opts.priceAed) {
    schema.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      lowPrice: String(opts.priceAed),
      offerCount: '1',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Curtain Makers',
      },
      areaServed: ['Abu Dhabi', 'Dubai', 'UAE'],
    };
  }

  if (opts.category) {
    schema.category = opts.category;
  }

  return schema;
}

/**
 * BreadcrumbList schema — Google rich result for breadcrumbs.
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * LocalBusiness schema — for service/area pages.
 */
export function buildLocalBusinessSchema(opts: {
  name?: string;
  description?: string;
  areaServed: string[];
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: opts.name || 'Curtain Makers',
    description:
      opts.description ||
      'Premium curtain and blinds specialist serving Abu Dhabi and Dubai, UAE',
    url: opts.url || 'https://curtainmakers.ae',
    telephone: '+971****5678',
    email: 'info@curtainmakers.ae',
    areaServed: opts.areaServed.map(city => ({ '@type': 'City', name: city })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
  };
}

export type { ReactNode };
