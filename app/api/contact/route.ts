import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
        source: 'website',
      })
      .select('id')
      .single();

    if (error) {
      console.error('Contact insert error:', error);
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }

    // Also upsert as a customer if email is new
    const { data: existing } = await supabase
      .from('customers')
      .select('id')
      .eq('email', email)
      .single();

    if (!existing) {
      await supabase.from('customers').insert({
        email,
        name,
        phone: phone || null,
        source: 'website',
      });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}