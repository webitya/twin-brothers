import AboutHero from "@/components/AboutPage/AboutHero"
import AboutMission from "@/components/AboutPage/AboutMission"
import AboutStats from "@/components/AboutPage/AboutStats"
import AboutTeam from "@/components/AboutPage/AboutTeam"

export const metadata = {
  title: "About Us - Twin Brother's Massage Therapy | Professional Therapists",
  description:
    "Discover Twin Brother's Massage Therapy story. Learn about our mission, experienced team of certified therapists, and 15+ years of therapeutic excellence.",
  keywords:
    "about massage therapy, professional therapists, wellness services, certified massage therapists, therapeutic experience",
  openGraph: {
    title: "About Twin Brother's Massage Therapy",
    description: "Professional therapeutic massage therapy services with 15+ years of experience",
    type: "website",
    url: "https://twinbrothers-massage.com/about",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://twinbrothers-massage.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
    </>
  )
}
