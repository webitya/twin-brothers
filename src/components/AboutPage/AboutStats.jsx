"use client";

export default function AboutStats() {
  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Dedicated to therapeutic excellence since 2009",
    },
    {
      number: "5000+",
      label: "Happy Clients Served",
      description: "Transforming lives through healing massage therapy",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding your wellness expectations",
    },
    {
      number: "6",
      label: "Specialized Services",
      description: "Diverse treatments for every wellness need",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100">
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-teal-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-3">
            Our Impact & Achievements
          </h2>
          <p className="text-teal-700 text-base md:text-lg max-w-2xl mx-auto">
            A reflection of our dedication to healing, wellness, and exceptional client care.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group transition-all"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-serif font-bold text-teal-800 group-hover:text-teal-900 transition-colors duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-teal-900 mt-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-teal-700 text-sm mt-1 leading-relaxed">
                {stat.description}
              </p>

              {/* Soft underline animation */}
              <div className="mt-4 w-10 h-[2px] mx-auto bg-teal-400/40 group-hover:bg-teal-600 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
