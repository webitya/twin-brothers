import mongoose, { Schema } from "mongoose"

const BlogSchema = new Schema(
  {
    title: String,
    content: String,
    imageBase64: String, // store small images; consider external storage for large files
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
