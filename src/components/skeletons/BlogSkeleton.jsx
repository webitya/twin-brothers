export default function BlogSkeleton() {
  return (
    <article className="border-b border-warm-beige pb-12 last:border-0 p-6 rounded-lg">
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      <div className="mb-4 space-y-2">
        <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      <div className="space-y-2 mb-6">
        <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
    </article>
  )
}
