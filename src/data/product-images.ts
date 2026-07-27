// ============================================================
// Office Blinds Dubai — Product Images Configuration
// ============================================================
// Replace these placeholder URLs with real product photography.
// Each product needs at least: main image, fabric swatch, detail shot.

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductImages {
  slug: string;
  main: ProductImage;
  gallery: ProductImage[];
  swatch: string; // fabric/material swatch color/pattern
}

// High-quality commercial blinds photography from Unsplash
// All images are free to use (Unsplash license) — replace with real product photos for launch
export const PRODUCT_IMAGES: Record<string, ProductImages> = {
  'roller-blinds': {
    slug: 'roller-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&h=600&fit=crop',
      alt: 'Blackout roller blinds in a modern Dubai office with city skyline view',
      width: 800,
      height: 600,
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&h=600&fit=crop',
        alt: 'White roller blinds in bright contemporary office space',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
        alt: 'Motorized roller blinds in executive boardroom',
        width: 800,
        height: 600,
      },
    ],
    swatch: '#2C3E50',
  },
  'roman-blinds': {
    slug: 'roman-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      alt: 'Elegant Roman blinds in a Dubai executive office with warm lighting',
      width: 800,
      height: 600,
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
        alt: 'Soft fabric Roman blinds in luxury office reception',
        width: 800,
        height: 600,
      },
    ],
    swatch: '#D4C5B9',
  },
  'wooden-venetian-blinds': {
    slug: 'wooden-venetian-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      alt: 'Premium wooden venetian blinds in prestigious Dubai law office',
      width: 800,
      height: 600,
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=800&h=600&fit=crop',
        alt: 'Faux wood venetian blinds in modern workspace',
        width: 800,
        height: 600,
      },
    ],
    swatch: '#8B6914',
  },
  'vertical-blinds': {
    slug: 'vertical-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      alt: 'Vertical blinds on large office windows overlooking Dubai Marina',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#E8E8E8',
  },
  'aluminium-venetian-blinds': {
    slug: 'aluminium-venetian-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      alt: 'Sleek aluminium venetian blinds in contemporary Dubai co-working space',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#C0C0C0',
  },
  'zebra-blinds': {
    slug: 'zebra-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
      alt: 'Dual-layer zebra blinds with alternating light and privacy bands',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#F5F5DC',
  },
  'smart-blinds': {
    slug: 'smart-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
      alt: 'Smart motorized blinds controlled via smartphone app in Dubai smart office',
      width: 800,
      height: 600,
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop',
        alt: 'Automated blinds system with voice control integration',
        width: 800,
        height: 600,
      },
    ],
    swatch: '#3498DB',
  },
  'pleated-blinds': {
    slug: 'pleated-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
      alt: 'Energy-efficient pleated blinds in Dubai office with thermal insulation',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#FFF8DC',
  },
  'panel-blinds': {
    slug: 'panel-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
      alt: 'Modern sliding panel blinds as room dividers in Dubai open-plan office',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#F0F0F0',
  },
  'skylight-blinds': {
    slug: 'skylight-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop',
      alt: 'Custom skylight blinds on atrium roof windows in Dubai commercial building',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#87CEEB',
  },
  'flyscreen-blinds': {
    slug: 'flyscreen-blinds',
    main: {
      src: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=600&fit=crop',
      alt: 'Retractable flyscreen blinds on office windows with clear outward view',
      width: 800,
      height: 600,
    },
    gallery: [],
    swatch: '#696969',
  },
};

export function getProductImage(slug: string): ProductImages | undefined {
  return PRODUCT_IMAGES[slug];
}

export function getProductMainImage(slug: string): ProductImage | null {
  return PRODUCT_IMAGES[slug]?.main || null;
}