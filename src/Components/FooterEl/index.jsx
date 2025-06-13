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
       "service_twinbrothers1",
        "template_9v41ay7",
        form.current,
        "ehY0W_DblRAKvNLN8"
      )
      .then(
        () => setSubmitted(true),
        (error) => console.error(error.text)
      );
  };

  return (
    <footer className="bg-[#1e1e1e] text-[#e4e4e4] pt-16 pb-10 px-6 md:px-16 font-[Lato]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + Brand */}
        <div className="col-span-1 md:col-span-2">
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
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            Rejuvenate your body and spirit with therapies like Swedish,
            Deep Tissue, Cupping, and Sound Healing. Pain relief, stress
            reduction, and wellness await you.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Swedish Massage</Link></li>
            <li><Link href="/new-born-baby-massage">New Born Baby Massage </Link></li>
            <li><Link href="/nutrition">Nutrition</Link></li>
             <li><Link href="#">Deep Tissue Therapy</Link></li>
            <li><Link href="/physiotherapy">Physiotherapy - Consultation & Sessions </Link></li>
            <li><Link href="#">Cupping Therapy</Link></li>
            <li><Link href="#">Sound Healing</Link></li>
            <li><Link href="#">Migraine & Sinus Relief</Link></li>
            <li><Link href="#">Frozen Shoulder Care</Link></li>
            <li><Link href="#">Slip Disc & Sciatica</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
             <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-[Playfair_Display] text-white">
            Stay Updated
          </h4>
          {submitted ? (
            <p className="text-green-400 font-medium">
              Thank you for subscribing!
            </p>
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

      {/* Contact + Copyright */}
      <div className="mt-14 text-sm text-gray-400 border-t border-gray-700 pt-6 text-center space-y-2">
        <div>
          📍 1st Floor, Raj Complex, Kanke Road, near CM House, Ranchi, Jharkhand
        </div>
        <div>
          📞 +91 62998 26209 &nbsp; | &nbsp; 📧 twinbrotherstherapy@contact.in
        </div>
        <div className="pt-2 text-gray-500">
          © {new Date().getFullYear()} Twin Brothers Therapy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
