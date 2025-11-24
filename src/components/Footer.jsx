"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Twin Brother&apos;s</h3>
            <p className="text-warm-beige mb-4">Professional therapeutic massage services for your wellness.</p>
            <div className="flex gap-4">
              <a href="#" className="text-cream hover:text-accent-gold transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-accent-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-accent-gold transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#relaxation" className="text-warm-beige hover:text-accent-gold">
                  Relaxation Massage
                </Link>
              </li>
              <li>
                <Link href="/services#deep-tissue" className="text-warm-beige hover:text-accent-gold">
                  Deep Tissue
                </Link>
              </li>
              <li>
                <Link href="/services#sports" className="text-warm-beige hover:text-accent-gold">
                  Sports Massage
                </Link>
              </li>
              <li>
                <Link href="/services#hot-stone" className="text-warm-beige hover:text-accent-gold">
                  Hot Stone
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-warm-beige hover:text-accent-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/therapists" className="text-warm-beige hover:text-accent-gold">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-warm-beige hover:text-accent-gold">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-warm-beige hover:text-accent-gold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
            <p className="text-warm-beige mb-2">📍 123 Wellness Street, City, State 12345</p>
            <p className="text-warm-beige mb-2">📞 (555) 123-4567</p>
            <p className="text-warm-beige mb-2">✉️ hello@twinbrothers.com</p>
            <p className="text-warm-beige">Hours: Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-warm-beige pt-8 mb-8">
          <h3 className="text-lg font-serif font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              // Newsletter signup logic here
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-warm-beige text-charcoal placeholder-charcoal focus:outline-none"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-accent-gold text-cream px-6 py-2 rounded font-medium hover:bg-warm-beige transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-beige pt-8 flex flex-col md:flex-row justify-between items-center text-warm-beige text-sm">
          <p>&copy; {currentYear} Twin Brother&apos;s Massage Therapy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-gold">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent-gold">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
