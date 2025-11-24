"use client";

import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

export default function HomeWhyChooseUs() {
  const reasons = [
    {
      title: "Expert Therapists",
      description:
        "Certified professionals with years of experience in delivering safe, therapeutic massage treatments.",
      Icon: EmojiPeopleIcon,
    },
    {
      title: "Peaceful Ambience",
      description:
        "A calm and serene environment crafted to help you relax, breathe, and rejuvenate your mind & body.",
      Icon: SpaIcon,
    },
    {
      title: "Personalized Care",
      description:
        "Every session is tailored to your body needs, ensuring the most effective and relaxing experience.",
      Icon: FavoriteIcon,
    },
    {
      title: "Premium Products",
      description:
        "We use only the finest, natural, skin-safe oils and top-grade spa products for maximum comfort.",
      Icon: LocalFloristIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-teal-50 via-white to-teal-50 overflow-hidden">

      {/* Background Blur Layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-teal-300/30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-0 h-80 w-80 bg-emerald-300/25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 bg-cyan-300/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-teal-700/80 bg-white/60 rounded-full px-4 py-1 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Trusted by Many
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            Why Choose Us
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            A premium wellness experience that blends skill, ambiance, and personalized healing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ title, description, Icon }, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-teal-100
              hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
            >
              {/* Soft glow on hover (behind card) */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-70 
              bg-gradient-to-br from-teal-100 to-white blur-2xl rounded-2xl transition-all duration-500"></div>

              {/* Icon Bubble */}
              <div className="w-16 h-16 mb-5 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center
                shadow-inner group-hover:bg-teal-200 transition-all animate-floating-icon">
                <Icon className="text-teal-700 text-4xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 text-center">{title}</h3>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pure CSS Animation */}
      <style>
        {`
          @keyframes floatIcon {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
          .animate-floating-icon {
            animation: floatIcon 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
