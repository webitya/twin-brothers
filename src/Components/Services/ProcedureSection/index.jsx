"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Needle Insertion",
    desc: "Precise insertion techniques to ensure minimal discomfort and maximum therapeutic effect.",
    border: "border-blue-200",
  },
  {
    id: 2,
    title: "Needle Manipulation",
    desc: "Gentle adjustments to stimulate energy flow and release tension.",
    border: "border-pink-200",
  },
  {
    id: 3,
    title: "Needle Removal",
    desc: "Safe and smooth removal process, leaving you relaxed and rebalanced.",
    border: "border-rose-200",
  },
];

export default function OurProcedureSection() {
  return (
    <section className="bg-[#fdf7f5] py-5 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Left Steps */}
        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div
                className={`w-12 h-12 rounded-full border-4 ${step.border} flex items-center justify-center text-[#4e4b45] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md`}
              >
                {step.id}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#4e4b45] mb-1">{step.title}</h4>
                <p className="text-sm text-[#6d655d] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] mx-auto"
        >
          <Image
            src="/medium-shot-physiotherapist-massaging-boy.webp"
            alt="Procedure Illustration"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-[#a0a09a] tracking-wide uppercase mb-2">
            The Best Practices
          </p>
          <h3 className="text-2xl font-semibold text-[#4e4b45] mb-4">
            Supporting Experts Care
          </h3>
          <p className="text-[#6d655d] text-sm leading-relaxed mb-6">
            Our well-trained professionals ensure a serene and rejuvenating experience through
            thoughtful acupuncture practices that realign body energy.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#fbeeea] to-[#fcdcdc] p-4 rounded-xl shadow-md"
          >
            <p className="text-[#4e4b45] text-sm italic leading-relaxed">
            "A truly transformative experience! I visited this massage center after weeks of back pain and stress, and I can honestly say it was the best decision. The ambiance is calming, the therapists are professional and skilled, and I felt completely at ease throughout the session. After just one deep tissue massage, I felt lighter, more relaxed, and pain-free. I’ve already booked my next appointment—highly recommend to anyone looking to unwind and heal!"
            </p>
            <p className="mt-2 font-medium text-[#4e4b45] text-sm">— Raj Sinha, Ranchi</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
