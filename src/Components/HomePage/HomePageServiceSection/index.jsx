"use client";
// components/HomePageServicesSection.jsx

import React from "react";
import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HealingIcon from "@mui/icons-material/Healing";

const services = [
  {
    title: "Swedish Massage",
    description: "A gentle and relaxing massage to reduce stress and tension.",
    icon: <SpaIcon fontSize="inherit" />,
    color: "from-pink-300 to-red-400",
  },
  {
    title: "Deep Tissue Massage",
    description: "A therapeutic massage aimed at relieving muscle tension and pain.",
    icon: <FitnessCenterIcon fontSize="inherit" />,
    color: "from-indigo-400 to-purple-500",
  },
  {
  title: "Cupping Therapy",
  description: "An ancient form of therapy that helps with pain, inflammation, and blood flow using special cups.",
  icon: <HealingIcon fontSize="inherit" />,
  color: "from-red-300 to-rose-400",
},
  {
    title: "Aromatherapy Massage",
    description: "Using essential oils to promote healing and relaxation.",
    icon: <LocalFloristIcon fontSize="inherit" />,
    color: "from-green-300 to-lime-400",
  },
  {
    title: "Sound Healing Therapy",
    description: "Combining relaxation with ancient cupping techniques.",
    icon: <SelfImprovementIcon fontSize="inherit" />,
    color: "from-yellow-300 to-orange-400",
  },
  {
    title: "Sports Massage Therapy",
    description: "A deep muscle massage to help athletes recover and perform.",
    icon: <DirectionsRunIcon fontSize="inherit" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Baby Massage Therapy",
    description: "Gentle and soothing massages for infants to promote bonding and relaxation.",
    icon: <ChildCareIcon fontSize="inherit" />,
    color: "from-pink-200 to-purple-300",
  },
  {
    title: "Injury Massage",
    description: "Specialized therapy for muscle and joint injuries to speed up recovery.",
    icon: <HealingIcon fontSize="inherit" />,
    color: "from-rose-400 to-red-500",
  },
  {
    title: "Hot Stone Massage",
    description: "Warm stones melt away stress and tension to promote deep muscle relaxation.",
    icon: <SpaIcon fontSize="inherit" />,
    color: "from-amber-300 to-orange-400",
  },
  {
    title: "Thai Massage",
    description: "A dynamic and energizing massage combining stretching and acupressure.",
    icon: <SelfImprovementIcon fontSize="inherit" />,
    color: "from-teal-300 to-cyan-400",
  },
];

const HomePageServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9f9f6] to-[#fdfdfd] py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#3A3A3A] tracking-tight leading-tight">
          Discover Therapeutic Bliss
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the art of healing through our curated massage and therapy treatments tailored for your well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const message = encodeURIComponent(`Hi, I’m interested in ${service.title}`);
          const whatsappLink = `https://wa.me/9299826209?text=${message}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-gray-200/30 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className={`w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-4xl shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{service.description}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-[#76b39d] hover:bg-[#5fa58c] text-white shadow-md transition-all duration-200"
              >
                Enquire Now
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePageServicesSection;
