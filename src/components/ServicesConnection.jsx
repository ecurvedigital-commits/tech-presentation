import React, { useState } from 'react';
import { Sparkles, Globe, Search, Layers, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesConnection = () => {
  const [activePathway, setActivePathway] = useState('all'); // all, web-seo, web-wp, web-app, wp-app

  const pathways = {
    all: {
      title: 'Unified Digital Engine',
      desc: 'All 4 technology pillars share unified API endpoints, brand tokens, and customer conversion funnels.',
      tag: 'Complete Ecosystem',
    },
    'web-seo': {
      title: 'Website + SEO Foundation',
      desc: 'Sub-second page speeds and structured semantic HTML directly boost Google search rankings and inbound organic leads.',
      tag: 'High Inbound Discovery',
    },
    'web-wp': {
      title: 'Website + WordPress CMS',
      desc: 'High-speed frontend coupled with intuitive Gutenberg editing so your team can publish without developer dependencies.',
      tag: 'Autonomous Agility',
    },
    'web-app': {
      title: 'Website + Android App',
      desc: 'Seamless user journey from initial web discovery to direct smartphone retention and push notifications.',
      tag: 'Omnichannel Retention',
    },
  };

  return (
    <section id="services-connection" data-section="services-connection" className="presentation-section bg-[#FFFFFF] border-b border-[#E8EAED]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-5">
          <div className="ecurve-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
            <span>Connected Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit'] section-heading">
            One digital presence. <br className="hidden sm:block" />
            <span className="text-[#326DED]">Multiple possibilities.</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed section-description font-normal">
            Our 4 technology pillars are engineered to complement each other. Click any synergy pathway below to observe the interconnected data flow.
          </p>
        </div>

        {/* Interactive Synergy Pathway Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 4 Pillars Connected' },
            { id: 'web-seo', label: 'Website + SEO' },
            { id: 'web-wp', label: 'Website + WordPress' },
            { id: 'web-app', label: 'Website + Android' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePathway(tab.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
                activePathway === tab.id
                  ? 'bg-[#326DED] text-white shadow-md shadow-[#326DED]/20 ring-2 ring-[#326DED]/30'
                  : 'bg-[#F8F9FB] hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Central Visual Interactive Network Diagram */}
        <div className="max-w-4xl mx-auto p-6 sm:p-12 rounded-3xl bg-[#0A0A0E] border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#326DED]/15 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(50, 109, 237, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-dash" />
            <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-dash" />
            <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="rgba(86, 43, 218, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-dash" />
            <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="rgba(52, 167, 93, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-dash" />
          </svg>

          {/* Nodes Grid Layout */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center">
            
            {/* Top Left: Website Node */}
            <div
              onClick={() => setActivePathway('web-seo')}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                ['all', 'web-seo', 'web-wp', 'web-app'].includes(activePathway)
                  ? 'bg-[#121826] border-[#326DED] shadow-lg shadow-[#326DED]/20 scale-105'
                  : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#326DED]/20 text-[#326DED] flex items-center justify-center mx-auto mb-2 font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white block font-['Outfit']">
                01 Website
              </span>
              <span className="text-[10px] text-gray-400 font-mono">Fast Core Web Vitals</span>
            </div>

            {/* Center: Ecurve Digital Core */}
            <div className="col-span-2 sm:col-span-1 p-5 rounded-3xl bg-gradient-to-b from-[#326DED] to-[#1E40AF] text-white shadow-xl flex flex-col items-center justify-center space-y-1.5 border border-white/20">
              <div className="w-10 h-10 rounded-2xl bg-white text-[#326DED] flex items-center justify-center font-black text-lg shadow-sm">
                E
              </div>
              <strong className="text-xs font-mono uppercase tracking-wider text-cyan-200">
                Ecurve Core
              </strong>
              <span className="text-[10px] text-blue-100 font-mono">
                Unified Tech Engine
              </span>
            </div>

            {/* Top Right: SEO Node */}
            <div
              onClick={() => setActivePathway('web-seo')}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                ['all', 'web-seo'].includes(activePathway)
                  ? 'bg-[#121826] border-[#00D2FF] shadow-lg shadow-[#00D2FF]/20 scale-105'
                  : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center mx-auto mb-2 font-bold">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white block font-['Outfit']">
                02 SEO
              </span>
              <span className="text-[10px] text-gray-400 font-mono">First-Page Discovery</span>
            </div>

            {/* Bottom Left: WordPress Node */}
            <div
              onClick={() => setActivePathway('web-wp')}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                ['all', 'web-wp'].includes(activePathway)
                  ? 'bg-[#121826] border-[#562BDA] shadow-lg shadow-[#562BDA]/20 scale-105'
                  : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#562BDA]/20 text-[#562BDA] flex items-center justify-center mx-auto mb-2 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white block font-['Outfit']">
                03 WordPress
              </span>
              <span className="text-[10px] text-gray-400 font-mono">Autonomous CMS</span>
            </div>

            {/* Empty center spacing on desktop */}
            <div className="hidden sm:block" />

            {/* Bottom Right: Android Node */}
            <div
              onClick={() => setActivePathway('web-app')}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                ['all', 'web-app'].includes(activePathway)
                  ? 'bg-[#121826] border-[#34A75D] shadow-lg shadow-[#34A75D]/20 scale-105'
                  : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#34A75D]/20 text-[#34A75D] flex items-center justify-center mx-auto mb-2 font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white block font-['Outfit']">
                04 Android
              </span>
              <span className="text-[10px] text-gray-400 font-mono">Direct Mobile Retention</span>
            </div>

          </div>

          {/* Active Pathway Details Card */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase block mb-1">
                Active Synergy: {pathways[activePathway].tag}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                {pathways[activePathway].title}
              </h4>
              <p className="text-xs text-gray-300 mt-1 max-w-xl">
                {pathways[activePathway].desc}
              </p>
            </div>

            <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold shrink-0">
              ✓ Synchronized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
