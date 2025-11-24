"use client"

import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner } from "react-icons/fa"

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl text-charcoal mb-4 text-balance">Contact Us</h1>
        <p className="text-xl text-charcoal prose-text mb-16 max-w-3xl">
          Have questions? We&apos;d love to hear from you. Get in touch with our team today.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl text-charcoal mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-accent-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Address</h3>
                  <p className="text-charcoal">
                    123 Wellness Street
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhone className="text-accent-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                  <p className="text-charcoal">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-accent-gold text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Email</h3>
                  <p className="text-charcoal">hello@twinbrothers.com</p>
                </div>
              </div>
            </div>

            <div className="bg-warm-beige p-6 rounded-lg">
              <h3 className="font-bold text-charcoal mb-3">Hours</h3>
              <p className="text-charcoal mb-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p className="text-charcoal mb-2">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
              <p className="text-charcoal text-sm">Closed on major holidays</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl text-charcoal mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-charcoal font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold bg-cream"
                  placeholder="Your name"
                  aria-label="Full name"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold bg-cream"
                  placeholder="your@email.com"
                  aria-label="Email address"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold bg-cream"
                  placeholder="(555) 123-4567"
                  aria-label="Phone number"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold bg-cream resize-none"
                  placeholder="Tell us how we can help..."
                  aria-label="Message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-gold text-cream py-3 rounded-lg font-bold hover:bg-warm-beige transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
