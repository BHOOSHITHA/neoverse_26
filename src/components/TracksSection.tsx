import { Brain, ExternalLink } from 'lucide-react';

export default function TracksSection() {
  const handleClick = () => {
    window.open('https://docs.google.com/document/d/1my4tsLX94w6wJSZrvuPmQW6YrStCBr32RirvmmxGRzE/edit?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Problem Statement
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8 opacity-80"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-[450px] max-w-[450px] aspect-square bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-8 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                AI Agents
              </h3>
            </div>

            <p className="text-base text-primary-100 leading-relaxed mb-8 flex-1">
              Innovate in real-world AI agent systems, with challenges especially given by <span className="font-bold text-blue-300">SurveySparrow</span>. Build solutions for intelligent automation, conversational AI, task orchestration, or multi-agent collaboration to improve efficiency and resilience.
            </p>

            <button
              onClick={handleClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-medium rounded-lg hover:from-primary-500 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Problem Statement
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
