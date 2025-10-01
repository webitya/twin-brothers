import { NextResponse } from "next/server"

export async function POST(req) {
  const { password } = await req.json()
  const ok = password && process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD
  const res = NextResponse.json({ ok })
  if (ok) {
    res.headers.set("Set-Cookie", `admin_auth=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
  }
  return res
}
