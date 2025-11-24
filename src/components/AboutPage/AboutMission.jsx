"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpaIcon from "@mui/icons-material/Spa";

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100">

      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 w-64 h-64 bg-teal-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-200/40 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-10">
          Our Mission & Values
        </h2>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-teal-900 mb-3">
            Mission Statement
          </h3>

          <p className="text-base md:text-lg text-teal-800 leading-relaxed">
            We aim to provide meaningful, personalized therapeutic care that supports deep 
            healing and long-term wellness — in a peaceful, comforting, and professional environment.
          </p>
        </div>

        {/* Values Section */}
        <h3 className="text-xl font-serif font-bold text-teal-900 mb-6">
          Our Core Values
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Value 1 */}
          <div className="flex gap-3 items-start">
            <FavoriteIcon className="text-teal-700 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold text-teal-900 mb-1">Compassion</h4>
              <p className="text-teal-700 text-sm leading-relaxed">
                We treat every person with empathy and heartfelt care.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex gap-3 items-start">
            <StarIcon className="text-teal-700 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold text-teal-900 mb-1">Excellence</h4>
              <p className="text-teal-700 text-sm leading-relaxed">
                We maintain high standards in treatment & professionalism.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex gap-3 items-start">
            <HandshakeIcon className="text-teal-700 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold text-teal-900 mb-1">Integrity</h4>
              <p className="text-teal-700 text-sm leading-relaxed">
                Honesty, transparency, and trust guide our practice.
              </p>
            </div>
          </div>

          {/* Value 4 */}
          <div className="flex gap-3 items-start">
            <SpaIcon className="text-teal-700 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold text-teal-900 mb-1">Wellness</h4>
              <p className="text-teal-700 text-sm leading-relaxed">
                We focus on long-term holistic health and healing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
