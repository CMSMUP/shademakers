// ============================================================
// Office Blinds Dubai — Pricing Calculation Engine
// ============================================================

export interface PricingLineItem {
  label: string;
  details: string;
  amount: number;
}

export interface PricingResult {
  line_items: PricingLineItem[];
  subtotal: number;
  discount_percent: number;
  discount_amount: number;
  vat_percent: number;
  vat_amount: number;
  total: number;
  total_sqm: number;
}

export interface PricedWindow {
  windowName: string;
  roomName: string;
  width_cm: number;
  height_cm: number;
  quantity: number;
  area_sqm: number;
  productName: string;
  modelName: string;
  modelPriceModifier: number;
  modelModifierType: 'percentage' | 'fixed';
  basePricePerSqm: number;
  selectedOptions: { name: string; price: number; priceType: 'fixed' | 'per_sqm' | 'per_unit' }[];
  lineTotal: number;
}

/**
 * Calculate price for a single window line item
 */
export function calculateWindowPrice(window: PricedWindow): {
  baseTotal: number;
  modelAdjustment: number;
  optionsTotal: number;
  lineTotal: number;
} {
  const area = window.area_sqm;

  // Base price: area × price_per_sqm × quantity
  const baseTotal = area * window.basePricePerSqm * window.quantity;

  // Model price modifier
  let modelAdjustment = 0;
  if (window.modelModifierType === 'percentage') {
    modelAdjustment = baseTotal * (window.modelPriceModifier / 100);
  } else {
    // Fixed adjustment per m²
    modelAdjustment = window.modelPriceModifier * area * window.quantity;
  }

  // Options cost
  let optionsTotal = 0;
  for (const opt of window.selectedOptions) {
    if (opt.priceType === 'fixed') {
      optionsTotal += opt.price * window.quantity;
    } else if (opt.priceType === 'per_sqm') {
      optionsTotal += opt.price * area * window.quantity;
    } else if (opt.priceType === 'per_unit') {
      optionsTotal += opt.price * window.quantity;
    }
  }

  const lineTotal = baseTotal + modelAdjustment + optionsTotal;

  return { baseTotal, modelAdjustment, optionsTotal, lineTotal };
}

/**
 * Calculate full quote pricing from all windows
 */
export function calculateQuotePricing(
  windows: PricedWindow[],
  discountPercent: number = 0,
  vatPercent: number = 5
): PricingResult {
  const line_items: PricingLineItem[] = [];

  let subtotal = 0;
  let total_sqm = 0;

  for (const w of windows) {
    const result = calculateWindowPrice(w);
    subtotal += result.lineTotal;
    total_sqm += w.area_sqm * w.quantity;

    const areaLabel = `${(w.width_cm / 100).toFixed(2)}m × ${(w.height_cm / 100).toFixed(2)}m`;
    line_items.push({
      label: `${w.productName} — ${w.modelName}`,
      details: `${w.roomName} / ${w.windowName} | ${areaLabel} × ${w.quantity} unit(s) | AED ${w.basePricePerSqm}/m²`,
      amount: result.lineTotal,
    });

    for (const opt of w.selectedOptions) {
      line_items.push({
        label: `  + ${opt.name}`,
        details: `Option for ${w.windowName}`,
        amount: opt.priceType === 'per_sqm'
          ? opt.price * w.area_sqm * w.quantity
          : opt.price * w.quantity,
      });
    }
  }

  // Round subtotal to 2 decimal places
  subtotal = Math.round(subtotal * 100) / 100;

  const discount_amount = Math.round((subtotal * discountPercent / 100) * 100) / 100;
  const after_discount = subtotal - discount_amount;
  const vat_amount = Math.round((after_discount * vatPercent / 100) * 100) / 100;
  const total = after_discount + vat_amount;

  return {
    line_items,
    subtotal,
    discount_percent: discountPercent,
    discount_amount,
    vat_percent: vatPercent,
    vat_amount,
    total,
    total_sqm: Math.round(total_sqm * 100) / 100,
  };
}

/**
 * Generate a quote number
 */
export function generateQuoteNumber(): string {
  const prefix = 'OBD';
  const date = new Date();
  const yymmdd = date.getFullYear().toString().slice(-2) +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${yymmdd}-${random}`;
}

/**
 * Format currency in AED
 */
export function formatAED(amount: number): string {
  return `AED ${amount.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Convert cm display value
 */
export function cmToM(cm: number): string {
  return (cm / 100).toFixed(2);
}