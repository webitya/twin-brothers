"use client"

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

export function GalleryGrid({ className }) {
  const { data, error, isLoading, mutate } = useSWR("/api/gallery", fetcher, {
    revalidateOnFocus: false,
  })

  if (error) {
    return <p className="text-destructive">Failed to load gallery.</p>
  }

  const items = data?.items ?? []
  const rootClass = className ? `space-y-4 ${className}` : "space-y-4"

  return (
    <div className={rootClass}>
      {isLoading ? (
        <p className="text-muted-foreground">Loading gallery...</p>
      ) : items.length === 0 ? (
        <p className="text-muted-foreground">No images yet. Upload your first image above.</p>
      ) : (
        <div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          aria-live="polite"
          aria-busy={isLoading}
        >
          {items.map((img) => (
            <div
              key={img.public_id}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={
                  img.thumb ||
                  "/placeholder.svg?height=600&width=600&query=massage%20spa%20gallery%20image"
                }
                alt="Spa gallery image"
                className="block h-48 w-full object-cover"
                loading="lazy"
                width={600}
                height={600}
                crossOrigin="anonymous"
              />
            </div>
          ))}
        </div>
      )}

      {/* hidden refresh button to trigger revalidation after upload */}
      <button
        type="button"
        onClick={() => mutate()}
        className="hidden"
        aria-hidden="true"
        id="refresh-gallery-grid"
      >
        Refresh
      </button>
    </div>
  )
}
