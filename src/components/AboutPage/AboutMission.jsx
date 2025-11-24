export default function AboutMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warm-beige rounded-xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 text-balance">
            Our Mission & Values
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Mission Statement</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                To provide exceptional therapeutic massage services in a welcoming, clean, and peaceful environment
                where every client feels valued, heard, and genuinely cared for. We are dedicated to treating each
                person as an individual with unique needs and customizing our approach to deliver the most effective
                healing experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Our Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-3xl">❤️</span>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Compassion</h4>
                    <p className="text-charcoal">
                      We approach every client with empathy and genuine care for their well-being.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Excellence</h4>
                    <p className="text-charcoal">We maintain the highest standards in every aspect of our service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Integrity</h4>
                    <p className="text-charcoal">
                      We operate with honesty and ethical practices in all our interactions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl">🌿</span>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Wellness</h4>
                    <p className="text-charcoal">
                      We prioritize your holistic health and long-term well-being journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
