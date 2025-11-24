"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import BlogListSkeleton from "../skeletons/BlogListSkeleton";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.log("Error fetching blogs:", error);
      setBlogs(sampleBlogs);
    } finally {
      setLoading(false);
    }
  };

  const sampleBlogs = [
    {
      _id: "1",
      slug: "benefits-deep-tissue-massage",
      title: "The Healing Power of Deep Tissue Massage",
      metaDescription:
        "Discover how deep tissue massage relieves chronic pain and improves recovery.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      slug: "stress-relief-wellness",
      title: "Massage Therapy for Stress Relief & Mental Wellness",
      metaDescription:
        "Learn how regular massage therapy helps reduce stress and boost mental health.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      slug: "full-body-massage-benefits",
      title: "7 Benefits of a Full Body Massage",
      metaDescription:
        "Full-body massages improve circulation, posture, and overall relaxation.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "4",
      slug: "sports-massage-recovery",
      title: "How Sports Massage Helps Fast Recovery",
      metaDescription:
        "Sports massage enhances flexibility, reduces soreness, and speeds recovery.",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-teal-50/60 to-white">

      {/* Soft glowing background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200/40 blur-[110px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl text-teal-900 mb-12 text-center">
          Wellness Articles
        </h1>

        {/* Blog Grid */}
        {loading ? (
          <BlogListSkeleton />
        ) : blogs.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6 md:gap-8
            "
          >
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
                className="
                  group block bg-white rounded-xl border border-teal-100
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300 p-6
                "
              >
                {/* Date & Author */}
                <div className="flex items-center justify-between text-sm text-teal-600 mb-4">
                  <span className="flex items-center gap-1">
                    <CalendarMonthIcon className="text-teal-700" fontSize="small" />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <PersonIcon className="text-teal-700" fontSize="small" />
                    Expert
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="
                    font-serif text-xl font-bold text-teal-900 mb-3
                    group-hover:text-teal-700 transition-colors leading-snug
                  "
                >
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-teal-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.metaDescription}
                </p>

                {/* Read More */}
                <span
                  className="
                    text-teal-700 font-semibold flex items-center gap-2
                    group-hover:text-teal-900 transition-all
                  "
                >
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-md border border-teal-100">
            <p className="text-teal-900 text-xl font-serif mb-2">No Articles Yet</p>
            <p className="text-teal-700">New wellness insights are coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
