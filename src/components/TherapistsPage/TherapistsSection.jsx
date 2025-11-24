"use client";

import PersonIcon from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import Link from "next/link";

export default function TherapistsSection() {
  const therapists = [
    {
      name: "Kush Kumar",
      specialty: "Deep Tissue • Sports Therapy • Rehabilitation",
      experience: "12+ Years",
      bio: "With over 12 years of hands-on therapeutic experience, Kush specializes in deep tissue therapy, sports recovery, pain relief, and posture correction.",
      image: "/male-massage-therapist-professional.jpg",
      icon: <PersonIcon className="text-teal-700 text-4xl" />,
    },
    {
      name: "Aaradhya Verma",
      specialty: "Relaxation • Aromatherapy • Swedish Therapy",
      experience: "7+ Years",
      bio: "A certified female therapist known for her calming touch and expertise in relaxation therapies, aromatherapy treatments, and Swedish massage.",
      image: "/professional-female-massage-therapist.png",
      icon: <SpaIcon className="text-teal-700 text-4xl" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-teal-50/40 to-white">
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-teal-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-teal-900 mb-4">
          Our Therapists
        </h1>

        <p className="text-lg md:text-xl text-teal-700 max-w-3xl mb-16">
          Meet our certified therapists who bring years of experience, skill, and passion for healing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {therapists.map((t, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start group">
              
              {/* IMAGE */}
              <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1">
                {t.icon}
                <h3 className="font-serif text-2xl font-bold text-teal-900 mt-2">
                  {t.name}
                </h3>

                <p className="text-teal-600 font-medium text-sm mt-1">
                  {t.specialty}
                </p>

                <p className="text-teal-700 font-semibold mt-1">
                  {t.experience} Experience
                </p>

                <p className="text-teal-800 text-sm leading-relaxed mt-4">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-teal-600/10 rounded-2xl p-10 shadow-sm">
          <h2 className="font-serif text-3xl text-teal-900 mb-3">
            Book Your Preferred Therapist
          </h2>

          <p className="text-teal-700 text-lg mb-6">
            Select your preferred therapist during booking. Availability may vary.
          </p>

          <Link
            href="/leads"
            className="inline-block bg-teal-700 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:bg-teal-800 transition-all"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}
