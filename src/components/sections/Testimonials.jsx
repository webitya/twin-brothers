import { FaStar } from "react-icons/fa"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing experience! The massage therapists really understood my needs and provided the perfect level of pressure.",
      rating: 5,
      role: "Regular Client",
    },
    {
      name: "Michael Chen",
      text: "Professional, clean facility and very friendly staff. I've been coming here for 6 months and never disappointed.",
      rating: 5,
      role: "Regular Client",
    },
    {
      name: "Emma Rodriguez",
      text: "Best massage I've had in years. Highly recommend for anyone dealing with chronic pain or stress.",
      rating: 5,
      role: "Regular Client",
    },
  ]

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-charcoal prose-text max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied clients about their transformative
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 border border-warm-beige">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent-gold" size={16} />
                ))}
              </div>
              <p className="text-charcoal mb-6 prose-text italic">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-warm-beige">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
