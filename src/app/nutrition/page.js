import {
  Leaf,
  Apple,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Heart,
  BarChart,
  Utensils,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Twin Brothers Nutrition - Consultant Dietician & Nutritionist in Ranchi",
  description:
    "Professional nutrition consultation services in Ranchi. Personalized diet plans, weight management, and health optimization by certified nutritionists.",
  keywords:
    "dietician, nutritionist, Ranchi nutrition, diet plans, weight management, health consultation, Twin Brothers Nutrition",
  openGraph: {
    title: "Twin Brothers Nutrition - Consultant Dietician & Nutritionist in Ranchi",
    description:
      "Professional nutrition consultation services in Ranchi. Personalized diet plans, weight management, and health optimization.",
    type: "website",
    locale: "en_IN",
    siteName: "Twin Brothers Nutrition",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NutritionPage() {
  const whatsappLink =
    "https://wa.me/916299826209?text=Hello%20Twin%20Brothers%20Nutrition,%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."

  return (
    <div className="min-h-screen bg-white text-gray-800 mt-[-80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-md">
                Certified Nutrition Expert
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">CONSULTANT DIETICIAN</span>
                <br />
                <span className="text-teal-600">NUTRITIONIST</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your health with personalized nutrition plans designed for your unique body and lifestyle.
                Science-backed approaches to help you achieve optimal health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Consultation
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Content - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 py-4 px-6">
                  <h2 className="text-white text-xl font-bold">Health Assessment</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Personalized Diet Plans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Body Composition Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Nutritional Counseling</span>
                    </div>
                    <div className="mt-6">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                      >
                        Free Initial Assessment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Nutrition Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive nutrition solutions tailored to your health goals and dietary needs
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Apple,
                title: "Personalized Diet Plans",
                description:
                  "Custom nutrition plans designed specifically for your body type, health goals, and lifestyle. We consider your food preferences, medical history, and daily routine to create sustainable eating habits.",
                color: "green",
              },
              {
                icon: BarChart,
                title: "Weight Management",
                description:
                  "Evidence-based weight loss or gain programs that focus on long-term results rather than quick fixes. Our approach combines proper nutrition, portion control, and behavioral changes.",
                color: "teal",
              },
              {
                icon: Heart,
                title: "Medical Nutrition Therapy",
                description:
                  "Specialized nutrition interventions for managing conditions like diabetes, hypertension, PCOS, thyroid disorders, and digestive issues. We work alongside your healthcare providers for comprehensive care.",
                color: "emerald",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className={`bg-${service.color}-500 p-8 md:w-1/4 flex items-center justify-center`}>
                  <div className="text-white">
                    <service.icon className="w-16 h-16 mx-auto" />
                  </div>
                </div>
                <div className="p-8 md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-${service.color}-600 font-medium hover:text-${service.color}-800 transition-colors duration-200`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Nutrition Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic methodology to help you achieve sustainable health results
            </p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {[
                {
                  step: "01",
                  title: "Comprehensive Assessment",
                  description:
                    "We begin with a thorough evaluation of your current health status, medical history, dietary habits, and lifestyle factors to understand your unique needs.",
                  icon: Leaf,
                  align: "right",
                },
                {
                  step: "02",
                  title: "Personalized Plan Development",
                  description:
                    "Based on your assessment, we create a customized nutrition plan that aligns with your health goals, food preferences, and daily routine.",
                  icon: Utensils,
                  align: "left",
                },
                {
                  step: "03",
                  title: "Implementation & Education",
                  description:
                    "We guide you through implementing your plan with practical tips, recipes, and nutritional education to empower your food choices.",
                  icon: Apple,
                  align: "right",
                },
                {
                  step: "04",
                  title: "Monitoring & Refinement",
                  description:
                    "Regular follow-ups to track your progress, address challenges, and make necessary adjustments to optimize your results.",
                  icon: BarChart,
                  align: "left",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-green-500 border-4 border-white transform -translate-x-1/2"></div>

                  <div className={`md:w-1/2 ${item.align === "left" ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <item.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-green-600 font-bold text-sm">Step {item.step}</div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Nutrition Services</h2>
              <div className="space-y-4">
                {[
                  "Certified nutritionists with advanced degrees",
                  "Evidence-based approach to nutrition science",
                  "Personalized plans tailored to your unique needs",
                  "Ongoing support and accountability",
                  "Integration with your healthcare team",
                  "Focus on sustainable, long-term results",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
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
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Right Content - Credentials */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-green-600 mr-2" />
                Our Credentials
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900">Certified Nutritionist</h4>
                  <p className="text-gray-600">American Nutrition Association</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900">Registered Dietician</h4>
                  <p className="text-gray-600">Indian Dietetic Association</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900">Masters in Clinical Nutrition</h4>
                  <p className="text-gray-600">University of Delhi</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-gray-900">Specialized Training</h4>
                  <p className="text-gray-600">Sports Nutrition, Diabetes Management, Weight Loss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Help With */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions We Help With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our nutrition services address a wide range of health conditions and goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Weight Management",
              "Diabetes",
              "Heart Disease",
              "Digestive Disorders",
              "Food Allergies",
              "PCOS",
              "Thyroid Issues",
              "Sports Nutrition",
              "Pregnancy Nutrition",
              "Child Nutrition",
              "Eating Disorders",
              "Cholesterol Management",
            ].map((condition, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-green-300 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-gray-800 font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your health through nutrition? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Office</h3>
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
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 9:00 AM - 2:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <div className="space-y-3 text-gray-600 mb-4">
                <p>
                  <a href="tel:+916299826209" className="hover:text-green-600 transition-colors duration-200">
                    +91 62998 26209
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:twinbrothersnutrition@contact.in"
                    className="hover:text-green-600 transition-colors duration-200"
                  >
                    twinbrothersnutrition@contact.in
                  </a>
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
              >
                WhatsApp Us
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md font-medium transition-colors duration-200"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Nutrition Consultation
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
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-3 rounded-md font-medium hover:bg-green-700 transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
