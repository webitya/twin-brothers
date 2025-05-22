"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { forwardRef } from 'react';

const services = [
  {
    title: "Swedish Massage Therapy",
    desc: "Classic full-body massage promoting relaxation, circulation, and overall balance.",
    icon: "/ALL massage pic/side-view-woman-working-spa.webp",
  },
  {
    title: "Deep Tissue Massage Therapy",
    desc: "Intensive pressure therapy to relieve deep muscle tension and chronic stress.",
    icon: "/ALL massage pic/nurse-taking-care-patient.webp",
  },
  {
    title: "Cupping Therapy",
    desc: "An ancient healing technique using suction cups to improve blood flow, reduce inflammation, and relieve muscle tension.",
    icon: "/ALL massage pic/physiotherapist-performing-cupping-session-male-patient.webp",
  },
  {
    title: "Sound Healing Therapy",
    desc: "A therapeutic practice combining relaxing sounds and vibrations to promote mental and physical healing.",
    icon: "https://res.cloudinary.com/dxqthnbx7/image/upload/v1747881428/sound_healing_therapy_ttmak9.webp", // replace with your actual icon path
  },
  {
    title: "Sports Massage Therapy",
    desc: "Performance-boosting therapy for athletes to prevent and recover from injury.",
    icon: "/ALL massage pic/physiotherapist-examining-back-patient.webp",
  },
  {
    title: "New Born Baby Massage Therapy",
    desc: "Gentle and loving touch to nurture healthy growth, sleep, and comfort for babies.",
    icon: "/ALL massage pic/mother-holding-newborn-baby-feet.webp",
  },
  {
    title: "Injury Recovery Session",
    desc: "Therapeutic care tailored for injury recovery and muscular rehabilitation.",
    icon: "/ALL massage pic/young-physiotherapy-professional-applying-kt-tape-athlete-s-knee-hospital.webp",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

 const LuxuryServicesSection = forwardRef((props, ref) => {
  return (
    <section className="bg-[#fdfaf5] py-0 px-8 md:px-12"  ref={ref} >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#3a2c27] mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-[#6e5e52] text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Experience a world of tranquility and rejuvenation through our luxurious therapies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.03] group"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="opacity-70 group-hover:opacity-100 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#8c6f56] mb-3">
                {service.title}
              </h3>
              <p className="text-[#5e4d44] text-base leading-relaxed">
                {service.desc}
              </p>
              <div className="h-1 w-10 bg-[#c9b7a1] mt-5 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
})
export default LuxuryServicesSection