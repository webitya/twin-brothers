import { connectDB } from "@/lib/mongodb"
import ContactLead from "@/models/ContactLead"
import { sendContactEmail } from "@/lib/nodemailer"

export async function GET() {
  try {
    await connectDB()
    const leads = await ContactLead.find().sort({ createdAt: -1 })
    return Response.json({ leads })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()
    const lead = await ContactLead.create(body)

    try {
      await sendContactEmail(lead)
    } catch (emailError) {
      console.error("[v0] Email send error:", emailError)
      // Don't fail the contact creation if email fails
    }

    return Response.json({ lead }, { status: 201 })
  } catch (error) {
    console.error("[v0] Contact creation error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
