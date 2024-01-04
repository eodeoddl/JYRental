import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

//
export default function viewportMiddleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  const newHeaders = new Headers(request.headers);
  // newHeaders.set('viewport', viewport);
  // console.log(newHeaders);
  // viewport : Set = {name : 'viewport' , value : 'desktop | mobile'}

  const response = NextResponse.next({
    request: {
      headers: newHeaders,
    },
  });

  response.headers.set('viewport', viewport);

  // console.info('response header', response);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
