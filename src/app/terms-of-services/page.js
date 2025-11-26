"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-teal-50/40 to-white text-teal-900">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center text-teal-900">
          Terms of Service
        </h1>
        <p className="text-center text-teal-700 mb-12 max-w-2xl mx-auto">
          Please read these Terms of Service carefully before using Twin Brothers Therapy.
        </p>

        {/* Content */}
        <div className="space-y-10 text-teal-800 leading-relaxed">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Twin Brothers Therapy</strong>. By accessing our website or
              booking our services, you agree to comply with and be bound by these Terms of Service.
              If you disagree with any part of these terms, please do not use our website or services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              2. Services We Provide
            </h2>
            <p>
              Twin Brothers Therapy offers therapeutic wellness services including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Sports massage therapy</li>
              <li>Deep tissue massage therapy</li>
              <li>Swedish massage therapy</li>
              <li>Hijama / Wet cupping therapy</li>
              <li>Fire cupping therapy</li>
              <li>Dry cupping therapy</li>
              <li>Injury recovery & rehabilitation</li>
              <li>Sound healing therapy</li>
              <li>Ayurveda therapy</li>
            </ul>
            <p className="mt-3">
              These services are provided by trained and certified therapists at our Ranchi center.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              3. Eligibility
            </h2>
            <p>
              You must be at least 18 years old to book services. Minors may receive therapy only
              under parental/guardian consent and supervision.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              4. Appointments & Booking Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments must be made through our website, phone, or WhatsApp.</li>
              <li>Users cannot select past dates for booking.</li>
              <li>We may request an advance payment for confirmations.</li>
              <li>Arriving late may reduce your session time.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              5. Cancellation & Rescheduling
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must inform at least 6 hours before cancellation or rescheduling.</li>
              <li>Last-minute cancellation may result in a fee.</li>
              <li>Repeat no-shows may lead to refusal of future appointments.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              6. Payments & Pricing
            </h2>
            <p>
              All prices for services are subject to change without prior notice. Payments can be made via:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>UPI / QR Code</li>
              <li>Cash</li>
              <li>Bank transfer</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              7. Health Disclaimer
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Treatments provided are wellness therapies, not medical cures.</li>
              <li>Please inform the therapist about any injuries or health conditions beforehand.</li>
              <li>
                If you are pregnant, have heart issues, skin infections, or are under medication,
                please consult your doctor before taking therapy.
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              8. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when booking.</li>
              <li>Behave respectfully toward therapists and staff.</li>
              <li>Any form of inappropriate behavior will result in immediate termination of the session.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              9. Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Misuse of services</li>
              <li>Harassment of staff</li>
              <li>Providing false identity or information</li>
              <li>Using bots or unauthorized tools to access our website</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              10. Intellectual Property
            </h2>
            <p>
              All website content, images, branding, and text belong to Twin Brothers Therapy.
              No part may be reproduced without permission.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              Twin Brothers Therapy is not responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal misunderstandings of therapy outcomes</li>
              <li>Delays or cancellations due to unavoidable circumstances</li>
              <li>Medical complications arising from undisclosed health issues</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms of Service at any time.
              Continued use of the website means you accept these changes.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-3">
              13. Contact Us
            </h2>
            <p className="mb-2">For any questions regarding these terms, contact us:</p>
            <ul className="space-y-1">
              <li>📞 <strong>+91 62998 26209</strong></li>
              <li>📧 twinbrotherstherapy@contact.in</li>
              <li>📍 Ranchi, Jharkhand</li>
            </ul>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center mt-14">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
