import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarEl from "@/Components/NavbarEl";
import Footer from "@/Components/FooterEl";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Twin Brothers Massage Therapy",
  description: "Twin Brothers Massage Therapy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarEl />
        {children}
        <Footer />

        {/* Floating Icons */}
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916299826209"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              padding: "12px",
              borderRadius: "50%",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
          </a>

          {/* Phone Button */}
          <a
            href="tel:6299826209"
            style={{
              backgroundColor: "#0A66C2",
              padding: "12px",
              borderRadius: "50%",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <PhoneIcon />
          </a>
        </div>
      </body>
    </html>
  );
}
