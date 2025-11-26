export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-teal-50/40 to-white text-teal-900">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-teal-900">
          Privacy Policy
        </h1>

        <p className="text-teal-700 mb-6 text-sm">
          Effective Date: February 2025
        </p>

        <p className="text-teal-800 leading-relaxed mb-6">
          At <strong>Twin Brothers Therapy, Ranchi</strong>, we value your trust and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our
          website or use our services.
        </p>

        {/* 1 — Information We Collect */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">1. Information We Collect</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We may collect the following types of information from you:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-teal-800">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Preferred Appointment Date & Service</li>
          <li>Messages shared via WhatsApp or contact forms</li>
          <li>Your activity on our website (via analytics tools)</li>
        </ul>

        {/* 2 — How We Use Your Information */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">2. How We Use Your Information</h2>
        <p className="text-teal-800 mb-4">
          We use your data only for legitimate business purposes, including:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-teal-800">
          <li>Scheduling your massage therapy or wellness session</li>
          <li>Responding to inquiries or appointment requests</li>
          <li>Customer support and service updates</li>
          <li>Improving our website and user experience</li>
          <li>Marketing communication (only with consent)</li>
        </ul>

        {/* 3 — How We Store & Protect Your Data */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">
          3. How We Store & Protect Your Data
        </h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We implement industry-standard security practices to protect your information from unauthorized access, misuse, 
          loss, or disclosure. Your data is securely stored and accessed only by authorized personnel.
        </p>

        {/* 4 — Sharing of Information */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">
          4. Sharing of Information
        </h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We do <strong>NOT</strong> sell, rent, or trade your personal information.  
          We may share your data only under the following conditions:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-teal-800">
          <li>When required by law enforcement or legal processes</li>
          <li>With trusted third-party service providers (e.g., website analytics, hosting)</li>
          <li>For booking confirmation via WhatsApp or SMS</li>
        </ul>

        {/* 5 — WhatsApp Communications */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">
          5. WhatsApp Communication
        </h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          By contacting us or clicking the WhatsApp button on our website, you consent to receive messages related to your
          appointment, service inquiries, or wellness recommendations.
        </p>

        {/* 6 — Cookies & Tracking */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">6. Cookies & Website Tracking</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We use cookies and analytics tools to improve website performance, personalize user experience, and understand
          visitor interactions.  
          You can disable cookies in your browser settings anytime.
        </p>

        {/* 7 — Your Rights */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">7. Your Rights</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-teal-800">
          <li>Request access to the information we store</li>
          <li>Request corrections to inaccurate information</li>
          <li>Withdraw consent for marketing communication</li>
          <li>Request deletion of your personal data</li>
        </ul>

        {/* 8 — Children's Privacy */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">8. Children s Privacy</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We do not knowingly collect personal data from children under 13, except in cases where parents book therapy
          sessions for minors. All such information is handled with strict confidentiality.
        </p>

        {/* 9 — External Links */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">9. External Links</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          Our website may contain links to external sites (e.g., Facebook, Instagram). We are not responsible for their
          privacy practices or content.
        </p>

        {/* 10 — Changes to This Policy */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">10. Changes to This Policy</h2>
        <p className="text-teal-800 leading-relaxed mb-4">
          We may update this Privacy Policy occasionally. Updates will be posted on this page with a new effective date.
        </p>

        {/* Contact Section */}
        <h2 className="text-2xl font-serif font-semibold mt-10 mb-3">Contact Us</h2>
        <p className="text-teal-800 leading-relaxed">
          If you have any questions about our Privacy Policy, feel free to contact us:
        </p>

        <ul className="mt-3 space-y-1 text-teal-800">
          <li>Email: <a href="mailto:twinbrotherstherapy@contact.in" className="text-teal-900 font-semibold">twinbrotherstherapy@contact.in</a></li>
          <li>Phone: <a href="tel:+916299826209" className="text-teal-900 font-semibold">+91 62998 26209</a></li>
          <li>Location: Raj Complex, Kanke Road, Ranchi, Jharkhand – 834008</li>
        </ul>
      </div>
    </section>
  );
}
