export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: 'Registration Begins',
      description: 'Let\'s get innovating for a change',
      date: 'February 18 2026',
      icon: '✓'
    },
    {
      number: 2,
      title: 'Registration Ends',
      description: 'Final chance to register for the hackathon. Don\'t miss out!',
      date: 'February 24 2026',
      icon: '📝'
    },
    {
      number: 3,
      title: 'Team Shortlisting',
      description: 'Selected teams will be notified via email. Check your inbox!',
      date: 'Febraury 25 2026',
      icon: '○'
    },
    {
      number: 4,
      title: 'Hackathon Day',
      description: 'Opening ceremony, team check-in, and hacking begins!',
      date: 'March 07 2026',
      icon: '○'
    }
  ];

  return (
    <section id="journey" className="hidden md:block py-20 px-4 sm:px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6 opacity-80"></div>
          <p className="text-lg text-primary-100">
            Your roadmap to NeoVerse 26
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          {/* Vertical Line - Left Aligned */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-blue-600 to-primary-600 z-0 opacity-40"></div>

          {steps.map((step, index) => {
            return (
              <div key={index} className="relative mb-12 flex items-start">
                {/* Number Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-20 border-4 border-black flex-shrink-0">
                  {step.number}
                </div>

                {/* Card */}
                <div className="ml-8 flex-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg">{step.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-primary-300 font-semibold">{step.date}</p>
                      </div>
                    </div>
                    <p className="text-primary-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline - Only visible on mobile */}
        <style>{`
          @media (min-width: 768px) {
            .mobile-timeline-only {
              display: none !important;
            }
          }
        `}</style>
        <div className="mobile-timeline-only relative py-8 px-2">
          {/* Left Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-blue-600 to-primary-600 z-0 opacity-40"></div>

          <div className="space-y-20 sm:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl z-20 border-3 sm:border-4 border-black">
                  {step.number}
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0 bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4 sm:p-5 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-base">{step.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 break-words leading-tight">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-primary-300 font-semibold">{step.date}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-left break-words text-primary-100">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
