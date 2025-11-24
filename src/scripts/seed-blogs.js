// Optional: Seed sample blog posts into the database
import mongoose from "mongoose"
import Blog from "../models/Blog.js"

const sampleBlogs = [
  {
    title: "The Benefits of Regular Massage Therapy",
    metaTitle: "Benefits of Regular Massage Therapy | Twin Brother's",
    metaDescription:
      "Discover the numerous health benefits of regular massage therapy including stress relief, improved circulation, and better sleep quality.",
    slug: "benefits-regular-massage-therapy",
    mainContent:
      "Regular massage therapy offers numerous physical and mental health benefits. From reducing muscle tension to improving circulation, massage is an essential part of holistic wellness. Scientific research has shown that consistent massage sessions can lead to decreased anxiety, better sleep quality, and improved overall well-being.",
    bulletPoints: [
      "Reduces muscle tension and promotes flexibility",
      "Improves blood circulation and lymphatic drainage",
      "Decreases anxiety and promotes relaxation",
      "Enhances sleep quality",
      "Boosts immune system function",
      "Relieves chronic pain symptoms",
    ],
    featuredImage: "https://via.placeholder.com/600x400?text=Massage+Benefits",
  },
  {
    title: "Deep Tissue Massage: What to Expect",
    metaTitle: "Deep Tissue Massage Guide | Twin Brother's Massage Therapy",
    metaDescription:
      "Learn what to expect during a deep tissue massage session and how it can help with chronic pain and muscle tension.",
    slug: "deep-tissue-massage-guide",
    mainContent:
      "Deep tissue massage is a therapeutic technique that focuses on the deeper layers of muscle and connective tissue. This type of massage is ideal for individuals with chronic pain or athletes looking to enhance recovery. During a deep tissue session, your therapist will use slower, more forceful strokes to reach the innermost layers of your muscles.",
    bulletPoints: [
      "Targets deeper muscle layers",
      "Ideal for chronic pain relief",
      "Helps with sports injuries",
      "Breaks up scar tissue",
      "Improves athletic performance",
      "May require recovery time",
    ],
    featuredImage: "https://via.placeholder.com/600x400?text=Deep+Tissue",
  },
  {
    title: "Aromatherapy Massage for Wellness",
    metaTitle: "Aromatherapy Massage Benefits | Twin Brother's",
    metaDescription:
      "Explore how essential oils and aromatherapy massage can enhance your wellness journey and promote emotional balance.",
    slug: "aromatherapy-massage-wellness",
    mainContent:
      "Aromatherapy massage combines the therapeutic benefits of massage with the healing properties of essential oils. This holistic approach addresses both physical and emotional well-being. Different oils have different properties: lavender promotes relaxation, peppermint energizes, and eucalyptus supports respiratory health.",
    bulletPoints: [
      "Combines physical and emotional benefits",
      "Essential oils enhance the healing process",
      "Promotes emotional balance and clarity",
      "Supports better sleep and relaxation",
      "Boosts immune function naturally",
      "Customizable based on your needs",
    ],
    featuredImage: "https://via.placeholder.com/600x400?text=Aromatherapy",
  },
  {
    title: "Aditya Kumar's Massage Wellness Guide",
    metaTitle: "Wellness Guide by Aditya Kumar | Twin Brother's Massage",
    metaDescription:
      "Comprehensive guide to massage therapy and wellness practices by our expert therapist Aditya Kumar.",
    slug: "aditya-kumar",
    mainContent:
      "Welcome to our comprehensive wellness guide. In this article, we explore the transformative power of massage therapy and its role in modern wellness practices. **Massage therapy is not just a luxury** - it's a scientifically-proven health intervention that can dramatically improve your quality of life.\n\nOur approach at Twin Brother's Massage combines traditional techniques with modern understanding of human anatomy. We believe that **wellness is a journey, not a destination**. Each massage session is tailored to your specific needs, whether you're seeking stress relief, pain management, or sports recovery.\n\nThe benefits of regular massage extend far beyond the immediate relaxation you feel during a session. Over time, consistent massage therapy can lead to improved sleep patterns, reduced anxiety, and better overall health outcomes.",
    bulletPoints: [
      "Personalized treatment plans for every client",
      "Expert therapists with years of experience",
      "Holistic approach to wellness",
      "Proven results in pain management",
      "Safe and professional environment",
      "Affordable wellness solutions",
    ],
    featuredImage: "https://via.placeholder.com/800x400?text=Aditya+Kumar+Wellness+Guide",
    youtubeVideos: [],
  },
]

async function seedBlogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("[v0] Connected to MongoDB")

    // Clear existing blogs
    await Blog.deleteMany({})
    console.log("[v0] Cleared existing blogs")

    // Insert sample blogs
    const created = await Blog.insertMany(sampleBlogs)
    console.log(`[v0] ✅ Successfully seeded ${created.length} blogs`)

    process.exit(0)
  } catch (error) {
    console.error("[v0] Seed error:", error)
    process.exit(1)
  }
}

seedBlogs()
