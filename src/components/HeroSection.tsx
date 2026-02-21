import { Calendar, MapPin } from 'lucide-react';
import surveySparrowLogo from '../assets/gallery/SurveySparrow_Symbol_1.png';
import { useEffect } from 'react';
import { DraggableRope } from './ui/gsap-draggable-rope';

export default function HeroSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


  return (
    <section id="home" className="min-h-screen flex items-center bg-transparent pt-20 relative">
      {/* Spline 3D Background - Right Aligned */}
      <div className="hidden lg:block absolute -right-[10%] top-0 bottom-0 w-[70%] pointer-events-none z-[1]">
        <spline-viewer url="https://prod.spline.design/847hFSdYZYit59mg/scene.splinecode"></spline-viewer>
      </div>

      {/* Draggable Rope with Internship Text - Top Right */}
      <div className="hidden lg:flex absolute top-0 right-[512px] items-start gap-6 z-[2]">
        <DraggableRope 
          ropeHeight={200}
          iconSize={100}
          minAngle={5}
          initialAngle={5}
          gravity={12}
        />
        <div className="mt-48 text-right">
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text">
            Internship
          </h3>
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text">
            Opportunities
          </h3>
        </div>
      </div>

      {/* Text Content - Left Aligned */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-20">
        <div className="max-w-2xl text-left space-y-8">
          {/* SurveySparrow Presents */}
          <div className="flex items-center gap-3">
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

          {/* Main Title */}
          <div>
            <div className="flex items-center gap-3 mb-6 relative">
              <h1 
                className="text-5xl md:text-7xl font-extrabold tracking-tight relative"
              >
                <span 
                  className="relative inline-block animate-glitch text-white"
                  data-text="NeoVerse"
                >
                  NeoVerse
                </span>
              </h1>
              <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-2xl text-2xl opacity-90">
                '26
              </span>
            </div>

            {/* Tagline */}
            <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-3 tracking-wide uppercase">
              Where Innovation Meets Execution
            </h2>
            <div className="flex flex-col gap-1 text-base md:text-lg text-teal-200/80 font-medium tracking-wide mt-4">
              <span>A National-level AI Hackathon organized by</span>
              <span className="font-bold text-white">Department of Computing - Artificial Intelligence and Machine Learning</span>
              <span>in collaboration with</span>
              <span className="font-bold text-white">Student Developers Cell, CIT</span>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap items-center gap-6 text-white">
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

          {/* CTA Button */}
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
