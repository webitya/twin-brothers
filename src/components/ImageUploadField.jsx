"use client"

import { useState } from "react"
import { FaImage, FaSpinner, FaCheck, FaTimes } from "react-icons/fa"

export default function ImageUploadField({ label, value, onChange, isLoading = false }) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(value)
  const [error, setError] = useState("")

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB")
      return
    }

    setUploading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("title", "Blog Image")
      formData.append("description", "Blog featured image")

      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      if (data.image?.url) {
        onChange(data.image.url)
        setPreview(data.image.url)
      } else {
        setError(data.error || "Upload failed")
      }
    } catch (err) {
      setError("Failed to upload image")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-charcoal font-bold mb-2">{label}</label>
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <div className="relative border-2 border-dashed border-warm-beige rounded-lg p-6 text-center hover:border-accent-gold transition-all cursor-pointer bg-cream">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2">
              {uploading ? (
                <>
                  <FaSpinner className="text-2xl text-accent-gold animate-spin" />
                  <p className="text-sm text-sage">Uploading...</p>
                </>
              ) : (
                <>
                  <FaImage className="text-2xl text-warm-beige" />
                  <p className="text-sm text-charcoal">Click or drag to upload image</p>
                  <p className="text-xs text-sage">Max 5MB</p>
                </>
              )}
            </div>
          </div>
          {error && (
            <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
              <FaTimes /> {error}
            </div>
          )}
        </div>
        {preview && (
          <div className="w-24 h-24 rounded-lg overflow-hidden border border-warm-beige flex-shrink-0">
            <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            <div className="bg-green-500 text-white flex items-center justify-center h-full absolute hidden">
              <FaCheck />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
