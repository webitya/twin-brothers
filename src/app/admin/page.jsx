"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AdminLogin from "@/components/admin/AdminLogin"
import AdminDashboard from "@/components/admin/AdminDashboard"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check-auth")
      const data = await res.json()
      setIsLoggedIn(data.authenticated)
    } catch (error) {
      console.error("Auth check failed:", error)
      setIsLoggedIn(false)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (success) => {
    if (success) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("adminAuth")
  }

  if (loading) {
    return <div className="min-h-screen bg-cream flex items-center justify-center text-charcoal">Loading...</div>
  }

  return isLoggedIn ? <AdminDashboard onLogout={handleLogout} /> : <AdminLogin onLogin={handleLogin} />
}
