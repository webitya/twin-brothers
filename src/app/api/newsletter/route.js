import { NextResponse } from "next/server"
import { dbConnect } from "../../../lib/db"
import Newsletter from "../../../models/Newsletter"

export async function POST(req) {
  try {
    await dbConnect()
    const { email } = await req.json()
    if (!email) return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 })
    await Newsletter.updateOne({ email }, { $setOnInsert: { email } }, { upsert: true })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[newsletter]", e)
    return NextResponse.json({ ok: false, error: "Failed to subscribe" }, { status: 500 })
  }
}
