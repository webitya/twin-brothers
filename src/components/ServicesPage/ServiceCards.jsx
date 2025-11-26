"use client";

import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Sports Massage Therapy",
      description:
        "Performance-focused treatment that enhances mobility, boosts muscle recovery and prevents injuries.",
      image: "/services/sports-massage.jpg",
    },
    {
      id: 2,
      title: "Deep Tissue Massage Therapy",
      description:
        "Intense pressure technique targeting deeper muscle layers to relieve chronic tension and muscle pain.",
      image: "/services/deeptissue.jpg",
    },
    {
      id: 3,
      title: "Swedish Massage Therapy",
      description:
        "Gentle and relaxing massage that improves circulation, reduces stress and calms the body.",
      image: "/services/swedish.jpeg",
    },
    {
      id: 4,
      title: "Wet Cupping / Hijama Therapy",
      description:
        "Detoxifying therapy that removes stagnant blood, reduces inflammation and boosts immunity.",
      image: "/services/wet-cupping.jpg",
    },
    {
      id: 5,
      title: "Fire Cupping Therapy",
      description:
        "Traditional therapy using heated cups to ease muscle stiffness, improve flow and release deep tension.",
      image: "/services/fire-cupping.jpg",
    },
    {
      id: 6,
      title: "Dry Cupping Therapy",
      description:
        "Vacuum-based cup therapy that promotes healing, boosts blood flow and reduces pain naturally.",
      image: "/services/dry-cupping.jpg",
    },
    {
      id: 7,
      title: "Injury Recovery Session",
      description:
        "Targeted therapy for sprains, muscle tears, sports injuries and post-training recovery.",
      image: "/services/injury.webp",
    },
    {
      id: 8,
      title: "Sound Healing Therapy Session",
      description:
        "Healing sound vibrations that reduce stress, balance the mind and promote emotional wellness.",
      image: "/services/sound-healing.jpg",
    },
    {
      id: 9,
      title: "Ayurveda Therapy",
      description:
        "Authentic ayurvedic treatment tailored to balance doshas, heal the body and restore natural harmony.",
      image: "/services/ayurveda.jpg",
    },
  ];

  const whatsappNumber = "8804787966";
  const callNumber = "8804787966";

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-teal-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-14">
          Our Therapeutic Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-2 pt-2">

                  {/* Book Now */}
                  <Link
                    href="/leads"
                    className="flex-1 text-center px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-all"
                  >
                    Book Now
                  </Link>

                  {/* Call Now */}
                  <a
                    href={`tel:${callNumber}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-all"
                  >
                    <CallIcon className="text-white" /> Call
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book *${encodeURIComponent(
                      service.title
                    )}* at Twin Brother's Therapy.`}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-green-600 text-green-700 rounded-lg text-sm font-medium hover:bg-green-50 transition-all"
                  >
                    <WhatsAppIcon className="text-green-600" />
                    Chat
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
