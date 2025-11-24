export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-cream to-warm-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 text-balance">
              Our Healing Journey
            </h1>
            <p className="text-lg text-charcoal mb-6 leading-relaxed text-pretty">
              Twin Brother's Massage Therapy was founded on a simple yet profound belief: everyone deserves access to
              quality therapeutic care that transforms lives and restores wellness.
            </p>
            <p className="text-lg text-charcoal mb-6 leading-relaxed text-pretty">
              With over 15 years of combined experience, our dedicated team of certified therapists has had the
              privilege of helping thousands of clients find relief from pain, reduce stress, and improve their overall
              well-being.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We remain committed to continuous learning and employing the latest evidence-based techniques in
              therapeutic massage to serve you better.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src="/massage-therapy-studio-interior.jpg"
              alt="Twin Brother's Massage Therapy studio showcasing our peaceful treatment environment"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
