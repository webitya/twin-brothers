import mongoose, { Schema } from "mongoose"

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    status: { type: String, default: "new" }, // new, replied, closed
    adminReply: { type: String, default: "" },
  },
  { timestamps: true },
)

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema)
