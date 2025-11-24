export default function AboutStats() {
  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Dedicated to therapeutic excellence since 2009",
    },
    {
      number: "5000+",
      label: "Happy Clients Served",
      description: "Transforming lives through healing massage therapy",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding your wellness expectations",
    },
    {
      number: "6",
      label: "Specialized Services",
      description: "Diverse treatments for every wellness need",
    },
  ]

  return (
    <section className="py-20 bg-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Our Impact & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A testament to our commitment to therapeutic excellence and client care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-5xl font-serif font-bold text-accent-gold mb-3">{stat.number}</div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{stat.label}</h3>
              <p className="text-charcoal text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
