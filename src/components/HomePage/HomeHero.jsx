import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50 min-h-[85vh] flex items-center">

      {/* Floating Blur Objects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-200/40 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-teal-300/40 blur-[110px] rounded-full animate-floatSlow"></div>
      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-teal-100/50 blur-[150px] rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 md:py-16 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fadeIn">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-teal-900 leading-tight">
              Relaxation Meets  
              <span className="block text-teal-700">Professional Healing</span>
            </h1>

            <p className="text-lg md:text-xl text-teal-800/90 leading-relaxed max-w-xl">
              Transform your body and mind with our deeply soothing therapeutic massages—designed 
              to release stress, ease muscle tension, and bring balance back into your daily life.
            </p>

            {/* SUB-HEAD NEXT TO CTA */}
            <p className="text-teal-700 font-medium text-sm md:text-base">
              Choose from a range of premium massage therapies designed for complete rejuvenation.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/leads"
                className="bg-teal-600 text-white px-8 py-3 rounded-full text-base font-semibold 
                shadow-lg shadow-teal-200 hover:bg-teal-500 transition-all text-center"
              >
                Book Now
              </Link>

              <Link
                href="/services"
                className="border border-teal-600 text-teal-700 px-8 py-3 rounded-full text-base font-semibold 
                hover:bg-teal-600 hover:text-white transition-all text-center"
              >
                View Services
              </Link>
            </div>

            {/* PREMIUM BADGES */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-5 pt-4">

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
                <p className="text-sm text-teal-900 font-medium">Certified Therapists</p>
              </div>


              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
                <p className="text-sm text-teal-900 font-medium">Stress Relief</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
                <p className="text-sm text-teal-900 font-medium">Calming Ambience</p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end animate-slideIn">
            <div className="absolute -top-5 -left-5 w-36 h-36 bg-teal-200/50 blur-2xl rounded-full"></div>

            <img
              src="/serene-spa-massage-therapy-environment-with-candle.jpg"
              alt="Luxury Spa Setup"
              className="relative w-full max-w-md rounded-2xl shadow-2xl border border-teal-100 object-cover"
            />
          </div>

        </div>
      </div>

      {/* Light custom animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes floatSlow {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-15px) translateX(10px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-floatSlow {
            animation: floatSlow 10s ease-in-out infinite;
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
            opacity: 0;
          }
          @keyframes slideIn {
            0% { transform: translateX(50px); opacity: 0; }
            100% { transform: translateX(0px); opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
}
