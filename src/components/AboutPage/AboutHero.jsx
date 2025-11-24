"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">

      {/* Background image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/mnt/data/6741d815-e326-4c25-ae89-b4af6ba19079.png')" }}
      ></div>

      {/* Light gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/90 via-teal-50/85 to-white/90 backdrop-blur-sm"></div>

      {/* Moving gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-200/50 blur-[140px] rounded-full animate-slowFloat"></div>
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-emerald-200/45 blur-[150px] rounded-full animate-slowFloat2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-200/40 blur-[170px] rounded-full animate-slowFloat3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">

          {/* Text Content */}
          <div className="max-w-xl animate-fadeIn">
            <p className="inline-block px-4 py-1 mb-4 rounded-full bg-teal-100 text-teal-700 text-xs tracking-[0.25em] font-semibold shadow-sm">
              ABOUT US
            </p>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 leading-tight">
              Our Healing Journey
            </h1>

            <p className="mt-5 text-lg text-teal-800 leading-relaxed">
              Twin Brothers Therapy was built on one belief — every person deserves
              <span className="font-semibold"> holistic, comforting, expert therapeutic care</span>
              for a healthier life.
            </p>

            <p className="mt-4 text-lg text-teal-800 leading-relaxed">
              With over 15 years of professional experience, our certified therapists have helped
              thousands reduce pain, recover faster, and restore balance.
            </p>

            <p className="mt-4 text-base text-teal-700 leading-relaxed">
              Our approach blends advanced techniques with a calm, nurturing environment—
              ensuring every session is deeply restorative.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-teal-200/30 blur-xl"></div>

            <img
              src="/massage-therapy-studio-interior.jpg"
              alt="Twin Brothers Therapy Studio"
              className="rounded-3xl w-[88%] shadow-2xl border border-teal-100 hover:shadow-teal-400/40 transition-all duration-300"
            />
          </div>

        </div>
      </div>

      {/* Floating Blob Animations */}
      <style>
        {`
          @keyframes slowFloat {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-25px) translateX(20px); }
            100% { transform: translateY(0) translateX(0); }
          }

          @keyframes slowFloat2 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(35px) translateX(-25px); }
            100% { transform: translateY(0) translateX(0); }
          }

          @keyframes slowFloat3 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-30px) translateX(-20px); }
            100% { transform: translateY(0) translateX(0); }
          }

          .animate-slowFloat { animation: slowFloat 14s ease-in-out infinite; }
          .animate-slowFloat2 { animation: slowFloat2 18s ease-in-out infinite; }
          .animate-slowFloat3 { animation: slowFloat3 22s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
