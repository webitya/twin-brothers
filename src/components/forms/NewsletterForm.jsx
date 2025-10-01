"use client"
import { useState } from "react"
import EmailIcon from "@mui/icons-material/Email"

export default function NewsletterForm() {
  const [ok, setOk] = useState(null)
  const [loading, setLoading] = useState(false)
  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    setOk(data.ok)
    setLoading(false)
    if (data.ok) e.currentTarget.reset()
  }
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        name="email"
        type="email"
        placeholder="Your email"
        className="border border-slate-300 rounded px-3 py-2 w-full"
        required
      />
      <button
        disabled={loading}
        className="bg-slate-900 text-white rounded px-4 py-2 hover:bg-slate-800 flex items-center gap-2"
      >
        <EmailIcon fontSize="small" />
        {loading ? "Joining…" : "Join"}
      </button>
      {ok === true && <span className="text-teal-700 ml-2">Subscribed!</span>}
    </form>
  )
}
