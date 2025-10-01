export default function GalleryPage() {
  const items = Array.from({ length: 9 }).map((_, i) => i)
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800">Gallery</h1>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <img
            key={i}
            src={`/massage-wellness-.jpg?height=240&width=360&query=massage%20wellness%20${i}`}
            alt={`Gallery ${i + 1}`}
            className="w-full h-auto rounded border object-cover"
          />
        ))}
      </div>
    </section>
  )
}
