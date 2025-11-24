"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import BlogListSkeleton from "../skeletons/BlogListSkeleton"

export default function BlogList() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs")
      const data = await res.json()
      setBlogs(data.blogs || [])
    } catch (error) {
      console.log("[v0] Error fetching blogs:", error)
      setBlogs(sampleBlogs)
    } finally {
      setLoading(false)
    }
  }

  const sampleBlogs = [
    {
      _id: "1",
      slug: "benefits-deep-tissue-massage",
      title: "The Healing Power of Deep Tissue Massage",
      metaDescription: "Discover how deep tissue massage can relieve chronic pain and improve muscle recovery.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      slug: "stress-relief-wellness",
      title: "Massage Therapy for Stress Relief and Mental Wellness",
      metaDescription: "Learn how regular massage therapy can reduce stress and improve your mental health.",
      createdAt: new Date().toISOString(),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <BlogListSkeleton />
        ) : blogs.length > 0 ? (
          <div className="space-y-12">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="border-b border-warm-beige pb-12 last:border-0 hover:shadow-lg transition-shadow p-6 rounded-lg"
              >
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal hover:text-accent-gold transition-colors mb-3 cursor-pointer text-balance">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-charcoal text-lg leading-relaxed mb-6">{blog.metaDescription}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-accent-gold font-semibold hover:text-warm-beige transition-colors group"
                >
                  Read Full Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-cream rounded-lg">
            <p className="text-charcoal text-xl font-serif mb-2">No Wellness Articles Yet</p>
            <p className="text-muted-foreground">
              Check back soon for expert tips and wellness insights from our therapists.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
