import { NextResponse } from "next/server"
import { dbConnect } from "../../../../lib/db"
import Blog from "../../../../models/Blog"

function authorized(req) {
  const cookie = req.headers.get("cookie") || ""
  return cookie.includes("admin_auth=true")
}

export async function GET(req) {
  await dbConnect()
  const items = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ ok: true, items })
}

export async function POST(req) {
  if (!authorized(req)) return NextResponse.json({ ok: false }, { status: 401 })
  try {
    await dbConnect()
    const { title, content, imageBase64, published = true } = await req.json()
    const blog = await Blog.create({ title, content, imageBase64, published })
    return NextResponse.json({ ok: true, id: blog._id })
  } catch (e) {
    console.error("[blog create]", e)
    return NextResponse.json({ ok: false, error: "Failed to create" }, { status: 500 })
  }
}
