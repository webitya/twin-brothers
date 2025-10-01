import { NextResponse } from "next/server"
import { dbConnect } from "../../lib/db"
import Lead from "../../../models/Lead"

export async function POST(req) {
  try {
    await dbConnect()
    const body = await req.json()
    const { name, email, phone, message } = body
    const lead = await Lead.create({ name, email, phone, message, source: "ads" })
    return NextResponse.json({ ok: true, id: lead._id })
  } catch (e) {
    console.error("[leads]", e)
    return NextResponse.json({ ok: false, error: "Failed to submit lead" }, { status: 500 })
  }
}
