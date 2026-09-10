import { NextRequest, NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const status = searchParams.get('status');
    const offset = (page - 1) * limit;

    const supabase = createAdminSupabaseClient();
    let query = supabase
      .from('orders')
      .select('*, customers(id, name, email, phone)', { count: 'exact' });

    if (status) query = query.eq('status', status);

    const { data: orders, count, error } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return NextResponse.json({ orders, total: count || 0, page, limit });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, scheduled_date, notes } = await req.json();
    if (!id) return NextResponse.json({ error: 'Order ID required' }, { status: 400 });

    const supabase = createAdminSupabaseClient();
    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (status) updates.status = status;
    if (scheduled_date) updates.scheduled_date = scheduled_date;
    if (notes !== undefined) updates.notes = notes;

    const { data, error } = await supabase.from('orders').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return NextResponse.json({ order: data });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error' }, { status: 500 });
  }
}