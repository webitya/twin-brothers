import Hero from "../components/Hero"
import ServicesGrid from "../components/ServicesGrid"
import NewsletterForm from "../components/forms/NewsletterForm"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-slate-50 border border-slate-200 rounded p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Stay in the loop</h3>
            <p className="text-slate-600">Get wellness tips and special offers.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
