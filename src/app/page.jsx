import HomeHero from "@/components/HomePage/HomeHero"
import HomeServices from "@/components/HomePage/HomeServices"
import HomeWhyChooseUs from "@/components/HomePage/HomeWhyChooseUs"
import HomeTestimonials from "@/components/HomePage/HomeTestimonials"
import HomeCTA from "@/components/HomePage/HomeCTA"

export const metadata = {
  title: "Twin Brother's Massage Therapy - Professional Therapeutic Massage",
  description:
    "Experience premium therapeutic massage services. Expert therapists specializing in relaxation, deep tissue, and wellness treatments in our tranquil spa environment.",
  keywords: "massage therapy, deep tissue massage, therapeutic massage, wellness, relaxation massage, sports massage",
  openGraph: {
    title: "Twin Brother's Massage Therapy",
    description: "Professional therapeutic massage services for your wellness",
    type: "website",
    url: "https://twinbrothers-massage.com",
  },
  robots: "index, follow",
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeWhyChooseUs />
      <HomeTestimonials />
      <HomeCTA />
    </>
  )
}
