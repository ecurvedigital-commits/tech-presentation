import React from 'react';
import { ArrowUp } from 'lucide-react';
import ecurveLogoHd from '../assets/ecurve-logo-hd.png';
import { FINAL_SECTION_DATA } from '../data/presentationData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-gray-200/80 py-12">
      <div className="section-container flex flex-col gap-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center">
              <img
                src={ecurveLogoHd}
                alt="Ecurve Digital Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-base font-['Outfit'] text-[#0F172A]">
                Ecurve<span className="text-[#326DED]">Digital</span>
              </span>
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#64748B]">
            <a href="tel:+918430481583" className="hover:text-[#0F172A] transition-colors">
              {FINAL_SECTION_DATA.phone}
            </a>
            <span>•</span>
            <a href="mailto:ecurvedigital@gmail.com" className="hover:text-[#0F172A] transition-colors">
              {FINAL_SECTION_DATA.email}
            </a>
            <span>•</span>
            <a href="https://ecurvedigital.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#326DED] transition-colors">
              ecurvedigital.in
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-gray-200/60 text-center text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Ecurve Digital. Technology Built Around Your Business.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
