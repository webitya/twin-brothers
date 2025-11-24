import BlogHero from "@/components/BlogPage/BlogHero"
import BlogList from "@/components/BlogPage/BlogList"

export const metadata = {
  title: "Wellness Blog - Twin Brother's Massage Therapy | Tips & Insights",
  description:
    "Explore expert tips, insights, and knowledge about massage therapy, wellness practices, and holistic health. Learn how to maximize your therapeutic benefits.",
  keywords: "massage therapy blog, wellness tips, health insights, therapeutic advice, massage benefits",
  openGraph: {
    title: "Wellness Blog - Twin Brother's Massage Therapy",
    description: "Expert tips and insights about massage therapy and wellness",
    type: "website",
    url: "https://twinbrothers-massage.com/blogs",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://twinbrothers-massage.com/blogs",
  },
}

export default function BlogsPage() {
  return (
    <>
     
      <BlogList />
    </>
  )
}
