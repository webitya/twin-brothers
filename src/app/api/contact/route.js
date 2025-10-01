import { NextResponse } from "next/server"
import { dbConnect } from "../../../lib/db"
import Contact from "../../../models/Contact"
import { sendMail } from "../../../utils/email"

export async function POST(req) {
  try {
    await dbConnect()
    const body = await req.json()
    const { name, email, phone, message } = body

    const contact = await Contact.create({ name, email, phone, message })

    // Send acknowledgment to user
    if (email) {
      await sendMail({
        to: email,
        subject: "We received your inquiry",
        html: `<p>Hi ${name || "there"},</p><p>Thanks for contacting Serene Touch. We will reach out to you soon.</p><p>Best,<br/>Serene Touch Team</p>`,
      })
    }

    // Notify admin
    if (process.env.EMAIL_USER) {
      await sendMail({
        to: process.env.EMAIL_USER,
        subject: "New Contact Submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      })
    }

    return NextResponse.json({ ok: true, id: contact._id })
  } catch (e) {
    console.error("[contact]", e)
    return NextResponse.json({ ok: false, error: "Failed to submit" }, { status: 500 })
  }
}
