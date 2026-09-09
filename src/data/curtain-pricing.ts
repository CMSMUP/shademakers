// ============================================================
// CurtainMakers — Curtain Pricing Data Model
// Curtains are priced by linear meter of track width (not sqm)
// ============================================================

export interface CurtainStyle {
  slug: string;
  name: string;
  description: string;
  multiplier: number;
  fabricFactor: number;
}

export interface CurtainType {
  slug: string;
  name: string;
  description: string;
  priceModifierPercent: number;
}

export interface FabricTier {
  slug: string;
  name: string;
  description: string;
  basePricePerMeter: number;
  extraPer30cm: number;
}

export interface FabricType {
  slug: string;
  name: string;
  description: string;
  multiplier: number;
}

export interface CurtainOperation {
  slug: string;
  name: string;
  description: string;
  fixedCost: number;
  trackCostPerMeter: number;
}

export const CURTAIN_STYLES: CurtainStyle[] = [
  { slug: 'pinch-pleat', name: 'Pinch Pleat', description: 'Classic triple pleat — the most popular style. Timeless, elegant, formal.', multiplier: 1.0, fabricFactor: 2.5 },
  { slug: 'wave', name: 'Ripple Wave', description: 'Sleek, modern, continuous S-curve folds. Minimalist luxury.', multiplier: 1.15, fabricFactor: 2.2 },
  { slug: 'tab-top', name: 'Tab Top', description: 'Casual, relaxed fabric loops. Clean, contemporary look.', multiplier: 0.85, fabricFactor: 1.8 },
  { slug: 'eyelet', name: 'Eyelet / Grommet', description: 'Modern metal-ringed top. Sharp, tailored, easy to hang.', multiplier: 0.8, fabricFactor: 1.8 },
  { slug: 'royal', name: 'Royal Swags & Tails', description: 'Opulent draped valance with cascading tails. Luxury villas & palaces.', multiplier: 2.5, fabricFactor: 4.0 },
  { slug: 'pencil-pleat', name: 'Pencil Pleat', description: 'Classic vertical folds with drawn cords. Timeless and versatile.', multiplier: 0.9, fabricFactor: 2.2 },
  { slug: 'pole-ring', name: 'Pole Ring', description: 'Decorative pole and ring with visible rings defining windows.', multiplier: 0.85, fabricFactor: 2.0 },
];

export const CURTAIN_TYPES: CurtainType[] = [
  { slug: 'blackout', name: 'Blackout', description: '100% light blocking — complete darkness for bedrooms and AV rooms', priceModifierPercent: 30 },
  { slug: 'normal', name: 'Normal', description: 'Standard curtain fabric with light-filtering properties', priceModifierPercent: 10 },
  { slug: 'normal-blackout', name: 'Normal + Blackout Lining', description: 'Standard fabric backed with blackout lining — best of both worlds', priceModifierPercent: 40 },
  { slug: 'sheer', name: 'Sheer', description: 'Translucent and lightweight — softens light beautifully', priceModifierPercent: 0 },
];

export const FABRIC_TIERS: FabricTier[] = [
  { slug: 'premium', name: 'Premium', description: 'Designer collections — velvet, silk, jacquard, embroidered. Imported luxury fabrics.', basePricePerMeter: 750, extraPer30cm: 150 },
  { slug: 'mid-range', name: 'Mid Range', description: 'High-quality poly-cotton blends, linens, and textured weaves. Best value.', basePricePerMeter: 380, extraPer30cm: 75 },
  { slug: 'budget', name: 'Value / Budget', description: 'Solid color polyesters and basic cottons. Affordable and durable.', basePricePerMeter: 180, extraPer30cm: 40 },
];

export const FABRIC_TYPES: FabricType[] = [
  { slug: 'cotton', name: 'Cotton', description: 'Natural cotton — soft, breathable, eco-friendly', multiplier: 1.0 },
  { slug: 'linen', name: 'Linen', description: 'Pure linen — natural texture, elegant drape, premium feel', multiplier: 1.3 },
  { slug: 'poly-cotton', name: 'Polycotton / Polylinen', description: 'Durable blend — easy care, wrinkle resistant, great value', multiplier: 0.9 },
  { slug: 'polyester', name: 'Polyester', description: 'Budget-friendly, fade resistant, easy to clean', multiplier: 0.7 },
  { slug: 'european', name: 'European', description: 'Premium imports from Italy, France, Belgium — top quality & design', multiplier: 1.5 },
  { slug: 'turkish', name: 'Turkish', description: 'High-quality Turkish textiles — excellent weave, good value', multiplier: 1.2 },
  { slug: 'indian', name: 'Indian', description: 'Rich patterns and traditional weaves from India', multiplier: 0.85 },
  { slug: 'chinese', name: 'Chinese', description: 'Cost-effective options — wide variety of colors & patterns', multiplier: 0.75 },
];

export const CURTAIN_OPERATIONS: CurtainOperation[] = [
  { slug: 'manual', name: 'Manual', description: 'Standard hand-drawn curtain track. Simple, reliable.', fixedCost: 0, trackCostPerMeter: 45 },
  { slug: 'corded', name: 'Corded', description: 'Easy side-draw corded wand mechanism. Smooth operation.', fixedCost: 120, trackCostPerMeter: 65 },
  { slug: 'motorized', name: 'Motorized', description: 'Smart electric track — remote, app, Alexa/Google control.', fixedCost: 850, trackCostPerMeter: 150 },
];

// ============================================================
// Pricing calculation
// ============================================================

export interface CurtainPricingInput {
  trackWidthCm: number;
  dropCm: number;
  quantity: number;
  style: CurtainStyle;
  curtainType: CurtainType;
  tier: FabricTier;
  fabricType: FabricType;
  operation: CurtainOperation;
}

export interface CurtainPricingResult {
  trackWidthM: number;
  dropM: number;
  effectiveFabricPricePerMeter: number;
  fabricWidthNeeded: number;
  fabricCost: number;
  curtainTypeCost: number;
  trackCost: number;
  operationFixedCost: number;
  subtotalBeforeVat: number;
  vat: number;
  total: number;
}

export function calculateCurtainPrice(input: CurtainPricingInput): CurtainPricingResult {
  const { trackWidthCm, dropCm, quantity, style, curtainType, tier, fabricType, operation } = input;

  const trackWidthM = trackWidthCm / 100;
  const dropM = dropCm / 100;

  const baseFabricPerMeter = tier.basePricePerMeter * fabricType.multiplier;
  const extraHeightSegments = Math.max(0, Math.ceil((dropCm - 270) / 30));
  const fabricPerMeterWithHeight = baseFabricPerMeter + (extraHeightSegments * tier.extraPer30cm);
  const effectiveFabricPricePerMeter = fabricPerMeterWithHeight * style.multiplier;
  const fabricWidthNeeded = trackWidthM * style.fabricFactor * quantity;
  const fabricCost = fabricWidthNeeded * effectiveFabricPricePerMeter;
  const curtainTypeCost = fabricCost * (curtainType.priceModifierPercent / 100);
  const trackCost = trackWidthM * quantity * operation.trackCostPerMeter;
  const operationFixedCost = operation.fixedCost * quantity;
  const subtotal = fabricCost + curtainTypeCost + trackCost + operationFixedCost;
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return {
    trackWidthM, dropM,
    effectiveFabricPricePerMeter,
    fabricWidthNeeded,
    fabricCost, curtainTypeCost,
    trackCost, operationFixedCost,
    subtotalBeforeVat: subtotal, vat, total,
  };
}

export function formatAED(amount: number): string {
  return `AED ${amount.toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}