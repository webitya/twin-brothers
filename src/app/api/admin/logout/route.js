import { NextResponse } from "next/server"

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.headers.set("Set-Cookie", `admin_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`)
  return res
}
