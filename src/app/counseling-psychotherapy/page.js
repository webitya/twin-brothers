import {
  Brain,
  Heart,
  Users,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Smile,
  Shield,
  Lightbulb,
} from "lucide-react"

export const metadata = {
  title: "Twin Brothers Counseling - Professional Psychotherapy Sessions in Ranchi",
  description:
    "Expert counseling and psychotherapy services in Ranchi. Individual, couples, and family therapy by licensed professionals in a safe, confidential environment.",
  keywords:
    "counseling, psychotherapy, therapy, mental health, Ranchi, depression, anxiety, stress, Twin Brothers Counseling",
  openGraph: {
    title: "Twin Brothers Counseling - Professional Psychotherapy Sessions in Ranchi",
    description:
      "Expert counseling and psychotherapy services in Ranchi. Individual, couples, and family therapy by licensed professionals.",
    type: "website",
    locale: "en_IN",
    siteName: "Twin Brothers Counseling",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CounselingPage() {
  const whatsappLink =
    "https://wa.me/916299826209?text=Hello%20Twin%20Brothers%20Counseling,%20I%20would%20like%20to%20book%20a%20therapy%20session."

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-[-80px]">
      {/* Hero Section with Curved Design */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-repeat"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"
          style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-800/50 backdrop-blur-sm text-indigo-100 text-sm font-medium rounded-full">
                Licensed Professional Therapists
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-purple-300">COUNSELING &</span>
                <br />
                <span className="text-white">PSYCHOTHERAPY</span>
                <br />
                <span className="text-indigo-300">SESSIONS</span>
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                Begin your journey toward emotional well-being and personal growth with our professional therapy
                services. Safe, confidential, and personalized support when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Initial Consultation
                </a>
                <a
                  href="tel:+916299826209"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-700/50 backdrop-blur-sm hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right Content - Floating Card */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-600 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">How We Help</h2>
                </div>

                <div className="space-y-4">
                  {[
                    "Depression & Anxiety",
                    "Relationship Issues",
                    "Trauma & PTSD",
                    "Self-Esteem & Growth",
                    "Stress Management",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-purple-300" />
                      </div>
                      <span className="text-indigo-100">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-indigo-600/30">
                  <div className="flex items-center justify-between text-indigo-100">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-300" />
                      <span>Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-300" />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
              Our Therapeutic Approaches
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Specialized Therapy Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of evidence-based therapeutic approaches tailored to your unique needs
            </p>
          </div>

          <div className="space-y-24">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-md mb-4">
                  Individual Therapy
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Personal Growth & Healing</h3>
                <p className="text-gray-600 mb-6">
                  One-on-one therapy sessions provide a safe space to explore your thoughts, feelings, and behaviors.
                  Our therapists use evidence-based approaches to help you overcome challenges, develop coping skills,
                  and achieve personal growth.
                </p>
                <div className="space-y-3">
                  {[
                    "Cognitive Behavioral Therapy (CBT)",
                    "Mindfulness-Based Approaches",
                    "Solution-Focused Brief Therapy",
                    "Psychodynamic Therapy",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
                  >
                    Learn more about individual therapy
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 relative">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-600 rounded-full opacity-10"></div>
                  <div className="p-4 bg-white rounded-xl shadow-lg inline-block mb-6">
                    <Brain className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Personalized Approach</h4>
                  <p className="text-gray-700 mb-6">
                    Every individual is unique, and so is our approach to your therapy. We tailor our methods to address
                    your specific concerns and goals.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">45-60</div>
                      <div className="text-gray-600 text-sm">Minutes/Session</div>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">Weekly</div>
                      <div className="text-gray-600 text-sm">Recommended</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 relative">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-purple-600 rounded-full opacity-10"></div>
                  <div className="p-4 bg-white rounded-xl shadow-lg inline-block mb-6">
                    <Users className="w-12 h-12 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Relationship Healing</h4>
                  <p className="text-gray-700 mb-6">
                    Rebuild trust, improve communication, and strengthen your connection with professional guidance and
                    support.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">60-90</div>
                      <div className="text-gray-600 text-sm">Minutes/Session</div>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Bi-weekly</div>
                      <div className="text-gray-600 text-sm">Recommended</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1">
                <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-md mb-4">
                  Couples Therapy
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Strengthening Relationships</h3>
                <p className="text-gray-600 mb-6">
                  Our couples therapy helps partners improve communication, resolve conflicts, and rebuild trust.
                  Whether you are facing specific challenges or seeking to deepen your connection, our therapists provide
                  a supportive environment for growth.
                </p>
                <div className="space-y-3">
                  {[
                    "Emotionally Focused Therapy (EFT)",
                    "Gottman Method Couples Therapy",
                    "Imago Relationship Therapy",
                    "Communication Skills Training",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors duration-200"
                  >
                    Learn more about couples therapy
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-md mb-4">
                  Family Therapy
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Healing Family Dynamics</h3>
                <p className="text-gray-600 mb-6">
                  Family therapy helps resolve conflicts, improve communication, and strengthen relationships among
                  family members. Our therapists create a safe environment where every voice is heard and respected.
                </p>
                <div className="space-y-3">
                  {[
                    "Structural Family Therapy",
                    "Narrative Family Therapy",
                    "Strategic Family Therapy",
                    "Intergenerational Approaches",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                  >
                    Learn more about family therapy
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 relative">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-600 rounded-full opacity-10"></div>
                  <div className="p-4 bg-white rounded-xl shadow-lg inline-block mb-6">
                    <Heart className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Family Harmony</h4>
                  <p className="text-gray-700 mb-6">
                    Address conflicts, improve communication patterns, and build stronger family connections through
                    guided therapeutic sessions.
                  </p>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">60-90</div>
                      <div className="text-gray-600 text-sm">Minutes/Session</div>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">Flexible</div>
                      <div className="text-gray-600 text-sm">Scheduling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Steps with Connecting Lines */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
              Your Therapy Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear, supportive path to mental wellness and personal growth
            </p>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-indigo-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "A 15-minute free call to understand your needs and determine if we're a good fit.",
                  icon: Phone,
                  color: "indigo",
                },
                {
                  step: "2",
                  title: "Assessment Session",
                  description: "A comprehensive evaluation to understand your concerns, history, and goals.",
                  icon: Lightbulb,
                  color: "purple",
                },
                {
                  step: "3",
                  title: "Treatment Plan",
                  description: "We develop a personalized approach tailored to your specific needs and objectives.",
                  icon: Sparkles,
                  color: "blue",
                },
                {
                  step: "4",
                  title: "Ongoing Therapy",
                  description: "Regular sessions to implement strategies, monitor progress, and adjust as needed.",
                  icon: Smile,
                  color: "indigo",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 bg-${item.color}-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg relative z-20`}
                  >
                    {item.step}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Begin Your Journey Today
            </a>
          </div>
        </div>
      </section>

      {/* Therapist Section */}
 
      {/* Testimonials Section */}
      <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-repeat"></div>
        <div
          className="absolute top-0 left-0 right-0 h-20 bg-white"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-800/50 backdrop-blur-sm text-indigo-100 text-sm font-medium rounded-full mb-4">
              Client Experiences
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Transformation Stories</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Real stories from clients who found healing and growth through our therapy services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The therapy sessions have been life-changing. I've developed coping skills for my anxiety that I use every day.",
                name: "Individual Client",
                title: "Client for 8 months",
                color: "indigo",
              },
              {
                quote:
                  "Our marriage was on the brink of collapse. The couples therapy helped us rebuild trust and learn to communicate effectively.",
                name: "Couple Client",
                title: "Couples Therapy",
                color: "purple",
              },
              {
                quote:
                  "As a family, we've learned to resolve conflicts peacefully and support each other through challenges.",
                name: "Family Client",
                title: "Family Therapy",
                color: "blue",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                <div
                  className={`w-10 h-10 bg-${testimonial.color}-600 rounded-full flex items-center justify-center mb-4`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-indigo-100 mb-6">{testimonial.quote}</blockquote>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-indigo-200 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our therapy services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does each therapy session last?",
                answer:
                  "Individual therapy sessions typically last 45-60 minutes, while couples and family sessions may last 60-90 minutes depending on the specific needs and circumstances.",
              },
              {
                question: "How often will I need to attend therapy?",
                answer:
                  "The frequency of sessions depends on your specific situation and goals. Initially, weekly sessions are often recommended. As you progress, sessions may become less frequent.",
              },
              {
                question: "Is therapy confidential?",
                answer:
                  "Yes, confidentiality is a fundamental aspect of therapy. Information shared during sessions is kept private with legal exceptions related to harm to self or others, child/elder abuse, or court orders.",
              },
              {
                question: "How long will I need to be in therapy?",
                answer:
                  "The duration of therapy varies widely depending on your goals, the complexity of issues, and your progress. Some clients benefit from short-term therapy (8-12 sessions), while others may engage in longer-term work.",
              },
              {
                question: "Do you offer online therapy sessions?",
                answer:
                  "Yes, we offer secure video therapy sessions for clients who prefer remote sessions or are unable to attend in-person appointments.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit/debit cards, and bank transfers. Payment is typically collected at the time of service or in advance for scheduled sessions.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions? We are here to help.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Begin Your Healing Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step toward emotional well-being and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
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
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors duration-200"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <div className="space-y-3 text-gray-600 mb-4">
                <p>
                  <a href="tel:+916299826209" className="hover:text-blue-600 transition-colors duration-200">
                    +91 62998 26209
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:twinbrotherscounseling@contact.in"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    twinbrotherscounseling@contact.in
                  </a>
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
              >
                WhatsApp Us
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the First Step?</h3>
              <p className="text-gray-600 mb-6">
                Begin your journey toward emotional well-being with a confidential consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Initial Consultation
                </a>
                <a
                  href="tel:+916299826209"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-indigo-900 p-3 z-50">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <a
            href="tel:+916299826209"
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-800 text-white py-2 px-3 rounded-lg mr-2 font-medium hover:bg-indigo-700 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
