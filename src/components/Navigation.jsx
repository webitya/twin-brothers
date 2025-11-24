"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/therapists", label: "Our Therapists" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-teal-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logotbt.jpg"
                alt="Twin Brother's Therapy Logo"
                className="w-11 h-11 rounded-full shadow border border-teal-200 object-cover"
              />
              <span className="text-xl font-serif font-semibold text-teal-900 hidden sm:inline">
                Twin Brother&apos;s Therapy
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-6 items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-teal-700 border-b-2 border-teal-600 pb-1"
                        : "text-gray-700 hover:text-teal-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/leads"
                className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-teal-500 transition"
              >
                Book Now
              </Link>
            </div>

            {/* MOBILE MENU ICON */}
            <button
              className="md:hidden text-teal-900"
              onClick={() => setIsOpen(true)}
            >
              <FaBars size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN DRAWER (MOBILE) */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-white shadow-2xl p-6
            transition-transform duration-300 ease-[cubic-bezier(.25,.8,.25,1)]
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-teal-800">Menu</h3>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={26} className="text-teal-800" />
            </button>
          </div>

          {/* Drawer Items (Compact UI) */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-2 px-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-teal-600 text-white shadow"
                      : "text-teal-900 hover:bg-teal-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/leads"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-teal-600 text-white text-center py-3 rounded-full text-base font-semibold shadow hover:bg-teal-500 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
