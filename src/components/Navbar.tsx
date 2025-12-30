import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Resources', id: 'resources' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleLinkClick('home')}
        >
          <img src={LOGO_URL} alt="EagleEye Logo" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tighter text-white group-hover:text-[#00adef] transition-colors">
              EagleEye
            </span>
            <span className="text-[9px] font-black tracking-[0.15em] text-[#00adef] uppercase">
              Cyber Technologies
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium tracking-wide uppercase transition-all hover:text-[#00adef] ${
                currentPage === link.id ? 'text-[#00adef]' : 'text-gray-400'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="bg-[#00adef] hover:bg-[#33beff] text-black px-6 py-2 rounded-sm text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            CONTACT SPECIALISTS <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0b] border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-bold text-left uppercase ${
                currentPage === link.id ? 'text-[#00adef]' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="bg-[#00adef] text-black p-4 rounded-sm font-bold text-center uppercase"
          >
            Consult with Experts
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;