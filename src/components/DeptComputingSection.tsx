
import { Monitor, Cpu, Globe, GraduationCap } from 'lucide-react';

export default function DeptComputingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            About Department of Computing
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8 opacity-80"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-center">
          <p className="text-primary-100">
            The <span className="font-bold text-white">Department of Computing</span> at Coimbatore Institute of Technology, established in 1988 at the dawn of the IT revolution, has been a pioneer in promoting excellence in computer science education.
          </p>

          <p className="text-primary-100">
            Over the years, it has evolved into one of the most vibrant and dynamic departments of the institute, driven by a team of committed faculty and highly motivated students. The department emphasizes strong theoretical foundations, practical skills, and innovation to meet the ever-changing demands of the computing industry.
          </p>

          <p className="text-primary-100">
            With a focus on academic excellence, research, and industry relevance, it continues to nurture competent and socially responsible computing professionals.
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
