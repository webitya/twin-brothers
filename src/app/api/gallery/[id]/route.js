import { connectDB } from "@/lib/mongodb"
import Gallery from "@/models/Gallery"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    const image = await Gallery.findById(params.id)

    if (image?.cloudinaryId) {
      await cloudinary.uploader.destroy(image.cloudinaryId)
    }

    await Gallery.findByIdAndDelete(params.id)
    return Response.json({ message: "Deleted" })
  } catch (error) {
    console.error("[v0] Gallery delete error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB()
    const formData = await req.formData()
    const title = formData.get("title")
    const description = formData.get("description")

    const image = await Gallery.findByIdAndUpdate(params.id, { title, description }, { new: true })
    return Response.json({ image })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
