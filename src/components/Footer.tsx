import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8 text-center">
          {/* Branding */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="text-3xl font-black">NeoVerse</span>
              <span className="px-2 py-1 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-sm font-bold rounded">
                26
              </span>
            </div>
            <p className="text-white/80 max-w-xs">
              A Hackathon organized by Department of Computing - AI & ML and SDC, CIT
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4 text-lg">Location</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/oXDPwZKL2MhkWShR9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm hover:text-primary-300 transition-colors underline"
                  >
                    Coimbatore Institute of Technology<br />
                    Coimbatore, Tamil Nadu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-white/60 text-sm">
            © 2026 NeoVerse 26 All rights reserved. | Developed with 💙 by Dept. of Computing - AIML X SDC, CIT
          </p>
        </div>
      </div>
    </footer>
  );
}


