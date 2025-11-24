"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPost() {
  const params = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (params?.slug) {
      fetchBlog()
    }
  }, [params?.slug])

  const fetchBlog = async () => {
    try {
      setLoading(true)
      setError(null)

      const slug = params?.slug?.toLowerCase().trim()

      if (!slug) {
        setError("Invalid blog URL")
        setLoading(false)
        return
      }

      console.log("[v0] Fetching blog with slug:", slug)

      const res = await fetch(`/api/blogs/${slug}`)
      const data = await res.json()

      console.log("[v0] API Response:", data)

      if (!res.ok) {
        console.log("[v0] Available slugs from API:", data.availableSlugs)
        throw new Error(data.error || `Failed to fetch blog: ${res.status}`)
      }

      if (!data.blog) {
        setError("Blog not found")
        return
      }

      setBlog(data.blog)
      console.log("[v0] Blog fetched successfully:", data.blog.title)

      if (data.blog) {
        document.title = data.blog.metaTitle || data.blog.title
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) metaDesc.setAttribute("content", data.blog.metaDescription || "")
      }
    } catch (error) {
      console.error("[v0] Error fetching blog:", error.message)
      setError("Failed to load blog. Please try again later. (Slug: " + params?.slug + ")")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 rounded-lg overflow-hidden aspect-video bg-warm-beige/30 animate-pulse" />
          <div className="mb-4 h-12 bg-warm-beige/30 rounded animate-pulse" />
          <div className="mb-8 h-6 bg-warm-beige/30 rounded animate-pulse w-1/2" />
          <div className="space-y-3">
            <div className="h-4 bg-warm-beige/30 rounded animate-pulse" />
            <div className="h-4 bg-warm-beige/30 rounded animate-pulse" />
            <div className="h-4 bg-warm-beige/30 rounded animate-pulse w-5/6" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-4 text-balance">Blog Not Found</h1>
          <p className="text-muted-foreground mb-4">{error || "The blog post you're looking for doesn't exist."}</p>
          <p className="text-sm text-gray-500 mb-8">Slug: {params?.slug}</p>
          <Link
            href="/blogs"
            className="inline-flex items-center text-accent-gold font-semibold hover:text-warm-beige transition-colors"
          >
            Back to All Blogs
            <span className="ml-2">←</span>
          </Link>
        </div>
      </div>
    )
  }

  const renderContent = (content) => {
    if (!content) return null

    return content.split("\n").map((paragraph, idx) => {
      if (!paragraph.trim()) return <br key={idx} />

      // Parse bold text (**text**)
      const boldRegex = /\*\*(.+?)\*\*/g
      const parts = paragraph.split(boldRegex)

      return (
        <p key={idx} className="text-charcoal mb-4 leading-relaxed text-lg">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-semibold">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
      )
    })
  }

  const getYoutubeEmbedUrl = (videoId) => {
    if (!videoId) return null
    // Handle both full URLs and video IDs
    if (videoId.includes("youtube.com") || videoId.includes("youtu.be")) {
      const urlObj = new URL(videoId)
      return `https://www.youtube.com/embed/${urlObj.searchParams.get("v") || videoId.split("/").pop()}`
    }
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <article className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden aspect-video bg-warm-beige/20">
            <img
              src={blog.featuredImage || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4 text-balance">{blog.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-accent-gold" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} className="text-accent-gold" />
              Wellness Expert
            </span>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">{renderContent(blog.mainContent)}</div>

        {/* YouTube Videos */}
        {blog.youtubeVideos && blog.youtubeVideos.length > 0 && (
          <div className="my-12">
            <h2 className="font-serif text-3xl text-charcoal mb-8">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blog.youtubeVideos.map((videoId, idx) => {
                const embedUrl = getYoutubeEmbedUrl(videoId)
                return (
                  <div key={idx} className="rounded-lg overflow-hidden aspect-video bg-black">
                    <iframe
                      src={embedUrl}
                      title={`Video ${idx + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Bullet Points */}
        {blog.bulletPoints && blog.bulletPoints.length > 0 && (
          <div className="my-12 bg-warm-beige/30 p-8 rounded-lg">
            <h2 className="font-serif text-3xl text-charcoal mb-6">Key Takeaways</h2>
            <ul className="space-y-4">
              {blog.bulletPoints.map((point, idx) => (
                <li key={idx} className="text-charcoal flex items-start gap-4 text-lg">
                  <span className="text-accent-gold font-bold mt-1 flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back to Blogs Link */}
        <div className="mt-12 pt-8 border-t border-warm-beige">
          <Link
            href="/blogs"
            className="inline-flex items-center text-accent-gold font-semibold hover:text-warm-beige transition-colors group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to All Blogs
          </Link>
        </div>
      </div>
    </article>
  )
}
