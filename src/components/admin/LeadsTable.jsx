"use client"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((r) => r.json())

export default function LeadsTable() {
  const { data } = useSWR("/api/admin/leads", fetcher)
  if (!data) return <p>Loading leads…</p>
  if (!data.ok) return <p>Unauthorized.</p>
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[700px] w-full border border-slate-200 rounded">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Message</th>
            <th className="p-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((l) => (
            <tr key={l._id} className="border-t border-slate-200">
              <td className="p-2">{l.name}</td>
              <td className="p-2">{l.email}</td>
              <td className="p-2">{l.phone}</td>
              <td className="p-2">{l.message}</td>
              <td className="p-2">{new Date(l.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
