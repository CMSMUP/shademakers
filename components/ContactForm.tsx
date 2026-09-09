'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent!</h3>
        <p className="text-navy-500 text-sm">We&apos;ll get back to you within 24 hours. In the meantime, check out our products or use the price calculator.</p>
        <button onClick={() => setStatus('idle')} className="btn-primary mt-6">Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
          <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="label">Phone Number</label>
          <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="input-field" placeholder="+971 50 123 4567" />
        </div>
      </div>
      <div>
        <label className="label">Email Address *</label>
        <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="input-field" placeholder="you@email.com" />
      </div>
      <div>
        <label className="label">Subject</label>
        <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className="input-field">
          <option value="">Select a topic...</option>
          <option value="curtains">Curtains</option>
          <option value="blinds">Blinds</option>
          <option value="motorized">Motorized Systems</option>
          <option value="commercial">Commercial Project</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="label">Message *</label>
        <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="input-field min-h-[140px] resize-none" placeholder="Tell us about your project — size, location, style preferences, and any special requirements..." />
      </div>
      {status === 'error' && <p className="text-red-500 text-sm">{errorMsg}</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-4">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}