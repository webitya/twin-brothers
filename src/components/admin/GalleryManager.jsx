"use client"

import { useState, useEffect } from "react"
import { FaUpload, FaTrash, FaSpinner, FaEdit } from "react-icons/fa"

export default function GalleryManager() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ title: "", description: "", file: null })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/gallery")
      const data = await res.json()
      setImages(data.images || [])
    } catch (error) {
      console.error("Error fetching images:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!formData.file && !editingId) return

    setUploading(true)
    const data = new FormData()
    if (formData.file) data.append("file", formData.file)
    data.append("title", formData.title)
    data.append("description", formData.description)

    try {
      const url = editingId ? `/api/gallery/${editingId}` : "/api/gallery"
      const method = editingId ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        body: data,
      })

      if (res.ok) {
        fetchImages()
        setFormData({ title: "", description: "", file: null })
        setEditingId(null)
        document.getElementById("fileInput")?.reset()
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await fetch(`/api/gallery/${id}`, { method: "DELETE" })
        fetchImages()
      } catch (error) {
        console.error("Delete error:", error)
      }
    }
  }

  const handleEdit = (image) => {
    setEditingId(image._id)
    setFormData({ title: image.title, description: image.description, file: null })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6">{editingId ? "Edit Image" : "Upload New Image"}</h2>

        <form onSubmit={handleUpload} id="fileInput" className="space-y-4">
          <div>
            <label className="block text-charcoal font-bold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold"
              placeholder="Image title"
            />
          </div>

          <div>
            <label className="block text-charcoal font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold resize-none"
              rows="3"
              placeholder="Image description"
            />
          </div>

          {!editingId && (
            <div>
              <label className="block text-charcoal font-bold mb-2">Image File</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required={!editingId}
                className="w-full"
              />
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={uploading}
              className="flex items-center gap-2 bg-accent-gold text-cream px-6 py-2 rounded hover:bg-warm-beige transition-all"
            >
              {uploading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <FaUpload />
                  {editingId ? "Update Image" : "Upload Image"}
                </>
              )}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setFormData({ title: "", description: "", file: null })
                }}
                className="px-6 py-2 border border-charcoal text-charcoal rounded hover:bg-warm-beige transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Gallery List */}
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Gallery Images ({images.length})</h2>

        {loading ? (
          <div className="flex justify-center py-8">
            <FaSpinner className="animate-spin text-accent-gold text-3xl" />
          </div>
        ) : images.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-warm-beige">
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Title</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Description</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Image URL</th>
                  <th className="text-center py-3 px-4 font-bold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {images.map((image) => (
                  <tr key={image._id} className="border-b border-warm-beige hover:bg-cream">
                    <td className="py-3 px-4 text-charcoal">{image.title}</td>
                    <td className="py-3 px-4 text-charcoal text-sm">{image.description?.substring(0, 50)}...</td>
                    <td className="py-3 px-4">
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-gold hover:text-warm-beige text-sm truncate"
                      >
                        View
                      </a>
                    </td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(image)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(image._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-charcoal text-center py-8">No images yet. Upload your first image!</p>
        )}
      </div>
    </div>
  )
}
