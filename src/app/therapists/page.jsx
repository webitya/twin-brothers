export const metadata = {
  title: "Our Therapists - Twin Brother's Massage Therapy",
  description: "Meet our professional, certified massage therapists dedicated to your wellness.",
  keywords: "massage therapists, certified therapists, massage professionals",
  openGraph: {
    title: "Our Therapists - Twin Brother's Massage Therapy",
  },
}

export default function Therapists() {
  const therapists = [
    {
      name: "Maria Santos",
      specialty: "Deep Tissue & Sports Massage",
      experience: "12 years",
      bio: "Certified massage therapist specializing in athletic recovery and chronic pain relief.",
      image: "massage therapist maria professional portrait",
    },
    {
      name: "Lisa Chen",
      specialty: "Relaxation & Aromatherapy",
      experience: "8 years",
      bio: "Dedicated to holistic wellness with expertise in aromatherapy and energy work.",
      image: "massage therapist lisa professional portrait",
    },
    {
      name: "James Wilson",
      specialty: "Hot Stone & Therapeutic",
      experience: "10 years",
      bio: "Experienced therapist known for creating deeply relaxing and healing experiences.",
      image: "massage therapist james professional portrait",
    },
    {
      name: "Angela Lee",
      specialty: "Prenatal & Gentle Massage",
      experience: "9 years",
      bio: "Compassionate therapist specializing in prenatal and postpartum care.",
      image: "massage therapist angela professional portrait",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl text-charcoal mb-4 text-balance">Our Therapists</h1>
        <p className="text-xl text-charcoal prose-text mb-16 max-w-3xl">
          Meet our team of certified, experienced massage therapists who are passionate about your wellness journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {therapists.map((therapist, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3 bg-accent-gold/20 rounded-lg overflow-hidden aspect-square flex-shrink-0">
                <img
                  src={`/.jpg?height=300&width=300&query=${therapist.image}`}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-charcoal mb-2">{therapist.name}</h3>
                <p className="text-accent-gold font-bold mb-1">{therapist.specialty}</p>
                <p className="text-charcoal font-medium mb-4">{therapist.experience} of experience</p>
                <p className="text-charcoal prose-text">{therapist.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-warm-beige rounded-2xl p-12">
          <h2 className="font-serif text-3xl text-charcoal mb-4 text-balance">Request Your Preferred Therapist</h2>
          <p className="text-lg text-charcoal prose-text mb-6">
            While we always do our best to accommodate requests, please note that therapist availability may vary. You
            can specify your preference when booking.
          </p>
          <a
            href="/leads"
            className="inline-block bg-accent-gold text-cream px-10 py-4 rounded-full font-serif font-bold hover:bg-charcoal transition-all"
          >
            Book with a Therapist
          </a>
        </div>
      </div>
    </section>
  )
}
