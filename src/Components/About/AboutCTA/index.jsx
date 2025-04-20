"use client";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="bg-[#f9f6f1] py-5 px-3 text-[#3a2c27]">
      <motion.div
        className="max-w-5xl mx-auto text-center rounded-3xl shadow-2xl bg-white/70 backdrop-blur-lg px-5 py-11"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xl text-[#9e7e68] font-serif italic mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Begin Your Wellness Journey
        </motion.p>

        <motion.h2
          className="text-2xl md:text-3xl font-bold font-serif text-[#3a2c27] leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experience the Luxury of Personalized Healing
        </motion.h2>

        <motion.p
          className="text-lg text-[#5f4c42] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Whether it's stress, pain, or simply a need to relax—our certified
          therapists craft each session just for you, in a setting of peace and
          luxury.
        </motion.p>

        <motion.a
          href="https://wa.me/919299826209?text=Hi, I’d like to book a massage session"
          className="inline-block px-8 py-2 bg-[#a58e7c] text-white font-medium rounded-full shadow-md hover:bg-[#917c6c] hover:shadow-lg transition-all duration-300 text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Session Now
        </motion.a>
      </motion.div>
    </section>
  );
}
