'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_paid: number;
  scheduled_date: string | null;
  created_at: string;
  notes: string | null;
  customers: { id: string; name: string; email: string; phone: string } | null;
}

const STATUSES = ['pending', 'confirmed', 'in_production', 'ready_for_install', 'installed', 'completed', 'cancelled'];

const STATUS_COLORS: Record<string, string> = {
  pending: 'text-amber-400 bg-amber-500/10',
  confirmed: 'text-blue-400 bg-blue-500/10',
  in_production: 'text-purple-400 bg-purple-500/10',
  ready_for_install: 'text-cyan-400 bg-cyan-500/10',
  installed: 'text-green-400 bg-green-500/10',
  completed: 'text-green-400 bg-green-500/10',
  cancelled: 'text-red-400 bg-red-500/10',
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const limit = 50;

  const fetchOrders = async (p: number, s: string) => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(p), limit: String(limit) });
    if (s) params.set('status', s);
    try {
      const res = await fetch(`/api/admin/orders?${params}`);
      const data = await res.json();
      setOrders(data.orders || []);
      setTotal(data.total || 0);
    } catch { /* ignore */ }
    setLoading(false);
  };

  // Initial load only — inline async so no setState fires synchronously in effect body
  useEffect(() => {
    const initLoad = async () => {
      const params = new URLSearchParams({ page: String(1), limit: String(limit) });
      try {
        const res = await fetch(`/api/admin/orders?${params}`);
        const data = await res.json();
        setOrders(data.orders || []);
        setTotal(data.total || 0);
      } catch { /* ignore */ }
      setLoading(false);
    };
    initLoad();
  }, []);

  const handleFilterChange = (value: string) => {
    setStatusFilter(value);
    setPage(1);
    fetchOrders(1, value);
  };

  const goToPage = (p: number) => {
    setPage(p);
    fetchOrders(p, statusFilter);
  };

  const updateOrder = async (id: string, updates: Record<string, unknown>) => {
    await fetch('/api/admin/orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
    });
    fetchOrders(page, statusFilter);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div className="container-wide py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Orders</h1>
            <p className="text-deep-400 text-sm">{total} total</p>
          </div>
          <Link href="/admin" className="text-brand-400 text-sm hover:text-brand-300">← Back to Dashboard</Link>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <select
            value={statusFilter}
            onChange={e => handleFilterChange(e.target.value)}
            className="input-field max-w-[200px] !bg-navy-800 !border-navy-700 !text-white"
          >
            <option value="">All Statuses</option>
            {STATUSES.map(s => (
              <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
            ))}
          </select>
          <button onClick={() => fetchOrders(page, statusFilter)} className="btn-primary text-sm">Refresh</button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-deep-400">Loading...</div>
        ) : orders.length === 0 ? (
          <div className="card-dark p-10 text-center text-deep-400">No orders yet</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-navy-800">
            <table className="w-full text-sm">
              <thead className="bg-navy-900 border-b border-navy-800">
                <tr>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Order</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Status</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Amount (AED)</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Schedule</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr
                    key={o.id}
                    className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedOrder(o)}
                  >
                    <td className="py-3 px-4 text-white font-medium">{o.order_number || o.id.slice(0, 8)}</td>
                    <td className="py-3 px-4 text-white">{o.customers?.name || 'Unknown'}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${STATUS_COLORS[o.status] || ''}`}>
                        {o.status.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-white font-medium">AED {Number(o.total_paid || 0).toLocaleString()}</td>
                    <td className="py-3 px-4 text-deep-400 text-xs">{o.scheduled_date ? new Date(o.scheduled_date).toLocaleDateString() : '—'}</td>
                    <td className="py-3 px-4 text-right text-deep-400 text-xs">{new Date(o.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              disabled={page <= 1}
              onClick={() => goToPage(page - 1)}
              className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50 hover:bg-navy-700 transition-colors"
            >
              Prev
            </button>
            <span className="text-deep-400 text-sm">Page {page} of {totalPages}</span>
            <button
              disabled={page >= totalPages}
              onClick={() => goToPage(page + 1)}
              className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50 hover:bg-navy-700 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {selectedOrder && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedOrder(null)}
          >
            <div
              className="bg-navy-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-navy-700"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">{selectedOrder.order_number || selectedOrder.id.slice(0, 8)}</h2>
                <button onClick={() => setSelectedOrder(null)} className="text-deep-400 hover:text-white text-2xl leading-none">&times;</button>
              </div>

              <div className="space-y-4 text-sm mb-6">
                <div className="p-3 rounded-xl bg-navy-800">
                  <span className="text-deep-400 text-xs block">Customer</span>
                  <span className="text-white">{selectedOrder.customers?.name}</span>
                  <span className="text-deep-300 block text-xs">{selectedOrder.customers?.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-deep-400">Status</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${STATUS_COLORS[selectedOrder.status] || ''}`}>
                    {selectedOrder.status.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-deep-400">Amount</span>
                  <span className="text-white font-bold">AED {Number(selectedOrder.total_paid || 0).toLocaleString()}</span>
                </div>
              </div>

              <label className="text-deep-400 text-xs block mb-2">Update Status</label>
              <select
                value={selectedOrder.status}
                onChange={e => {
                  const newStatus = e.target.value;
                  setSelectedOrder({ ...selectedOrder, status: newStatus });
                  updateOrder(selectedOrder.id, { status: newStatus });
                }}
                className="input-field !bg-navy-800 !border-navy-700 !text-white w-full"
              >
                {STATUSES.map(s => (
                  <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}