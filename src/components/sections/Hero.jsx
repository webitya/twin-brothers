import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-cream via-warm-beige to-cream min-h-screen flex items-center justify-center px-4 py-20">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23000000" fillOpacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 animate-fadeIn">
          <span className="inline-block bg-accent-gold text-cream px-4 py-1 rounded-full text-sm font-medium mb-4">
            Welcome to Wellness
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 animate-slideIn text-balance">
          Healing Hands, Peaceful Moments
        </h1>

        <p className="text-xl md:text-2xl text-charcoal mb-8 max-w-2xl mx-auto prose-text text-pretty">
          Experience the ultimate relaxation and rejuvenation with our professional therapeutic massage services. Let us
          help you find your inner peace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/leads"
            className="bg-accent-gold text-cream px-8 py-4 rounded-full font-serif text-lg font-bold hover:bg-warm-beige transform hover:scale-105 transition-all shadow-lg"
          >
            Book Your Session
          </Link>
          <Link
            href="/services"
            className="border-2 border-accent-gold text-accent-gold px-8 py-4 rounded-full font-serif text-lg font-bold hover:bg-accent-gold hover:text-cream transition-all"
          >
            Explore Services
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="bg-accent-gold/20 rounded-2xl overflow-hidden aspect-video">
            <img
              src="/peaceful-massage-spa-environment-with-warm-lightin.jpg"
              alt="Massage therapy in progress"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
