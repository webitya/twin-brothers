import { v2 as cloudinary } from "cloudinary"

let configured = false
function ensureConfig() {
  if (configured) return
  const missing = []
  if (!process.env.CLOUDINARY_CLOUD_NAME) missing.push("CLOUDINARY_CLOUD_NAME")
  if (!process.env.CLOUDINARY_API_KEY) missing.push("CLOUDINARY_API_KEY")
  if (!process.env.CLOUDINARY_API_SECRET) missing.push("CLOUDINARY_API_SECRET")
  if (missing.length) {
    throw new Error(`Cloudinary configuration missing: ${missing.join(", ")}`)
  }
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })
  configured = true
}

// Upload a Buffer to Cloudinary as an image
export function uploadToGalleryBuffer(buffer, { folder, context } = {}) {
  ensureConfig()
  return new Promise((resolve, reject) => {
    const opts = {
      folder: folder || process.env.CLOUDINARY_FOLDER || "massage-gallery",
      resource_type: "image",
      overwrite: false,
      invalidate: false,
      // pass lightweight context to asset for traceability in Cloudinary
      ...(context ? { context } : {}),
    }
    const stream = cloudinary.uploader.upload_stream(opts, (error, result) => {
      if (error) return reject(error)
      resolve(result)
    })
    stream.end(buffer)
  })
}
