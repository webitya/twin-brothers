"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

const AboutHero = () => {
  return (
    <>
      <section className="md:mt-[-60px] min-h-screen bg-gradient-to-br from-[#f9f6f1] to-[#f0eae0] text-[#3a2c27] flex items-center justify-center px-6 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight tracking-wide mb-6">
              Experience Serenity <br />
              with <span className="text-[#8c6f56]">Twin Brothers</span>
            </h1>
            <p className="text-lg text-[#5e4d44] leading-relaxed mb-6">
              Indulge in the finest massage therapy that blends traditional
              techniques with a touch of luxury. Our expert therapists craft
              personalized sessions to elevate your body and mind.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#8c6f56] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#a5866b] transition"
              >
              <Link href="/contact">
              Book Your Escape
           </Link>
            </motion.a>
          </motion.div>
          {/* Right Image or Visual */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/brand/logo.webp" // Replace with your real hero image
                alt="Twin Brothers Massage"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
