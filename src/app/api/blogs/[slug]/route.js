import { connectDB } from "@/lib/mongodb"
import Blog from "@/models/Blog"

export async function GET(req, { params }) {
  try {
    await connectDB()

    const slug = params.slug?.toLowerCase().trim()
    console.log("[v0] API: Fetching blog with slug:", slug)

    if (!slug) {
      return Response.json({ error: "Slug is required" }, { status: 400 })
    }

    const blog = await Blog.findOne({ slug })

    console.log("[v0] API: Blog query result:", blog ? `Found ${blog.title}` : "Not found")

    if (!blog) {
      const allBlogs = await Blog.find({}, { slug: 1, title: 1 })
      console.log(
        "[v0] Available blog slugs:",
        allBlogs.map((b) => b.slug),
      )
      return Response.json({ error: "Blog not found", availableSlugs: allBlogs.map((b) => b.slug) }, { status: 404 })
    }

    return Response.json({ blog })
  } catch (error) {
    console.error("[v0] Error fetching blog:", error.message)
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB()
    const body = await req.json()
    const blog = await Blog.findByIdAndUpdate(body._id || params.id, body, { new: true })
    return Response.json({ blog })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    const body = await req.json()
    await Blog.findByIdAndDelete(body._id || params.id)
    return Response.json({ message: "Deleted" })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
