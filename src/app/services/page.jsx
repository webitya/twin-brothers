import ServicesGrid from "../../components/ServicesGrid"

export default function ServicesPage() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800">Services</h1>
        <p className="text-slate-600 mt-2">Explore our curated therapies designed for total wellbeing.</p>
      </div>
      <ServicesGrid />
    </div>
  )
}
