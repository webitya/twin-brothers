import Link from "next/link"

export default function HomeServices() {
  const services = [
    {
      id: 1,
      title: "Swedish Massage",
      description: "Gentle, flowing massage to improve circulation and promote relaxation",
      icon: "🌸",
    },
    {
      id: 2,
      title: "Deep Tissue Massage",
      description: "Targeted pressure for muscle tension relief and injury recovery",
      icon: "💪",
    },
    {
      id: 3,
      title: "Hot Stone Therapy",
      description: "Warmth and smooth stones to ease tension and soothe muscles",
      icon: "🪨",
    },
    {
      id: 4,
      title: "Sports Massage",
      description: "Specialized techniques for athletic performance and recovery",
      icon: "⚽",
    },
    {
      id: 5,
      title: "Aromatherapy Massage",
      description: "Therapeutic scents combined with massage for complete wellness",
      icon: "🌿",
    },
    {
      id: 6,
      title: "Reflexology",
      description: "Pressure point therapy for holistic healing and balance",
      icon: "🦶",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive massage therapy treatments tailored to your unique wellness needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-cream p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideIn"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-charcoal mb-6 leading-relaxed">{service.description}</p>
              <Link href="/services" className="text-accent-gold font-semibold hover:text-warm-beige transition-colors">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
