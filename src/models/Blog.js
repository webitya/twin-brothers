import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  mainContent: { type: String, required: true },
  bulletPoints: [String],
  featuredImage: String,
  youtubeVideos: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema)
