import { connectDB } from "@/lib/mongodb"
import Lead from "@/models/Lead"
import { sendLeadEmail } from "@/lib/nodemailer"

export async function GET() {
  try {
    await connectDB()
    const leads = await Lead.find().sort({ createdAt: -1 })
    return Response.json({ leads })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json()
    const lead = await Lead.create(body)

    try {
      await sendLeadEmail(lead, "booking")
    } catch (emailError) {
      console.error("[v0] Email send error:", emailError)
      // Don't fail the lead creation if email fails
    }

    return Response.json({ lead }, { status: 201 })
  } catch (error) {
    console.error("[v0] Lead creation error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
