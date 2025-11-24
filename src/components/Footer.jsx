"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50 to-white text-teal-900 mt-20">

      {/* Background soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 h-72 w-72 bg-teal-200/40 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 right-0 h-72 w-72 bg-emerald-200/40 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand + Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logotbt.jpg"
                alt="Twin Brothers Therapy Logo"
                className="h-12 w-12 object-cover rounded-full shadow-lg shadow-teal-300/40 border border-teal-200"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold">
                  Twin Brothers Therapy
                </h3>
                <p className="text-xs text-teal-700 tracking-[0.15em] uppercase">
                  Ranchi • Wellness Center
                </p>
              </div>
            </div>

            <p className="text-teal-700 leading-relaxed text-sm mb-5">
              Trusted sports & therapeutic massage centre in Ranchi offering recovery,
              relaxation and complete wellness care.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/swadesiayurvedahealthcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow hover:bg-teal-500 hover:text-white transition-all"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/twin_brothers_therapy_3/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow hover:bg-teal-500 hover:text-white transition-all"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow hover:bg-teal-500 hover:text-white transition-all"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-5">Services</h4>
            <ul className="space-y-2 text-sm text-teal-700">
              <li><Link href="/services#sports-massage" className="hover:text-teal-900">Sports Massage Therapy</Link></li>
              <li><Link href="/services#deep-tissue" className="hover:text-teal-900">Deep Tissue Massage</Link></li>
              <li><Link href="/services#cupping" className="hover:text-teal-900">Cupping Therapy</Link></li>
              <li><Link href="/services#rehab" className="hover:text-teal-900">Recovery & Rehab Sessions</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2 text-sm text-teal-700">
              <li><Link href="/about" className="hover:text-teal-900">About Us</Link></li>
              <li><Link href="/female-therapist" className="hover:text-teal-900">Female Therapist</Link></li>
              <li><Link href="/gallery" className="hover:text-teal-900">Gallery</Link></li>
              <li><Link href="/blogs" className="hover:text-teal-900">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-teal-900">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-3 text-sm text-teal-700">
              <li>
                📍 1st Floor, Raj Complex,<br />
                Kanke Road (Near CM House),<br />
                Ranchi, Jharkhand 834008
              </li>

              <li>
                📞{" "}
                <a href="tel:+916299826209" className="font-semibold hover:text-teal-900">
                  +91 62998 26209
                </a>
              </li>

              <li>
                ✉️{" "}
                <a href="mailto:twinbrotherstherapy@contact.in" className="hover:text-teal-900">
                  twinbrotherstherapy@contact.in
                </a>
              </li>

              <li>🕒 Open Daily — 10 AM to 8 PM</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-teal-200 pt-8 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-serif font-semibold">Stay Updated</h3>
              <p className="text-sm text-teal-700">Get offers, tips & updates in your inbox.</p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-white border border-teal-300 text-teal-800 placeholder:text-teal-500 focus:ring-2 focus:ring-teal-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-teal-200 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-3 text-teal-700">
          <p>&copy; {currentYear} Twin Brothers Therapy, Ranchi. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-teal-900">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-teal-900">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-teal-900">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
