"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/therapists", label: "Our Therapists" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream shadow-sm border-b border-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
              <span className="text-cream font-bold text-sm">TB</span>
            </div>
            <span className="text-2xl font-serif font-bold text-charcoal hidden sm:inline">
              Twin Brother&apos;s
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal font-medium hover:text-accent-gold transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/leads"
              className="bg-accent-gold text-cream px-6 py-2 rounded-full font-medium hover:bg-warm-beige transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-warm-beige animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-charcoal hover:bg-warm-beige"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/leads"
              className="block mx-4 mt-2 bg-accent-gold text-cream px-6 py-2 rounded-full font-medium text-center hover:bg-warm-beige transition-all"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
