
import React from 'react';
import { LOGO_URL } from '../constants';
import { Twitter, Linkedin, Github, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="EagleEye Logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white tracking-tighter">EagleEye</span>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#00adef] uppercase">
                  Cyber Technologies
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the global frontier in cybersecurity operations, government resilience, and enterprise-grade asset protection. 
              Certified and ready for world-class defense.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => onNavigate?.('contact')}
                className="bg-[#00adef] hover:bg-[#33beff] text-black px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_15px_rgba(0,173,239,0.2)]"
              >
                Contact Us <ChevronRight size={14} />
              </button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Twitter className="text-gray-500 hover:text-[#00adef] cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-500 hover:text-[#00adef] cursor-pointer transition-colors" size={20} />
              <Github className="text-gray-500 hover:text-[#00adef] cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('services')}>Managed Detection & Response</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('services')}>Cloud Security Posture</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('services')}>Incident Preparedness</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('services')}>Zero Trust Architecture</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('services')}>Compliance Auditing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('about')}>Our Mission</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('about')}>Executive Leadership</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('about')}>Contract Vehicles</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('resources')}>Investor Relations</li>
              <li className="hover:text-[#00adef] cursor-pointer transition-colors" onClick={() => onNavigate?.('contact')}>Contact Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#00adef] mt-1 shrink-0" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  7375 Executive Place, Suite 400<br />
                  Lanham, MD 20706
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#00adef] shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium tracking-tight">
                  +1 (301) 818 - 2005 
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#00adef] shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium">
                  contact@eagleeyecybertech.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-gray-600 text-xs font-medium">
            © 2024 EagleEye Cyber Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs uppercase font-semibold">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">CMMC Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
