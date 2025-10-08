import mongoose from "mongoose"

const GalleryImageSchema = new mongoose.Schema(
  {
    public_id: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    width: Number,
    height: Number,
    format: String,
    bytes: Number,
    folder: String,
    original_filename: String,
    uploadedBy: String,
    name: { type: String, default: "" },
    title: { type: String, default: "" },
  },
  { timestamps: true },
)

export default mongoose.models.GalleryImage || mongoose.model("GalleryImage", GalleryImageSchema)
