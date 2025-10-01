"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SpaIcon from "@mui/icons-material/Spa"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/female-therapist", label: "Female Therapist" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/lead", label: "Leads" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const drawerRef = useRef(null)
  const scrollYRef = useRef(0)

  // Scroll lock for drawer
  useEffect(() => {
    const drawerEl = drawerRef.current
    let applied = false

    const preventScroll = (e) => {
      if (drawerEl && drawerEl.contains(e.target)) return
      e.preventDefault()
    }

    const onKeyDown = (e) => {
      const active = document.activeElement
      const tag = active?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || active?.isContentEditable)
        return
      const blockingCodes = [
        "Space",
        "PageUp",
        "PageDown",
        "End",
        "Home",
        "ArrowUp",
        "ArrowDown",
      ]
      if (blockingCodes.includes(e.code) || blockingCodes.includes(e.key)) {
        if (drawerEl && drawerEl.contains(active)) return
        e.preventDefault()
      }
    }

    if (open && typeof window !== "undefined") {
      applied = true
      scrollYRef.current = window.scrollY || 0

      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.width = "100%"
      document.documentElement.style.overflow = "hidden"
      document.documentElement.style.overscrollBehavior = "none"
      document.documentElement.style.overflowX = "hidden"

      document.addEventListener("touchmove", preventScroll, { passive: false })
      document.addEventListener("wheel", preventScroll, { passive: false })
      document.addEventListener("keydown", onKeyDown, { passive: false })
    }

    return () => {
      document.removeEventListener("touchmove", preventScroll)
      document.removeEventListener("wheel", preventScroll)
      document.removeEventListener("keydown", onKeyDown)

      if (applied) {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.left = ""
        document.body.style.right = ""
        document.body.style.width = ""
        document.documentElement.style.overflow = ""
        document.documentElement.style.overscrollBehavior = ""
        document.documentElement.style.overflowX = ""

        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [open])

  return (
    <>
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-teal-700 font-semibold text-lg"
          >
            <SpaIcon className="text-teal-600" />
            <span>Twin Brothers Therapy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`transition ${
                  pathname === n.href
                    ? "text-teal-700 font-semibold border-b-2 border-teal-600 pb-1"
                    : "text-slate-700 hover:text-teal-700"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="rounded-full bg-teal-600 text-white px-4 py-1.5 hover:bg-teal-700 shadow-md transition"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[19999] transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white shadow-xl z-[20000] flex flex-col transform transition-transform duration-300 ease-in-out will-change-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="font-bold text-lg text-teal-700">Menu</span>
          <button
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="medium" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-3 px-6 mt-6 bg-white overflow-y-auto">
          {navLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`text-lg py-2 px-3 rounded-lg transition ${
                pathname === n.href
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-slate-700 hover:bg-teal-100 hover:text-teal-700"
              }`}
            >
              {n.label}
            </Link>
          ))}

          {/* Admin Button */}
          <Link
            href="/admin/login"
            onClick={() => setOpen(false)}
            className="mt-8 inline-block text-center rounded-full bg-teal-600 text-white px-5 py-2.5 hover:bg-teal-700 shadow-md transition"
          >
            Admin
          </Link>
        </nav>
      </aside>
    </>
  )
}
