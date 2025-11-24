"use client";

import SpaIcon from "@mui/icons-material/Spa";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import HealingIcon from "@mui/icons-material/Healing";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildCareIcon from "@mui/icons-material/ChildCare";

export default function ServiceCards() {
  const serviceDetails = [
    {
      id: "swedish",
      title: "Swedish Massage",
      duration: "60 minutes",
      description:
        "A soothing, relaxing massage using long, flowing strokes designed to improve circulation and melt away stress.",
      benefits: [
        "Relieves stress and anxiety",
        "Improves overall circulation",
        "Promotes relaxation and calmness",
        "Enhances muscle recovery",
      ],
      icon: <SpaIcon className="text-teal-700 text-4xl" />,
    },
    {
      id: "deep-tissue",
      title: "Deep Tissue Therapy",
      duration: "60 minutes",
      description:
        "Advanced massage focusing on deeper muscle layers to relieve chronic pain, tightness, and long-term tension.",
      benefits: [
        "Releases muscle knots",
        "Eases chronic pain",
        "Improves posture and flexibility",
        "Supports injury recovery",
      ],
      icon: <FitnessCenterIcon className="text-teal-700 text-4xl" />,
    },
    {
      id: "sports-massage",
      title: "Sports Massage Therapy",
      duration: "60 minutes",
      description:
        "A specialized treatment for athletes and active individuals to prevent injuries and enhance physical performance.",
      benefits: [
        "Boosts flexibility",
        "Reduces muscle fatigue",
        "Improves performance",
        "Accelerates recovery",
      ],
      icon: <SportsMartialArtsIcon className="text-teal-700 text-4xl" />,
    },
    {
      id: "cupping",
      title: "Cupping Therapy",
      duration: "45 minutes",
      description:
        "Ancient healing therapy using suction cups to improve blood flow, release tight muscles, and detoxify the body.",
      benefits: [
        "Releases body toxins",
        "Improves blood circulation",
        "Reduces inflammation",
        "Eases muscle stiffness",
      ],
      icon: <HealingIcon className="text-teal-700 text-4xl" />,
    },
    {
      id: "sound-healing",
      title: "Sound Healing Therapy",
      duration: "45 minutes",
      description:
        "Healing vibrations through Tibetan bowls and sound waves to reduce stress, balance energy, and restore calm.",
      benefits: [
        "Balances mind & body",
        "Relieves anxiety",
        "Improves sleep",
        "Promotes deep relaxation",
      ],
      icon: <MusicNoteIcon className="text-teal-700 text-4xl" />,
    },
    {
      id: "baby-massage",
      title: "Newborn Baby Massage",
      duration: "30 minutes",
      description:
        "Gentle, nurturing massage for infants to support healthy growth, digestion, and emotional bonding.",
      benefits: [
        "Supports baby growth",
        "Improves sleep cycles",
        "Strengthens immunity",
        "Enhances parent-baby bonding",
      ],
      icon: <ChildCareIcon className="text-teal-700 text-4xl" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-teal-50 to-white relative overflow-hidden">

      {/* background subtle blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-teal-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 text-center mb-14">
          Our Therapeutic Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceDetails.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group bg-white border border-teal-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <div className="p-4 rounded-full bg-teal-100 group-hover:bg-teal-200 transition-all">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-teal-900 text-center mb-2">
                {service.title}
              </h3>

              {/* Duration */}
              <p className="text-sm text-teal-700 text-center mb-4">{service.duration}</p>

              {/* Description */}
              <p className="text-teal-800 text-sm mb-6 leading-relaxed text-center">
                {service.description}
              </p>

              {/* Benefits */}
              <h4 className="font-semibold text-sm text-teal-900 mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-teal-700 text-sm flex gap-3">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-1.5"></span>
                    {benefit}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
