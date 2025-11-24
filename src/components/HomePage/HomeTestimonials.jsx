export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Corporate Professional",
      text: "The deep tissue massage was exactly what I needed. I left feeling completely rejuvenated and stress-free.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      text: "The sports massage has improved my recovery significantly. The therapists really know their craft.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Wellness Advocate",
      text: "Twin Brother's Massage Therapy is my sanctuary. The atmosphere and service are absolutely exceptional.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real experiences from our valued clients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-cream p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent-gold text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-charcoal mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
