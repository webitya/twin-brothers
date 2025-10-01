import { NextResponse } from "next/server"

export async function POST() {
  const isProd = process.env.NODE_ENV === "production"
  const cookie = ["admin_auth=", "Path=/", "HttpOnly", "SameSite=Lax", "Max-Age=0", isProd ? "Secure" : null]
    .filter(Boolean)
    .join("; ")
  const res = NextResponse.json({ ok: true })
  res.headers.set("Set-Cookie", cookie)
  return res
}
