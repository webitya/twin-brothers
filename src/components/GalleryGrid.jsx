"use client"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

function CardSkeleton() {
  return <div className="animate-pulse rounded-lg bg-[var(--muted)] aspect-[4/3]" />
}

export default function GalleryGrid() {
  const { data, isLoading, error, mutate } = useSWR("/api/gallery", fetcher, { revalidateOnFocus: false })

  if (error) {
    return <div className="text-[var(--destructive)]">Failed to load images.</div>
  }

  const images = data?.images || []

  return (
    <div>
      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <figure
              key={img.public_id}
              className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]"
            >
              <img
                src={img.url || "/placeholder.svg"}
                alt={img.title || img.name || img.original_filename || "Gallery image"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <figcaption className="p-2 text-xs text-[color:var(--muted-foreground)] truncate">
                <span className="block font-medium text-[var(--foreground)] truncate">
                  {img.title || img.original_filename || "Untitled"}
                </span>
                {img.name ? <span className="block truncate">{img.name}</span> : null}
              </figcaption>
            </figure>
          ))}
          {images.length === 0 && (
            <div className="col-span-full text-center text-[var(--muted-foreground)]">
              No images yet. Please upload from the Admin panel.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
