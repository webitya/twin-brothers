"use client"
import { useState } from "react"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"

export default function BlogForm({ onCreated }) {
  const [loading, setLoading] = useState(false)
  const [imageBase64, setImageBase64] = useState("")
  async function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
  async function onFile(e) {
    const file = e.target.files?.[0]
    if (file) {
      const b64 = await toBase64(file)
      setImageBase64(b64)
    }
  }
  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    const f = new FormData(e.currentTarget)
    const payload = { title: f.get("title"), content: f.get("content"), imageBase64 }
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    setLoading(false)
    if (data.ok && onCreated) onCreated()
    e.currentTarget.reset()
    setImageBase64("")
  }
  return (
    <form onSubmit={submit} className="border border-slate-200 rounded p-4 space-y-3">
      <h3 className="font-semibold">Create Blog</h3>
      <input name="title" placeholder="Title" className="border border-slate-300 rounded px-3 py-2 w-full" required />
      <textarea
        name="content"
        rows={5}
        placeholder="Content"
        className="border border-slate-300 rounded px-3 py-2 w-full"
        required
      />
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <AddPhotoAlternateIcon />
          <span>Upload Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={onFile} />
        </label>
        {imageBase64 && <img src={imageBase64 || "/placeholder.svg"} alt="Preview" className="h-16 rounded border" />}
      </div>
      <button disabled={loading} className="bg-slate-900 text-white rounded px-4 py-2 hover:bg-slate-800">
        {loading ? "Publishing…" : "Publish"}
      </button>
    </form>
  )
}
