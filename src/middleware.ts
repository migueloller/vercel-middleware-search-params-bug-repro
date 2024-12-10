import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.href

  // See Vercel logs and note that the URL does have the search params
  console.log({ url })

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/|_vercel|favicon.ico).*)'],
}
