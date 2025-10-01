import { NextResponse } from "next/server"
import { dbConnect } from "../../../../lib/db"
import Contact from "../../../../models/Contact"

function authorized(req) {
  const cookie = req.headers.get("cookie") || ""
  return cookie.includes("admin_auth=true")
}

export async function GET(req) {
  if (!authorized(req)) return NextResponse.json({ ok: false }, { status: 401 })
  await dbConnect()
  const items = await Contact.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ ok: true, items })
}
