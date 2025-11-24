import Link from "next/link"

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-cream to-warm-beige py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 text-balance">
              Healing Hands for Your Wellness
            </h1>
            <p className="text-xl text-charcoal mb-8 leading-relaxed text-pretty">
              Discover the perfect balance of relaxation and rejuvenation with our expert therapeutic massage services.
              Our experienced therapists are dedicated to your well-being and healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/leads"
                className="bg-accent-gold text-cream px-8 py-4 rounded-full font-semibold hover:bg-warm-beige transition-all text-center"
              >
                Book Your Session
              </Link>
              <Link
                href="/services"
                className="border-2 border-accent-gold text-accent-gold px-8 py-4 rounded-full font-semibold hover:bg-accent-gold hover:text-cream transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/serene-spa-massage-therapy-environment-with-candle.jpg"
              alt="Serene spa environment showcasing massage therapy setup"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
