export const metadata = {
  title: "Contact Us - Twin Brother's Massage Therapy | Get In Touch",
  description:
    "Contact Twin Brother's Massage Therapy for questions about our services. We're here to help with your wellness journey.",
  keywords: "contact massage therapy, customer support, massage inquiries",
  openGraph: {
    title: "Contact Us - Twin Brother's Massage Therapy",
    description: "Reach out to our team with any questions about our massage therapy services",
    type: "website",
    url: "https://twinbrothers-massage.com/contact",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://twinbrothers-massage.com/contact",
  },
}

import ContactClient from "./contactClient"

export default function ContactPage() {
  return <ContactClient />
}
