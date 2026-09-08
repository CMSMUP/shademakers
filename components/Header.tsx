'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Curtains' },
  { href: '/dubai/office-blinds', label: 'Office Blinds' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const PRODUCT_MEGA = [
  { href: '/products', label: 'All Curtains', desc: 'Custom curtains for villas & hotels' },
  { href: '/dubai/office-blinds', label: 'Office Blinds Dubai', desc: 'Commercial blinds for offices' },
  { href: '/products/roller-blinds', label: 'Roller Blinds', desc: 'Blackout, Sunscreen, Translucent' },
  { href: '/products/wooden-venetian-blinds', label: 'Wooden Venetian', desc: 'Real & faux wood' },
  { href: '/products/vertical-blinds', label: 'Vertical Blinds', desc: 'For large windows' },
  { href: '/products/smart-blinds', label: 'Smart Motorized', desc: 'App & voice controlled' },
  { href: '/products/zebra-blinds', label: 'Zebra Blinds', desc: 'Day & Night' },
  { href: '/products/roman-blinds', label: 'Roman Blinds', desc: 'Elegant fabric folds' },
  { href: '/products/aluminium-venetian-blinds', label: 'Aluminium Venetian', desc: 'Slim modern slats' },
  { href: '/products/pleated-blinds', label: 'Pleated Blinds', desc: 'Energy efficient' },
  { href: '/products/panel-blinds', label: 'Panel Blinds', desc: 'Modern sliding panels' },
  { href: '/products/skylight-blinds', label: 'Skylight Blinds', desc: 'For roof windows' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-50 border-b border-deep-200">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="Curtain Makers — Premium Curtains & Blinds"
              width={170}
              height={42}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Curtains' || link.label === 'Office Blinds') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-deep-200/50 transition-all"
                    >
                      {link.label} ▾
                    </Link>
                    {productsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-[640px] p-4 rounded-2xl bg-white border border-deep-200 grid grid-cols-2 gap-1 shadow-xl">
                        {PRODUCT_MEGA.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="block p-3 rounded-xl hover:bg-deep-50 transition-all group"
                          >
                            <span className="text-sm font-semibold text-navy-900 group-hover:text-brand-500 transition-colors">
                              {p.label}
                            </span>
                            <span className="text-xs text-navy-400 block mt-0.5">{p.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-deep-200/50 transition-all"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/estimate"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 text-navy-900 font-semibold text-sm hover:bg-brand-600 transition-all"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/auth"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-navy-700 hover:text-navy-900 border border-deep-200 hover:bg-deep-200/50 transition-all"
            >
              Sign In
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-navy-700 hover:text-navy-900 hover:bg-deep-200/50"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-deep-200 bg-deep-50">
          <div className="container-wide py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-deep-200/50 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-deep-200 pt-3 mt-3 space-y-1">
              {PRODUCT_MEGA.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block px-4 py-2.5 rounded-lg text-sm text-navy-500 hover:text-navy-900 hover:bg-deep-200/50 transition-all pl-8"
                  onClick={() => setMobileOpen(false)}
                >
                  {p.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 flex gap-3">
              <Link
                href="/estimate"
                className="flex-1 text-center px-5 py-3 rounded-lg bg-brand-500 text-navy-900 font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="/auth"
                className="flex-1 text-center px-5 py-3 rounded-lg text-sm font-medium border border-deep-200 text-navy-700"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}