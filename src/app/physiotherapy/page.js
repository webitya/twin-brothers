import {
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Activity,
  Users,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Twin Brothers Physiotherapy - Consultation & Sessions Ranchi | Expert Care",
  description:
    "Professional physiotherapy consultation & treatment sessions in Ranchi, Jharkhand. Expert care for pain relief, mobility & rehabilitation. Book consultation today!",
  keywords:
    "physiotherapy consultation, physiotherapy sessions, Ranchi physiotherapy, pain relief therapy, rehabilitation, Twin Brothers Physiotherapy, Kanke Road Ranchi",
  openGraph: {
    title: "Twin Brothers Physiotherapy - Consultation & Sessions Ranchi",
    description:
      "Professional physiotherapy consultation and treatment sessions in Ranchi. Expert care for pain relief and rehabilitation.",
    type: "website",
    locale: "en_IN",
    siteName: "Twin Brothers Physiotherapy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PhysiotherapyPage() {
  const whatsappLink =
    "https://wa.me/916299826209?text=Hello%20Twin%20Brothers%20Physiotherapy,%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation%20session."

  return (
    <div className="min-h-screen bg-white text-gray-800 mt-[-80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-md">
                Professional Healthcare
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Expert Physiotherapy Services in Ranchi
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional physiotherapy consultation and treatment sessions designed to restore mobility, reduce
                pain, and improve your quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Consultation
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Other Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted Care</h2>
                  <p className="text-gray-600">
                    With over 1000+ satisfied patients and a team of experienced physiotherapists
                  </p>
                  <div className="flex justify-center mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your specific needs and conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Pain Management",
                description:
                  "Advanced pain relief techniques for chronic and acute conditions using evidence-based approaches",
              },
              {
                icon: Users,
                title: "Sports Rehabilitation",
                description:
                  "Specialized recovery programs for athletes and active individuals to return to peak performance",
              },
              {
                icon: Stethoscope,
                title: "Post-Surgery Recovery",
                description: "Comprehensive rehabilitation after surgical procedures to restore function and mobility",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-md mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Treatment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure optimal recovery and results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive evaluation of your condition and medical history",
                icon: Stethoscope,
              },
              {
                step: "02",
                title: "Diagnosis",
                description: "Accurate identification of the underlying issues and causes",
                icon: Activity,
              },
              {
                step: "03",
                title: "Treatment Plan",
                description: "Personalized therapy program tailored to your specific needs",
                icon: Calendar,
              },
              {
                step: "04",
                title: "Rehabilitation",
                description: "Guided recovery process with ongoing assessment and adjustments",
                icon: Users,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
                  <div className="text-blue-600 font-bold text-sm mb-2">Step {item.step}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-md mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Physiotherapy Services
              </h2>
              <div className="space-y-4">
                {[
                  "Evidence-based treatment approaches",
                  "Experienced and certified physiotherapists",
                  "Personalized care plans for each patient",
                  "Modern equipment and facilities",
                  "Convenient location and flexible scheduling",
                  "Comprehensive follow-up and support",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-gray-50 rounded-lg p-8">
              <blockquote className="text-gray-700 italic mb-6">
                After my knee surgery, I was struggling with mobility. The physiotherapy sessions here helped me regain
                full function. The therapists are knowledgeable and caring. Highly recommended!
              </blockquote>
              <div className="flex items-center">
                <div className="flex mr-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <cite className="text-gray-600 not-italic">- Rajesh Kumar, Recovered Patient</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our physiotherapy services address a wide range of conditions and injuries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Back and Neck Pain",
              "Sports Injuries",
              "Joint Pain and Arthritis",
              "Post-Surgical Rehabilitation",
              "Neurological Conditions",
              "Musculoskeletal Disorders",
              "Balance and Mobility Issues",
              "Chronic Pain Management",
              "Repetitive Strain Injuries",
            ].map((condition, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <span className="text-gray-800 font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey to better health and mobility? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Clinic</h3>
              <address className="text-gray-600 not-italic mb-4">
                1st Floor, Raj Complex
                <br />
                Kanke Road, near CM House
                <br />
                Ranchi, Jharkhand
              </address>
              <a
                href="https://maps.google.com/?q=Raj+Complex,+Kanke+Road,+Ranchi,+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance and appointment booking
              </p>
              <a
                href="tel:+916299826209"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 text-lg"
              >
                +91 62998 26209
              </a>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries and we will respond within 24 hours</p>
              <a
                href="mailto:twinbrotherstherapy@contact.in"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
              >
                twinbrotherstherapy@contact.in
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule Your Consultation Today
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Contact Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <a
            href="tel:+916299826209"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-2 px-3 rounded-md mr-2 font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
