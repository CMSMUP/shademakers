// ============================================================
// Office Blinds Dubai — Fabric Swatches Data
// ============================================================

export interface FabricSwatch {
  name: string;
  slug: string;
  color: string; // CSS color or hex
  gradient?: string;
  texture?: string;
  opacity_percent: number;
  material_grade: 'A' | 'A+' | 'B';
  description: string;
  compatible_with: string[]; // product slugs
}

export const FABRIC_SWATCHES: FabricSwatch[] = [
  // ===== BLACKOUT FABRICS =====
  {
    name: 'Blackout — White',
    slug: 'blackout-white',
    color: '#FAFAFA',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Premium white blackout fabric. 100% light blocking, thermal backing. Ideal for boardrooms and AV rooms.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'zebra-blinds', 'pleated-blinds', 'panel-blinds'],
  },
  {
    name: 'Blackout — Pearl Grey',
    slug: 'blackout-pearl-grey',
    color: '#B0B0B0',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Neutral grey blackout. Popular for modern offices. Complete light block with thermal insulation.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'zebra-blinds', 'pleated-blinds', 'panel-blinds'],
  },
  {
    name: 'Blackout — Charcoal',
    slug: 'blackout-charcoal',
    color: '#3D3D3D',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Deep charcoal blackout. Premium look for executive spaces. Maximum privacy and light control.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'zebra-blinds', 'pleated-blinds', 'panel-blinds'],
  },
  {
    name: 'Blackout — Beige',
    slug: 'blackout-beige',
    color: '#D4C5B9',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Warm beige blackout fabric. Complements wooden furniture and classic office interiors.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'pleated-blinds'],
  },
  {
    name: 'Blackout — Navy',
    slug: 'blackout-navy',
    color: '#1B2A4A',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Rich navy blackout. Corporate and professional. Excellent for conference rooms.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'zebra-blinds', 'pleated-blinds'],
  },

  // ===== SUNSCREEN FABRICS =====
  {
    name: 'Sunscreen 3% — White',
    slug: 'sunscreen-3-white',
    color: '#F5F5F5',
    opacity_percent: 3,
    material_grade: 'A',
    description: '3% openness factor. Maximum UV protection with excellent outward visibility. Best for day-lit open offices.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'panel-blinds'],
  },
  {
    name: 'Sunscreen 5% — Grey',
    slug: 'sunscreen-5-grey',
    color: '#C8C8C8',
    opacity_percent: 5,
    material_grade: 'A',
    description: '5% openness factor. Balanced UV protection and visibility. Most popular sunscreen option.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'panel-blinds'],
  },
  {
    name: 'Sunscreen 10% — Bronze',
    slug: 'sunscreen-10-bronze',
    color: '#CD7F32',
    opacity_percent: 10,
    material_grade: 'A',
    description: '10% openness factor. Warmer tone with good outward view. Slightly less UV protection.',
    compatible_with: ['roller-blinds', 'vertical-blinds'],
  },

  // ===== TRANSLUCENT FABRICS =====
  {
    name: 'Translucent — White',
    slug: 'translucent-white',
    color: '#FEFEFE',
    gradient: 'linear-gradient(135deg, #FEFEFE, #F0F0F0)',
    opacity_percent: 50,
    material_grade: 'A',
    description: 'Soft white translucent fabric. Diffuses light beautifully for a warm, inviting atmosphere.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'vertical-blinds', 'zebra-blinds', 'pleated-blinds', 'panel-blinds'],
  },
  {
    name: 'Translucent — Cream',
    slug: 'translucent-cream',
    color: '#FFF8DC',
    gradient: 'linear-gradient(135deg, #FFF8DC, #F5DEB3)',
    opacity_percent: 50,
    material_grade: 'A',
    description: 'Warm cream translucent. Adds a cozy, premium feel to executive offices and reception areas.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'pleated-blinds'],
  },
  {
    name: 'Translucent — Sand',
    slug: 'translucent-sand',
    color: '#EDE0C8',
    gradient: 'linear-gradient(135deg, #EDE0C8, #D4C5B9)',
    opacity_percent: 55,
    material_grade: 'A',
    description: 'Natural sand tone. Complements desert-inspired Dubai office interiors.',
    compatible_with: ['roller-blinds', 'roman-blinds', 'pleated-blinds'],
  },

  // ===== WOOD FINISHES =====
  {
    name: 'Real Wood — Oak',
    slug: 'wood-oak',
    color: '#C4A46C',
    gradient: 'linear-gradient(90deg, #C4A46C, #B8956A, #C4A46C)',
    opacity_percent: 100,
    material_grade: 'A+',
    description: 'Premium oak hardwood. Rich grain pattern. Classic and prestigious. 50mm and 25mm slats.',
    compatible_with: ['wooden-venetian-blinds'],
  },
  {
    name: 'Real Wood — Walnut',
    slug: 'wood-walnut',
    color: '#6B4226',
    gradient: 'linear-gradient(90deg, #6B4226, #5C3317, #6B4226)',
    opacity_percent: 100,
    material_grade: 'A+',
    description: 'Rich walnut hardwood. Deep, dark tones for executive prestige. 50mm slats recommended.',
    compatible_with: ['wooden-venetian-blinds'],
  },
  {
    name: 'Real Wood — Mahogany',
    slug: 'wood-mahogany',
    color: '#8B4513',
    gradient: 'linear-gradient(90deg, #8B4513, #723C0E, #8B4513)',
    opacity_percent: 100,
    material_grade: 'A+',
    description: 'Classic mahogany hardwood. Warm red-brown tones. Traditional and distinguished.',
    compatible_with: ['wooden-venetian-blinds'],
  },
  {
    name: 'Faux Wood — White',
    slug: 'faux-wood-white',
    color: '#F5F5F5',
    gradient: 'linear-gradient(90deg, #F5F5F5, #E8E8E8, #F5F5F5)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Clean white faux wood. Moisture-resistant. Ideal for humid Dubai environments. Modern look.',
    compatible_with: ['wooden-venetian-blinds'],
  },
  {
    name: 'Faux Wood — Grey Ash',
    slug: 'faux-wood-grey-ash',
    color: '#A0A0A0',
    gradient: 'linear-gradient(90deg, #A0A0A0, #909090, #A0A0A0)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Contemporary grey ash faux wood. Popular in modern Dubai offices. Moisture-proof.',
    compatible_with: ['wooden-venetian-blinds'],
  },

  // ===== ALUMINIUM FINISHES =====
  {
    name: 'Aluminium — Silver',
    slug: 'aluminium-silver',
    color: '#C0C0C0',
    gradient: 'linear-gradient(90deg, #D0D0D0, #B0B0B0, #D0D0D0)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Standard silver aluminium. Clean, professional, matches most office hardware.',
    compatible_with: ['aluminium-venetian-blinds'],
  },
  {
    name: 'Aluminium — Matte Black',
    slug: 'aluminium-matte-black',
    color: '#2C2C2C',
    gradient: 'linear-gradient(90deg, #3A3A3A, #2C2C2C, #3A3A3A)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Sleek matte black aluminium. Bold, modern statement for creative workspaces.',
    compatible_with: ['aluminium-venetian-blinds'],
  },
  {
    name: 'Aluminium — Bronze',
    slug: 'aluminium-bronze',
    color: '#CD7F32',
    gradient: 'linear-gradient(90deg, #D4A050, #CD7F32, #D4A050)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Warm bronze aluminium finish. Distinguished look for corporate offices.',
    compatible_with: ['aluminium-venetian-blinds'],
  },

  // ===== SPECIALTY FABRICS =====
  {
    name: 'Thermal Insulated — White',
    slug: 'thermal-white',
    color: '#FAFAFA',
    gradient: 'linear-gradient(135deg, #FAFAFA, #F0F0F0)',
    opacity_percent: 100,
    material_grade: 'A',
    description: 'Cellular thermal fabric. Honeycomb construction traps air. Reduces AC costs up to 30%.',
    compatible_with: ['pleated-blinds'],
  },
  {
    name: 'Soft Fabric — Linen',
    slug: 'soft-fabric-linen',
    color: '#FAEBD7',
    gradient: 'linear-gradient(135deg, #FAEBD7, #F5DEB3)',
    opacity_percent: 70,
    material_grade: 'A+',
    description: 'Premium linen-look soft fabric for Roman blinds. Natural texture, elegant drape.',
    compatible_with: ['roman-blinds'],
  },
  {
    name: 'Soft Fabric — Velvet',
    slug: 'soft-fabric-velvet',
    color: '#2F4F4F',
    gradient: 'linear-gradient(135deg, #3D6B6B, #2F4F4F)',
    opacity_percent: 95,
    material_grade: 'A+',
    description: 'Luxurious velvet-look fabric. Deep texture, light-absorbing. For premium executive suites.',
    compatible_with: ['roman-blinds'],
  },
];

export function getFabricSwatchesForProduct(productSlug: string): FabricSwatch[] {
  return FABRIC_SWATCHES.filter(f => f.compatible_with.includes(productSlug));
}

export function getFabricSwatch(slug: string): FabricSwatch | undefined {
  return FABRIC_SWATCHES.find(f => f.slug === slug);
}

export function getFabricsByGrade(grade: 'A' | 'A+' | 'B'): FabricSwatch[] {
  return FABRIC_SWATCHES.filter(f => f.material_grade === grade);
}