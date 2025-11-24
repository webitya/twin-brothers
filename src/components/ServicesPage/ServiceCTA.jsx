import Link from "next/link"

export default function ServiceCTA() {
  return (
    <section className="bg-sage text-cream py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Experience Relief?</h2>
        <p className="text-xl text-warm-beige mb-8 leading-relaxed">
          Choose the perfect massage service for your needs and book your appointment with our experienced therapists.
          Your wellness journey begins today.
        </p>
        <Link
          href="/leads"
          className="inline-block bg-accent-gold text-charcoal px-10 py-4 rounded-full font-semibold hover:bg-warm-beige transition-all"
        >
          Schedule Your Massage Now
        </Link>
        <p className="text-warm-beige text-sm mt-6">
          Questions?{" "}
          <Link href="/contact" className="hover:text-accent-gold underline">
            Contact us
          </Link>{" "}
          for personalized recommendations.
        </p>
      </div>
    </section>
  )
}
