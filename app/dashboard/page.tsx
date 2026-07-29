'use client';

import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface QuoteSummary {
  id: string;
  quote_number: string;
  status: string;
  total: number;
  created_at: string;
}

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [quotes, setQuotes] = useState<QuoteSummary[]>([]);
  const [loadingQuotes, setLoadingQuotes] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetch('/api/customer/quotes')
        .then(r => r.json())
        .then(data => {
          setQuotes(data.quotes || []);
          setLoadingQuotes(false);
        })
        .catch(() => setLoadingQuotes(false));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const statusColor: Record<string, string> = {
    draft: 'text-deep-400 bg-white/5',
    sent: 'text-blue-400 bg-blue-500/10',
    visit_requested: 'text-amber-400 bg-amber-500/10',
    visit_scheduled: 'text-amber-400 bg-amber-500/10',
    visit_completed: 'text-green-400 bg-green-500/10',
    confirmed: 'text-green-400 bg-green-500/10',
    expired: 'text-red-400 bg-red-500/10',
    cancelled: 'text-red-400 bg-red-500/10',
  };

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div className="container-wide py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold text-white">My Dashboard</h1>
            <p className="text-deep-400 text-sm mt-1">{user.email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/estimate"
              className="px-5 py-2.5 rounded-xl bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all text-white font-semibold text-sm hover:translate-y-[-2px] transition-all"
            >
              New Quote
            </Link>
            <button
              onClick={signOut}
              className="px-4 py-2.5 rounded-xl text-sm text-deep-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="card p-6">
            <span className="text-3xl text-brand-400 font-bold">{quotes.length}</span>
            <p className="text-deep-400 text-sm mt-1">Total Quotes</p>
          </div>
          <div className="card p-6">
            <span className="text-3xl text-brand-400 font-bold">{quotes.filter(q => q.status === 'confirmed' || q.status === 'visit_completed').length}</span>
            <p className="text-deep-400 text-sm mt-1">Active Orders</p>
          </div>
          <div className="card p-6">
            <span className="text-3xl text-brand-400 font-bold">{quotes.filter(q => q.status === 'visit_scheduled' || q.status === 'visit_requested').length}</span>
            <p className="text-deep-400 text-sm mt-1">Pending Visits</p>
          </div>
        </div>

        {/* Quote History */}
        <div className="card p-6">
          <h2 className="text-white font-bold text-lg mb-4">My Quotes</h2>
          {loadingQuotes ? (
            <div className="text-deep-400 text-sm py-8 text-center">Loading...</div>
          ) : quotes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-deep-400 text-sm mb-4">No quotes yet. Get your first free estimate!</p>
              <Link
                href="/estimate"
                className="px-6 py-3 rounded-xl bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all text-white font-semibold text-sm hover:translate-y-[-2px] transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-deep-500 text-xs uppercase tracking-wider border-b border-white/5">
                    <th className="text-left py-3 pr-4">Quote #</th>
                    <th className="text-left py-3 pr-4">Date</th>
                    <th className="text-left py-3 pr-4">Status</th>
                    <th className="text-right py-3 pr-4">Total</th>
                    <th className="text-right py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map(q => (
                    <tr key={q.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 pr-4 text-white font-medium">{q.quote_number}</td>
                      <td className="py-3 pr-4 text-deep-400">{new Date(q.created_at).toLocaleDateString('en-GB')}</td>
                      <td className="py-3 pr-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColor[q.status] || 'text-deep-400 bg-white/5'}`}>
                          {q.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right text-white font-medium">AED {q.total.toLocaleString('en-AE', { minimumFractionDigits: 2 })}</td>
                      <td className="py-3 text-right">
                        <Link href={`/quote/${q.id}`} className="text-brand-400 hover:text-brand-300 text-xs font-medium transition-colors">
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/contact"
            className="card p-6 flex items-center gap-4 group hover:border-brand-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400 text-xl">📅</div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">
                Request Site Visit
              </h3>
              <p className="text-deep-400 text-xs mt-0.5">Free on-site measurement</p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="card p-6 flex items-center gap-4 group hover:border-brand-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-navy-500/20 flex items-center justify-center text-navy-400 text-xl">💬</div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">
                Contact Support
              </h3>
              <p className="text-deep-400 text-xs mt-0.5">Have a question? We&apos;re here.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}