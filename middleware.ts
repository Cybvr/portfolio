
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authUser = request.headers.get('X-Replit-User-Name')
  
  // Protect admin routes and edit functionality
  if ((request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.includes('/edit')) && !authUser) {
    return NextResponse.redirect(new URL('/__repl_auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/portfolio/:path*/edit']
}
