export default function HomeWhyChooseUs() {
  const reasons = [
    {
      title: "Expert Therapists",
      description: "Certified professionals with years of experience in therapeutic massage",
      icon: "👨‍⚕️",
    },
    {
      title: "Peaceful Ambiance",
      description: "Serene environment designed for complete relaxation and healing",
      icon: "🕯️",
    },
    {
      title: "Personalized Care",
      description: "Custom treatments tailored to your specific health and wellness goals",
      icon: "❤️",
    },
    {
      title: "Premium Products",
      description: "Only the finest natural oils and products for your safety and comfort",
      icon: "✨",
    },
  ]

  return (
    <section className="py-20 bg-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional massage therapy in a welcoming environment
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{reason.title}</h3>
              <p className="text-charcoal leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
