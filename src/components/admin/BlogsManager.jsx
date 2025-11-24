"use client"

import { useState, useEffect } from "react"
import { FaTrash, FaSpinner, FaPlus, FaEdit } from "react-icons/fa"
import RichTextEditor from "../RichTextEditor"
import ImageUploadField from "../ImageUploadField"
import YouTubePreview from "../YouTubePreview"

export default function BlogsManager() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
    mainContent: "",
    bulletPoints: [],
    featuredImage: "",
    youtubeVideos: [],
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/blogs")
      const data = await res.json()
      setBlogs(data.blogs || [])
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleContentChange = (newContent) => {
    setFormData({ ...formData, mainContent: newContent })
  }

  const handleImageChange = (imageUrl) => {
    setFormData({ ...formData, featuredImage: imageUrl })
  }

  const handleBulletPointChange = (index, value) => {
    const newPoints = [...formData.bulletPoints]
    newPoints[index] = value
    setFormData({ ...formData, bulletPoints: newPoints })
  }

  const addBulletPoint = () => {
    setFormData({ ...formData, bulletPoints: [...formData.bulletPoints, ""] })
  }

  const removeBulletPoint = (index) => {
    setFormData({
      ...formData,
      bulletPoints: formData.bulletPoints.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title.trim()) {
      alert("Blog title is required")
      return
    }

    const generatedSlug =
      formData.slug.trim() ||
      formData.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")

    const submissionData = {
      ...formData,
      slug: generatedSlug,
      title: formData.title.trim(),
      metaTitle: formData.metaTitle.trim(),
      metaDescription: formData.metaDescription.trim(),
    }

    setSubmitting(true)

    try {
      const url = editingId ? `/api/blogs/${editingId}` : "/api/blogs"
      const method = editingId ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      })

      if (res.ok) {
        alert("Blog saved successfully!")
        fetchBlogs()
        resetForm()
      } else {
        const error = await res.json()
        alert("Error saving blog: " + (error.error || "Unknown error"))
      }
    } catch (error) {
      console.error("[v0] Submit error:", error)
      alert("Error saving blog: " + error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      try {
        await fetch(`/api/blogs/${id}`, { method: "DELETE" })
        fetchBlogs()
      } catch (error) {
        console.error("Delete error:", error)
      }
    }
  }

  const handleEdit = (blog) => {
    setEditingId(blog._id)
    setFormData(blog)
  }

  const resetForm = () => {
    setEditingId(null)
    setFormData({
      title: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
      mainContent: "",
      bulletPoints: [],
      featuredImage: "",
      youtubeVideos: [],
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6 flex items-center gap-2">
          {editingId ? <FaEdit /> : <FaPlus />}
          {editingId ? "Edit Blog" : "Create New Blog"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-charcoal font-bold mb-2">Blog Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold"
              />
            </div>

            <div>
              <label className="block text-charcoal font-bold mb-2">URL Slug *</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold"
                placeholder="my-blog-post"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-charcoal font-bold mb-2">Meta Title (SEO) *</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold"
              />
            </div>

            <div>
              <label className="block text-charcoal font-bold mb-2">Meta Description (SEO) *</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold resize-none"
                rows="2"
                placeholder="SEO meta description (160 characters)"
              />
            </div>
          </div>

          <ImageUploadField label="Featured Image *" value={formData.featuredImage} onChange={handleImageChange} />

          <div>
            <label className="block text-charcoal font-bold mb-2">Main Content *</label>
            <RichTextEditor
              value={formData.mainContent}
              onChange={handleContentChange}
              placeholder="Write your blog content here... Use the toolbar for formatting"
            />
          </div>

          {formData.mainContent && <YouTubePreview content={formData.mainContent} />}

          <div>
            <label className="block text-charcoal font-bold mb-2">Bullet Points</label>
            {formData.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => handleBulletPointChange(idx, e.target.value)}
                  className="flex-1 px-4 py-2 border border-warm-beige rounded focus:outline-none focus:border-accent-gold"
                  placeholder="Bullet point"
                />
                <button
                  type="button"
                  onClick={() => removeBulletPoint(idx)}
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addBulletPoint}
              className="bg-accent-gold text-cream px-4 py-2 rounded hover:bg-warm-beige text-sm"
            >
              + Add Bullet Point
            </button>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 bg-accent-gold text-cream px-6 py-2 rounded hover:bg-warm-beige transition-all"
            >
              {submitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving...
                </>
              ) : editingId ? (
                "Update Blog"
              ) : (
                "Create Blog"
              )}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border border-charcoal text-charcoal rounded hover:bg-warm-beige transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Blogs List */}
      <div className="bg-white rounded-lg shadow p-8 border border-warm-beige">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Published Blogs ({blogs.length})</h2>

        {loading ? (
          <div className="flex justify-center py-8">
            <FaSpinner className="animate-spin text-accent-gold text-3xl" />
          </div>
        ) : blogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-warm-beige">
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Title</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Slug</th>
                  <th className="text-left py-3 px-4 font-bold text-charcoal">Date</th>
                  <th className="text-center py-3 px-4 font-bold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-warm-beige hover:bg-cream">
                    <td className="py-3 px-4 text-charcoal">{blog.title}</td>
                    <td className="py-3 px-4 text-charcoal">{blog.slug}</td>
                    <td className="py-3 px-4 text-charcoal text-xs">{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button onClick={() => handleEdit(blog)} className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-charcoal text-center py-8">No blogs yet. Create your first blog!</p>
        )}
      </div>
    </div>
  )
}
