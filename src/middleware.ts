import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Retains logic for all non-static, non-API routes
};

export default function middleware() {
  // Perform any middleware actions here, or just pass the request through
  return NextResponse.next();
}
