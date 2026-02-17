import { Code2, Users, Lightbulb, Rocket } from 'lucide-react';

export default function SDCSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            About Student Developers Cell
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8 shadow-[0_0_20px_rgba(46,102,109,0.6)]"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-primary-100 leading-relaxed mb-4">
            The <span className="font-bold text-white">Student Developers Cell (SDC)</span> is a student-run technical club at <span className="font-bold text-blue-300">Coimbatore Institute of Technology</span>, dedicated to fostering a vibrant community of developers, innovators, and tech enthusiasts.
          </p>
          <p className="text-lg text-primary-100 leading-relaxed mb-4">
            We focus on empowering students through hands-on development experience, organizing hackathons, conducting technical workshops, and creating platforms for innovation. SDC is where ideas transform into reality, and students grow into skilled builders and problem solvers.
          </p>
          <p className="text-lg text-primary-100 leading-relaxed">
            From beginner-friendly coding sessions to advanced tech initiatives, SDC supports every student's journey in technology. We believe in learning by building, collaborating with peers, and making a real-world impact through code.
          </p>
        </div>
      </div>
    </section>
  );
}

