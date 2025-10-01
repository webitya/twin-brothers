"use client"
import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null)
  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch("/api/contact", {
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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your name" className="border border-slate-300 rounded px-3 py-2" required />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="border border-slate-300 rounded px-3 py-2"
          required
        />
      </div>
      <input name="phone" placeholder="Phone number" className="border border-slate-300 rounded px-3 py-2" />
      <textarea
        name="message"
        placeholder="How can we help?"
        rows={5}
        className="border border-slate-300 rounded px-3 py-2"
        required
      />
      <button
        disabled={loading}
        className="bg-teal-600 text-white rounded px-5 py-2.5 hover:bg-teal-700 flex items-center gap-2"
      >
        <SendIcon fontSize="small" />
        {loading ? "Sending…" : "Send Message"}
      </button>
      {ok === true && <p className="text-teal-700">Thanks! We will contact you soon.</p>}
      {ok === false && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  )
}
