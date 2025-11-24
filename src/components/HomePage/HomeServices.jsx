"use client";

import Link from "next/link";
import SpaIcon from "@mui/icons-material/Spa";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export default function HomeServices() {
  const services = [
    {
      id: 1,
      title: "Swedish Massage",
      description:
        "Gentle, flowing massage that improves circulation, melts stress and promotes deep relaxation.",
      Icon: SpaIcon,
    },
    {
      id: 2,
      title: "Deep Tissue Massage",
      description:
        "Focused pressure to release chronic muscle tension, knots and support injury recovery.",
      Icon: FitnessCenterIcon,
    },
    {
      id: 3,
      title: "Hot Stone Therapy",
      description:
        "Warm basalt stones combined with soothing strokes to ease stiffness and calm the nervous system.",
      Icon: LocalFireDepartmentIcon,
    },
    {
      id: 4,
      title: "Sports Massage",
      description:
        "Performance-oriented techniques designed for athletes to boost mobility and recovery.",
      Icon: SportsHandballIcon,
    },
    {
      id: 5,
      title: "Aromatherapy Massage",
      description:
        "Therapeutic essential oils blended with massage for a holistic mind–body wellness experience.",
      Icon: EmojiNatureIcon,
    },
    {
      id: 6,
      title: "Reflexology",
      description:
        "Targeted pressure on reflex points to support internal balance and overall well-being.",
      Icon: SelfImprovementIcon,
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-teal-50 via-teal-100/70 to-slate-50 overflow-hidden">
      {/* Soft blurred background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-teal-300/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-teal-700/80 bg-white/60 rounded-full px-4 py-1 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Our Therapies
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            Tailored Massage Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Experience a curated range of therapies at{" "}
            <span className="font-semibold">Twin Brother&apos;s Therapy</span>,
            designed to restore balance, release tension and rejuvenate your body and mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="group relative h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 shadow-sm hover:shadow-xl hover:border-teal-300/80 transition duration-300 ease-out hover:-translate-y-1"
            >
              {/* Subtle gradient highlight on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-50 via-emerald-50 to-white" />

              <div className="relative p-6 md:p-7 flex flex-col h-full">
                {/* Icon badge */}
                <div className="mb-5 flex items-center justify-start">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-teal-400/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white p-3 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {/* Tag + Link */}
                <div className="flex items-center justify-between mt-2">
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-teal-700">
                    Personalized Care
                  </span>

                  <Link
                    href="/services"
                    className="text-sm font-semibold text-teal-700 group-hover:text-teal-900 inline-flex items-center gap-1 transition-colors"
                  >
                    Learn More
                    <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm md:text-base text-slate-700 max-w-xl">
            Not sure which therapy is right for you? Our certified therapists will help you choose
            the perfect treatment based on your lifestyle, stress levels and body needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/leads"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-teal-500/70 px-6 py-3 text-sm md:text-base font-semibold text-teal-800 bg-white/60 hover:bg-teal-50 transition-all"
            >
              Talk to a Therapist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
