"use client";

import { useState } from "react";
import { FaSpinner, FaCheck } from "react-icons/fa";

export default function LeadsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prevent past date selection
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extra validation (SECURITY): prevent past dates even if HTML is edited
    if (formData.preferredDate < today) {
      alert("You cannot select a past date. Please choose a valid upcoming date.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          notes: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Relaxation Massage",
    "Deep Tissue Massage",
    "Hot Stone Massage",
    "Aromatherapy Massage",
    "Sports Massage",
    "Prenatal Massage",
  ];

  return (
    <section className="relative py-14 px-4 bg-gradient-to-br from-white via-teal-50/40 to-white min-h-screen overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200/40 blur-[110px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-teal-900 mb-3">
            Book Your Session
          </h1>
          <p className="text-teal-700 text-md max-w-md mx-auto leading-relaxed">
            Fill in the details below. Our team will contact you shortly to confirm your appointment.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-teal-100 shadow-md rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First & Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Service + Date */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  Service *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-teal-900 font-semibold mb-1 block">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  min={today} // prevent past dates
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-sm text-teal-900 font-semibold mb-1 block">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 bg-white resize-none"
                placeholder="Any special request or condition?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold text-sm hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" /> Booking...
                </>
              ) : (
                <>
                  <FaCheck /> Confirm Booking
                </>
              )}
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border border-green-400 rounded-lg p-3 text-center">
                <p className="text-green-800 text-sm font-semibold">
                  Thank you! We will contact you to confirm your appointment.
                </p>
              </div>
            )}
          </form>

          <p className="text-center text-teal-700 text-xs mt-6">
            For urgent help, call <span className="font-semibold">+91 62998 26209</span>
          </p>
        </div>
      </div>
    </section>
  );
}
