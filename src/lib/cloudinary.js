import { v2 as cloudinary } from "cloudinary";

const DEFAULT_FOLDER = process.env.CLOUDINARY_FOLDER || "massage-gallery";

// Ensure singleton configuration for Next.js hot reload
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
 * Generate a thumbnail URL
 * @param {string} publicId
 * @returns {string}
 */
export function buildThumbUrl(publicId) {
  return cloudinary.url(publicId, {
    transformation: [
      { width: 600, height: 600, crop: "fill", gravity: "auto" },
      { fetch_format: "auto", quality: "auto" },
    ],
    secure: true,
  });
}

/**
 * List images from a Cloudinary folder
 * @param {number} limit
 * @param {string} folder
 * @returns {Promise<Array>}
 */
export async function listGalleryImages(limit = 50, folder = DEFAULT_FOLDER) {
  const res = await cloudinary.api.resources({
    type: "upload",
    prefix: folder ? `${folder}/` : undefined,
    max_results: limit,
    direction: "desc",
  });

  return (res.resources || []).map((r) => ({
    public_id: r.public_id,
    url: r.secure_url,
    thumb: buildThumbUrl(r.public_id),
    width: r.width,
    height: r.height,
    format: r.format,
    created_at: r.created_at,
  }));
}

/**
 * Upload a buffer to Cloudinary
 * @param {Buffer} buf
 * @param {string} filename
 * @param {string} folder
 * @param {object} options
 * @returns {Promise<object>}
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

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(uploadOptions, (err, result) => {
      if (err || !result) return reject(err);
      resolve(result);
    });
    stream.end(buf);
  });
}
