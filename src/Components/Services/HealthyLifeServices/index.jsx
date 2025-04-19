"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const tabs = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Aromatherapy Massage",
  "Meditation & Cupping Therapy",
  "Sports Massage",
  "Baby Massage",
  "Injury Massage",
  "Hot Stone Massage",
  "Thai Massage",
];

const services = {
  "Swedish Massage": [
    {
      title: "Relaxation Therapy",
      desc: "A calming full-body experience designed to reduce stress and enhance circulation.",
      image: "/images/relaxation.png",
    },
    {
      title: "Gentle Flow",
      desc: "Light strokes to ease your mind and body into total tranquility.",
      image: "/images/gentle.png",
    },
    {
      title: "Classic Swedish",
      desc: "Time-tested technique focused on rejuvenation and muscle balance.",
      image: "/images/classic.png",
    },
    {
      title: "Head & Shoulder Relief",
      desc: "Release tension from key stress zones through focused Swedish pressure.",
      image: "/images/headshoulder.png",
    },
    {
      title: "Back Soother",
      desc: "Deep relaxation along the spine to improve posture and flexibility.",
      image: "/images/back.png",
    },
    {
      title: "Couple’s Serenity",
      desc: "Enjoy Swedish massage side-by-side with your partner in harmony.",
      image: "/images/couple.png",
    },
  ],
  "Deep Tissue Massage": [
    {
      title: "Deep Muscle Relief",
      desc: "Targets deeper muscle layers to relieve chronic aches and knots.",
      image: "/images/deep.png",
    },
    {
      title: "Myofascial Release",
      desc: "Breaks tension in connective tissue to restore movement.",
      image: "/images/myofascial.png",
    },
    {
      title: "Trigger Point Therapy",
      desc: "Pinpoint pressure to deactivate muscle pain centers.",
      image: "/images/trigger.png",
    },
    {
      title: "Shoulder & Neck Release",
      desc: "Reduces stiffness and tension buildup from desk work.",
      image: "/images/shoulder.png",
    },
    {
      title: "Full Back Intense",
      desc: "Powerful strokes for chronic lower and upper back issues.",
      image: "/images/backintense.png",
    },
    {
      title: "Recovery Boost",
      desc: "Ideal post-workout recovery focused on muscle flushing.",
      image: "/images/recovery.png",
    },
  ],
  "Aromatherapy Massage": [
    {
      title: "Essential Oil Calm",
      desc: "Aromatherapy oils combined with soft massage for emotional balance.",
      image: "/images/aroma.png",
    },
    {
      title: "Lavender Bliss",
      desc: "Aromatic lavender enhances tranquility and sleep quality.",
      image: "/images/lavender.png",
    },
    {
      title: "Citrus Energy",
      desc: "Invigorating citrus oils boost mood and refresh your senses.",
      image: "/images/citrus.png",
    },
    {
      title: "Herbal Renewal",
      desc: "Earthy herbs detoxify and ground your energy.",
      image: "/images/herbal.png",
    },
    {
      title: "Eucalyptus Revive",
      desc: "Opens airways and stimulates deep breathing.",
      image: "/images/eucalyptus.png",
    },
    {
      title: "Mood Uplifter",
      desc: "Tailored oil blend to ease emotional stress.",
      image: "/images/uplift.png",
    },
  ],
  "Meditation & Cupping Therapy": [
    {
      title: "Inner Healing",
      desc: "Traditional cupping with guided meditation to detox and realign energy.",
      image: "/images/cupping.png",
    },
    {
      title: "Balance & Breathe",
      desc: "Center yourself through meditative breathwork and suction therapy.",
      image: "/images/balance.png",
    },
    {
      title: "Chi Flow Detox",
      desc: "Clear stagnation and reawaken your inner energy.",
      image: "/images/chi.png",
    },
    {
      title: "Ancient Relief",
      desc: "Inspired by Eastern medicine to restore body harmony.",
      image: "/images/eastern.png",
    },
    {
      title: "Zen Glow",
      desc: "Feel calm and radiant through mindfulness and cupping.",
      image: "/images/zenglow.png",
    },
    {
      title: "Candlelight Calm",
      desc: "Meditation massage under soft glow with oil & suction therapy.",
      image: "/images/candle.png",
    },
  ],
  "Sports Massage": [
    {
      title: "Athletic Boost",
      desc: "Enhances flexibility and recovery, ideal for pre/post workouts.",
      image: "/images/sports.png",
    },
    {
      title: "Pre-Event Prep",
      desc: "Activate muscles before training or performance.",
      image: "/images/prep.png",
    },
    {
      title: "Post-Workout Flush",
      desc: "Reduce soreness and lactic acid buildup after intense sessions.",
      image: "/images/flush.png",
    },
    {
      title: "Injury Prevention",
      desc: "Loosens tight areas to avoid sports-related strains.",
      image: "/images/prevent.png",
    },
    {
      title: "Joint Mobilization",
      desc: "Improves movement through deep tissue and stretch work.",
      image: "/images/joint.png",
    },
    {
      title: "Core Recovery",
      desc: "Targets core and back to improve stability and posture.",
      image: "/images/core.png",
    },
  ],
  "Baby Massage": [
    {
      title: "Gentle Baby Touch",
      desc: "Soothing strokes that calm babies and support better sleep.",
      image: "/images/baby.png",
    },
    {
      title: "Tummy Tamer",
      desc: "Relieves gas and colic with focused abdominal strokes.",
      image: "/images/tummy.png",
    },
    {
      title: "Sleepytime Routine",
      desc: "Calms baby before bed for peaceful nights.",
      image: "/images/sleep.png",
    },
    {
      title: "Growth Support",
      desc: "Encourages muscle tone and flexibility as baby develops.",
      image: "/images/growth.png",
    },
    {
      title: "Happy Feet",
      desc: "Light reflexology to boost circulation and mood.",
      image: "/images/feet.png",
    },
    {
      title: "Bonding Bliss",
      desc: "A special massage for parent-infant connection.",
      image: "/images/bonding.png",
    },
  ],
  "Injury Massage": [
    {
      title: "Rehabilitation Care",
      desc: "Massage therapy designed to support injury recovery and mobility.",
      image: "/images/injury.png",
    },
    {
      title: "Post-Surgical Support",
      desc: "Gentle work to ease recovery and reduce scarring.",
      image: "/images/surgical.png",
    },
    {
      title: "Mobility Recovery",
      desc: "Restores range of motion in healing joints and limbs.",
      image: "/images/mobility.png",
    },
    {
      title: "Swelling Reduction",
      desc: "Manual lymphatic techniques to reduce inflammation.",
      image: "/images/swelling.png",
    },
    {
      title: "Pain Relief Focus",
      desc: "Targets chronic or acute injury pain through focused pressure.",
      image: "/images/painrelief.png",
    },
    {
      title: "Scar Softening",
      desc: "Smooths and loosens tough scar tissue after injury.",
      image: "/images/scar.png",
    },
  ],
  "Hot Stone Massage": [
    {
      title: "Warm Stone Therapy",
      desc: "Smooth heated stones melt away tension and improve circulation.",
      image: "/images/hotstone.png",
    },
    {
      title: "Deep Warmth Bliss",
      desc: "Intense heat penetrates muscles to relieve chronic tension.",
      image: "/images/warmth.png",
    },
    {
      title: "Volcanic Detox",
      desc: "Naturally heated stones help eliminate toxins and stress.",
      image: "/images/volcanic.png",
    },
    {
      title: "Serenity Stones",
      desc: "Soothing strokes paired with gentle heated stone placement.",
      image: "/images/serenity.png",
    },
    {
      title: "Chakra Balance",
      desc: "Stone placement aligned with chakras for energy healing.",
      image: "/images/chakra.png",
    },
    {
      title: "Back Melt",
      desc: "Stone pressure glides across the spine for tension relief.",
      image: "/images/backmelt.png",
    },
  ],
  "Thai Massage": [
    {
      title: "Stretch & Restore",
      desc: "Ancient Thai techniques combining acupressure and stretching.",
      image: "/images/thai.png",
    },
    {
      title: "Passive Yoga",
      desc: "Assisted poses promote flexibility and breath awareness.",
      image: "/images/yoga.png",
    },
    {
      title: "Energy Line Focus",
      desc: "Pressure applied along Thai sen lines to restore vitality.",
      image: "/images/energy.png",
    },
    {
      title: "Thai Foot Ritual",
      desc: "Traditional reflexology to revive tired feet and legs.",
      image: "/images/foot.png",
    },
    {
      title: "Back Bend Therapy",
      desc: "Deep spinal stretches for posture and energy flow.",
      image: "/images/backbend.png",
    },
    {
      title: "Traditional Thai Combo",
      desc: "Classic full-body Thai with acupressure and movement.",
      image: "/images/classicthai.png",
    },
  ],
};

export default function HealthyLifeServices() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const servicesRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Scroll into view after a short delay
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section className="bg-[#fcfbf7] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold text-[#4e4b45] mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Healthy Life
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleTabClick(tab)}
              
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#4e4b45] text-white shadow-md"
                  : "border-[#c2bab2] text-[#4e4b45] hover:bg-[#ece7e0]"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
        
        ref={servicesRef}>
      
          {services[activeTab]?.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-full object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold text-[#4e4b45] mb-2">{service.title}</h3>
              <p className="text-sm text-[#6d655d]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
