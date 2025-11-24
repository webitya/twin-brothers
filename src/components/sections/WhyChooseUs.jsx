import { FaCheckCircle } from "react-icons/fa"

export default function WhyChooseUs() {
  const reasons = [
    "Professional, certified massage therapists",
    "Personalized treatment plans",
    "Welcoming, clean environment",
    "Latest massage techniques",
    "Affordable pricing",
    "Flexible scheduling",
  ]

  return (
    <section className="py-20 px-4 bg-warm-beige">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">Why Choose Us?</h2>
            <p className="text-lg text-charcoal mb-8 prose-text">
              With over 15 years of combined experience, Twin Brother&apos;s Massage Therapy is committed to your
              wellness journey. We believe in the power of therapeutic touch to transform lives.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent-gold mt-1 flex-shrink-0" size={20} />
                  <span className="text-charcoal font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent-gold/20 rounded-2xl overflow-hidden aspect-square">
            <img
              src="/professional-massage-therapist-working-on-client-i.jpg"
              alt="Professional massage therapy session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
