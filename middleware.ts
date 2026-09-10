import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Supabase project reference for cookie name
const PROJECT_REF = 'tiujxmoemxlfrnokaeqk';

// Paths that require authentication
const PROTECTED_PATHS = ['/admin'];

// Public auth page
const AUTH_PAGE = '/auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path needs protection
  const needsAuth = PROTECTED_PATHS.some(path =>
    pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!needsAuth) {
    return NextResponse.next();
  }

  // Skip middleware for the auth page itself
  if (pathname === AUTH_PAGE || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check for Supabase auth session cookie
  // Supabase sets cookies named: sb-<project-ref>-auth-token
  const authCookie = request.cookies.get(`sb-${PROJECT_REF}-auth-token`);

  if (!authCookie?.value) {
    // No session — redirect to auth page
    const redirectUrl = new URL(AUTH_PAGE, request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Has a session cookie — allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all admin routes
    '/admin/:path*',
    '/admin',
  ],
};