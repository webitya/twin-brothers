import LeadForm from "../../components/forms/LeadForm"

export default function LeadPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-teal-700 text-white rounded-md p-8">
        <h1 className="text-3xl font-bold">Limited-Time Wellness Offer</h1>
        <p className="text-teal-100 mt-2">Share your details and we’ll call you with an exclusive package.</p>
      </div>
      <div className="mt-6 border border-slate-200 rounded p-6">
        <LeadForm />
      </div>
    </section>
  )
}
