import { FaSpa, FaHeart, FaFire, FaWater } from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: FaSpa,
      title: "Relaxation Massage",
      description:
        "Gentle, soothing massage to melt away stress and tension. Perfect for those seeking peace and calm.",
      price: "$60/hr",
    },
    {
      icon: FaFire,
      title: "Deep Tissue Massage",
      description: "Targeted massage for muscle tension and chronic pain. Ideal for athletes and active individuals.",
      price: "$75/hr",
    },
    {
      icon: FaWater,
      title: "Hot Stone Massage",
      description: "Warm stones combined with massage to enhance circulation and deep relaxation.",
      price: "$85/hr",
    },
    {
      icon: FaHeart,
      title: "Aromatherapy Massage",
      description: "Therapeutic massage infused with essential oils for holistic wellness and healing.",
      price: "$70/hr",
    },
  ]

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto prose-text">
            We offer a variety of therapeutic massage services tailored to your specific needs and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-warm-beige"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-accent-gold" size={40} />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal text-sm prose-text mb-4">{service.description}</p>
                <p className="font-bold text-accent-gold text-lg">{service.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
