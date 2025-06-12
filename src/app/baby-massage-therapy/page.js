import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Stethoscope,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Twin Brothers Massage Therapy - Baby Massage Ranchi | Expert Care",
  description:
    "Professional baby massage therapy in Ranchi, Jharkhand. Improve your baby's sleep, reduce colic & enhance bonding. Trusted by 500+ families. Book appointment today!",
  keywords:
    "baby massage therapy, infant massage, Ranchi baby care, newborn massage, baby wellness, Twin Brothers Massage Therapy, Kanke Road Ranchi",
  openGraph: {
    title: "Twin Brothers Massage Therapy - Baby Massage Ranchi",
    description:
      "Professional baby massage therapy services in Ranchi. Expert care for your little one's health and development.",
    type: "website",
    locale: "en_IN",
    siteName: "Twin Brothers Massage Therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twin Brothers Massage Therapy - Baby Massage Ranchi",
    description:
      "Professional baby massage therapy services in Ranchi. Expert care for your little one's health and development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://twinbrotherstherapy.com",
  },
}

export default function Home() {
  // WhatsApp link with pre-filled message
  const whatsappLink =
    "https://wa.me/916299826209?text=Hello%20Twin%20Brothers%20Massage%20Therapy,%20I%20would%20like%20to%20book%20an%20appointment%20for%20baby%20massage%20therapy."

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 selection:bg-pink-200">
      {/* Sticky Mobile CTA - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 z-50 flex items-center justify-between">
        <a
          href="tel:+916299826209"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-4 rounded-full mr-2"
          aria-label="Call Twin Brothers Massage Therapy"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">Call Now</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-full"
          aria-label="WhatsApp Twin Brothers Massage Therapy"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-repeat"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 md:mb-10 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">
              Specialized Baby Care in Ranchi
            </span>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-6 tracking-tight leading-tight">
              Gentle Touch for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 block sm:inline ml-0 sm:ml-2">
                Little One
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional baby massage therapy services designed to promote your baby's health, development, and
              bonding. Trusted by families in Ranchi for gentle, caring touch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-10 md:mb-16 px-4 sm:px-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 md:px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:gap-3"
              aria-label="Book baby massage appointment via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-4 h-4 sm:block hidden transition-transform group-hover:translate-x-1" />
              <ChevronRight className="w-5 h-5 sm:hidden block" />
            </a>
            <Link
              href="/about"
              className="group border-2 border-pink-500 text-pink-500 px-6 md:px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3"
              aria-label="Learn more about Twin Brothers Massage Therapy"
            >
              Learn More
              <ArrowRight className="w-4 h-4 sm:block hidden transition-transform group-hover:translate-x-1" />
              <ChevronRight className="w-5 h-5 sm:hidden block" />
            </Link>
          </div>

          {/* Hero Image with Animation */}
          <div className="relative max-w-sm sm:max-w-4xl mx-auto transform hover:scale-[1.01] transition-all duration-500">
            <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl">
              <div className="aspect-[4/3] sm:aspect-video bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                <div className="text-center transform transition-transform duration-700 hover:scale-105 p-4">
                  <Heart className="text-pink-400 mb-4 md:mb-6 mx-auto w-16 h-16 md:w-20 md:h-20 animate-pulse" />
                  <p className="text-gray-700 text-lg md:text-xl font-medium">Gentle Care for Your Baby</p>
                  <p className="text-gray-500 mt-2 text-sm md:text-base">Nurturing touch for healthy development</p>
                </div>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-70"></div>
            <div className="absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 bg-pink-100 w-10 h-10 md:w-12 md:h-12 rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive grid */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-pink-50 to-white opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Baby Massage Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized massage therapy techniques designed specifically for infants and toddlers in Ranchi
            </p>
          </div>

          {/* Mobile: Stack vertically, Desktop: 3-column grid */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            <article className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
              <div className="bg-pink-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Therapeutic Massage</h3>
              <p className="text-gray-600">
                Gentle therapeutic techniques to improve circulation, reduce colic, and promote better sleep for your
                baby
              </p>
              <div className="mt-4 md:mt-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all"
                  aria-label="Book therapeutic massage appointment"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bonding Sessions</h3>
              <p className="text-gray-600">
                Parent-child bonding sessions that teach you massage techniques to use at home with your baby
              </p>
              <div className="mt-4 md:mt-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all"
                  aria-label="Book bonding session appointment"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Regular Programs</h3>
              <p className="text-gray-600">
                Structured programs for ongoing development and wellness support for your baby's growth
              </p>
              <div className="mt-4 md:mt-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all"
                  aria-label="Book regular program appointment"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-pink-50 to-blue-50 relative">
        <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
                Benefits of Baby Massage Therapy
              </h2>
              <div className="space-y-4 md:space-y-5">
                {[
                  "Improves sleep quality and duration",
                  "Reduces crying and fussiness",
                  "Enhances parent-child bonding",
                  "Promotes healthy weight gain",
                  "Boosts immune system development",
                  "Aids in digestive health",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4 group">
                    <div className="bg-white p-2 rounded-full shadow-md group-hover:bg-green-50 transition-colors duration-300">
                      <CheckCircle className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-gray-700 text-base md:text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md"
                  aria-label="Book baby massage session"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book a Session
                </a>
              </div>
            </div>
            <aside className="order-1 lg:order-2 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl transform hover:rotate-1 transition-all duration-500">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-400 to-blue-400 p-5 md:p-6 rounded-full w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 md:mb-8 flex items-center justify-center shadow-lg">
                  <Star className="text-white w-8 h-8 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                  Trusted by 500+ Families in Ranchi
                </h3>
                <blockquote className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg italic">
                  "The care and attention our baby received was exceptional. We saw immediate improvements in sleep and
                  overall happiness. Highly recommended for all new parents!"
                </blockquote>
                <div className="flex justify-center space-x-1" role="img" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 fill-yellow-400" />
                  ))}
                </div>
                <cite className="mt-3 md:mt-4 text-gray-500 text-sm md:text-base">- Priya & Rahul, Happy Parents</cite>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white relative pb-24 lg:pb-20">
        <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to give your baby the gentle care they deserve? Contact Twin Brothers Massage Therapy in Ranchi
              today.
            </p>
          </div>

          {/* Mobile: Stack vertically, Desktop: 3-column grid */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            <address className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 not-italic">
              <div className="bg-pink-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <MapPin className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">Visit Us</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                1st Floor, Raj Complex
                <br />
                Kanke Road, near CM House
                <br />
                Ranchi, Jharkhand
              </p>
              <a
                href="https://maps.google.com/?q=Raj+Complex,+Kanke+Road,+Ranchi,+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-600 font-medium mt-4 hover:gap-2 transition-all"
                aria-label="View Twin Brothers Massage Therapy location on Google Maps"
              >
                View on Map <ArrowRight className="w-4 h-4" />
              </a>
            </address>

            <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Phone className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">Call Us</h3>
              <p className="text-gray-600">
                <a
                  href="tel:+916299826209"
                  className="hover:text-blue-600 transition-colors block mb-2 text-lg md:text-xl font-medium"
                  aria-label="Call Twin Brothers Massage Therapy"
                >
                  +91 62998 26209
                </a>
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 mt-4"
                aria-label="Chat with Twin Brothers Massage Therapy on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Mail className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">Email Us</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:twinbrotherstherapy@contact.in"
                  className="hover:text-purple-600 transition-colors text-base md:text-lg font-medium"
                  aria-label="Email Twin Brothers Massage Therapy"
                >
                  twinbrotherstherapy@contact.in
                </a>
              </p>
              <p className="text-gray-500 mt-3 text-sm">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg inline-flex items-center gap-3"
              aria-label="Schedule baby massage appointment today"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Schedule Your Appointment Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
