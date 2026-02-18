
import { Monitor, Cpu, Globe, GraduationCap } from 'lucide-react';

export default function DeptComputingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            About Department of Computing - AI & ML
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8 opacity-80"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-justify">
          <p className="text-primary-100">
            The <span className="font-bold text-white">Department of M.Sc. Artificial Intelligence and Machine Learning</span> is dedicated to advancing knowledge and innovation in intelligent systems that learn, adapt, and make autonomous decisions. It delivers a rigorous, interdisciplinary curriculum integrating artificial intelligence, data science, and advanced computing principles.
          </p>

          <p className="text-primary-100">
            The department emphasizes project-based and laboratory-intensive learning to strengthen theoretical and practical competencies. Research-driven faculty actively mentor students in emerging domains such as Machine Learning, Data Analytics, Cloud Computing, and Intelligent Systems. Students engage in collaborative and individual projects addressing real-world technological challenges.
          </p>

          <p className="text-primary-100">
            The academic environment fosters analytical thinking, innovation, and technical excellence. Graduates are equipped with industry-relevant skills to design, develop, and deploy AI-enabled solutions. The department aims to produce competent AI professionals capable of contributing to cutting-edge technological advancements and digital transformation.
          </p>
        </div>

        {/* Decorative Grid items (optional, kept simple as requested) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-80">
          <div className="bg-white/5 backdrop-blur-sm border border-primary-500/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <Monitor className="w-8 h-8 text-primary-400 mb-2" />
            <span className="text-primary-100 font-medium">Industry Ready</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-primary-500/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <Cpu className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-primary-100 font-medium">Innovation</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-primary-500/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <Globe className="w-8 h-8 text-primary-400 mb-2" />
            <span className="text-primary-100 font-medium">Global Impact</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-primary-500/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <GraduationCap className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-primary-100 font-medium">Excellence</span>
          </div>
        </div>

      </div>
    </section>
  );
}
