"use client"
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
    color: "from-pink-400 to-red-500",
  },
  {
    title: "Deep Tissue Massage",
    description: "A therapeutic massage aimed at relieving muscle tension and pain.",
    icon: <FitnessCenterIcon fontSize="inherit" />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Aromatherapy Massage",
    description: "Using essential oils to promote healing and relaxation.",
    icon: <LocalFloristIcon fontSize="inherit" />,
    color: "from-green-400 to-lime-500",
  },
  {
    title: "Meditation & Cupping Therapy",
    description: "Combining relaxation with ancient cupping techniques.",
    icon: <SelfImprovementIcon fontSize="inherit" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Sports Massage",
    description: "A deep muscle massage to help athletes recover and perform.",
    icon: <DirectionsRunIcon fontSize="inherit" />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Baby Massage",
    description: "Gentle and soothing massages for infants to promote bonding and relaxation.",
    icon: <ChildCareIcon fontSize="inherit" />,
    color: "from-pink-300 to-purple-400",
  },
  {
    title: "Injury Massage",
    description: "Specialized therapy for muscle and joint injuries to speed up recovery.",
    icon: <HealingIcon fontSize="inherit" />,
    color: "from-rose-500 to-red-600",
  },
  {
    title: "Hot Stone Massage",
    description: "Warm stones melt away stress and tension to promote deep muscle relaxation.",
    icon: <SpaIcon fontSize="inherit" />,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Thai Massage",
    description: "A dynamic and energizing massage combining stretching and acupressure.",
    icon: <SelfImprovementIcon fontSize="inherit" />,
    color: "from-teal-400 to-cyan-500",
  },
];

const HomePageServicesSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-white py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          Elevate Your Wellness
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Discover a blend of tradition and innovation with our unique therapeutic experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const message = encodeURIComponent(`I am interested in ${service.title}`);
          const whatsappLink = `https://wa.me/9299826209?text=${message}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-white/20 relative group hover:scale-[1.03] transition-transform duration-300"
            >
              <div
                className={`w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-5xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-semibold rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-200 shadow-md"
              >
                Enquiry Now
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageServicesSection;
