import { Users, Clock, Wallet, CheckCircle, FileText, Calendar } from 'lucide-react';

export default function RegistrationSection() {
  const details = [
    {
      icon: Users,
      title: 'Eligibility',
      description: 'Open to all College Students across India'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: '2-4 members per team.'
    },
    {
      icon: Clock,
      title: 'Duration',
      description: '24-hour Non-Stop Hackathon'
    },
    {
      icon: Wallet,
      title: 'Registration Fee',
      description: '₹320/person (Food and Refreshments will be provided)'
    },
    {
      icon: CheckCircle,
      title: 'Selection Process',
      description: 'Abstract submissions followed by 24-hour hackathon. All registered students can participate'
    },
    {
      icon: FileText,
      title: 'What You Get',
      description: '₹30K Prize Pool, Certificates, Internship Opportunities & Networking'
    }
  ];


  return (
    <section id="register" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Registration Details
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6 opacity-80"></div>
          <p className="text-lg text-primary-100">
            Everything you need to know before you register
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{detail.title}</h3>
                    <p className="text-primary-100 text-sm leading-relaxed">{detail.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <a
            href="https://unstop.com/p/neoverse-26-coimbatore-institute-of-technology-cit-coimbatore-1643646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white font-bold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all border border-primary-400/30 hover:-translate-y-1 cursor-pointer"
            >
              Register Now
            </button>
          </a>
        </div>


      </div>
    </section>
  );
}
