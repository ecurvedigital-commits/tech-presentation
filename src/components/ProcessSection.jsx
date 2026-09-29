import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';

export const ProcessSection = () => {
  const { ref, isInView } = useSectionInView(0.15);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We understand your business and requirements.',
      detail: 'Deep discovery into user personas, business objectives, operational workflows, and technical constraints.',
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We define the technology, architecture and user experience.',
      detail: 'Selecting the optimal tech stack, designing data schemas, API contracts, and delivery milestones.',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'We create an interface around your users and objectives.',
      detail: 'Crafting responsive, ergonomic UI design systems with intuitive visual hierarchy and micro-interactions.',
    },
    {
      num: '04',
      title: 'Develop',
      desc: 'We build the actual product using the appropriate technology.',
      detail: 'Writing clean, modular, and type-safe code adhering to modern web and mobile engineering best practices.',
    },
    {
      num: '05',
      title: 'Test',
      desc: 'We test functionality, responsiveness and performance.',
      detail: 'Cross-browser testing, mobile viewport verification, edge-case hardening, and security audits.',
    },
    {
      num: '06',
      title: 'Optimize',
      desc: 'We improve what matters.',
      detail: 'Tuning Core Web Vitals, sub-second latency optimization, SEO structure verification, and conversion flow polish.',
    },
    {
      num: '07',
      title: 'Launch',
      desc: 'We deploy and help you move forward.',
      detail: 'Global cloud CDN deployment, DNS routing, analytics telemetry, and continuous post-launch support.',
    },
  ];

  return (
    <section ref={ref} id="process" data-section="process" className="presentation-section bg-[#F8F9FB]">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* Section Header */}
        <div className="section-header text-center max-w-4xl mx-auto">
          <FadeReveal active={isInView} delay={0}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
              <span>DEVELOPMENT APPROACH</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0E]">
              Understand first. <span className="text-[#326DED]">Build second.</span>
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-xl text-[#334155] mx-auto">
              A disciplined 7-stage engineering lifecycle from initial problem understanding to deployment and continuous growth.
            </p>
          </FadeReveal>
        </div>

        {/* Interactive Progress Line & Active Step Inspection */}
        <div className="cards-container flex flex-col gap-8 section-visual">
          
          {/* Milestone Stepper Bar */}
          <FadeReveal active={isInView} delay={420} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 p-3 bg-white rounded-3xl border border-gray-200 shadow-xs">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`py-3.5 px-2 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer flex flex-col items-center gap-1.5 interactive-element ${
                  activeStep === idx
                    ? 'bg-[#326DED] text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'text-gray-600 hover:text-gray-900 bg-[#F8F9FB]'
                }`}
              >
                <span>{s.num}</span>
                <span className="text-[11px] truncate max-w-full font-['Outfit']">{s.title}</span>
              </button>
            ))}
          </FadeReveal>

          {/* Active Phase Deep Dive Card */}
          <RevealContainer active={isInView} delay={520} className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0E] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300">
            <div className="flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#00D2FF]">
                  {steps[activeStep].num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">
                    {steps[activeStep].desc}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl pt-1">
                {steps[activeStep].detail}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-right shrink-0 w-full md:w-auto">
              <span className="text-[10px] font-mono text-cyan-300 uppercase block mb-1">
                Lifecycle Stage:
              </span>
              <strong className="text-sm text-white font-bold block font-mono">
                Phase 0{activeStep + 1} of 07
              </strong>
            </div>
          </RevealContainer>

          {/* 7 Stage Overview Grid with Sequential Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-2">
            {steps.map((s, idx) => (
              <StaggerItem
                key={s.num}
                active={isInView}
                index={idx}
                baseDelay={620}
                staggerDelay={70}
                onClick={() => setActiveStep(idx)}
                className={`card p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 min-h-[240px] interactive-element ${
                  activeStep === idx
                    ? 'bg-white border-[#326DED] shadow-md ring-2 ring-[#326DED]/20'
                    : 'bg-white border-[#E8EAED] hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className={`text-xs font-mono font-bold w-fit px-2.5 py-1 rounded-lg ${
                    activeStep === idx ? 'bg-[#326DED] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {s.num}
                  </span>

                  <h4 className="text-base sm:text-lg font-bold text-[#0A0A0E] font-['Outfit']">
                    {s.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400 mt-auto">
                  <span>Phase 0{idx + 1}</span>
                  <span className="text-[#326DED] font-semibold">Inspect →</span>
                </div>
              </StaggerItem>
            ))}

            {/* Guaranteed Quality Tile */}
            <StaggerItem
              active={isInView}
              index={7}
              baseDelay={620}
              staggerDelay={70}
              className="card p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#326DED] to-[#1E40AF] text-white shadow-md flex flex-col justify-between gap-4 min-h-[240px] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-200 font-bold block bg-white/15 w-fit px-2.5 py-1 rounded-lg">
                  The Outcome
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                  Predictable Excellence
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Transparent communication and technology that performs for the business.
                </p>
              </div>
              <div className="text-xs font-mono text-cyan-300 font-bold pt-3 border-t border-white/20 mt-auto">
                ✓ 100% Quality Assurance
              </div>
            </StaggerItem>
          </div>

        </div>

      </div>
    </section>
  );
};
