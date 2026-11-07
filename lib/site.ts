/**
 * Site-wide configuration — SINGLE SOURCE OF TRUTH for the public domain.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  TO CHANGE THE DOMAIN, set these in `.env.local` and in Vercel →     │
 * │  Project → Settings → Environment Variables:                         │
 * │                                                                      │
 * │    NEXT_PUBLIC_SITE_URL=https://your-new-domain.ae                   │
 * │    NEXT_PUBLIC_CONTACT_EMAIL=info@your-new-domain.ae   (optional)    │
 * │                                                                      │
 * │  No other file in this codebase hardcodes a domain.                  │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Only `NEXT_PUBLIC_`-prefixed vars are used so this module is safe to
 * import from both Server and Client Components (Next.js inlines them at
 * build time).
 */

/**
 * Fallback used only when NEXT_PUBLIC_SITE_URL is unset. Points at the
 * current live Vercel deployment so canonical/OG URLs stay valid until the
 * real domain is wired up. Replace via env — do not edit in-place.
 */
const FALLBACK_SITE_URL = 'https://my-curtain-app.vercel.app';

/** Canonical origin, no trailing slash. e.g. "https://example.ae" */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL
).replace(/\/+$/, '');

/** Hostname only, no scheme. e.g. "example.ae" */
export const SITE_HOST: string = SITE_URL.replace(/^https?:\/\//, '');

/** Public contact address. Defaults to info@<current host>. */
export const CONTACT_EMAIL: string =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || `info@${SITE_HOST}`;

/**
 * Build an absolute URL from a path.
 * `absoluteUrl('/about')` -> "https://example.ae/about"
 * Absolute URLs are passed through untouched.
 */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
