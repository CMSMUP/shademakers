'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Quote {
  id: string; quote_number: string; status: string; total: number;
  subtotal: number; discount_percent: number; vat_amount: number;
  created_at: string; notes: string | null;
  customers: { id: string; name: string; email: string; phone: string; company_name: string | null } | null;
}

const STATUSES = ['draft','sent','visit_requested','visit_scheduled','visit_completed','confirmed','expired','cancelled'];
const SC: Record<string, string> = {
  draft: 'text-deep-400 bg-white/5', sent: 'text-blue-400 bg-blue-500/10',
  visit_requested: 'text-amber-400 bg-amber-500/10', visit_scheduled: 'text-amber-400 bg-amber-500/10',
  visit_completed: 'text-green-400 bg-green-500/10', confirmed: 'text-green-400 bg-green-500/10',
  expired: 'text-red-400 bg-red-500/10', cancelled: 'text-red-400 bg-red-500/10',
};

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [fStatus, setFStatus] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sel, setSel] = useState<Quote | null>(null);
  const limit = 50;

  const load = async (p: number, s: string, q: string) => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(p), limit: String(limit) });
    if (s) params.set('status', s);
    if (q) params.set('search', q);
    try { const r = await fetch(`/api/admin/quotes?${params}`); const d = await r.json(); setQuotes(d.quotes || []); setTotal(d.total || 0); } catch { }
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(1, '', ''); }, []);

  const onFilter = (s: string) => { setFStatus(s); setPage(1); load(1, s, search); };
  const onSearch = () => { setPage(1); load(1, fStatus, search); };
  const goPage = (p: number) => { setPage(p); load(p, fStatus, search); };
  const updStatus = async (id: string, st: string) => { await fetch('/api/admin/quotes', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status: st }) }); load(page, fStatus, search); };
  const delQuote = async (id: string) => { if (!confirm('Delete this quote?')) return; await fetch('/api/admin/quotes', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) }); setSel(null); load(page, fStatus, search); };

  const tp = Math.ceil(total / limit);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div className="container-wide py-8">
        <div className="flex items-center justify-between mb-6">
          <div><h1 className="text-2xl font-bold text-white">Quotes</h1><p className="text-deep-400 text-sm">{total} total</p></div>
          <Link href="/admin" className="text-brand-400 text-sm hover:text-brand-300">&larr; Back to Dashboard</Link>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by quote # or customer..." className="input-field max-w-xs !bg-navy-800 !border-navy-700 !text-white" onKeyDown={e => e.key === 'Enter' && onSearch()} />
          <select value={fStatus} onChange={e => onFilter(e.target.value)} className="input-field max-w-[180px] !bg-navy-800 !border-navy-700 !text-white">
            <option value="">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
          </select>
          <button onClick={onSearch} className="btn-primary text-sm">Search</button>
          <button onClick={() => load(page, fStatus, search)} className="btn-secondary text-sm !text-white !border-navy-600">Refresh</button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-deep-400">Loading...</div>
        ) : quotes.length === 0 ? (
          <div className="card-dark p-10 text-center text-deep-400">No quotes found</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-navy-800">
            <table className="w-full text-sm">
              <thead className="bg-navy-900 border-b border-navy-800">
                <tr>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Quote #</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Status</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Total</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Date</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map(q => (
                  <tr key={q.id} className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors cursor-pointer" onClick={() => setSel(q)}>
                    <td className="py-3 px-4 text-white font-medium">{q.quote_number}</td>
                    <td className="py-3 px-4">
                      <div className="text-white text-sm">{q.customers?.name || 'Unknown'}</div>
                      <div className="text-deep-400 text-xs">{q.customers?.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${SC[q.status] || ''}`}>{q.status.replace('_', ' ')}</span>
                    </td>
                    <td className="py-3 px-4 text-right text-white font-medium">AED {Number(q.total).toLocaleString()}</td>
                    <td className="py-3 px-4 text-right text-deep-400 text-xs">{new Date(q.created_at).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right">
                      <select value={q.status} onChange={e => { e.stopPropagation(); updStatus(q.id, e.target.value); }} className="text-xs bg-navy-800 border border-navy-700 rounded px-2 py-1 text-white">
                        {STATUSES.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tp > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button disabled={page <= 1} onClick={() => goPage(page - 1)} className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50">Prev</button>
            <span className="px-3 py-1.5 text-deep-400 text-sm">Page {page} of {tp}</span>
            <button disabled={page >= tp} onClick={() => goPage(page + 1)} className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50">Next</button>
          </div>
        )}

        {sel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSel(null)}>
            <div className="bg-navy-900 rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-navy-700" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">{sel.quote_number}</h2>
                <button onClick={() => setSel(null)} className="text-deep-400 hover:text-white text-2xl leading-none">&times;</button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="p-3 rounded-xl bg-navy-800">
                  <span className="text-deep-400 text-xs block">Customer</span>
                  <span className="text-white block">{sel.customers?.name || 'Unknown'}</span>
                  <span className="text-deep-300 block text-xs">{sel.customers?.email}</span>
                  <span className="text-deep-300 block text-xs">{sel.customers?.phone}</span>
                  {sel.customers?.company_name && <span className="text-deep-300 block text-xs">{sel.customers.company_name}</span>}
                </div>
                <div className="p-3 rounded-xl bg-navy-800">
                  <span className="text-deep-400 text-xs block">Quote Details</span>
                  <div className="flex justify-between mt-1"><span className="text-deep-300">Subtotal</span><span className="text-white">AED {Number(sel.subtotal).toLocaleString()}</span></div>
                  {sel.discount_percent > 0 && <div className="flex justify-between mt-1"><span className="text-deep-300">Discount ({sel.discount_percent}%)</span><span className="text-white">-AED {Number(sel.subtotal * sel.discount_percent / 100).toLocaleString()}</span></div>}
                  <div className="flex justify-between mt-1"><span className="text-deep-300">VAT</span><span className="text-white">AED {Number(sel.vat_amount).toLocaleString()}</span></div>
                  <div className="flex justify-between mt-2 pt-2 border-t border-navy-700"><span className="text-white font-medium">Total</span><span className="text-white font-medium">AED {Number(sel.total).toLocaleString()}</span></div>
                </div>
              </div>
              {sel.notes && <div className="mb-6 p-3 bg-navy-800 rounded-xl"><span className="text-deep-400 text-xs block">Notes</span><p className="text-white text-sm mt-1">{sel.notes}</p></div>}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-700">
                <div className="flex-1">
                  <label className="text-deep-400 text-xs block mb-1">Update Status</label>
                  <select value={sel.status} onChange={e => updStatus(sel.id, e.target.value)} className="w-full text-sm bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 text-white">
                    {STATUSES.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                  </select>
                </div>
                <button onClick={() => delQuote(sel.id)} className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm hover:bg-red-500/20 transition-colors mt-5">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}