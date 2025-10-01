import { NextResponse } from "next/server"
import { dbConnect } from "../../../../../lib/db"
import Blog from "../../../../../models/Blog"

function authorized(req) {
  const cookie = req.headers.get("cookie") || ""
  return cookie.includes("admin_auth=true")
}

export async function DELETE(req, { params }) {
  if (!authorized(req)) return NextResponse.json({ ok: false }, { status: 401 })
  try {
    await dbConnect()
    await Blog.findByIdAndDelete(params.id)
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[blog delete]", e)
    return NextResponse.json({ ok: false, error: "Failed to delete" }, { status: 500 })
  }
}
