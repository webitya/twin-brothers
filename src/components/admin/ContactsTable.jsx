"use client"
import useSWR from "swr"
import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function ContactsTable() {
  const { data, mutate } = useSWR("/api/admin/contacts", fetcher)
  const [replying, setReplying] = useState(null)
  const [replyText, setReplyText] = useState("")

  async function sendReply(id) {
    const res = await fetch("/api/admin/contacts/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactId: id, reply: replyText }),
    })
    const out = await res.json()
    if (out.ok) {
      setReplying(null)
      setReplyText("")
      mutate()
    }
  }

  if (!data) return <p>Loading contacts…</p>
  if (!data.ok) return <p>Unauthorized.</p>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[800px] w-full border border-slate-200 rounded">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Message</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((c) => (
            <tr key={c._id} className="border-t border-slate-200">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.phone}</td>
              <td className="p-2">{c.message}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2">
                {replying === c._id ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      className="border border-slate-300 rounded p-2"
                      rows={3}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button
                      onClick={() => sendReply(c._id)}
                      className="bg-teal-600 text-white rounded px-3 py-1.5 w-max flex items-center gap-1"
                    >
                      <SendIcon fontSize="small" />
                      Send
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setReplying(c._id)}
                    className="border border-slate-300 rounded px-3 py-1.5 hover:bg-slate-50"
                  >
                    Reply
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
