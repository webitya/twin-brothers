"use client";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

export default function ServicesHero() {
  return (
    <section className="relative bg-[#fdfaf5] overflow-hidden min-h-[90vh] flex items-center justify-center px-6 py-24">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#3a2c27] leading-tight"
        >
          Discover Our{" "}
          <span className="bg-gradient-to-r from-[#cbb89d] to-[#a48d71] bg-clip-text text-transparent">
            Premium Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-[#6e5e52] max-w-2xl mx-auto"
        >
          Tailored solutions to rejuvenate your body, mind, and soul. Crafted with care & delivered with luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<SpaIcon />}
            sx={{
              background: "linear-gradient(to right, #bca287, #9c7f66)",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "1rem",
              boxShadow: 3,
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.05)",
                background: "linear-gradient(to right, #bca287, #9c7f66)",
              },
            }}
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Soft background circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#e8dccf] rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#d7c4b0] rounded-full opacity-30 blur-2xl z-0" />
    </section>
  );
}
