
import ServiceCards from "@/components/ServicesPage/ServiceCards"
import ServiceCTA from "@/components/ServicesPage/ServiceCTA"

export const metadata = {
  title: "Services - Twin Brother's Massage Therapy | Professional Therapeutic Massage",
  description:
    "Explore our comprehensive range of therapeutic massage services including deep tissue, hot stone, aromatherapy, sports massage, and prenatal massage treatments.",
  keywords:
    "massage services, therapeutic massage, deep tissue massage, hot stone massage, aromatherapy massage, sports massage, prenatal massage",
  openGraph: {
    title: "Services - Twin Brother's Massage Therapy",
    description: "Professional therapeutic massage services tailored to your wellness needs",
    type: "website",
    url: "https://twinbrothers-massage.com/services",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://twinbrothers-massage.com/services",
  },
}

export default function ServicesPage() {
  return (
    <>
   
      <ServiceCards />
      <ServiceCTA />
    </>
  )
}
