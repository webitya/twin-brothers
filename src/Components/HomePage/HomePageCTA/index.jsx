"use client";
import React from "react";
import { motion } from "framer-motion";

const HomeCallToActionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#eafaf1] via-[#bdfcdf] to-[#fefefe] py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-4xl font-bold text-[#2f3e35] mb-6"
        >
          Ready to Rejuvenate Your Body and Mind?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Book a personalized massage or therapy session tailored to your needs and experience deep relaxation.
        </motion.p>
        <motion.a
          href="https://wa.me/919299826209?text=Hi, I’d like to book a massage session"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block px-8 py-4 bg-[#76b39d] hover:bg-[#5fa58c] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Book Your Session Now
        </motion.a>
      </div>

      {/* Decorative blurred background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#a8d5c2] opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#c9e6db] opacity-30 rounded-full filter blur-2xl z-0" />
    </section>
  );
};

export default HomeCallToActionSection;
