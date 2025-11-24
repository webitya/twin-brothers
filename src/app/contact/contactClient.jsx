"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-br from-white via-teal-50/40 to-white">

      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-10 left-0 w-64 h-64 bg-teal-300/25 blur-[90px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/25 blur-[110px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <h1 className="font-serif text-3xl  text-center md:text-4xl text-teal-900 mb-3">
          Contact Us
        </h1>

        <p className="text-md md:text-lg text-center text-teal-700 max-w-6xl mb-10">
          Have questions or need assistance? We’re here to help you book your wellness session.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-sm border border-teal-100 p-6">

            <h2 className="font-serif text-2xl text-teal-900 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-teal-700 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-teal-900">Address</h3>
                  <p className="text-teal-700 text-sm leading-relaxed">
                    Raj Complex, 1st Floor,  
                    Near CM House, Kanke Road,  
                    Ranchi, Jharkhand
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <FaPhone className="text-teal-700 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-teal-900">Phone</h3>
                  <p className="text-teal-700 text-sm leading-relaxed">
                    +91 62998 26209 <br />
                    +91 88047 87966
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <FaEnvelope className="text-teal-700 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-teal-900">Email</h3>
                  <p className="text-teal-700 text-sm">
                    twinbrotherstherapy@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 bg-teal-600/10 p-4 rounded-lg border border-teal-100">
              <h3 className="font-semibold text-teal-900 mb-2 text-sm">Therapy Hours</h3>
              <p className="text-teal-700 text-sm">Mon–Fri: 9 AM – 8 PM</p>
              <p className="text-teal-700 text-sm">Sat–Sun: 10 AM – 6 PM</p>
            </div>

          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm border border-teal-100 p-6">

            <h2 className="font-serif text-2xl text-teal-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-teal-900 font-medium mb-1 text-sm">Full Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-teal-900 font-medium mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-teal-900 font-medium mb-1 text-sm">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-teal-900 font-medium mb-1 text-sm">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-700 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitted && (
                <p className="bg-green-100 border border-green-300 text-green-700 text-sm px-4 py-2 rounded mt-2">
                  Thank you! We will contact you shortly.
                </p>
              )}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
