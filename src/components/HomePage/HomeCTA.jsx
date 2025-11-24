import Link from "next/link"

export default function HomeCTA() {
  return (
    <section className="bg-charcoal text-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Unwind?</h2>
        <p className="text-xl text-warm-beige mb-8 leading-relaxed">
          Schedule your massage session today and take the first step towards better health and wellness.
        </p>
        <Link
          href="/leads"
          className="inline-block bg-accent-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-warm-beige transition-all"
        >
          Book Your Appointment Now
        </Link>
      </div>
    </section>
  )
}
