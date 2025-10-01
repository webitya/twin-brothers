"use client"
import { motion } from "framer-motion"
import TouchAppIcon from "@mui/icons-material/TouchApp"

export default function Hero() {
  return (
    <section className="bg-teal-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-pretty">Relax. Restore. Rebalance.</h1>
          <p className="mt-4 text-teal-100">Premium massage and wellness therapies tailored to your body and mind.</p>
          <div className="mt-6 flex gap-3">
            <a href="/services" className="px-5 py-2.5 bg-white text-teal-700 rounded font-semibold hover:bg-teal-50">
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-5 py-2.5 border border-white/60 rounded hover:bg-white/10 flex items-center gap-2"
            >
              <TouchAppIcon className="text-white" />
              Book Now
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/massage-therapy-relaxation.png"
            alt="Relaxing massage therapy"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
