import { connectDB } from "@/lib/mongodb"
import Lead from "@/models/Lead"

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    await Lead.findByIdAndDelete(params.id)
    return Response.json({ message: "Deleted" })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
