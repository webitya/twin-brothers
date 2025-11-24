"use client";

import { useState } from "react";
import { FaSignOutAlt, FaImages, FaBlog, FaEnvelope } from "react-icons/fa";
import GalleryManager from "./GalleryManager";
import BlogsManager from "./BlogsManager";
import LeadsManager from "./LeadsManager";

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("gallery");

  const tabs = [
    { id: "gallery", label: "Gallery", icon: FaImages },
    { id: "blogs", label: "Blogs", icon: FaBlog },
    { id: "leads", label: "Leads", icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen bg-teal-50/40">

      {/* HEADER */}
      <header className="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl text-teal-900 font-bold tracking-tight">
            Admin Dashboard
          </h1>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all active:scale-95"
          >
            <FaSignOutAlt size={16} />
            Logout
          </button>
        </div>
      </header>

      {/* TAB NAVIGATION */}
      <div className="bg-white border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap
                    transition-all duration-200
                    ${isActive
                      ? "bg-teal-600 text-white shadow-md scale-[1.02]"
                      : "bg-teal-100 text-teal-700 hover:bg-teal-200"
                    }
                  `}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {activeTab === "gallery" && (
          <div className="bg-white rounded-xl shadow-sm border border-teal-100 p-6">
            <GalleryManager />
          </div>
        )}

        {activeTab === "blogs" && (
          <div className="bg-white rounded-xl shadow-sm border border-teal-100 p-6">
            <BlogsManager />
          </div>
        )}

        {activeTab === "leads" && (
          <div className="bg-white rounded-xl shadow-sm border border-teal-100 p-6">
            <LeadsManager />
          </div>
        )}

      </div>
    </div>
  );
}
