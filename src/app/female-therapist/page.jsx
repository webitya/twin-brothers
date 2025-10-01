export default function FemaleTherapistPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-slate-800">Female Therapist Services</h1>
      <p className="text-slate-700">
        Prefer a female therapist? We provide experienced, empathetic professionals for your comfort and privacy.
      </p>
      <ul className="list-disc pl-6 text-slate-700">
        <li>Professional, licensed therapists</li>
        <li>Customizable sessions and preferences</li>
        <li>Safe and respectful environment</li>
      </ul>
      <a href="/contact" className="inline-block mt-4 bg-teal-600 text-white rounded px-5 py-2.5 hover:bg-teal-700">
        Book a Session
      </a>
    </section>
  )
}
