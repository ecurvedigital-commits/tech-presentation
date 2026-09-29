import React from 'react';
import { ShieldCheck, Target, Zap, Maximize2, Network, Users2, Sparkles } from 'lucide-react';
import { WHY_ECURVE_PRINCIPLES } from '../data/presentationData';

export const WhyEcurve = () => {
  const principleIcons = [Target, ShieldCheck, Zap, Maximize2, Network, Users2];

  return (
    <section
      id="why-ecurve"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#090C16] border-t border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#326DED]/10 border border-[#326DED]/30 text-[#00D2FF] font-mono text-xs uppercase font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Why Ecurve Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We do not sell generic promises or buzzwords. We build on 6 concrete engineering standards that protect your investment.
          </p>
        </div>

        {/* Large Typography Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ECURVE_PRINCIPLES.map((principle, idx) => {
            const Icon = principleIcons[idx] || Target;
            return (
              <div
                key={principle.tag}
                className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 hover:border-[#326DED]/40 transition-all duration-300 flex flex-col justify-between group bg-[#0D1220]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase px-3 py-1 rounded-md bg-[#00D2FF]/10 border border-[#00D2FF]/20">
                      {principle.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#326DED] group-hover:text-white transition-all text-[#94A3B8]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Outfit'] mb-3 group-hover:text-[#00D2FF] transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Principle 0{idx + 1}</span>
                  <span className="text-[#22C55E] font-medium">
                    ✓ {principle.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
