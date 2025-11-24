export default function ImageSkeleton() {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 aspect-square rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer" />
    </div>
  )
}
