"use client"

import React, { useRef, useState } from "react"

export function GalleryUploader() {
  const fileInputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  async function handleUpload(e) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const file = fileInputRef.current?.files?.[0]
    if (!file) {
      setError("Please choose a file.")
      return
    }

    const form = new FormData()
    form.append("file", file)

    try {
      setUploading(true)
      const res = await fetch("/api/gallery/upload", {
        method: "POST",
        body: form,
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Upload failed")
      }
      setSuccess("Uploaded successfully!")
      // trigger grid refresh
      document.getElementById("refresh-gallery-grid")?.dispatchEvent(new Event("click"))
      if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (err) {
      setError(err?.message ?? "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleUpload} className="flex flex-col items-start gap-3">
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          aria-label="Choose an image to upload"
          className="block cursor-pointer rounded-md border border-input bg-background p-2 text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={uploading}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {error && <p className="text-destructive text-sm">{error}</p>}
      {success && <p className="text-emerald-600 text-sm">{success}</p>}
      <p className="text-muted-foreground text-xs">
        JPEG, PNG, WEBP recommended. Max ~10MB depending on your Cloudinary plan.
      </p>
    </form>
  )
}
