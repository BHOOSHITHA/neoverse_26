import { Phone, Mail, User } from 'lucide-react';

export default function ContactsSection() {
  const contacts = [
    {
      name: 'Vinoth Kumar A',
      role: 'Student Organizer',
      phone: '+91 63800 91722'
    },
    {
      name: 'Sarvesh PV',
      role: 'Student Organizer',
      phone: '+91 88078 07807'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6 opacity-80"></div>
          <p className="text-lg text-primary-100">
            Have questions? Reach out to our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 w-full flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <User className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1 text-center">{contact.name}</h3>
              <p className="text-sm text-primary-300 mb-4 text-center h-10 flex items-center justify-center">{contact.role}</p>

              <div className="space-y-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-sm text-primary-100 hover:text-white transition-colors justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
