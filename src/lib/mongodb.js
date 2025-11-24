import mongoose from "mongoose"
let isConnected = false

export async function connectDB() {
  if (isConnected) {
    console.log("[v0] Using existing MongoDB connection")
    return
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not set")
    }

    console.log("[v0] Connecting to MongoDB...")
    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    console.log("[v0] MongoDB connected successfully")
  } catch (error) {
    console.error("[v0] MongoDB connection error:", error.message)
    throw error
  }
}
