import { connectDB } from "@/lib/mongodb"
import ContactLead from "@/models/ContactLead"

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    await ContactLead.findByIdAndDelete(params.id)
    return Response.json({ message: "Deleted" })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
