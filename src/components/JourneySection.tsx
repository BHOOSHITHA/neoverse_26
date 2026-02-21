import { Check } from 'lucide-react';

export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: 'Registration Begins',
      description: 'Let\'s get innovating for a change',
      date: 'February 21, 2026',
    },
    {
      number: 2,
      title: 'Abstract Submission',
      description: 'Submit your project abstract outlining your idea, objectives, and implementation approach. This is a mandatory step for shortlisting into the hackathon',
      date: 'February 21 - March 02, 2026',
    },
    
    {
      number: 3,
      title: 'Registration Ends',
      description: 'Final chance to register for the hackathon. Don\'t miss out!',
      date: 'March 2, 2026',
    },
    {
      number: 4,
      title: 'Idea Refinement Session',
      description: 'A company-led interactive session to help teams refine, strengthen, and enhance their project ideas. Participation is optional but highly recommende',
      date: 'March 02, 2026',
    },

    {
      number: 5,
      title: 'Hackathon Day',
      description: 'Inaugural Ceremony, team check-in, and hacking begins!',
      date: 'March 07 - 08, 2026',
    }
  ];

  const isCompleted = (dateString: string) => {
    const today = new Date();
    // Normalize date string to ensure consistent parsing
    const eventDate = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    return today >= eventDate;
  };

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
          {/* Vertical Line - Left Aligned */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-blue-600 to-primary-600 z-0 opacity-40"></div>

          {steps.map((step, index) => {
            const completed = isCompleted(step.date);
            return (
              <div key={index} className="relative mb-12 flex items-start group">
                {/* Number Circle / Checkmark */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-20 border-4 border-black flex-shrink-0 transition-all duration-300 bg-gradient-to-br from-primary-600 to-blue-600`}>
                  {completed ? <Check className="w-8 h-8" /> : step.number}
                </div>

                {/* Card */}
                <div className="ml-8 flex-1">
                  <div className={`backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 bg-white/5 border-primary-500/20 hover:border-primary-400/40 hover:bg-white/10`}>
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="text-xl font-bold mb-1 text-white">{step.title}</h3>
                      <p className="text-sm font-semibold text-primary-300">{step.date}</p>
                    </div>
                    <p className="text-primary-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative py-8 px-2">
          {/* Left Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-blue-600 to-primary-600 z-0 opacity-40"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const completed = isCompleted(step.date);
              return (
                <div key={index} className="relative flex items-start gap-4 sm:gap-6">
                  {/* Number Circle / Checkmark */}
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl z-20 border-3 sm:border-4 border-black transition-all duration-300 bg-gradient-to-br from-primary-600 to-blue-600`}>
                    {completed ? <Check className="w-6 h-6" /> : step.number}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 min-w-0 backdrop-blur-sm border rounded-lg p-4 sm:p-5 transition-all duration-300 bg-white/5 border-primary-500/20`}>
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="text-sm sm:text-base font-bold mb-1 break-words leading-tight text-white">{step.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-primary-300">{step.date}</p>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-left break-words text-primary-100">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
