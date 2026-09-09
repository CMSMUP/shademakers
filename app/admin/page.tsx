'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DashboardStats {
  total_customers: number;
  total_quotes: number;
  total_orders: number;
  pending_visits: number;
  monthly_revenue: number;
}

interface RecentQuote {
  id: string;
  quote_number: string;
  status: string;
  total: number;
  created_at: string;
  customer_name?: string;
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'text-deep-400 bg-white/5',
  sent: 'text-blue-400 bg-blue-500/10',
  visit_requested: 'text-amber-400 bg-amber-500/10',
  visit_scheduled: 'text-amber-400 bg-amber-500/10',
  visit_completed: 'text-green-400 bg-green-500/10',
  confirmed: 'text-green-400 bg-green-500/10',
  expired: 'text-red-400 bg-red-500/10',
  cancelled: 'text-red-400 bg-red-500/10',
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_customers: 0, total_quotes: 0, total_orders: 0,
    pending_visits: 0, monthly_revenue: 0,
  });
  const [recentQuotes, setRecentQuotes] = useState<RecentQuote[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'quotes' | 'orders' | 'customers'>('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/stats').then(r => r.json()),
      fetch('/api/admin/quotes?limit=10').then(r => r.json()),
    ]).then(([statsData, quotesData]) => {
      if (statsData.stats) setStats(statsData.stats);
      if (quotesData.quotes) {
        const mapped = quotesData.quotes.map((q: { customers?: { name?: string } }) => ({
          ...q,
          customer_name: q.customers?.name || 'Unknown',
        }));
        setRecentQuotes(mapped);
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)]" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div className="container-wide py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-deep-400 text-sm mt-1">Curtain Makers — Business Management</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/20">Admin</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Customers', value: stats.total_customers, color: 'text-brand-400' },
            { label: 'Quotes', value: stats.total_quotes, color: 'text-brand-400' },
            { label: 'Orders', value: stats.total_orders, color: 'text-brand-400' },
            { label: 'Pending Visits', value: stats.pending_visits, color: 'text-amber-400' },
            { label: 'Monthly Revenue', value: `AED ${stats.monthly_revenue.toLocaleString()}`, color: 'text-green-400' },
          ].map(s => (
            <div key={s.label} className="card-dark p-5">
              <span className={`text-3xl font-bold ${s.color}`}>{s.value}</span>
              <p className="text-deep-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl bg-navy-800 border border-navy-700 w-fit">
          {(['overview', 'quotes', 'orders', 'customers'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab ? 'bg-brand-500 text-navy-950' : 'text-deep-300 hover:text-white'
              }`}>{tab}</button>
          ))}
        </div>

        {/* Content */}
        <div className="card-dark p-6 min-h-[400px]">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Recent Quotes</h3>
              {loading ? (
                <p className="text-deep-400 text-sm">Loading...</p>
              ) : recentQuotes.length === 0 ? (
                <p className="text-deep-400 text-sm text-center py-8">No quotes yet. Submissions from the website will appear here.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-deep-500 text-xs uppercase tracking-wider border-b border-navy-700">
                        <th className="text-left py-3 pr-4">Quote #</th>
                        <th className="text-left py-3 pr-4">Customer</th>
                        <th className="text-left py-3 pr-4">Status</th>
                        <th className="text-right py-3 pr-4">Total</th>
                        <th className="text-right py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentQuotes.map(q => (
                        <tr key={q.id} className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors">
                          <td className="py-3 pr-4 text-white font-medium">{q.quote_number || q.id.slice(0, 8)}</td>
                          <td className="py-3 pr-4 text-deep-300">{q.customer_name}</td>
                          <td className="py-3 pr-4">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${STATUS_COLORS[q.status] || ''}`}>
                              {q.status.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-right text-white font-medium">AED {Number(q.total || 0).toLocaleString()}</td>
                          <td className="py-3 pr-4 text-right text-deep-400 text-xs">{new Date(q.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-4 text-center">
                <Link href="/admin/quotes" className="text-brand-400 text-sm hover:text-brand-300">View All Quotes →</Link>
              </div>
            </div>
          )}

          {activeTab === 'quotes' && (
            <div className="text-center py-12">
              <p className="text-deep-400 text-sm">Full quote management with search, filter, and status updates.</p>
              <Link href="/admin/quotes" className="btn-primary inline-flex mt-4 text-sm">Go to Quotes →</Link>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="text-center py-12">
              <p className="text-deep-400 text-sm">Order management with tracking, scheduling, and payment status.</p>
              <Link href="/admin/orders" className="btn-primary inline-flex mt-4 text-sm">Go to Orders →</Link>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="text-center py-12">
              <p className="text-deep-400 text-sm">Customer directory with contact info, quote history, and order status.</p>
              <Link href="/admin/customers" className="btn-primary inline-flex mt-4 text-sm">Go to Customers →</Link>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Link href="/admin/quotes" className="card-dark p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">📋 Quotes</h3>
            <p className="text-deep-400 text-xs mt-1">View, filter, and update quote statuses</p>
          </Link>
          <Link href="/admin/orders" className="card-dark p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">🚚 Orders</h3>
            <p className="text-deep-400 text-xs mt-1">Track production, schedule installation</p>
          </Link>
          <Link href="/admin/customers" className="card-dark p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">👥 Customers</h3>
            <p className="text-deep-400 text-xs mt-1">Customer directory & history</p>
          </Link>
        </div>
      </div>
    </div>
  );
}