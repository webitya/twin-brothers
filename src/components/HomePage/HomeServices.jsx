"use client";

import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function HomeServices() {
  const services = [
    {
      id: 1,
      title: "Sports Massage Therapy",
      description:
        "Performance-focused treatment that enhances mobility and speeds up muscle recovery.",
      img: "/services/sports-massage.jpg",
    },
    {
      id: 2,
      title: "Deep Tissue Massage Therapy",
      description:
        "Intense technique targeting deeper layers of muscle for chronic pain relief.",
      img: "/services/deeptissue.jpg",
    },
    {
      id: 3,
      title: "Swedish Massage Therapy",
      description:
        "Gentle, relaxing strokes that improve circulation and calm the body.",
      img: "/services/swedish.jpeg",
    },
    {
      id: 4,
      title: "Wet Cupping / Hijama Therapy",
      description:
        "Detoxifying cupping method that removes stagnant blood and promotes healing.",
      img: "/services/wet-cupping.jpg",
    },
    {
      id: 5,
      title: "Fire Cupping Therapy",
      description:
        "Traditional flame-based cupping to boost circulation and release tension.",
      img: "/services/fire-cupping.jpg",
    },
    {
      id: 6,
      title: "Dry Cupping Therapy",
      description:
        "Vacuum-based cupping therapy that promotes healing and reduces muscle stiffness.",
      img: "/services/dry-cupping.jpg",
    },
    {
      id: 7,
      title: "Injury Recovery Session",
      description:
        "Targeted therapy plan to restore strength, mobility, and healing.",
      img: "/services/injury.webp",
    },
    {
      id: 8,
      title: "Sound Healing Therapy Session",
      description:
        "Vibrational healing using frequencies to deeply relax the mind and body.",
      img: "/services/sound-healing.jpg",
    },
    {
      id: 9,
      title: "Ayurveda Therapy",
      description:
        "Traditional Ayurvedic massage designed to balance energies and detoxify the body.",
      img: "/services/ayurveda.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-900">
            Our Premium Therapies
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Explore our holistic and advanced therapy services designed to
            restore balance and rejuvenate your body.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const whatsappMsg = encodeURIComponent(
              `Hello! I'm interested in booking: ${service.title}. Please share details.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md border border-teal-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-48 w-full bg-slate-100 relative">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 flex-grow">
                    {service.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-5 flex gap-3">
                    <Link
                      href="/leads"
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2 rounded-lg text-center transition-all"
                    >
                      Book Now
                    </Link>

                    <a
                      href={`https://wa.me/918804787966?text=${whatsappMsg}`}
                      target="_blank"
                      className="flex items-center justify-center w-12 h-10 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
