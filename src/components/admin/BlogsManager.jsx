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
    if (confirm("Are you sure you want to delete this blog?")) {
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
    setFormData({
      title: blog.title || "",
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      slug: blog.slug || "",
      mainContent: blog.mainContent || "",
      bulletPoints: blog.bulletPoints || [],
      featuredImage: blog.featuredImage || "",
      youtubeVideos: blog.youtubeVideos || [],
    })
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
    <div className="space-y-10">
      {/* Top: Form / Editor */}
      <div className="bg-white rounded-2xl shadow-md border border-warm-beige/60 overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-warm-beige/50 bg-cream/70">
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-charcoal flex items-center gap-2">
              {editingId ? (
                <>
                  <FaEdit className="text-accent-gold" />
                  Edit Blog
                </>
              ) : (
                <>
                  <FaPlus className="text-accent-gold" />
                  Create New Blog
                </>
              )}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              Manage SEO-friendly blog posts for Twin Brothers Therapy wellness content.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Auto slug from title if left empty
            </span>
          </div>
        </div>

        {/* Form body */}
        <div className="px-6 py-6 md:py-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Title / Slug */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-charcoal mb-1.5 uppercase">
                  Blog Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 bg-cream text-sm"
                  placeholder="e.g. Benefits of Sports Massage for Athletes"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-charcoal mb-1.5 uppercase">
                  URL Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 bg-cream text-sm"
                  placeholder="benefits-of-sports-massage"
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  Used in the blog URL for SEO (lowercase, hyphens only).
                </p>
              </div>
            </div>

            {/* SEO Fields */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-charcoal mb-1.5 uppercase">
                  Meta Title (SEO) *
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 bg-cream text-sm"
                  placeholder="Sports Massage Therapy in Ranchi | Twin Brothers Therapy"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-charcoal mb-1.5 uppercase">
                  Meta Description (SEO) *
                </label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 bg-cream text-sm resize-none"
                  placeholder="Short, compelling summary that appears in Google search results (up to ~160 characters)."
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="border border-dashed border-warm-beige rounded-xl p-4 bg-cream/60">
              <ImageUploadField
                label="Featured Image *"
                value={formData.featuredImage}
                onChange={handleImageChange}
              />
              <p className="text-[11px] text-muted-foreground mt-1">
                Use a clear, high-quality image (ideal aspect ratio 16:9) for blog thumbnails.
              </p>
            </div>

            {/* Main Content */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-charcoal mb-1.5 uppercase">
                Main Content *
              </label>
              <div className="rounded-xl border border-warm-beige bg-cream/60 overflow-hidden">
                <RichTextEditor
                  value={formData.mainContent}
                  onChange={handleContentChange}
                  placeholder="Write your blog content here... Use headings, bold text, bullet points and links for better readability."
                />
              </div>
            </div>

            {/* YouTube Preview (if any links inside content) */}
            {formData.mainContent && (
              <div className="bg-cream/70 border border-warm-beige rounded-xl p-4">
                <p className="text-xs font-semibold text-charcoal mb-2 uppercase">
                  Embedded YouTube Videos (Auto-detected)
                </p>
                <YouTubePreview content={formData.mainContent} />
              </div>
            )}

            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label className="block text-xs font-semibold tracking-wide text-charcoal uppercase">
                  Bullet Points (Optional Highlights)
                </label>
                <button
                  type="button"
                  onClick={addBulletPoint}
                  className="text-xs px-3 py-1.5 rounded-full bg-accent-gold text-cream hover:bg-warm-beige transition-all flex items-center gap-1"
                >
                  <span className="text-sm">＋</span> Add bullet
                </button>
              </div>

              {formData.bulletPoints.length > 0 && (
                <div className="space-y-2">
                  {formData.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-cream text-charcoal border border-warm-beige">
                        #{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => handleBulletPointChange(idx, e.target.value)}
                        className="flex-1 px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 bg-cream text-sm"
                        placeholder="Key takeaway or highlight"
                      />
                      <button
                        type="button"
                        onClick={() => removeBulletPoint(idx)}
                        className="text-xs px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-warm-beige/60 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 bg-accent-gold text-cream px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-warm-beige hover:text-charcoal transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Saving...
                  </>
                ) : editingId ? (
                  <>
                    <FaEdit />
                    Update Blog
                  </>
                ) : (
                  <>
                    <FaPlus />
                    Publish Blog
                  </>
                )}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-full border border-charcoal/70 text-charcoal text-sm hover:bg-cream transition-all"
                >
                  Cancel Editing
                </button>
              )}

              <p className="text-[11px] text-muted-foreground ml-auto">
                Tip: Keep paragraphs short and use headings for better readability.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom: Blogs List */}
      <div className="bg-white rounded-2xl shadow-md border border-warm-beige/60 overflow-hidden">
        <div className="px-6 py-4 border-b border-warm-beige/50 bg-cream/70 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-serif text-charcoal">Published Blogs ({blogs.length})</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              View, edit, or delete existing blog posts.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <FaSpinner className="animate-spin text-accent-gold text-3xl" />
          </div>
        ) : blogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-cream/80">
                <tr className="border-b border-warm-beige/70">
                  <th className="text-left py-3 px-4 font-semibold text-charcoal text-xs uppercase tracking-wide">
                    Title
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal text-xs uppercase tracking-wide">
                    Slug
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal text-xs uppercase tracking-wide">
                    Created
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-charcoal text-xs uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b border-warm-beige/60 hover:bg-cream/60 transition-colors"
                  >
                    <td className="py-3 px-4 text-charcoal max-w-[260px]">
                      <p className="font-medium truncate">{blog.title}</p>
                      {blog.metaTitle && (
                        <p className="text-[11px] text-muted-foreground truncate">
                          SEO: {blog.metaTitle}
                        </p>
                      )}
                    </td>
                    <td className="py-3 px-4 text-charcoal text-xs max-w-[220px]">
                      <span className="inline-block px-2 py-1 rounded-full bg-cream text-[11px] border border-warm-beige truncate">
                        /blogs/{blog.slug}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-charcoal text-xs">
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "-"}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="px-3 py-1.5 rounded-full text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center gap-1"
                          title="Edit blog"
                        >
                          <FaEdit />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="px-3 py-1.5 rounded-full text-xs bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-1"
                          title="Delete blog"
                        >
                          <FaTrash />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-10 px-6 text-center">
            <p className="text-charcoal font-serif text-lg mb-1">No blogs yet</p>
            <p className="text-muted-foreground text-sm">
              Start by creating your first wellness article above to build your content library.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
