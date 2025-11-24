export default function AboutTeam() {
  const therapists = [
    {
      id: 1,
      name: "Michael Johnson",
      title: "Senior Therapist & Founder",
      specialty: "Deep Tissue & Sports Massage",
      image: "/male-massage-therapist-professional.jpg",
      bio: "Certified with 16 years of experience. Specializes in sports injury rehabilitation and chronic pain management.",
    },
    {
      id: 2,
      name: "David Johnson",
      title: "Senior Therapist & Founder",
      specialty: "Relaxation & Aromatherapy",
      image: "/male-massage-therapist-professional.jpg",
      bio: "Certified with 15 years of experience. Experts in holistic wellness and prenatal massage therapy.",
    },
    {
      id: 3,
      name: "Sarah Williams",
      title: "Certified Massage Therapist",
      specialty: "Hot Stone & Swedish Massage",
      image: "/professional-female-massage-therapist.png",
      bio: "Licensed with 8 years of experience. Passionate about combining traditional and modern therapeutic techniques.",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      title: "Certified Massage Therapist",
      specialty: "Prenatal & Holistic Therapy",
      image: "/professional-female-massage-therapist.png",
      bio: "Licensed with 7 years of experience. Specializes in pregnancy wellness and gentle therapeutic care.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified professionals dedicated to your health and healing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-accent-gold/10 overflow-hidden">
                <img
                  src={therapist.image || "/placeholder.svg"}
                  alt={`${therapist.name}, ${therapist.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-1">{therapist.name}</h3>
                <p className="text-accent-gold font-semibold text-sm mb-2">{therapist.title}</p>
                <p className="text-sage font-medium text-sm mb-4">{therapist.specialty}</p>
                <p className="text-charcoal text-sm leading-relaxed">{therapist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
