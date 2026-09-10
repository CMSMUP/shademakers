import { NextRequest, NextResponse } from 'next/server';
import { createAdminSupabaseClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const supabase = createAdminSupabaseClient();

    const { count: total_customers } = await supabase
      .from('customers')
      .select('*', { count: 'exact', head: true });

    const { count: total_quotes } = await supabase
      .from('quotes')
      .select('*', { count: 'exact', head: true });

    const { count: total_orders } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true });

    const { count: pending_visits } = await supabase
      .from('site_visits')
      .select('*', { count: 'exact', head: true })
      .in('status', ['requested', 'confirmed']);

    // Monthly revenue
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { data: monthlyOrders } = await supabase
      .from('orders')
      .select('total_paid')
      .gte('created_at', startOfMonth.toISOString());

    const monthly_revenue = (monthlyOrders || []).reduce((sum, o) => sum + Number(o.total_paid || 0), 0);

    return NextResponse.json({
      stats: {
        total_customers: total_customers || 0,
        total_quotes: total_quotes || 0,
        total_orders: total_orders || 0,
        pending_visits: pending_visits || 0,
        monthly_revenue,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}