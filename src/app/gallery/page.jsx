import { GalleryUploader } from "../../components/gallery-uploader"
import { GalleryGrid } from "../../components/gallery-grid"

export const metadata = {
  title: "Gallery — Massage",
  description: "Explore our relaxing massage studio gallery.",
}

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight">
          Studio Gallery
        </h1>
        <p className="mt-2 max-w-prose text-muted-foreground">
          A curated look at our space and the calming experiences we offer.
        </p>
      </header>

      <div className="mb-8 rounded-lg border border-border p-4">
        <h2 className="text-lg font-medium">Upload a new image</h2>
        <p className="text-muted-foreground text-sm">
          Images are securely stored in Cloudinary under your configured folder.
        </p>
        <div className="mt-4">
          <GalleryUploader />
        </div>
      </div>

      <GalleryGrid />
    </section>
  )
}
