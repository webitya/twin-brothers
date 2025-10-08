import { NextResponse } from "next/server"
import { connectDB } from "../../../lib/db"
import GalleryImage from "../../../models/GalleryImage"

export const runtime = "nodejs"

export async function GET() {
  try {
    await connectDB()
    const images = await GalleryImage.find({}).sort({ createdAt: -1 }).lean()
    return NextResponse.json({ images })
  } catch (err) {
    console.error("[v0] Gallery list error:", err)
    return NextResponse.json({ error: "Failed to load gallery" }, { status: 500 })
  }
}
