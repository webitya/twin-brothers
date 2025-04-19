"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SpaIcon from "@mui/icons-material/Spa";

const Footer = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",      // replace with your actual service ID
        "YOUR_TEMPLATE_ID",     // replace with your actual template ID
        form.current,
        "YOUR_PUBLIC_KEY"       // replace with your actual public key
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
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Logo and Description */}
        <div>
          <div className="flex items-center mb-3 text-white text-2xl font-semibold">
            <SpaIcon className="mr-2 text-pink-400" />
            ZenTherapy
          </div>
          <p className="text-gray-400">
            Rest, relax and renew your body & soul with our healing therapies...
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Swedish Massage</li>
            <li>Deep Tissue Massage</li>
            <li>Hot Stone Massage</li>
            <li>Thai Massage</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe Now</h4>
          {submitted ? (
            <p className="text-green-400">Thank you for subscribing!</p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
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

      <div className="text-center text-gray-500 mt-16 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} ZenTherapy. All rights reserved....
      </div>
    </footer>
  );
};

export default Footer;
