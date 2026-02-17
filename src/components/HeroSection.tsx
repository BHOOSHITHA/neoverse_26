import { Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* SurveySparrow Presents */}
        <div className="mb-6">
          <p className="text-lg md:text-xl text-teal-200/80 font-medium">
            <span className="font-bold text-2xl md:text-3xl text-cyan-300">
              SurveySparrow
            </span>
            {' '}presents
          </p>
        </div>

        {/* Main Title - Glowing White */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              NeoVerse
            </h1>
            <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-2xl text-2xl opacity-90">
              '26
            </span>
          </div>

          {/* Tagline */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-3 tracking-wide uppercase">
              Where Innovation Meets Execution
            </h2>
            <p className="text-lg md:text-xl text-teal-200/80 font-medium tracking-wide">
              A National-Level Hackathon
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-300" />
              <span className="font-semibold tracking-wide">March 7-8, 2025</span>
            </div>
            <div className="w-px h-6 bg-teal-400/50"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-300" />
              <span className="font-semibold tracking-wide">CIT, Coimbatore</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://unstop.com/p/neoverse-26-coimbatore-institute-of-technology-cit-coimbatore-1634365"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-teal-400/30 cursor-pointer"
          >
            Register Now
          </button>
        </a>

        {/* Organizer */}
        <p className="mt-8 text-teal-200">
          Organized by <span className="font-bold text-white">M.Sc AIML X SDC, CIT</span>
        </p>
      </div>
    </section>
  );
}

