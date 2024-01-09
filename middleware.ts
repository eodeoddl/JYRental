import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const newHeader = new Headers(request.headers);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  newHeader.set("viewport", viewport);
  return NextResponse.next({
    request: {
      headers: newHeader,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
