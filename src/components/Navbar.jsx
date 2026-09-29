import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ecurveLogoHd from '../assets/ecurve-logo-hd.png';

export const Navbar = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'technology', 'development', 'performance', 'software'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Development', href: '#development', id: 'development' },
    { label: 'Performance', href: '#performance', id: 'performance' },
    { label: 'Software', href: '#software', id: 'software' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
      scrolled ? 'border-b border-gray-200/80 shadow-xs' : 'border-b border-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={ecurveLogoHd}
                alt="Ecurve Digital Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg font-['Outfit'] text-[#0F172A] leading-tight">
                Ecurve<span className="text-[#326DED]">Digital</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`transition-colors cursor-pointer ${
                    isActive ? 'text-[#326DED] font-semibold' : 'hover:text-[#0F172A]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenModal('Navbar Inquiry')}
              className="btn-primary text-xs font-semibold py-2.5 px-5 cursor-pointer"
            >
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-[#0F172A] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-2 py-2 text-sm font-medium text-[#334155] hover:text-[#326DED]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('Mobile Nav Inquiry');
                }}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
