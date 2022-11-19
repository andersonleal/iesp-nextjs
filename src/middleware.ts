import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll()
  console.log(allCookies)
  const response = NextResponse.next()
  const promoCode = request.nextUrl.search.split("=")?.[1]

  if(promoCode) {
    response.cookies.set('promo_code', promoCode)
  }
  return response
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
}