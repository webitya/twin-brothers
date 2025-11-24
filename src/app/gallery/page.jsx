import GalleryHero from "@/components/GalleryPage/GalleryHero"
import GalleryGrid from "@/components/GalleryPage/GalleryGrid"

export const metadata = {
  title: "Gallery - Twin Brother's Massage Therapy | Spa Environment Photos",
  description:
    "Tour our serene spa environment and professional massage therapy facilities. See the peaceful setting where your wellness journey begins.",
  keywords: "spa gallery, massage therapy photos, wellness environment, spa facilities, treatment rooms",
  openGraph: {
    title: "Gallery - Twin Brother's Massage Therapy",
    description: "Tour our peaceful spa and massage therapy environment",
    type: "website",
    url: "https://twinbrothers-massage.com/gallery",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://twinbrothers-massage.com/gallery",
  },
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
