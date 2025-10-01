import { SERVICES } from "./services-data"

export default function ServicesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800">Our Therapies</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s.title} className="border border-slate-200 rounded-lg p-5 hover:shadow-sm">
            <h3 className="font-semibold text-teal-700">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
