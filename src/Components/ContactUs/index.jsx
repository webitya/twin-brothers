"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#f9f6f2] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#4e4b45] mb-4">Contact Us</h1>
          <p className="text-lg text-[#7a756f] max-w-2xl mx-auto">
            Step into serenity. Connect with the best massage therapy experience in town — curated by expert hands and calming hearts.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-[#c8b499]" size={28} />
              <div>
                <h3 className="font-semibold text-lg text-[#4e4b45]">Twin Brother's therapy</h3>
                <p className="text-[#6d655d]">1 FLOOR RAJ COMPLEX Kanke Road near cm house, opp. Speaker HOUSE, Ranchi, Jharkhand 834008</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#c8b499]" size={28} />
              <div>
                <h3 className="font-semibold text-lg text-[#4e4b45]">Call to Book</h3>
                <p className="text-[#6d655d]">+91 62998 26209</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#c8b499]" size={28} />
              <div>
                <h3 className="font-semibold text-lg text-[#4e4b45]">Email</h3>
                <p className="text-[#6d655d]">twinbrotherstherapy@contact.in</p>
              </div>
            </div>

            {/* CTB Button */}
            <motion.a
              href="tel:+91 6299826209"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-6 bg-gradient-to-r from-[#d8c5a3] to-[#f5eee2] text-[#4e4b45] px-6 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              📞 Call to Book Now
            </motion.a>

            {/* GMB Link */}
            <motion.a
              href="https://g.co/kgs/eZ42Myb" // Replace with actual GMB link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block text-[#7a756f] underline mt-4 hover:text-[#4e4b45] transition-colors"
            >
              ⭐️ Visit us on Google
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-[#4e4b45] mb-4">Send Us a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-[#e5e3de] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c8b499]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-[#e5e3de] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c8b499]"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 border border-[#e5e3de] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c8b499]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#c8b499] text-white py-3 rounded-full text-lg font-medium hover:bg-[#bca177] transition-all"
            >
              ✉️ Send Message
            </button>
          </motion.form>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-20 rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
         <iframe
  title="Massage Center Location"
  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d103604.17495490695!2d85.23229690680482!3d23.388100111212157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f4e15fe86b5a15%3A0x88d5db0737881f6d!2s1%20FLOOR%20RAJ%20COMPLEX%20Kanke%20Road%20near%20cm%20house%2C%20opp.%20Speaker%20HOUSE%2C%20Ranchi%2C%20Jharkhand%20834008!3m2!1d23.3881217!2d85.31469849999999!5e1!3m2!1sen!2sin!4v1745064502589!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </motion.div>
      </div>
    </section>
  );
}

