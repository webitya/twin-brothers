export default function ServiceCards() {
  const serviceDetails = [
    {
      id: "relaxation",
      title: "Relaxation Massage",
      price: "$60",
      duration: "60 minutes",
      description:
        "Gentle, soothing massage with light to medium pressure. Perfect for stress relief and overall relaxation.",
      benefits: [
        "Reduces stress and anxiety",
        "Improves blood circulation",
        "Enhances sleep quality",
        "Boosts mood and energy",
      ],
      icon: "🌸",
    },
    {
      id: "deep-tissue",
      title: "Deep Tissue Massage",
      price: "$75",
      duration: "60 minutes",
      description:
        "Targeted massage focusing on deeper muscle layers. Ideal for chronic pain, muscle tension, and recovery.",
      benefits: [
        "Relieves chronic pain",
        "Improves mobility and flexibility",
        "Releases muscle tension",
        "Accelerates injury recovery",
      ],
      icon: "💪",
    },
    {
      id: "hot-stone",
      title: "Hot Stone Massage",
      price: "$85",
      duration: "60 minutes",
      description: "Combines warm stones with massage to enhance relaxation and improve blood circulation.",
      benefits: [
        "Deep muscle relaxation",
        "Enhanced blood circulation",
        "Arthritis relief",
        "Reduces inflammation and pain",
      ],
      icon: "🪨",
    },
    {
      id: "aromatherapy",
      title: "Aromatherapy Massage",
      price: "$70",
      duration: "60 minutes",
      description: "Therapeutic massage infused with premium essential oils for holistic healing and wellness.",
      benefits: [
        "Emotional balance and clarity",
        "Immune system boost",
        "Improved skin health",
        "Mental clarity and focus",
      ],
      icon: "🌿",
    },
    {
      id: "sports",
      title: "Sports Massage",
      price: "$75",
      duration: "60 minutes",
      description: "Specialized massage for athletes focusing on injury prevention and performance enhancement.",
      benefits: [
        "Injury prevention strategies",
        "Faster recovery times",
        "Increased flexibility and range",
        "Enhanced athletic performance",
      ],
      icon: "⚽",
    },
    {
      id: "prenatal",
      title: "Prenatal Massage",
      price: "$70",
      duration: "60 minutes",
      description:
        "Gentle massage specifically designed for expectant mothers to relieve pregnancy-related discomfort.",
      benefits: [
        "Reduces back and joint pain",
        "Improves sleep quality",
        "Decreases anxiety and stress",
        "Supports circulation and lymph flow",
      ],
      icon: "🦋",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-cream rounded-lg shadow-md hover:shadow-xl transition-all border border-warm-beige overflow-hidden"
            >
              <div className="bg-accent-gold/10 p-6 flex justify-center">
                <span className="text-5xl">{service.icon}</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">{service.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-accent-gold font-bold text-lg">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
                <p className="text-charcoal mb-6 leading-relaxed">{service.description}</p>
                <div>
                  <h4 className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-charcoal text-sm flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
