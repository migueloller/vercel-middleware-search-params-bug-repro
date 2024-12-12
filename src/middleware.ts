import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.href

  // See Vercel logs and note that the URL does have the search params
  console.log({ url })

  const requestHeaders = new Headers(request.headers)

  // Workaround to fix issue, comment out to see the issue
  requestHeaders.set('x-original-url', request.url)

  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/|_vercel|favicon.ico).*)'],
}
