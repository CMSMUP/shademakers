'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Customer {
  id: string; name: string; email: string; phone: string;
  company_name: string | null; address: string | null;
  source: string | null; notes: string | null; created_at: string;
}

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 50;

  const fetchData = async (p: number, q: string) => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(p), limit: String(limit) });
    if (q) params.set('search', q);
    try {
      const res = await fetch(`/api/admin/customers?${params}`);
      const d = await res.json();
      setCustomers(d.customers || []);
      setTotal(d.total || 0);
    } catch { /* ignore */ }
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchData(1, ''); }, []);

  const handleSearch = () => { setPage(1); fetchData(1, search); };
  const goToPage = (p: number) => { setPage(p); fetchData(p, search); };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div className="container-wide py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Customers</h1>
            <p className="text-deep-400 text-sm">{total} total</p>
          </div>
          <Link href="/admin" className="text-brand-400 text-sm hover:text-brand-300">← Back to Dashboard</Link>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, email or phone..."
            className="input-field max-w-xs !bg-navy-800 !border-navy-700 !text-white"
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch} className="btn-primary text-sm">Search</button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-deep-400">Loading...</div>
        ) : customers.length === 0 ? (
          <div className="card-dark p-10 text-center text-deep-400">No customers found</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-navy-800">
            <table className="w-full text-sm">
              <thead className="bg-navy-900 border-b border-navy-800">
                <tr>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Email</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Phone</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Company</th>
                  <th className="text-left py-3 px-4 text-deep-300 font-medium">Source</th>
                  <th className="text-right py-3 px-4 text-deep-300 font-medium">Since</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr key={c.id} className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{c.name || 'Unknown'}</td>
                    <td className="py-3 px-4 text-deep-300">{c.email}</td>
                    <td className="py-3 px-4 text-deep-300">{c.phone || '—'}</td>
                    <td className="py-3 px-4 text-deep-300">{c.company_name || '—'}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-xs bg-navy-800 text-deep-300">{c.source || 'website'}</span>
                    </td>
                    <td className="py-3 px-4 text-right text-deep-400 text-xs">{new Date(c.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {total > limit && (
          <div className="flex justify-center gap-2 mt-6">
            <button disabled={page <= 1} onClick={() => goToPage(page - 1)} className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50">Prev</button>
            <span className="px-3 py-1.5 text-deep-400 text-sm">Page {page} of {Math.ceil(total / limit)}</span>
            <button disabled={page >= Math.ceil(total / limit)} onClick={() => goToPage(page + 1)} className="px-3 py-1.5 rounded bg-navy-800 text-white text-sm disabled:opacity-50">Next</button>
          </div>
        )}
      </div>
    </div>
  );
}