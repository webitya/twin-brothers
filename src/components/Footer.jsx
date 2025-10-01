import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 text-center md:text-left">
          <p>1st Floor, Raj Complex, Kanke Road, near CM House, Ranchi, Jharkhand</p>
          <p>
            <a className="hover:text-teal-700" href="tel:+916299826209">
              +91 62998 26209
            </a>{" "}
            |{" "}
            <a className="hover:text-teal-700" href="mailto:twinbrotherstherapy@contact.in">
              twinbrotherstherapy@contact.in
            </a>
          </p>
        </div>
        <p className="text-sm text-slate-600">© 2025 Twin Brothers Therapy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-slate-600 hover:text-teal-700">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-slate-600 hover:text-teal-700">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
