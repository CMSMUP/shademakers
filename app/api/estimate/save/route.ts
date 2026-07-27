import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { calculateQuotePricing } from '@/lib/pricing';
import { PRODUCTS_SEED } from '@/src/data/products';

export async function POST(req: NextRequest) {
  try {
    const { customer, rooms, discount_percent, quote_number } = await req.json();

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return NextResponse.json({ error: 'Name, email, and phone are required' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    // 1. Upsert customer
    const { data: existingCustomer } = await supabase
      .from('customers')
      .select('id')
      .eq('email', customer.email)
      .single();

    let customerId: string;

    if (existingCustomer) {
      const { data: updated } = await supabase
        .from('customers')
        .update({
          name: customer.name,
          company_name: customer.company_name || null,
          phone: customer.phone,
          address: customer.address || null,
          notes: customer.notes || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingCustomer.id)
        .select('id')
        .single();

      customerId = updated?.id || existingCustomer.id;
    } else {
      const { data: newCustomer } = await supabase
        .from('customers')
        .insert({
          email: customer.email,
          name: customer.name,
          company_name: customer.company_name || null,
          phone: customer.phone,
          address: customer.address || null,
          notes: customer.notes || null,
          source: 'website',
        })
        .select('id')
        .single();

      customerId = newCustomer?.id;
    }

    if (!customerId) {
      return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
    }

    // 2. Create rooms and windows
    const roomIds: string[] = [];

    for (const room of rooms) {
      const { data: newRoom } = await supabase
        .from('rooms')
        .insert({ customer_id: customerId, name: room.name })
        .select('id')
        .single();

      if (!newRoom) continue;
      roomIds.push(newRoom.id);

      for (const win of room.windows) {
        await supabase.from('windows').insert({
          room_id: newRoom.id,
          name: win.name,
          width_cm: win.width_cm,
          height_cm: win.height_cm,
          quantity: win.quantity,
          notes: win.notes || null,
        });
      }
    }

    // 3. Calculate pricing
    const pricedWindows = rooms.flatMap((room: { name: string; windows: Array<{ productSlug?: string; modelSlug?: string; name: string; width_cm: number; height_cm: number; quantity: number; notes?: string }> }) =>
      room.windows
        .filter((w) => w.productSlug)
        .map((w) => {
          const product = PRODUCTS_SEED.find(p => p.slug === w.productSlug)!;
          const model = product.models.find(m => m.slug === w.modelSlug);
          const area_sqm = (w.width_cm / 100) * (w.height_cm / 100);
          return {
            windowName: w.name,
            roomName: room.name,
            width_cm: w.width_cm,
            height_cm: w.height_cm,
            quantity: w.quantity,
            area_sqm,
            productName: product.name,
            modelName: model?.name || 'Standard',
            modelPriceModifier: model?.price_modifier || 0,
            modelModifierType: (model?.price_modifier_type || 'percentage') as 'percentage' | 'fixed',
            basePricePerSqm: product.base_price_per_sqm,
            selectedOptions: [] as Array<{ name: string; price: number; priceType: 'fixed' | 'per_sqm' | 'per_unit' }>,
            lineTotal: 0,
          };
        })
    );

    const pricing = calculateQuotePricing(pricedWindows, discount_percent || 0);

    // 4. Create quote
    const { data: quote, error: quoteError } = await supabase
      .from('quotes')
      .insert({
        quote_number,
        customer_id: customerId,
        status: 'sent',
        subtotal: pricing.subtotal,
        discount_percent: pricing.discount_percent,
        discount_amount: pricing.discount_amount,
        vat_percent: pricing.vat_percent,
        vat_amount: pricing.vat_amount,
        total: pricing.total,
        notes: customer.notes || null,
        terms_conditions: 'Free on-site survey included. Final pricing confirmed after measurement. 70% deposit required to confirm order. 5% UAE VAT applies.',
      })
      .select('id')
      .single();

    if (quoteError || !quote) {
      console.error('Quote insert error:', quoteError);
      return NextResponse.json({ error: 'Failed to create quote' }, { status: 500 });
    }

    // 5. Create line items
    for (const pw of pricedWindows) {
      await supabase.from('quote_line_items').insert({
        quote_id: quote.id,
        width_cm: pw.width_cm,
        height_cm: pw.height_cm,
        quantity: pw.quantity,
        unit_price: pw.basePricePerSqm,
        total_price: pw.lineTotal || (pw.area_sqm * pw.basePricePerSqm * pw.quantity),
        options_json: [],
      });
    }

    // 6. Log email notification
    await supabase.from('email_notifications').insert({
      to_email: customer.email,
      subject: `Your Office Blinds Dubai Quote — ${quote_number}`,
      reference_type: 'quote',
      reference_id: quote.id,
      status: 'pending',
    });

    return NextResponse.json({
      id: quote.id,
      quote_number,
      total: pricing.total,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Save quote error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}