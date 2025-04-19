"use client";
import { motion } from "framer-motion";
import { FaEye, FaHands, FaSpa } from "react-icons/fa";
import { GiTeapotLeaves } from "react-icons/gi";

const procedures = [
  {
    icon: <FaEye size={32} />,
    step: "Step 01",
    title: "Analysis The Health Issues",
    description:
      "Your acupuncture practitioner will tell you the general site of the planned treatment.",
    borderColor: "border-pink-300",
  },
  {
    icon: <GiTeapotLeaves size={32} />,
    step: "Step 02",
    title: "Needle Insertion",
    description:
      "Needles are inserted to various depths at strategic points on your body.",
    borderColor: "border-purple-300",
  },
  {
    icon: <FaHands size={32} />,
    step: "Step 03",
    title: "Needle Manipulation",
    description:
      "Your practitioner may gently move or twirl the needles after placement.",
    borderColor: "border-blue-300",
  },
  {
    icon: <FaSpa size={32} />,
    step: "Step 04",
    title: "Needle Removal",
    description:
      "The needles remain in place for 10 to 20 minutes while you lie still and relax.",
    borderColor: "border-gray-300",
  },
];

export default function OurProcedures() {
  return (
    <section className="bg-[#f3f0ea] py-24 px-6 text-[#3a2c27]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p
          className="text-lg font-serif italic text-[#9e7e68] mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          See How We Work
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Procedures
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {procedures.map((proc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div
              className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full border-4 ${proc.borderColor} mb-6 transition-all duration-300 hover:shadow-md hover:border-[#b49a7f]`}
            >
              <span className="text-[#3a2c27] transition-colors duration-300 group-hover:text-[#b49a7f]">
                {proc.icon}
              </span>
            </div>
            <h4 className="font-bold text-lg mb-1 tracking-wide text-[#3a2c27]">
              {proc.step}
            </h4>
            <p className="text-[#5f4c42] font-medium mb-2">{proc.title}</p>
            <p className="text-sm text-[#76685f]">{proc.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

