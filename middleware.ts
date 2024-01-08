import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

// /
export default function viewportMiddleware(request: NextRequest) {
  const url = request.nextUrl;

  console.log(" nextjs request => ", url);

  const { device } = userAgent(request);
  const newHeader = new Headers(request.headers);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  const response = NextResponse.next({
    request: {
      headers: newHeader,
    },
  });

  response.headers.set("viewport", viewport);
  console.log("middleware response => ", response);
  return response;

  // url.searchParams.set('viewport', viewport); header
  // console.log('url', url);
  // new request.headers

  // return NextResponse.next({
  //   headers :
  // });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// export function middleware(request: NextRequest) {
//   console.log(request);
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-hello-from-middleware1', 'hello');

//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   });

//   // Set a new response header `x-hello-from-middleware2`
//   response.headers.set('x-hello-from-middleware2', 'hello');
//   return response;
// }
