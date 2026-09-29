import React, { useState } from 'react';
import { Globe, Search, LayoutTemplate, Smartphone, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { INTERACTIVE_START_OPTIONS } from '../data/presentationData';

export const InteractiveStart = ({ onOpenModalWithScope }) => {
  const [selectedStartId, setSelectedStartId] = useState('website');

  const optionIcons = {
    website: Globe,
    seo: Search,
    wordpress: LayoutTemplate,
    android: Smartphone,
  };

  const currentOption = INTERACTIVE_START_OPTIONS.find(o => o.id === selectedStartId) || INTERACTIVE_START_OPTIONS[0];
  const CurrentIcon = optionIcons[currentOption.id] || Globe;

  return (
    <section id="start" className="relative section-padding bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="presentation-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ecurve-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Roadmapper</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0E] tracking-tight font-['Outfit']">
            Where should we start?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Every business begins at a different digital maturity stage. Select your immediate priority below to view your exact delivery roadmap.
          </p>
        </div>

        {/* 4 Interactive Big Choice Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {INTERACTIVE_START_OPTIONS.map((opt) => {
            const Icon = optionIcons[opt.id];
            const isSelected = selectedStartId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedStartId(opt.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#326DED] text-white border-[#326DED] shadow-xl shadow-[#326DED]/25 scale-[1.02]'
                    : 'bg-[#F8F9FB] border-[#E2E8F0] text-[#0A0A0E] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#326DED] border border-[#E2E8F0]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-['Outfit'] leading-tight">
                    {opt.title}
                  </h3>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-white/80' : 'text-[#64748B]'}`}>
                    {opt.tagline}
                  </p>
                </div>
                <div className={`mt-4 pt-3 border-t text-xs font-mono flex items-center justify-between ${isSelected ? 'border-white/20 text-white' : 'border-gray-200 text-[#326DED]'}`}>
                  <span>{isSelected ? 'Selected' : 'Select Plan'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Roadmapping Output Display */}
        <div className="ecurve-card p-6 sm:p-10 rounded-3xl border-[#E2E8F0] bg-[#F8F9FB] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white shadow-sm text-[#326DED] border border-[#E2E8F0]">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#326DED] font-bold uppercase">
                  Custom Engagement Roadmap
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                  {currentOption.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onOpenModalWithScope(currentOption.title)}
              className="btn-ecurve-primary text-xs sm:text-sm font-bold flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <span>Build This With Ecurve</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4-Step Roadmapping Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentOption.journey.map((j, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#326DED] block mb-1">
                    Phase 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#0A0A0E] font-['Outfit'] mb-2">
                    {j.step}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {j.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-mono text-[#22C55E]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
