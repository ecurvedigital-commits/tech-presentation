import React from 'react';
import { Globe, Search, LayoutTemplate, Smartphone, TrendingUp, Sparkles } from 'lucide-react';

export const NotJustAService = () => {
  const steps = [
    { title: 'WEBSITE', icon: Globe, color: '#326DED' },
    { title: 'SEO', icon: Search, color: '#00D2FF' },
    { title: 'CONTENT', icon: LayoutTemplate, color: '#562BDA' },
    { title: 'MOBILE', icon: Smartphone, color: '#34A75D' },
    { title: 'GROWTH', icon: TrendingUp, color: '#F59E0B' },
  ];

  return (
    <section className="relative section-padding bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="presentation-container text-center space-y-10">
        <div className="ecurve-eyebrow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Long-Term Evolution</span>
        </div>

        {/* Hero Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0E] tracking-tight font-['Outfit']">
            "A website is only the beginning."
          </h2>
          <p className="text-base sm:text-xl text-[#64748B] max-w-2xl mx-auto">
            A static digital launch gets obsolete quickly. We build living systems that scale, attract search queries, update content effortlessly, and connect directly to your users' phones.
          </p>
        </div>

        {/* Kinetic Progression Chain */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-6 max-w-4xl mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <React.Fragment key={s.title}>
                <div className="glass-frosted p-4 rounded-2xl border border-[#E2E8F0] flex items-center gap-2.5 shadow-sm hover:scale-105 transition-transform">
                  <div className="p-2 rounded-xl" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-[#0A0A0E] font-['Outfit']">
                    {s.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-lg font-bold text-[#94A3B8]">↓</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Final Statement */}
        <div className="pt-8 border-t border-gray-100 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black grad-text-blue font-['Outfit']">
            "Your digital presence evolves with your business."
          </h3>
        </div>
      </div>
    </section>
  );
};
