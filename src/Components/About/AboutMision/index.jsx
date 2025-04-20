"use client";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="bg-[#bdb9b5] py-24 px-6 text-[#2c2a29]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl italic font-bold text-[#837972] mb-3 tracking-widest">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#3a302b]">
            Your Health is Our Priority
          </h2>
          <p className="text-md md:text-lg text-[#4d4038] mb-4 leading-relaxed">
            Indulge in an experience where your wellbeing comes first. At Twin Brothers,
            we blend luxury with care, offering holistic therapies that rejuvenate body and soul.
          </p>
          <p className="text-md md:text-lg text-[#4d4038] mb-8 leading-relaxed">
            We believe true health begins with relaxation. Our premium massage services ensure
            that your time with us is tranquil, healing, and unforgettable.
          </p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#d7c7b3] hover:bg-[#c6b29d] text-[#2c2a29] font-medium text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Meet us Better
          </motion.a>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/closeup-man-having-back-massage-spa-treatment-wellness-center.webp"
            alt="Massage therapy"
            className="w-[100%] max-w-md mx-auto rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src="/closeup-man-having-back-massage-spa-treatment-wellness-center.webp"
            alt="Therapist"
            className="absolute bottom-[-80px] left-[-20px] w-60 md:w-82 rounded-xl shadow-xl border-4 border-white bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
