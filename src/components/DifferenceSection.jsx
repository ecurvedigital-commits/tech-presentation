import React, { useState } from 'react';
import { Sparkles, Code2, TrendingUp, Palette, Briefcase, CheckCircle2 } from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';

export const DifferenceSection = () => {
  const { ref, isInView } = useSectionInView(0.15);
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 'dev',
      title: 'Development',
      role: 'Technology and engineering',
      desc: 'Clean, type-safe architecture, high-speed rendering, secure APIs, and modular scalability.',
      icon: Code2,
      color: '#326DED',
    },
    {
      id: 'marketing',
      title: 'Performance Marketing',
      role: 'Traffic, visibility and conversion',
      desc: 'SEO structure, conversion funnels, analytics telemetry, and campaign landing page velocity.',
      icon: TrendingUp,
      color: '#00D2FF',
    },
    {
      id: 'design',
      title: 'Design',
      role: 'User experience and visual communication',
      desc: 'Ergonomic user journeys, premium typography, instant visual trust, and fluid micro-interactions.',
      icon: Palette,
      color: '#562BDA',
    },
    {
      id: 'business',
      title: 'Business Understanding',
      role: 'Solutions aligned with actual requirements',
      desc: 'Deep discovery into revenue models, operational bottlenecks, customer retention, and ROI.',
      icon: Briefcase,
      color: '#34A75D',
    },
  ];

  return (
    <section ref={ref} id="difference" data-section="difference" className="presentation-section bg-[#FFFFFF]">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* Section Header */}
        <div className="section-header text-center max-w-4xl mx-auto">
          <FadeReveal active={isInView} delay={0}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
              <span>THE ECURVE DIFFERENCE</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0E]">
              One team. <span className="text-[#326DED]">Multiple perspectives.</span>
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-xl text-[#334155] mx-auto">
              We don't see development and marketing as separate worlds. <strong className="text-[#0A0A0E]">We connect them.</strong>
            </p>
          </FadeReveal>
        </div>

        {/* 4 Connected Perspectives Grid with Staggered Items */}
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 section-visual">
          {perspectives.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activeTab === idx;

            return (
              <StaggerItem
                key={p.id}
                active={isInView}
                index={idx}
                baseDelay={450}
                staggerDelay={80}
                onClick={() => setActiveTab(idx)}
                className={`card p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-5 min-h-[300px] interactive-element ${
                  isSelected
                    ? 'bg-[#F0F7FD] border-[#326DED] ring-2 ring-[#326DED]/20 shadow-xl scale-[1.02]'
                    : 'bg-white border-[#E8EAED] hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${p.color}15`, color: p.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block">
                    0{idx + 1} Perspective
                  </span>

                  <h3 className="text-xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                    {p.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#326DED]">
                    {p.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono mt-auto">
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Integrated
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </div>

        {/* Central Integration Showcase Banner */}
        <RevealContainer active={isInView} delay={650} className="cards-container p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#0A0A0E] text-white border border-white/10 shadow-2xl relative overflow-hidden text-center flex flex-col gap-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#326DED]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00D2FF]">
              That's what makes our approach different.
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              We don't see development and marketing as separate worlds.
            </h3>
            <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#326DED] to-[#34A75D] font-['Outfit'] pt-2">
              We connect them.
            </div>
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};
