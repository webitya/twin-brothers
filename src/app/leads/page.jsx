"use client"

import { useState } from "react"
import { FaSpinner, FaCheck } from "react-icons/fa"

export default function LeadsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    notes: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          notes: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting lead:", error)
    } finally {
      setLoading(false)
    }
  }

  const services = [
    "Relaxation Massage",
    "Deep Tissue Massage",
    "Hot Stone Massage",
    "Aromatherapy Massage",
    "Sports Massage",
    "Prenatal Massage",
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream to-warm-beige min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-charcoal mb-4 text-balance">Book Your Massage</h1>
          <p className="text-xl text-charcoal prose-text">
            Fill out the form below and we&apos;ll confirm your appointment shortly. We look forward to helping you
            relax and rejuvenate.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-warm-beige">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal font-bold mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  placeholder="John"
                  aria-label="First name"
                />
              </div>

              <div>
                <label className="block text-charcoal font-bold mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  placeholder="Doe"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal font-bold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  placeholder="john@example.com"
                  aria-label="Email address"
                />
              </div>

              <div>
                <label className="block text-charcoal font-bold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  placeholder="(555) 123-4567"
                  aria-label="Phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal font-bold mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  aria-label="Service selection"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-charcoal font-bold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream"
                  aria-label="Preferred appointment date"
                />
              </div>
            </div>

            <div>
              <label className="block text-charcoal font-bold mb-2">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/30 bg-cream resize-none"
                placeholder="Tell us about any specific concerns, preferences, or health conditions we should know about..."
                aria-label="Additional notes"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-gold text-cream py-4 rounded-lg font-serif text-lg font-bold hover:bg-warm-beige hover:text-charcoal transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Booking...
                </>
              ) : (
                <>
                  <FaCheck />
                  Book Your Session
                </>
              )}
            </button>

            {submitted && (
              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-center">
                <p className="text-green-700 font-bold mb-1">Booking Submitted Successfully!</p>
                <p className="text-green-600">We&apos;ll contact you soon to confirm your appointment.</p>
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-warm-beige">
            <p className="text-center text-charcoal text-sm">
              Questions? Call us at (555) 123-4567 or email hello@twinbrothers.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
