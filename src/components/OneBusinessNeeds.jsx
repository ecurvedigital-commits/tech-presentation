import React, { useState } from 'react';
import { Globe, Search, LayoutTemplate, Smartphone, Building2, Sparkles, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { SYNERGY_FLOWS } from '../data/presentationData';

export const OneBusinessNeeds = () => {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const pillars = [
    { title: 'Website', icon: Globe, color: '#326DED', role: 'Your Digital Foundation' },
    { title: 'SEO', icon: Search, color: '#00D2FF', role: 'Your Visibility Engine' },
    { title: 'WordPress', icon: LayoutTemplate, color: '#562BDA', role: 'Your Content Control' },
    { title: 'Android', icon: Smartphone, color: '#34A75D', role: 'Your Mobile Retainer' },
  ];

  return (
    <section id="connected" className="relative section-padding bg-[#F8F9FB] border-b border-[#E2E8F0] overflow-hidden">
      <div className="presentation-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ecurve-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Digital Synergy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0E] tracking-tight font-['Outfit']">
            One business. Different needs.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            A single service is powerful, but when your website, SEO, WordPress CMS, and Android app work together, your business becomes an unstoppable digital engine.
          </p>
        </div>

        {/* Central Hub and Connected Services Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Connected Hub (6 cols) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl relative min-h-[380px] flex flex-col justify-between">
            {/* 4 Corner Connected Nodes */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-4 rounded-2xl bg-[#F8F9FB] border border-[#E2E8F0] flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-sm" style={{ color: p.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A0A0E] font-['Outfit']">{p.title}</h4>
                      <span className="text-[11px] text-[#64748B] block">{p.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Business Core */}
            <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-[#0A0A0E] to-[#1E2433] text-white text-center shadow-lg border border-white/10">
              <Building2 className="w-8 h-8 text-[#00D2FF] mx-auto mb-2 animate-bounce" />
              <h3 className="text-lg font-black font-['Outfit']">YOUR BUSINESS IN THE CENTER</h3>
              <p className="text-xs text-gray-300 mt-1 max-w-sm mx-auto">
                Connected by Ecurve into one coherent ecosystem with zero isolated data silos.
              </p>
            </div>

            <div className="text-center">
              <span className="text-xs font-mono font-bold text-[#326DED] bg-[#F0F7FD] px-3 py-1 rounded-full border border-[#326DED]/20">
                ⚡ 100% Synchronized Architecture
              </span>
            </div>
          </div>

          {/* Right Synergy Flow Selector & Explanation (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-3">
              {SYNERGY_FLOWS.map((flow, idx) => {
                const isSelected = activeFlowIndex === idx;
                return (
                  <div
                    key={flow.title}
                    onClick={() => setActiveFlowIndex(idx)}
                    className={`p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#326DED] shadow-lg shadow-[#326DED]/10 scale-[1.02]'
                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-[#0A0A0E] font-['Outfit']">
                        {flow.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-[#326DED]">
                        Synergy 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-3">
                      {flow.desc}
                    </p>

                    {/* Chain Flow */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100">
                      {flow.chain.map((c, i) => (
                        <React.Fragment key={i}>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F8F9FB] border border-[#E2E8F0] text-[#0A0A0E]">
                            {c}
                          </span>
                          {i < flow.chain.length - 1 && (
                            <span className="text-[10px] text-[#94A3B8]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Climax summary statement */}
            <div className="p-4 rounded-2xl bg-[#F0F7FD] border border-[#326DED]/20 text-center">
              <span className="text-sm font-black text-[#0A0A0E] font-['Outfit']">
                "These services work better together."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
