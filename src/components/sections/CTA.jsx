import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-accent-gold text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Ready to Experience Wellness?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto prose-text">
          Book your massage session today and take the first step towards a more relaxed, healthier you.
        </p>
        <Link
          href="/leads"
          className="inline-block bg-charcoal text-cream px-10 py-4 rounded-full font-serif text-lg font-bold hover:bg-warm-beige hover:text-charcoal transition-all"
        >
          Schedule Your Massage
        </Link>
      </div>
    </section>
  )
}
