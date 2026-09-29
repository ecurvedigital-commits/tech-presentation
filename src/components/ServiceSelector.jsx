import React, { useState } from 'react';
import { Sparkles, Globe, Search, Layers, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServiceSelector = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState('website');

  const options = {
    website: {
      name: 'Website Development',
      badge: 'Bespoke Web Platform',
      icon: Globe,
      color: '#326DED',
      timeline: '2–3 Weeks',
      roadmap: [
        { step: '01', title: 'IDEA & DISCOVERY', desc: 'Understanding your business model and target audience personas.' },
        { step: '02', title: 'ERGONOMIC DESIGN', desc: 'Crafting pixel-perfect, high-conversion UI/UX wireframes.' },
        { step: '03', title: 'CUSTOM DEVELOPMENT', desc: 'Type-safe custom engineering with zero bloated templates.' },
        { step: '04', title: 'EDGE CLOUD LAUNCH', desc: 'Speed audits, global CDN caching, and domain deployment.' },
      ],
    },
    seo: {
      name: 'SEO Optimization',
      badge: 'Organic Search Growth',
      icon: Search,
      color: '#00D2FF',
      timeline: '1–2 Weeks',
      roadmap: [
        { step: '01', title: 'TECHNICAL AUDIT', desc: 'Analyzing crawlability, broken paths, and site structure.' },
        { step: '02', title: 'ON-PAGE OPTIMIZATION', desc: 'Semantic H1-H3 tagging, metadata, and JSON-LD schema.' },
        { step: '03', title: 'CONTENT STRATEGY', desc: 'Keyword research aligned with high-intent customer search queries.' },
        { step: '04', title: 'RANKING EXPANSION', desc: 'Continuous performance tracking and Google index expansion.' },
      ],
    },
    wordpress: {
      name: 'WordPress CMS',
      badge: 'Autonomous Content Control',
      icon: Layers,
      color: '#562BDA',
      timeline: '2–3 Weeks',
      roadmap: [
        { step: '01', title: 'BLOCK THEME DESIGN', desc: 'Designing custom Gutenberg blocks tailored to your workflows.' },
        { step: '02', title: 'CLEAN DEVELOPMENT', desc: 'Lightweight WordPress development with zero plugin bloat.' },
        { step: '03', title: 'CONTENT MIGRATION', desc: 'Importing pages, blogs, media catalogs, and contact forms.' },
        { step: '04', title: 'AUTONOMOUS CONTROL', desc: 'Empowering your team to edit and publish with full independence.' },
      ],
    },
    android: {
      name: 'Android App Development',
      badge: 'Direct Mobile Retention',
      icon: Smartphone,
      color: '#34A75D',
      timeline: '3–5 Weeks',
      roadmap: [
        { step: '01', title: 'MOBILE UI/UX', desc: 'Ergonomic mobile interface design tailored to touch workflows.' },
        { step: '02', title: 'NATIVE DEVELOPMENT', desc: 'High-performance Kotlin/Java development with secure API sync.' },
        { step: '03', title: 'PUSH NOTIFICATIONS', desc: 'Firebase delivery pipeline for direct customer retention.' },
        { step: '04', title: 'PLAY STORE RELEASE', desc: 'Rigorous multi-device testing and Google Play Store deployment.' },
      ],
    },
  };

  const current = options[selectedService];
  const Icon = current.icon;

  return (
    <section id="what-you-need" data-section="what-you-need" className="presentation-section bg-[#FFFFFF] border-b border-[#E8EAED]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-5">
          <div className="ecurve-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
            <span>Interactive Project Planner</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit'] section-heading">
            Where should we start?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed section-description font-normal">
            Select the capability you need below to explore the custom roadmap from inception to deployment.
          </p>
        </div>

        {/* 4 Capability Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          {[
            { id: 'website', label: 'Website Development', icon: Globe },
            { id: 'seo', label: 'SEO Optimization', icon: Search },
            { id: 'wordpress', label: 'WordPress CMS', icon: Layers },
            { id: 'android', label: 'Android App', icon: Smartphone },
          ].map((btn) => {
            const BtnIcon = btn.icon;
            const isSelected = selectedService === btn.id;

            return (
              <button
                key={btn.id}
                onClick={() => setSelectedService(btn.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 text-center ${
                  isSelected
                    ? 'bg-[#326DED] text-white border-[#326DED] shadow-lg shadow-[#326DED]/25 scale-105'
                    : 'bg-[#F8F9FB] hover:bg-gray-100 text-[#0A0A0E] border-gray-200'
                }`}
              >
                <BtnIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#326DED]'}`} />
                <span className="text-xs sm:text-sm font-bold font-['Outfit']">{btn.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Roadmap Container */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#0A0A0E] text-white border border-white/10 shadow-2xl space-y-8 animate-fadeIn">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 text-cyan-300">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
                  {current.name} Delivery Roadmap
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  Estimated Timeline: <strong className="text-emerald-400">{current.timeline}</strong>
                </span>
              </div>
            </div>

            <button
              onClick={() => onSelectService(current.name)}
              className="px-5 py-2.5 rounded-xl bg-[#326DED] hover:bg-[#2155C9] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all shrink-0"
            >
              <span>Build {current.name.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Step Roadmap Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.roadmap.map((st, i) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl bg-[#121826] border border-white/5 space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-[#00D2FF]">
                    {st.step}
                  </span>
                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-gray-600 hidden lg:block" />
                  )}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                  {st.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
