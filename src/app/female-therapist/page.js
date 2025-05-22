"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useAnimation, AnimatePresence } from "framer-motion"
import { send } from "emailjs-com"
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Instagram, Facebook, Twitter, Calendar, Award, Heart, Sparkles, Leaf, Shield, Users, ThumbsUp, MessageCircle, ChevronRight } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const { scrollYProgress } = useScroll()
  const controls = useAnimation()

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "testimonials", "contact"]
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 100
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ submitted: true, success: false, message: "Sending..." })

    // Replace with your actual EmailJS service ID, template ID, and user ID
    send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      })
      .catch((err) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        })
      })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Sports Massage Therapy",
      description:
        "Professional sports massage therapy by certified female therapists to enhance performance and recovery for athletes and active individuals.",
      icon: <Sparkles className="w-8 h-8 text-rose-500" />,
      benefits: ["Improves circulation", "Reduces muscle tension", "Enhances recovery", "Prevents injuries"],
    },
    {
      title: "Newborn Baby Massage",
      description:
        "Gentle massage techniques by experienced female therapists specially designed for infants to promote healthy development and bonding.",
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      benefits: ["Improves sleep", "Aids digestion", "Strengthens bonding", "Supports development"],
    },
    {
      title: "Sound Healing",
      description:
        "Therapeutic use of sound frequencies by our female practitioners to reduce stress and create a deep sense of peace and well-being.",
      icon: <Sparkles className="w-8 h-8 text-rose-500" />,
      benefits: ["Reduces stress", "Balances energy", "Improves focus", "Promotes relaxation"],
    },
    {
      title: "Ayurvedic Treatments",
      description:
        "Traditional Ayurvedic therapies by certified female therapists that balance the body and mind according to ancient Indian healing principles.",
      icon: <Leaf className="w-8 h-8 text-rose-500" />,
      benefits: ["Detoxification", "Balances doshas", "Improves immunity", "Enhances wellbeing"],
    },
  ]

  const testimonials = [
    {
      name: "Priya Singh",
      role: "Professional Athlete",
      content:
        "The female therapists here are incredibly skilled. The sports massage therapy has significantly improved my recovery time after intense training sessions. I feel comfortable and well-cared for.",
      rating: 5,
      image: "https://res.cloudinary.com/dxqthnbx7/image/upload/v1747755988/femaile-therapist_nz1vws.webp",
    },
    {
      name: "Neha Sharma",
      role: "New Mother",
      content:
        "As a new mom, I was nervous about baby massage, but the female therapist was so gentle and taught me techniques I could use at home. My baby sleeps better and seems more relaxed after sessions.",
      rating: 5,
      image: "https://res.cloudinary.com/dxqthnbx7/image/upload/v1747755988/femaile-therapist_nz1vws.webp",
    },
    {
      name: "Anita Patel",
      role: "Yoga Instructor",
      content:
        "The female Ayurvedic practitioners here have deep knowledge of traditional healing. Their holistic approach to wellness has helped me maintain balance in my busy life as a yoga instructor.",
      rating: 5,
      image: "https://res.cloudinary.com/dxqthnbx7/image/upload/v1747755988/femaile-therapist_nz1vws.webp",
    },
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      title: "Safe Environment",
      description: "Our all-female staff ensures a comfortable and secure environment for all clients.",
    },
    {
      icon: <Award className="w-6 h-6 text-rose-500" />,
      title: "Certified Experts",
      description: "All our female therapists are certified by the Sports Authority of India.",
    },
    {
      icon: <Users className="w-6 h-6 text-rose-500" />,
      title: "Personalized Care",
      description: "Each session is tailored to your specific needs and comfort level.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-rose-500" />,
      title: "5-Star Experience",
      description: "Consistently rated 5.0 with over 118 positive Google reviews.",
    },
  ]

  return (
    <div className="relative mt-[-70px]">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-500 z-50" style={{ scaleX: scrollYProgress }} />




      <main className="">
        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-gradient-to-r from-rose-50 to-pink-50 py-20 md:py-32 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                Jharkhand s First Certified Female Therapist
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Expert <span className="text-rose-600">Female Therapists</span> For Your Wellness
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the healing touch of certified female therapists from SAI Sports Authority of India. Our
                therapeutic treatments are designed to provide comfort, care, and healing in a safe environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center justify-center"
                >
                  Book Appointment <Calendar size={18} className="ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("services")}
                  className="bg-white hover:bg-gray-100 text-rose-600 font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center justify-center"
                >
                  Our Services <ChevronRight size={18} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dxqthnbx7/image/upload/v1747755988/femaile-therapist_nz1vws.webp"
                  alt="Female Massage Therapist"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center text-white">
                    <div className="bg-rose-500 rounded-full p-2 mr-3">
                      <Shield size={20} />
                    </div>
                    <p className="font-medium">Safe & Comfortable Environment</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">5.0 (118 Google reviews)</span>
                </div>
                <p className="text-sm text-gray-600">
                  The female therapists here provide the most professional and comfortable experience
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-rose-200 rounded-full z-0"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-pink-300 rounded-full z-0"></div>
            </motion.div>
          </div>

          {/* Floating info cards */}
          <div className="container mx-auto px-4 mt-20 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-rose-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <Phone className="text-rose-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Call Us</h3>
                    <p className="text-gray-600">Book your appointment</p>
                  </div>
                </div>
                <a href="tel:+916299826209" className="text-rose-600 font-medium hover:underline flex items-center">
                  +91 62998 26209 <ChevronRight size={16} className="ml-1" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-rose-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <Clock className="text-rose-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">We are available for you</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Mon - Sat: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: 06:00 AM - 2:00 PM
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-rose-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <MapPin className="text-rose-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-600">Visit our center</p>
                  </div>
                </div>
                <address className="text-gray-700 not-italic">
                  1 FLOOR RAJ COMPLEX, Kanke Road,
                  <br />
                  Near CM House, Opp. Speaker House,
                  <br />
                  Ranchi, Jharkhand - 834008
                </address>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Female Therapists Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Female Therapist Advantage</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our certified female therapists provide a unique blend of expertise, empathy, and understanding in a safe and comfortable environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="bg-rose-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                Our Specialties
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Services By Female Therapists</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our certified female therapists offer a range of therapeutic services designed to address various physical conditions, promote
                healing, and enhance overall well-being.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-3 bg-gradient-to-r from-rose-400 to-pink-500"></div>
                  <div className="p-6">
                    <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle size={16} className="text-rose-500 mr-2" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4">
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          service: service.title,
                        })
                        scrollToSection("contact")
                      }}
                      className="text-rose-600 font-medium text-sm flex items-center hover:text-rose-700 transition-colors"
                    >
                      Book this service <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="animate-on-scroll"
              >
                <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Jharkhand s First Certified Female Therapist Team
                </h2>
                <p className="text-gray-600 mb-6">
                  With certification from the Sports Authority of India (SAI), our team of professional female
                  therapists brings expertise and care to every session. We are committed to providing the highest
                  quality therapeutic services in a comfortable and safe environment.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-2 rounded-full mr-4 mt-1">
                      <CheckCircle className="text-rose-600" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Female Certified Professionals</h3>
                      <p className="text-gray-600">
                        All our female therapists are certified by the Sports Authority of India and have extensive training in
                        various therapeutic techniques.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-2 rounded-full mr-4 mt-1">
                      <CheckCircle className="text-rose-600" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Safe Space For All</h3>
                      <p className="text-gray-600">
                        We provide a comfortable environment where clients can feel secure and relaxed during their therapeutic sessions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-2 rounded-full mr-4 mt-1">
                      <CheckCircle className="text-rose-600" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Personalized Care</h3>
                      <p className="text-gray-600">
                        Our female therapists understand that each client has unique needs. Our approach is tailored to address your
                        specific concerns and health goals.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all flex items-center"
                >
                  Schedule a Consultation <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative animate-on-scroll"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dxqthnbx7/image/upload/v1747755988/femaile-therapist_nz1vws.webp"
                    alt="Female Massage Therapist"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs z-20">
                  <div className="flex items-center mb-2">
                    <div className="bg-rose-100 p-2 rounded-full mr-3">
                      <Award className="text-rose-600" size={20} />
                    </div>
                    <h3 className="font-medium text-gray-800">SAI Certified</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our female therapists are certified by the Sports Authority of India, ensuring the highest standards of
                    care.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full z-0 opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-200 rounded-full z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 animate-on-scroll"
            >
              <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Don t just take our word for it. Hear from our satisfied clients about their experiences with our
                female therapists.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow animate-on-scroll relative"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-rose-50 rounded-bl-3xl z-0"></div>
                  <div className="relative z-10">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white border border-rose-200 text-rose-600 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle size={18} className="mr-2" />
                <span>Read all 118 Google reviews</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference with Female Therapists</h2>
              <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
                Book your appointment today and discover why our clients consistently rate us 5 stars
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-white text-rose-600 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
              >
                Book Your Session Now <Calendar size={18} className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="animate-on-scroll"
              >
                <span className="inline-block bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full mb-4">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Book Your Appointment</h2>
                <p className="text-gray-600 mb-8">
                  Ready to experience the benefits of our female therapists? Fill out the form below to schedule your
                  appointment, or contact us directly.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-3 rounded-full mr-4">
                      <Phone className="text-rose-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                      <a href="tel:+916299826209" className="text-gray-600 hover:text-rose-600">
                        +91 62998 26209
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-3 rounded-full mr-4">
                      <Mail className="text-rose-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                      <a href="mailto:conact@twinbrotherstherapy.in" className="text-gray-600 hover:text-rose-600">
                        conact@twinbrotherstherapy.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-rose-100 p-3 rounded-full mr-4">
                      <MapPin className="text-rose-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Location</h3>
                      <address className="text-gray-700 not-italic">
                        1 FLOOR RAJ COMPLEX, Kanke Road,
                        <br />
                        Near CM House, Opp. Speaker House,
                        <br />
                        Ranchi, Jharkhand - 834008
                      </address>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-rose-100 p-3 rounded-full text-rose-600 hover:bg-rose-200 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-rose-100 p-3 rounded-full text-rose-600 hover:bg-rose-200 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-rose-100 p-3 rounded-full text-rose-600 hover:bg-rose-200 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl p-8 animate-on-scroll border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                      placeholder="Tell us about your needs or any questions you have"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center"
                  >
                    Send Message
                  </motion.button>
                  {formStatus.submitted && (
                    <div
                      className={`mt-4 p-4 rounded-lg ${
                        formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>



    </div>
  )
}
