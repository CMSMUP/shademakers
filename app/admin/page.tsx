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

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_customers: 0, total_quotes: 0, total_orders: 0,
    pending_visits: 0, monthly_revenue: 0,
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'quotes' | 'orders' | 'customers'>('overview');

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(r => r.json())
      .then(data => {
        if (data.stats) setStats(data.stats);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div className="container-wide py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/20">
            Admin
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="card p-4">
            <span className="text-2xl text-brand-400 font-bold">{stats.total_customers}</span>
            <p className="text-deep-400 text-xs mt-0.5">Customers</p>
          </div>
          <div className="card p-4">
            <span className="text-2xl text-brand-400 font-bold">{stats.total_quotes}</span>
            <p className="text-deep-400 text-xs mt-0.5">Quotes</p>
          </div>
          <div className="card p-4">
            <span className="text-2xl text-brand-400 font-bold">{stats.total_orders}</span>
            <p className="text-deep-400 text-xs mt-0.5">Orders</p>
          </div>
          <div className="card p-4">
            <span className="text-2xl text-amber-400 font-bold">{stats.pending_visits}</span>
            <p className="text-deep-400 text-xs mt-0.5">Pending Visits</p>
          </div>
          <div className="card p-4">
            <span className="text-2xl text-green-400 font-bold">AED {stats.monthly_revenue.toLocaleString()}</span>
            <p className="text-deep-400 text-xs mt-0.5">Monthly Revenue</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
          {(['overview', 'quotes', 'orders', 'customers'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab ? 'bg-brand-500 text-white' : 'text-deep-300 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="card p-6 min-h-[300px]">
          <div className="text-center py-12">
            <p className="text-deep-400 text-sm mb-4">
              {activeTab === 'quotes' && 'Quote management view — filter, approve, and manage all customer quotes.'}
              {activeTab === 'orders' && 'Order management — track production, installation scheduling, and payments.'}
              {activeTab === 'customers' && 'Customer directory — view all customers, their quotes, and order history.'}
              {activeTab === 'overview' && 'Overview of all business metrics at a glance.'}
            </p>
            <p className="text-deep-500 text-xs">
              Full CRUD functionality available via Supabase dashboard or admin API endpoints.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Link href="/admin/quotes" className="card p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">📋 Quotes</h3>
            <p className="text-deep-400 text-xs mt-1">View and manage all quotes</p>
          </Link>
          <Link href="/admin/orders" className="card p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">🚚 Orders</h3>
            <p className="text-deep-400 text-xs mt-1">Track production & installations</p>
          </Link>
          <Link href="/admin/customers" className="card p-5 hover:border-brand-500/30 transition-all group">
            <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">👥 Customers</h3>
            <p className="text-deep-400 text-xs mt-1">Customer directory & history</p>
          </Link>
        </div>
      </div>
    </div>
  );
}