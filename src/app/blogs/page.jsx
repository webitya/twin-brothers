"use client"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogsPage() {
  const { data } = useSWR("/api/admin/blogs", fetcher)
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800">Blogs</h1>
      <div className="mt-8 grid gap-6">
        {!data && <p>Loading…</p>}
        {data?.items?.map((b) => (
          <article key={b._id} className="border border-slate-200 rounded p-4">
            <h2 className="text-xl font-semibold">{b.title}</h2>
            {b.imageBase64 && (
              <img
                src={b.imageBase64 || "/placeholder.svg"}
                alt={b.title}
                className="mt-3 rounded max-h-64 object-cover"
              />
            )}
            <p className="text-slate-700 mt-3 whitespace-pre-wrap">{b.content}</p>
          </article>
        ))}
        {data?.items?.length === 0 && <p>No posts yet.</p>}
      </div>
    </section>
  )
}
