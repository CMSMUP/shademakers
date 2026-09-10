'use client';

import { useState, useEffect, Suspense } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { useRouter, useSearchParams } from 'next/navigation';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signInWithOtp, verifyOtp, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      router.push(redirectTo);
    }
  }, [user, router, redirectTo]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: err } = await signInWithOtp(email);
    if (err) {
      setError(err);
    } else {
      setStep('otp');
      setSuccess('OTP sent! Check your email inbox.');
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: err } = await verifyOtp(email, token);
    if (err) {
      setError(err);
    } else {
      setSuccess('Logged in successfully!');
      router.push('/dashboard');
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError('');
    const { error: err } = await signInWithOtp(email);
    if (err) setError(err);
    else setSuccess('New OTP sent!');
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-navy-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="card p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center font-bold text-deep-950 text-xl mx-auto mb-4">
              OB
            </div>
            <h1 className="text-2xl font-bold text-white">
              {step === 'email' ? 'Welcome Back' : 'Check Your Email'}
            </h1>
            <p className="text-deep-400 text-sm mt-2">
              {step === 'email'
                ? 'Enter your email to receive a one-time login code'
                : `We sent a code to ${email}`}
            </p>
          </div>

          {/* Error / Success */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              {success}
            </div>
          )}

          {/* Step 1: Email */}
          {step === 'email' && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="label">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="input-field"
                  required
                  autoFocus
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all text-white font-semibold text-sm hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Login Code'}
              </button>
            </form>
          )}

          {/* Step 2: OTP */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="label">One-time code</label>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  className="input-field text-center text-2xl tracking-[0.5em] font-mono"
                  maxLength={6}
                  required
                  autoFocus
                />
              </div>
              <button
                type="submit"
                disabled={loading || token.length < 6}
                className="w-full py-3.5 rounded-xl bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all text-white font-semibold text-sm hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify & Login'}
              </button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={loading}
                  className="text-sm text-brand-400 hover:text-brand-300 transition-colors disabled:opacity-50"
                >
                  Resend code
                </button>
                <span className="text-deep-500 text-sm mx-2">·</span>
                <button
                  type="button"
                  onClick={() => { setStep('email'); setError(''); setSuccess(''); }}
                  className="text-sm text-deep-400 hover:text-deep-200 transition-colors"
                >
                  Change email
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-deep-500 text-xs mt-6">
            No password needed. We&apos;ll send a one-time code to your email.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-deep-400 text-sm">Loading...</div>
      </div>
    }>
      <AuthForm />
    </Suspense>
  );
}