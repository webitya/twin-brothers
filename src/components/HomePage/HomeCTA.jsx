import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 to-white py-14 md:py-20">

      {/* Soft Blurred Shapes */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-teal-200/40 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teal-300/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center space-y-6">

        <h2 className="text-3xl md:text-5xl font-serif font-bold text-teal-900 leading-tight">
          Ready to Begin Your Wellness Journey?
        </h2>

        <p className="text-base md:text-lg text-teal-800/90 leading-relaxed max-w-2xl mx-auto">
          Book your massage session today and take the first step toward a calmer mind, relaxed body, 
          and rejuvenated energy.
        </p>

        <Link
          href="/leads"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full 
          text-sm md:text-base font-semibold shadow-md hover:bg-teal-500 transition-all"
        >
          Book Your Appointment Now
        </Link>

      </div>
    </section>
  );
}
