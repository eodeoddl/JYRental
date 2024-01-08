import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  console.log("get route handler!!");
  // console.log('d', headers());
  // console.log(request, response);
  return;
}

export async function Head(request: NextRequest, response: NextResponse) {
  console.log(" head router handler ");
}
