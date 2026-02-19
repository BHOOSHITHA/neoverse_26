import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import favicon from '../assets/favicon.png';
import citLogo from '../assets/images.jpeg';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Prizes', id: 'prizes' },
    { name: 'Timeline', id: 'journey' },
    { name: 'Register', id: 'register' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isOpen ? 'duration-0' : 'duration-300'} ${scrolled || isOpen
      ? 'bg-black backdrop-blur-md border-b border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.3)]'
      : 'bg-black/50 backdrop-blur-md border-b border-teal-500/40'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group z-50">

          {/* Favicon */}
          <img
            src={favicon}
            alt="NeoVerse"
            className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
          />

          {/* Vertical Separator */}
          <div className="w-px h-8 bg-white/30 hidden md:block"></div>

          {/* CIT Branding */}
          <div className="flex items-center gap-2">
            <img
              src={citLogo}
              alt="CIT"
              className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full bg-white/10"
            />
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-xs md:text-sm leading-tight text-left">Coimbatore Institute of Technology</span>
            </div>
          </div>
        </Link>

        {isHomePage && (
          <>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-teal-200 hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-teal-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 h-screen bg-black/90 backdrop-blur-md z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-2xl font-bold text-teal-100 hover:text-white hover:scale-110 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

