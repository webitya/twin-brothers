import ContactForm from "../../components/forms/ContactForm"
import NewsletterForm from "../../components/forms/NewsletterForm"

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Contact Us</h1>
        <p className="text-slate-700 mt-2">Have questions? Send us a message and we’ll get back to you shortly.</p>
      </div>
      <ContactForm />
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-semibold">Newsletter</h2>
        <p className="text-slate-600 mb-3">Get tips and offers in your inbox.</p>
        <NewsletterForm />
      </div>
    </section>
  )
}
