"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // -------------------- Fetch Blog --------------------
  useEffect(() => {
    if (params?.slug) {
      fetchBlog(params.slug);
    }
  }, [params?.slug]);

  const fetchBlog = async (slug) => {
    try {
      setLoading(true);
      setError(null);

      const safeSlug = slug?.toLowerCase()?.trim();

      if (!safeSlug) {
        setError("Invalid blog URL.");
        return;
      }

      const res = await fetch(`/api/blogs/${safeSlug}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch blog.");
      }

      if (!data.blog) {
        setError("Blog not found.");
        return;
      }

      setBlog(data.blog);

      // Set dynamic SEO
      document.title = data.blog.metaTitle || data.blog.title;

      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        metaTag.setAttribute(
          "content",
          data.blog.metaDescription || data.blog.title
        );
      }
    } catch (err) {
      setError(`Failed to load blog. (${slug})`);
    } finally {
      setLoading(false);
    }
  };

  // -------------------- Loading Skeleton --------------------
  if (loading) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-warm-beige/30 animate-pulse rounded-lg mb-6"></div>
          <div className="h-10 w-2/3 bg-warm-beige/30 animate-pulse rounded mb-4"></div>
          <div className="h-4 bg-warm-beige/30 animate-pulse rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-warm-beige/30 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  // -------------------- Error State --------------------
  if (error || !blog) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-5xl text-charcoal mb-4">
            Blog Not Found
          </h1>
          <p className="text-muted-foreground mb-2">{error}</p>
          <p className="text-sm text-gray-500 mb-6">
            Slug: <span className="text-accent-gold">{params?.slug}</span>
          </p>

          <Link
            href="/blogs"
            className="text-accent-gold font-semibold hover:text-warm-beige transition-colors inline-flex items-center"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  // -------------------- Render Blog Content --------------------
  const renderContent = (content) => {
    if (!content) return null;

    return content.split("\n").map((paragraph, idx) => {
      if (!paragraph.trim()) return <br key={idx} />;

      // Bold text parsing (**bold**)
      const boldRegex = /\*\*(.+?)\*\*/g;
      const parts = paragraph.split(boldRegex);

      return (
        <p key={idx} className="text-charcoal text-lg mb-4 leading-relaxed">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  const getYoutubeEmbedUrl = (videoId) => {
    if (!videoId) return null;

    if (videoId.includes("youtube.com") || videoId.includes("youtu.be")) {
      const urlObj = new URL(videoId);
      return `https://www.youtube.com/embed/${
        urlObj.searchParams.get("v") || videoId.split("/").pop()
      }`;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  // -------------------- Final UI --------------------
  return (
    <article className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="rounded-lg overflow-hidden aspect-video bg-warm-beige/20 mb-8">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title + Meta */}
        <header className="mb-8">
          <h1 className="font-serif text-5xl text-charcoal mb-4">
            {blog.title}
          </h1>

          <div className="flex gap-8 text-sm text-muted-foreground">
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

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {renderContent(blog.mainContent)}
        </div>

        {/* Videos */}
        {Array.isArray(blog.youtubeVideos) &&
          blog.youtubeVideos.length > 0 && (
            <div className="my-12">
              <h2 className="font-serif text-3xl mb-6 text-charcoal">
                Featured Videos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.youtubeVideos.map((vid, idx) => (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden" key={idx}>
                    <iframe
                      src={getYoutubeEmbedUrl(vid)}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Bullet Points */}
        {Array.isArray(blog.bulletPoints) &&
          blog.bulletPoints.length > 0 && (
            <div className="bg-warm-beige/30 p-8 rounded-lg my-12">
              <h2 className="font-serif text-3xl text-charcoal mb-4">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {blog.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-lg">
                    <span className="text-accent-gold font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Back link */}
        <div className="pt-8 border-t border-warm-beige mt-10">
          <Link
            href="/blogs"
            className="text-accent-gold font-semibold hover:text-warm-beige inline-flex items-center group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to All Blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
