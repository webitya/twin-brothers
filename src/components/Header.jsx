'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SpaIcon from '@mui/icons-material/Spa'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/female-therapist', label: 'Female Therapist' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
  { href: '/lead', label: 'Leads' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => pathname === href

  return (
    <header className="border-b border-slate-200 sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-teal-700 font-semibold">
          <SpaIcon className="text-teal-600" />
          <span>Twin Brothers Therapy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-2 py-1 rounded ${
                isActive(n.href) ? 'bg-teal-100 text-teal-700' : 'text-slate-700 hover:text-teal-700'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="rounded bg-teal-600 text-white px-3 py-1.5 hover:bg-teal-700"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l border-slate-200 transform transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`px-2 py-1 rounded ${
                isActive(n.href) ? 'bg-teal-100 text-teal-700' : 'text-slate-700 hover:text-teal-700'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            onClick={() => setOpen(false)}
            className="rounded bg-teal-600 text-white px-3 py-1.5 w-max"
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  )
}
