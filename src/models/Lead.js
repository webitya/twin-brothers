import mongoose, { Schema } from "mongoose"

const LeadSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    source: { type: String, default: "ads" },
  },
  { timestamps: true },
)

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema)
