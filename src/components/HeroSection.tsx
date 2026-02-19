import { Calendar, MapPin } from 'lucide-react';
import surveySparrowLogo from '../assets/gallery/SurveySparrow_Symbol_1.png';
import mealSnackImage from '../assets/meal and snack.png';
import twentyFourHoursImage from '../assets/24 Hours Preview from WhatsApp.png';
import internshipImage from '../assets/internshiop-opp.png';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-700"></div>
      </div>

      {/* Internship Opportunities Badge - Top Left Corner (Hidden on Mobile) */}
      <div className="hidden md:block absolute top-[140px] left-12 z-20 animate-bounce">
        <img
          src={internshipImage}
          alt="Internship Opportunities"
          className="w-56 h-56 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* SurveySparrow Presents */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <img
            src={surveySparrowLogo}
            alt="SurveySparrow Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <p className="text-lg md:text-xl text-white font-medium">
            <span className="font-bold text-2xl md:text-3xl text-[#2E9CA6]">
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
            <div className="flex flex-col items-center gap-1 text-lg md:text-xl text-teal-200/80 font-medium tracking-wide mt-4">
              <span>A National-level AI Hackathon organized by</span>
              <span className="font-bold text-white text-center">Department of Computing - Artificial Intelligence and Machine Learning</span>
              <span>in collaboration with</span>
              <span className="font-bold text-white">Student Developers Cell, CIT</span>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-300" />
              <span className="font-semibold tracking-wide">March 7-8, 2026</span>
            </div>
            <div className="w-px h-6 bg-teal-400/50"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-300" />
              <span className="font-semibold tracking-wide">CIT, Coimbatore</span>
            </div>
          </div>
        </div>

        {/* CTA Button with Stickers */}
        <div className="relative flex items-center justify-center">
          {/* 24 Hours Badge - Left of Button (Hidden on Mobile) */}
          <div className="hidden md:block absolute -left-32 lg:-left-40 rotate-[-15deg]">
            <img
              src={twentyFourHoursImage}
              alt="24 Hours Hackathon"
              className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_20px_rgba(20,184,166,0.4)]"
            />
          </div>

          {/* Register Button */}
          <a
            href="https://unstop.com/p/neoverse-26-coimbatore-institute-of-technology-cit-coimbatore-1643646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-teal-400/30 cursor-pointer"
            >
              Register Now
            </button>
          </a>

          {/* Meal and Snacks Badge - Right of Button (Hidden on Mobile) */}
          <div className="hidden md:block absolute -right-32 lg:-right-40 rotate-[15deg]">
            <img
              src={mealSnackImage}
              alt="Meals and Snacks"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-[0_0_30px_rgba(20,184,166,0.5)] border-2 border-teal-400/30"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
