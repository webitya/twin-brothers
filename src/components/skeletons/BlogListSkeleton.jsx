import BlogSkeleton from "./BlogSkeleton"

export default function BlogListSkeleton() {
  return (
    <div className="space-y-12">
      {Array.from({ length: 3 }).map((_, i) => (
        <BlogSkeleton key={i} />
      ))}
    </div>
  )
}
