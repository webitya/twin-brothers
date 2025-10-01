import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Twin Brothers Therapy",
  description: "Premium massage and wellness therapies in Ranchi, Jharkhand",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900 antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
