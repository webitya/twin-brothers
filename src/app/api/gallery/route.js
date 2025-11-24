import { connectDB } from "@/lib/mongodb"
import Gallery from "@/models/Gallery"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    await connectDB()
    const images = await Gallery.find().sort({ createdAt: -1 })
    return Response.json({ images })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    await connectDB()
    const formData = await req.formData()
    const title = formData.get("title")
    const description = formData.get("description")
    const file = formData.get("file")

    let url = ""
    let cloudinaryId = ""

    if (file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: process.env.CLOUDINARY_FOLDER || "twin_brothers_massage",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          },
        )
        uploadStream.end(buffer)
      })

      url = result.secure_url
      cloudinaryId = result.public_id
    }

    const image = await Gallery.create({ title, description, url, cloudinaryId })
    return Response.json({ image }, { status: 201 })
  } catch (error) {
    console.error("[v0] Gallery upload error:", error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
