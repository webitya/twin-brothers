"use client"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogsTable() {
  const { data, mutate } = useSWR("/api/admin/blogs", fetcher)
  if (!data) return <p>Loading blogs…</p>
  async function remove(id) {
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" })
    mutate()
  }
  return (
    <div className="grid gap-4">
      {data.items.map((b) => (
        <div key={b._id} className="border border-slate-200 rounded p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{b.title}</h4>
            <button
              onClick={() => remove(b._id)}
              className="border border-red-300 text-red-700 rounded px-3 py-1.5 hover:bg-red-50"
            >
              Delete
            </button>
          </div>
          {b.imageBase64 && (
            <img src={b.imageBase64 || "/placeholder.svg"} alt={b.title} className="mt-2 h-28 rounded object-cover" />
          )}
          <p className="text-sm text-slate-700 mt-2 line-clamp-3">{b.content}</p>
        </div>
      ))}
    </div>
  )
}
