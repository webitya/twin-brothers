"use client"
import { useState } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function GalleryUploader() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState("")
  const { mutate } = useSWR("/api/gallery", fetcher) // used for refresh

  async function onSubmit(e) {
    e.preventDefault()
    setMessage("")
    if (!file) {
      setMessage("Please choose an image.")
      return
    }
    try {
      setUploading(true)
      const form = new FormData()
      form.append("file", file)
      if (name) form.append("name", name)
      if (title) form.append("title", title)
      const res = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: form,
      })
      const contentType = res.headers.get("content-type") || ""
      const body = contentType.includes("application/json") ? await res.json() : { error: await res.text() }

      if (!res.ok) {
        throw new Error(body?.error || "Upload failed")
      }

      setMessage("Uploaded successfully!")
      setFile(null)
      setName("")
      setTitle("")
      await mutate()
    } catch (err) {
      setMessage(err.message || "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
      <h3 className="text-lg font-semibold mb-3">Upload Image to Gallery</h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="mb-1 block text-sm font-medium">Image file</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[var(--primary)] file:px-3 file:py-2 file:text-[var(--primary-foreground)] file:cursor-pointer file:hover:opacity-90"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Image name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Relaxing Aroma Massage"
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Title/Caption</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Short caption to show in gallery"
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] hover:opacity-90 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {message && <div className="text-sm text-[var(--muted-foreground)]">{message}</div>}
      </form>
    </div>
  )
}
