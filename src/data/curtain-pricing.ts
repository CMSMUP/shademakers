// ============================================================
// CurtainMakers — Curtain Pricing Data Model
// Curtains are priced by linear meter of track width (not sqm)
// ============================================================

export interface CurtainStyle {
  slug: string;
  name: string;
  description: string;
  /** Price multiplier vs base (1.0 = standard) */
  multiplier: number;
  /** Typical fabric consumption multiplier (1.0 = single width) */
  fabricFactor: number;
}

export interface CurtainLining {
  slug: string;
  name: string;
  description: string;
  /** Percentage add-on on top of fabric price */
  priceModifierPercent: number;
}

export interface FabricTier {
  slug: string;
  name: string;
  description: string;
  /** Base price per linear meter (track width) for standard drop (up to 2.7m) */
  basePricePerMeter: number;
  /** Extra per meter for each additional 30cm drop beyond 2.7m */
  extraPer30cm: number;
}

export interface FabricOrigin {
  slug: string;
  name: string;
  description: string;
  /** Price multiplier on top of fabric tier base */
  multiplier: number;
}

export interface CurtainOperation {
  slug: string;
  name: string;
  description: string;
  /** Fixed AED add-on per window */
  fixedCost: number;
  /** Track cost per linear meter */
  trackCostPerMeter: number;
}

export const CURTAIN_STYLES: CurtainStyle[] = [
  {
    slug: 'pinch-pleat',
    name: 'Pinch Pleat',
    description: 'Classic triple pleat — the most popular style. Timeless, elegant, formal.',
    multiplier: 1.0,
    fabricFactor: 2.5, // triple fullness
  },
  {
    slug: 'wave',
    name: 'Ripple Wave',
    description: 'Sleek, modern, continuous S-curve folds. Minimalist luxury.',
    multiplier: 1.15,
    fabricFactor: 2.2,
  },
  {
    slug: 'tab-top',
    name: 'Tab Top',
    description: 'Casual, relaxed fabric loops. Clean, contemporary look.',
    multiplier: 0.85,
    fabricFactor: 1.8,
  },
  {
    slug: 'eyelet',
    name: 'Eyelet / Grommet',
    description: 'Modern metal-ringed top. Sharp, tailored, easy to hang.',
    multiplier: 0.8,
    fabricFactor: 1.8,
  },
  {
    slug: 'royal',
    name: 'Royal Swags & Tails',
    description: 'Opulent draped valance with cascading tails. Luxury villas & palaces.',
    multiplier: 2.5,
    fabricFactor: 4.0,
  },
];

export const CURTAIN_LINING: CurtainLining[] = [
  {
    slug: 'blackout',
    name: 'Blackout Lining',
    description: '100% light blocking — ideal for bedrooms, AV rooms, boardrooms',
    priceModifierPercent: 25,
  },
  {
    slug: 'blackout-standard',
    name: 'Standard + Blackout Lining',
    description: 'Standard fabric backed with blackout lining — best of both worlds',
    priceModifierPercent: 35,
  },
  {
    slug: 'standard',
    name: 'Standard Lining',
    description: 'Lightweight lining for light control and privacy without full blackout',
    priceModifierPercent: 15,
  },
  {
    slug: 'none',
    name: 'No Lining (Sheer / Unlined)',
    description: 'For sheer curtains or when fabric is self-lined',
    priceModifierPercent: 0,
  },
];

export const FABRIC_TIERS: FabricTier[] = [
  {
    slug: 'premium',
    name: 'Premium',
    description: 'Designer collections — velvet, silk, jacquard, embroidered. Imported luxury fabrics.',
    basePricePerMeter: 750,
    extraPer30cm: 150,
  },
  {
    slug: 'mid-range',
    name: 'Mid Range',
    description: 'High-quality poly-cotton blends, linens, and textured weaves. Best value.',
    basePricePerMeter: 380,
    extraPer30cm: 75,
  },
  {
    slug: 'cheaper',
    name: 'Value / Budget',
    description: 'Solid color polyesters and basic cottons. Affordable and durable.',
    basePricePerMeter: 180,
    extraPer30cm: 40,
  },
];

export const FABRIC_ORIGINS: FabricOrigin[] = [
  {
    slug: 'europe',
    name: 'European / USA',
    description: 'Premium imports from Italy, France, Belgium, UK, USA — top quality & design',
    multiplier: 1.5,
  },
  {
    slug: 'turkish',
    name: 'Turkish',
    description: 'High-quality Turkish textiles — excellent weave, good value',
    multiplier: 1.2,
  },
  {
    slug: 'chinese',
    name: 'Chinese / Indian',
    description: 'Cost-effective options from Asia — wide variety of colors & patterns',
    multiplier: 0.8,
  },
  {
    slug: 'cotton',
    name: 'Cotton',
    description: 'Natural cotton fabrics — breathable, soft, eco-friendly',
    multiplier: 1.0,
  },
  {
    slug: 'linen',
    name: 'Linen',
    description: 'Pure linen — natural texture, elegant drape, premium feel',
    multiplier: 1.3,
  },
  {
    slug: 'poly-cotton',
    name: 'Polyester Cotton Blend',
    description: 'Durable poly-cotton mix — easy care, wrinkle resistant, great value',
    multiplier: 0.9,
  },
  {
    slug: 'polyester',
    name: 'Polyester',
    description: '100% polyester — budget-friendly, fade resistant, easy to clean',
    multiplier: 0.7,
  },
];

export const CURTAIN_OPERATIONS: CurtainOperation[] = [
  {
    slug: 'manual',
    name: 'Manual Track (Pull Cord)',
    description: 'Standard hand-drawn curtain track. Simple, reliable, cost-effective.',
    fixedCost: 0,
    trackCostPerMeter: 45,
  },
  {
    slug: 'corded',
    name: 'Corded Wand (Side Draw)',
    description: 'Easy side-draw with a corded wand mechanism. Smooth operation.',
    fixedCost: 120,
    trackCostPerMeter: 65,
  },
  {
    slug: 'motorized',
    name: 'Motorized (Remote+App+Voice)',
    description: 'Smart electric track — remote, app, Alexa/Google control. Silent motor.',
    fixedCost: 850,
    trackCostPerMeter: 150,
  },
];

// ============================================================
// Pricing calculation
// ============================================================

export interface CurtainPricingInput {
  trackWidthCm: number;
  dropCm: number;
  quantity: number;
  style: CurtainStyle;
  lining: CurtainLining;
  tier: FabricTier;
  origin: FabricOrigin;
  operation: CurtainOperation;
}

export interface CurtainPricingResult {
  trackWidthM: number;
  dropM: number;
  effectiveFabricPricePerMeter: number;
  fabricWidthNeeded: number;
  fabricCost: number;
  liningCost: number;
  trackCost: number;
  operationFixedCost: number;
  styleLabel: string;
  subtotalBeforeVat: number;
  vat: number;
  total: number;
}

export function calculateCurtainPrice(input: CurtainPricingInput): CurtainPricingResult {
  const { trackWidthCm, dropCm, quantity, style, lining, tier, origin, operation } = input;

  const trackWidthM = trackWidthCm / 100;
  const dropM = dropCm / 100;

  // Fabric price: tier base × origin multiplier
  const baseFabricPerMeter = tier.basePricePerMeter * origin.multiplier;

  // Extra height cost if drop > 2.7m
  const extraHeightSegments = Math.max(0, Math.ceil((dropCm - 270) / 30));
  const fabricPerMeterWithHeight = baseFabricPerMeter + (extraHeightSegments * tier.extraPer30cm);

  // Effective price after style multiplier
  const effectiveFabricPricePerMeter = fabricPerMeterWithHeight * style.multiplier;

  // Fabric width needed: track width × fabric factor × quantity
  const fabricWidthNeeded = trackWidthM * style.fabricFactor * quantity;

  // Fabric cost
  const fabricCost = fabricWidthNeeded * effectiveFabricPricePerMeter;

  // Lining cost: % of fabric cost
  const liningCost = fabricCost * (lining.priceModifierPercent / 100);

  // Track cost: track width × quantity × track cost per meter
  const trackCost = trackWidthM * quantity * operation.trackCostPerMeter;

  // Operation fixed cost
  const operationFixedCost = operation.fixedCost * quantity;

  const subtotal = fabricCost + liningCost + trackCost + operationFixedCost;
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return {
    trackWidthM,
    dropM,
    effectiveFabricPricePerMeter,
    fabricWidthNeeded,
    fabricCost,
    liningCost,
    trackCost,
    operationFixedCost,
    styleLabel: `${style.name}`,
    subtotalBeforeVat: subtotal,
    vat,
    total,
  };
}

export function formatAED(amount: number): string {
  return `AED ${amount.toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}