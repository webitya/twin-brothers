import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// ---------------------- GET BLOG BY SLUG ----------------------
export async function GET(req, { params }) {
  try {
    await connectDB();

    const slug = params.slug?.toLowerCase().trim();
    console.log("[API] Fetching blog with slug:", slug);

    if (!slug) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      const allBlogs = await Blog.find({}, { slug: 1 });
      return Response.json(
        {
          error: "Blog not found",
          availableSlugs: allBlogs.map((b) => b.slug),
        },
        { status: 404 }
      );
    }

    return Response.json({ blog });
  } catch (error) {
    console.error("[API] GET ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// ---------------------- UPDATE BLOG BY SLUG ----------------------
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const slug = params.slug?.toLowerCase().trim();
    const body = await req.json();

    if (!slug) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    // Ensure slug regenerates if title changes but slug is missing
    if (!body.slug && body.title) {
      body.slug = body.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
    }

    const updatedBlog = await Blog.findOneAndUpdate({ slug }, body, {
      new: true,
    });

    if (!updatedBlog) {
      return Response.json(
        { error: "Blog not found for update" },
        { status: 404 }
      );
    }

    return Response.json({ blog: updatedBlog });
  } catch (error) {
    console.error("[API] PUT ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// ---------------------- DELETE BLOG BY SLUG ----------------------
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const slug = params.slug?.toLowerCase().trim();

    if (!slug) {
      return Response.json({ error: "Slug is required" }, { status: 400 });
    }

    const deleted = await Blog.findOneAndDelete({ slug });

    if (!deleted) {
      return Response.json(
        { error: "Blog not found for deletion" },
        { status: 404 }
      );
    }

    return Response.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("[API] DELETE ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
