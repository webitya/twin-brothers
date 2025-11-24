import mongoose from "mongoose"

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  cloudinaryId: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema)
