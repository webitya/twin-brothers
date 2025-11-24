"use client"

import { useState } from "react"
import { FaLock, FaSpinner } from "react-icons/fa"

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("adminAuth", "true")
        onLogin(true)
      } else {
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-warm-beige flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-warm-beige">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-cream text-2xl" />
            </div>
            <h1 className="font-serif text-3xl text-charcoal">Admin Portal</h1>
            <p className="text-charcoal text-sm mt-2">Twin Brother&apos;s Massage Therapy</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-charcoal font-bold mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-charcoal font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                placeholder="••••••••"
              />
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-gold text-cream py-3 rounded-lg font-bold hover:bg-warm-beige hover:text-charcoal transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center text-charcoal text-xs mt-6">Demo: admin / admin123</p>
        </div>
      </div>
    </div>
  )
}
