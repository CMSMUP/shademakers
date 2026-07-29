'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Sticky bottom CTA bar on mobile — keeps "Get Quote" visible while scrolling.
 * 247blinds.co.uk pattern: primary conversion action always within thumb reach.
 * Hidden on desktop and on estimate/auth pages where it's redundant.
 */
export default function StickyMobileCta() {
  const pathname = usePathname();

  // Hide on quote flow + auth pages
  const hidden = pathname?.startsWith('/estimate') || pathname?.startsWith('/auth');
  if (hidden) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      <div className="glass border-t border-white/10 px-4 py-3 flex gap-3 backdrop-blur-xl">
        <Link
          href="/estimate"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg from-brand-600 to-brand-500 text-white font-bold text-sm"
        >
          Get Instant Quote
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <a
          href="tel:+97141234567"
          className="inline-flex items-center justify-center px-4 py-3 rounded-xl glass text-white font-semibold text-sm border border-white/10"
          aria-label="Call ShadeMakers"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </a>
      </div>
      {/* Safe-area spacer for iOS */}
      <div className="h-[env(safe-area-inset-bottom)] bg-deep-950/90" />
    </div>
  );
}