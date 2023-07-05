import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Auth from "./makasi/auth/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("x-token");

  const pathname = new URL(request.url).pathname;

  if (!token)
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );

  const isValid = await Auth.checkRole(token.value, "admin");

  if (!isValid)
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/edition/:path*", "/admin/:path*"],
};
