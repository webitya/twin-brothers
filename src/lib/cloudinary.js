import { v2 as cloudinary } from "cloudinary";

const DEFAULT_FOLDER = process.env.CLOUDINARY_FOLDER || "massage-gallery";

// Ensure singleton in dev/Next.js
if (!globalThis.__cloudinaryConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  globalThis.__cloudinaryConfigured = true;
}

/**
 * Create a transformed URL for thumbnails.
 */
function buildThumbUrl(publicId) {
  // 600x600 center-cropped, auto format/quality
  return cloudinary.url(publicId, {
    transformation: [
      { width: 600, height: 600, crop: "fill", gravity: "auto" },
      { fetch_format: "auto", quality: "auto" },
    ],
    secure: true,
  });
}

/**
 * List recent images from Cloudinary by folder.
 */
export async function listGalleryImages(limit = 50, folder = DEFAULT_FOLDER) {
  const res = await cloudinary.api.resources({
    type: "upload",
    prefix: folder ? `${folder}/` : undefined,
    max_results: limit,
    direction: "desc",
  });

  const items = (res.resources || []).map((r) => ({
    public_id: r.public_id,
    url: r.secure_url,
    thumb: buildThumbUrl(r.public_id),
    width: r.width,
    height: r.height,
    format: r.format,
    created_at: r.created_at,
  }));

  return items;
}

/**
 * Upload a buffer to Cloudinary into the configured folder.
 */
export async function uploadToGalleryBuffer(buf, filename, folder = DEFAULT_FOLDER, options = {}) {
  const uploadOptions = {
    folder,
    resource_type: "image",
    use_filename: true,
    unique_filename: true,
    overwrite: false,
    ...options,
  };

  const uploaded = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(uploadOptions, (err, result) => {
      if (err || !result) return reject(err);
      resolve(result);
    });
    stream.end(buf);
  });

  return uploaded;
}
