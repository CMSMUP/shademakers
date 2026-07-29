// ============================================================
// ShadeMakers — Product Images (Original Technical Illustrations)
// ============================================================

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
  swatch: string;
}

function makeImage(slug: string, alt: string): ProductImage {
  return {
    src: `/images/products/${slug}.svg`,
    alt,
    width: 800,
    height: 600,
  };
}

export const PRODUCT_IMAGES: Record<string, ProductImages> = {
  'roller-blinds': {
    slug: 'roller-blinds',
    main: makeImage('roller-blinds', 'Technical illustration of roller blinds with fabric roll and bottom bar'),
    gallery: [],
    swatch: '#d4d4d4',
  },
  'roman-blinds': {
    slug: 'roman-blinds',
    main: makeImage('roman-blinds', 'Technical illustration of Roman blinds with cascading fabric folds'),
    gallery: [],
    swatch: '#D4C5B9',
  },
  'wooden-venetian-blinds': {
    slug: 'wooden-venetian-blinds',
    main: makeImage('wooden-venetian-blinds', 'Technical illustration of wooden venetian blinds with angled timber slats'),
    gallery: [],
    swatch: '#8B6914',
  },
  'vertical-blinds': {
    slug: 'vertical-blinds',
    main: makeImage('vertical-blinds', 'Technical illustration of vertical blinds with tall fabric vanes'),
    gallery: [],
    swatch: '#E8E8E8',
  },
  'aluminium-venetian-blinds': {
    slug: 'aluminium-venetian-blinds',
    main: makeImage('aluminium-venetian-blinds', 'Technical illustration of aluminium venetian blinds with slim metal slats'),
    gallery: [],
    swatch: '#C0C0C0',
  },
  'zebra-blinds': {
    slug: 'zebra-blinds',
    main: makeImage('zebra-blinds', 'Technical illustration of zebra day and night blinds with alternating sheer and solid bands'),
    gallery: [],
    swatch: '#F5F5DC',
  },
  'smart-blinds': {
    slug: 'smart-blinds',
    main: makeImage('smart-blinds', 'Technical illustration of smart motorized blinds with motor housing and app control'),
    gallery: [],
    swatch: '#3498DB',
  },
  'pleated-blinds': {
    slug: 'pleated-blinds',
    main: makeImage('pleated-blinds', 'Technical illustration of pleated blinds with honeycomb zigzag fabric'),
    gallery: [],
    swatch: '#FFF8DC',
  },
  'panel-blinds': {
    slug: 'panel-blinds',
    main: makeImage('panel-blinds', 'Technical illustration of sliding panel blinds on a top track'),
    gallery: [],
    swatch: '#F0F0F0',
  },
  'skylight-blinds': {
    slug: 'skylight-blinds',
    main: makeImage('skylight-blinds', 'Technical illustration of skylight blinds on an angled roof window'),
    gallery: [],
    swatch: '#87CEEB',
  },
  'flyscreen-blinds': {
    slug: 'flyscreen-blinds',
    main: makeImage('flyscreen-blinds', 'Technical illustration of flyscreen mesh blinds'),
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
