'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/estimate', label: 'Get a Quote' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const PRODUCT_MEGA = [
  { href: '/products/roller-blinds', label: 'Roller Blinds', desc: 'Blackout, Sunscreen, Translucent' },
  { href: '/products/roman-blinds', label: 'Roman Blinds', desc: 'Blackout, Sunscreen, Soft Fabrics' },
  { href: '/products/wooden-venetian-blinds', label: 'Wooden Venetian', desc: '50mm & 25mm, Wood & Faux' },
  { href: '/products/vertical-blinds', label: 'Vertical Blinds', desc: 'Blackout, Sunscreen, Translucent' },
  { href: '/products/aluminium-venetian-blinds', label: 'Aluminium Venetian', desc: '50mm, 25mm, Perforated' },
  { href: '/products/zebra-blinds', label: 'Zebra Blinds', desc: 'Day & Night, Translucent, Blackout' },
  { href: '/products/smart-blinds', label: 'Smart / Motorized', desc: 'Automated, App Control, Voice' },
  { href: '/products/pleated-blinds', label: 'Pleated Blinds', desc: 'Translucent, Blackout, Thermal' },
  { href: '/products/panel-blinds', label: 'Panel Blinds', desc: 'Modern Sliding Panels' },
  { href: '/products/skylight-blinds', label: 'Skylight Blinds', desc: 'Specialist Roof Solutions' },
  { href: '/products/flyscreen-blinds', label: 'Flyscreen Blinds', desc: 'Insect Screens' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform relative">
              <Image src="/favicon.svg" alt="Office Blinds Dubai" width={24} height={24} className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight">Office</span>
              <span className="text-lg font-bold text-gradient ml-1">Blinds</span>
              <span className="text-xs text-deep-400 block -mt-1">DUBAI</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Products') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button className="px-4 py-2 rounded-lg text-sm font-medium text-deep-200 hover:text-white hover:bg-white/5 transition-all">
                      Products ▾
                    </button>
                    {productsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-[600px] p-4 rounded-2xl glass border border-white/10 grid grid-cols-2 gap-2 shadow-2xl">
                        {PRODUCT_MEGA.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="block p-3 rounded-xl hover:bg-white/5 transition-all group"
                          >
                            <span className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                              {p.label}
                            </span>
                            <span className="text-xs text-deep-400 block mt-0.5">{p.desc}</span>
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
                  className="px-4 py-2 rounded-lg text-sm font-medium text-deep-200 hover:text-white hover:bg-white/5 transition-all"
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-brand-500/25"
            >
              Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/auth"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-deep-200 hover:text-white hover:bg-white/5 transition-all border border-white/10"
            >
              Login
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-deep-200 hover:text-white hover:bg-white/5"
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
        <div className="lg:hidden border-t border-white/5 glass">
          <div className="container-wide py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-deep-200 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {PRODUCT_MEGA.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block px-4 py-2.5 rounded-xl text-sm text-deep-300 hover:text-white hover:bg-white/5 transition-all pl-8"
                onClick={() => setMobileOpen(false)}
              >
                {p.label}
              </Link>
            ))}
            <div className="pt-3 flex gap-3">
              <Link
                href="/estimate"
                className="flex-1 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
              <Link
                href="/auth"
                className="flex-1 text-center px-5 py-3 rounded-xl text-sm font-medium border border-white/10 text-deep-200"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}