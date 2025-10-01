"use client"
import { useState } from "react"
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"

export default function LeadForm() {
  const [ok, setOk] = useState(null)
  const [loading, setLoading] = useState(false)
  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    setOk(data.ok)
    setLoading(false)
    if (data.ok) e.currentTarget.reset()
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" className="border border-slate-300 rounded px-3 py-2" required />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border border-slate-300 rounded px-3 py-2"
          required
        />
      </div>
      <input name="phone" placeholder="Phone" className="border border-slate-300 rounded px-3 py-2" required />
      <textarea
        name="message"
        placeholder="Message (optional)"
        rows={4}
        className="border border-slate-300 rounded px-3 py-2"
      />
      <button
        disabled={loading}
        className="bg-amber-500 text-white rounded px-5 py-2.5 hover:bg-amber-600 flex items-center gap-2"
      >
        <PersonAddAlt1Icon fontSize="small" />
        {loading ? "Submitting…" : "Get Offer"}
      </button>
      {ok === true && <p className="text-teal-700">Thanks! We’ll reach out shortly.</p>}
      {ok === false && <p className="text-red-600">Submission failed. Try again.</p>}
    </form>
  )
}
