"use client";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

export default function ServicesHero() {
  return (
    <section className="bg-[#fefdfc] min-h-[85vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#3c2e27] leading-tight">
            Our&nbsp;
            <span className="bg-gradient-to-r from-[#dfcdbd] to-[#bfa792] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#7c6a5f] max-w-xl">
            Experience harmony through our carefully crafted wellness treatments, personalized just for you.
          </p>

          <div className="mt-8">
            <Button
              variant="contained"
              size="large"
              startIcon={<SpaIcon />}
              sx={{
                background: "linear-gradient(to right, #d4c1af, #bfa792)",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "1rem",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #c8b4a2, #a9917c)",
                  transform: "scale(1.05)",
                },
              }}
            >
              View Services
            </Button>
          </div>
        </motion.div>

        {/* Right Illustration or Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-[300px] md:h-[400px] bg-[#f4ebe3] rounded-xl shadow-inner flex items-center justify-center"
        >
          {/* Placeholder for Image or Illustration */}
          <span className="text-[#baa393] text-xl font-medium"><img src="/very-relaxed-young-latin-man-getting-deep-tissue-massage-his-back-wellness-spa-clinic.webp" className="rounded-3xl" /></span>
        </motion.div>
      </div>

      {/* Soft gradient circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#f1e7dd] rounded-full opacity-40 blur-2xl z-0" />
    </section>
  );
}
