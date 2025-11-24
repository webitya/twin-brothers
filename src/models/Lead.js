import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  notes: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema)
