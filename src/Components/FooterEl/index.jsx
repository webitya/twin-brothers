"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SpaIcon from "@mui/icons-material/Spa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your actual values
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="bg-[#1e1e1e] text-[#e4e4e4] pt-16 pb-10 px-6 md:px-16 font-[Lato]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & Brand */}
        <div>
          <div className="flex items-center mb-3">
            <Image
              src="/logo.webp"
              alt="Twin Brothers Therapy Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <span className="ml-3 text-2xl font-semibold font-[Playfair_Display] text-white">
              Twin Brothers Therapy
            </span>
          </div>
          <p className="text-gray-400 mt-2">
            Rejuvenate your body and spirit with our luxurious massage and therapy treatments.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">Our Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Swedish Massage</li>
            <li>Deep Tissue Therapy</li>
            <li>Hot Stone Massage</li>
            <li>Thai Bodywork</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">About Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">Stay Updated</h4>
          {submitted ? (
            <p className="text-green-400 font-medium">Thank you for subscribing!</p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 transition py-2 rounded-md text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-16 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} Twin Brothers Therapy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
