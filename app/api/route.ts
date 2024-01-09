import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export async function GET(request: Request) {
  console.log("api get");

  return new NextResponse("TLqkf ", { status: 200, headers: { referer: "" } });
}

// export async function Head(request: NextRequest) {
//   console.log("api head ");
//   const newHeaders = new Headers(request.headers);
//   newHeaders.set("viewport", "mobile");
//   return NextResponse.next({
//     request: {
//       headers: newHeaders,
//     },
//   });
// }

// export async function Head(request: NextRequest) {
//   console.log(" head router handler ");
// }
