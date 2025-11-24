// Database initialization script - run this to set up MongoDB collections
import mongoose from "mongoose"
import Blog from "../models/Blog.js"
import Gallery from "../models/Gallery.js"
import Lead from "../models/Lead.js"
import ContactLead from "../models/ContactLead.js"

async function setupDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("[v0] Connected to MongoDB")

    // Create indexes for better performance
    await Blog.collection.createIndex({ slug: 1 }, { unique: true })
    console.log("[v0] Blog slug index created")

    await Gallery.collection.createIndex({ createdAt: -1 })
    console.log("[v0] Gallery index created")

    await Lead.collection.createIndex({ createdAt: -1 })
    console.log("[v0] Lead index created")

    await ContactLead.collection.createIndex({ createdAt: -1 })
    console.log("[v0] Contact lead index created")

    console.log("[v0] ✅ Database setup completed successfully")
    process.exit(0)
  } catch (error) {
    console.error("[v0] Database setup error:", error)
    process.exit(1)
  }
}

setupDatabase()
