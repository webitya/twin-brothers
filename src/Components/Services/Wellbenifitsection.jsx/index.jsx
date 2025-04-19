"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const listItems = [
  "Addictions to tobacco, food, sweets, etc.",
  "Pain in joints, neck, spine, feet, arms, hands, etc.",
  "Nervousness, sleep issues, mood swings, melancholy.",
  "Difficulty achieving pregnancy, naturally or assisted.",
  "Menstrual pain, delays, or hormonal imbalance.",
  "Food intolerances and allergies.",
];

export default function WellnessBenefitsSection() {
  return (
    <section className="bg-[#fdfcf8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a2c27] mb-6 leading-tight">
            There are many problems that can be <br /> treated with acupuncture.
          </h2>
          <p className="text-[#5e4d44] text-base md:text-lg mb-6">
            The <strong>World Health Organization</strong> (WHO) has recognized acupuncture as effective for a range of conditions:
          </p>

          <ul className="space-y-4 text-[#6e5e52] text-base">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="h-3 w-3 mt-1 rounded-full bg-[#c4b7aa] group-hover:bg-[#a08c7b] transition-all duration-300 shadow-sm" />
                <span className="group-hover:text-[#3a2c27] transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-6 py-3 rounded-full bg-[#d7c4b0] text-[#3a2c27] font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/side-view-man-getting-professional-massage.jpg.crdownload" // Replace with your image path
            alt="Acupuncture Wellness"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
