import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    // Upsert subscriber (if exists, reactivate)
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, is_active')
      .eq('email', email)
      .single();

    if (existing) {
      if (!existing.is_active) {
        await supabase
          .from('newsletter_subscribers')
          .update({ is_active: true, unsubscribed_at: null })
          .eq('id', existing.id);
      }
      return NextResponse.json({ success: true, message: 'Already subscribed' });
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email,
        name: name || null,
        source: 'website',
      });

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}