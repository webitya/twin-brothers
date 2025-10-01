import { NextResponse } from "next/server"
import { dbConnect } from "../../../../../lib/db"
import Contact from "../../../../../models/Contact"
import { sendMail } from "../../../../../utils/email"

function authorized(req) {
  const cookie = req.headers.get("cookie") || ""
  return cookie.includes("admin_auth=true")
}

export async function POST(req) {
  if (!authorized(req)) return NextResponse.json({ ok: false }, { status: 401 })
  const { contactId, reply } = await req.json()
  try {
    await dbConnect()
    const contact = await Contact.findById(contactId)
    if (!contact) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 })

    if (contact.email) {
      await sendMail({
        to: contact.email,
        subject: "Our response from Serene Touch",
        html: `<p>Hello ${contact.name || ""},</p><p>${reply}</p><p>Best,<br/>Serene Touch Team</p>`,
      })
    }

    contact.status = "replied"
    contact.adminReply = reply
    await contact.save()
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[admin reply]", e)
    return NextResponse.json({ ok: false, error: "Failed to send reply" }, { status: 500 })
  }
}
