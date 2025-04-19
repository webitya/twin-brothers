import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarEl from "@/Components/NavbarEl";

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
    icon: "/favicon.ico", // path relative to the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarEl/>
        {children}
      </body>
    </html>
  );
}
