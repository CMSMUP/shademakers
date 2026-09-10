import { NextRequest, NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const offset = (page - 1) * limit;

    const supabase = createAdminSupabaseClient();
    let query = supabase
      .from('quotes')
      .select('*, customers(id, name, email, phone, company_name)', { count: 'exact' });

    if (status) {
      query = query.eq('status', status);
    }
    if (search) {
      query = query.or(`quote_number.ilike.%${search}%,customers.name.ilike.%${search}%`);
    }

    const { data: quotes, count, error } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return NextResponse.json({ quotes, total: count || 0, page, limit });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, notes } = await req.json();
    if (!id) return NextResponse.json({ error: 'Quote ID required' }, { status: 400 });

    const supabase = createAdminSupabaseClient();
    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (status) updates.status = status;
    if (notes !== undefined) updates.notes = notes;

    const { data, error } = await supabase.from('quotes').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return NextResponse.json({ quote: data });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'Quote ID required' }, { status: 400 });

    const supabase = createAdminSupabaseClient();
    await supabase.from('quote_line_items').delete().eq('quote_id', id);
    const { error } = await supabase.from('quotes').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}