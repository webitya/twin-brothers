import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { connectDB } from "../../../../../lib/db"
import { uploadToGalleryBuffer } from "../../../../../lib/cloudinary"
import GalleryImage from "../../../../../models/GalleryImage"
import { Buffer } from "buffer"
export const runtime = "nodejs"

export async function POST(request) {
  try {
    const isAdmin = cookies().get("admin_auth")?.value === "true"
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    const form = await request.formData()
    const file = form.get("file")
    const name = (form.get("name") || "").toString().trim()
    const title = (form.get("title") || "").toString().trim()
    const folder = form.get("folder") || process.env.CLOUDINARY_FOLDER || "massage-gallery"

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const result = await uploadToGalleryBuffer(buffer, {
      folder,
      context: {
        name: name || undefined,
        title: title || undefined,
      },
    })

    const doc = await GalleryImage.findOneAndUpdate(
      { public_id: result.public_id },
      {
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
        folder: result.folder,
        original_filename: result.original_filename,
        name: name || result.original_filename || "",
        title: title || "",
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    )

    return NextResponse.json({ image: doc })
  } catch (err) {
    console.error("[v0] Gallery upload error:", err)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
