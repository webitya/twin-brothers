import { NextResponse } from "next/server"

export function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const cookie = req.cookies.get("admin_auth")
    if (!cookie || cookie.value !== "true") {
      const url = new URL("/admin/login", req.url)
      return NextResponse.redirect(url)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
