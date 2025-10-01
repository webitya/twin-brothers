import { NextResponse } from "next/server";
import { uploadToGalleryBuffer } from "../../../../lib/cloudinary"; // Make sure path is correct

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Content-Type must be multipart/form-data" },
        { status: 400 }
      );
    }

    const form = await req.formData();
    const file = form.get("file");

    if (!file) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploaded = await uploadToGalleryBuffer(buffer, file.name);

    return NextResponse.json({
      public_id: uploaded.public_id,
      url: uploaded.secure_url,
      width: uploaded.width,
      height: uploaded.height,
      format: uploaded.format,
      created_at: uploaded.created_at,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Upload failed", details: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
