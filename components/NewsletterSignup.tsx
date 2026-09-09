'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-green-600 text-sm font-medium">You&apos;re in! Check your inbox for exclusive curtain club perks.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email" required value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your Email Address"
        className="input-field flex-1"
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary flex-shrink-0">
        {status === 'loading' ? 'Joining...' : 'Join Free'}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs">Something went wrong. Try again.</p>}
    </form>
  );
}