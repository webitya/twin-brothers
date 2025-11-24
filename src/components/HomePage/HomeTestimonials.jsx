"use client";

import StarIcon from "@mui/icons-material/Star";

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "IT Professional",
      text: "The deep tissue massage worked wonders! My back pain reduced significantly, and I felt instantly lighter.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Fitness Trainer",
      text: "Their sports massage really helps my muscle recovery. Professional, skilled, and incredibly relaxing.",
      rating: 5,
    },
    {
      name: "Rohan Verma",
      role: "Entrepreneur",
      text: "Twin Brother’s Therapy offers unmatched service. The therapists are truly experts, and the ambience is perfect.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-teal-50/40 to-white overflow-hidden">

      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-28 w-72 h-72 bg-teal-300/20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-300/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-teal-700/80 bg-white/60 rounded-full px-4 py-1 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Real experiences from our valued clients across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 shadow-md 
              hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-out"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-60 
              bg-gradient-to-br from-teal-100 to-white blur-2xl rounded-2xl transition-all duration-500"></div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-teal-600" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">{t.text}</p>

              {/* Author */}
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
