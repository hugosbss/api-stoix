import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Libera acesso ao token CSRF e login
  if (pathname.startsWith('/api/csrf-token') || pathname.startsWith('/api/login')) {
    return NextResponse.next()
  }

  const auth = req.cookies.get('auth')
  const csrfHeader = req.headers.get('x-csrf-token')
  const csrfCookie = req.cookies.get('csrfToken')

  if (!auth || !csrfHeader || !csrfCookie?.value || csrfHeader !== csrfCookie.value) {
    return new NextResponse(JSON.stringify({ error: 'Acesso negado' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return NextResponse.next()
}