"use client";

import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 text-cream">

      {/* Background soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 w-80 h-80 bg-teal-400/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/25 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-5 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-white font-serif font-bold mb-6">
          Ready to Experience Relief?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-teal-100 leading-relaxed max-w-2xl mx-auto mb-10">
          Choose the perfect therapy for your wellness needs and book your session with our certified therapists.
          Your healing journey starts here.
        </p>

        {/* CTA Button */}
        <Link
          href="/leads"
          className="inline-block bg-teal-200 text-teal-900 px-10 py-4 rounded-full font-semibold 
          shadow-md hover:shadow-lg hover:bg-white transition-all duration-300"
        >
          Schedule Your Massage Now
        </Link>

        {/* Secondary message */}
        <p className="text-teal-100 text-sm mt-6">
          Need guidance?{" "}
          <Link href="/contact" className="underline hover:text-white">
            Contact us
          </Link>{" "}
          for personalized recommendations.
        </p>

      </div>
    </section>
  );
}
