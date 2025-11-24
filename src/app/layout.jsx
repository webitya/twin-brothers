import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Twin Brother's Massage Therapy - Professional Therapeutic Massage",
  description:
    "Experience premium therapeutic massage services. Specializing in relaxation, deep tissue, and wellness treatments.",
  keywords: "massage therapy, deep tissue massage, therapeutic massage, wellness",
  openGraph: {
    title: "Twin Brother's Massage Therapy",
    description: "Professional therapeutic massage services",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  themeColor: "#8B6B47",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
