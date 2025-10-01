import { NextResponse } from "next/server"

export async function POST(req) {
  const { password } = await req.json()
  const ok = password && process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD
  const res = NextResponse.json({ ok })
  if (ok) {
    const isProd = process.env.NODE_ENV === "production"
    const cookie = ["admin_auth=true", "Path=/", "HttpOnly", "SameSite=Lax", "Max-Age=86400", isProd ? "Secure" : null]
      .filter(Boolean)
      .join("; ")
    res.headers.set("Set-Cookie", cookie)
  }
  return res
}
