"use client"
import { useState } from "react"
import ContactsTable from "../../components/admin/ContactsTable"
import LeadsTable from "../../components/admin/LeadsTable"
import BlogsTable from "../../components/admin/BlogsTable"
import BlogForm from "../../components/admin/BlogForm"
import DashboardIcon from "@mui/icons-material/Dashboard"
import LogoutIcon from "@mui/icons-material/Logout"

export default function AdminPage() {
  const [tab, setTab] = useState("contacts")

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" })
    window.location.href = "/admin/login"
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <DashboardIcon /> Admin Dashboard
        </h1>
        <button
          onClick={logout}
          className="border border-slate-300 rounded px-3 py-1.5 flex items-center gap-2 hover:bg-slate-50"
        >
          <LogoutIcon fontSize="small" />
          Logout
        </button>
      </div>
      <div className="mt-6 flex gap-2">
        {["contacts", "leads", "blogs"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded border ${tab === t ? "bg-teal-600 text-white border-teal-600" : "border-slate-300 hover:bg-slate-50"}`}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "contacts" && <ContactsTable />}
        {tab === "leads" && <LeadsTable />}
        {tab === "blogs" && (
          <div className="grid md:grid-cols-2 gap-6">
            <BlogForm
              onCreated={() => {
                /* refresh handled inside BlogsTable mutate pattern */
              }}
            />
            <BlogsTable />
          </div>
        )}
      </div>
    </section>
  )
}
