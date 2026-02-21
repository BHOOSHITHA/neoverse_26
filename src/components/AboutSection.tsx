import { Lightbulb, Rocket, Users, Zap, Trophy, Code, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About NeoVerse 26
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8 opacity-80"></div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-justify">
            <p className="text-primary-100">
              <span className="font-bold text-white text-xl">NeoVerse 26</span> is a national-level AI hackathon conducted by the <span className="font-bold text-primary-300">Department of Computing - Artificial Intelligence and Machine Learning Association</span> and the <span className="font-bold text-blue-300">Student Developers Cell (SDC)</span> at Coimbatore Institute of Technology.
            </p>

            <p className="text-primary-100">
              This year marks a major milestone with our <span className="font-bold text-white">first-ever 24-hour hackathon</span>, bringing together talented students from across the nation for an intense innovation marathon.
            </p>

            <p className="text-primary-100">
              This is where <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">innovation meets execution</span>. NeoVerse 26 is designed for builders, problem solvers, and innovators who aspire to create real-world impact through technology. Whether you're coding a breakthrough solution, designing an intuitive interface, or architecting scalable systems, this is your platform.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {/* Internship Opportunity Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Internship Opportunities</h3>
              </div>
              <p className="text-primary-100 leading-relaxed">
                Top performers will get exclusive direct interview opportunities from our partners. Turn your hackathon success into career advancement! <span className="font-bold">*Opportunities will be based on performance and company decisions.</span>
              </p>
            </div>

            {/* Additional Perks Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Additional Perks</h3>
              </div>
              <p className="text-primary-100 leading-relaxed">
                Earn certificates of participation, connect with industry professionals, and expand your network with fellow innovators and mentors throughout the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

