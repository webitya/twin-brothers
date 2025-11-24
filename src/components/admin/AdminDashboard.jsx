"use client"

import { useState } from "react"
import { FaSignOutAlt, FaImages, FaBlog, FaEnvelope } from "react-icons/fa"
import GalleryManager from "./GalleryManager"
import BlogsManager from "./BlogsManager"
import LeadsManager from "./LeadsManager"

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("gallery")

  const tabs = [
    { id: "gallery", label: "Gallery", icon: FaImages },
    { id: "blogs", label: "Blogs", icon: FaBlog },
    { id: "leads", label: "Leads", icon: FaEnvelope },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-warm-beige shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl text-charcoal">Admin Dashboard</h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-warm-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-accent-gold text-accent-gold"
                      : "border-transparent text-charcoal hover:text-accent-gold"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "gallery" && <GalleryManager />}
        {activeTab === "blogs" && <BlogsManager />}
        {activeTab === "leads" && <LeadsManager />}
      </div>
    </div>
  )
}
