"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Swedish Massage",
    desc: "Classic full-body massage promoting relaxation, circulation, and overall balance.",
    icon: "/ALL massage pic/side-view-woman-working-spa.webp",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Intensive pressure therapy to relieve deep muscle tension and chronic stress.",
    icon: "/ALL massage pic/nurse-taking-care-patient.webp",
  },
  {
    title: "Aromatherapy Massage",
    desc: "Blissful massage with essential oils to soothe your senses and elevate mood.",
    icon: "/ALL massage pic/closeup-man-getting-head-massage-relaxing-with-eyes-closed-spa copy.webp",
  },
  {
    title: "Meditation & Cupping Therapy",
    desc: "A calming blend of mindfulness and cupping to heal body, mind, and energy.",
    icon: "/ALL massage pic/physiotherapist-performing-cupping-session-male-patient.webp",
  },
  {
    title: "Sports Massage",
    desc: "Performance-boosting therapy for athletes to prevent and recover from injury.",
    icon: "/ALL massage pic/physiotherapist-examining-back-patient.webp",
  },
  {
    title: "Baby Massage",
    desc: "Gentle and loving touch to nurture healthy growth, sleep, and comfort for babies.",
    icon: "/ALL massage pic/mother-holding-newborn-baby-feet.webp",
  },
  {
    title: "Injury Massage",
    desc: "Therapeutic care tailored for injury recovery and muscular rehabilitation.",
    icon: "/ALL massage pic/young-physiotherapy-professional-applying-kt-tape-athlete-s-knee-hospital.webp",
  },
  {
    title: "Hot Stone Massage",
    desc: "Smooth, heated stones melt tension and deeply relax body and soul.",
    icon: "/ALL massage pic/young-woman-massaging-her-client-with-stones.webp",
  },
  {
    title: "Thai Massage",
    desc: "Ancient healing art combining yoga-like stretches and energy alignment.",
    icon: "/ALL massage pic/high-angle-man-getting-massage.webp",
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

export default function LuxuryServicesSection() {
  return (
    <section className="bg-[#fdfaf5] py-20 px-6 md:px-12">
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
                <Image
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
}
