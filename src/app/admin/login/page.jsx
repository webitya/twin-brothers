"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function onSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const password = form.get("password")
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    setLoading(false)
    if (data.ok) router.push("/admin")
    else setError("Invalid password")
  }

  return (
    <section className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          name="password"
          type="password"
          placeholder="Admin password"
          className="border border-slate-300 rounded px-3 py-2 w-full"
          required
        />
        <button disabled={loading} className="bg-slate-900 text-white rounded px-4 py-2 hover:bg-slate-800 w-full">
          {loading ? "Logging in…" : "Login"}
        </button>
      </form>
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </section>
  )
}
