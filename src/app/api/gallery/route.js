import { NextResponse } from "next/server"
import { listGalleryImages } from "../../../lib/cloudinary"

export async function GET() {
  try {
    const items = await listGalleryImages(50)
    return NextResponse.json({ items })
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to list images", details: err?.message ?? String(err) },
      { status: 500 }
    )
  }
}
