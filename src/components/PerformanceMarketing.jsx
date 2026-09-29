import React, { useState } from 'react';
import {
  Sparkles, TrendingUp, CheckCircle2, Award
} from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';

export const PerformanceMarketing = () => {
  const { ref, isInView } = useSectionInView(0.15);
  const [activeStep, setActiveStep] = useState(0);

  const funnelSteps = [
    { num: '01', title: 'Traffic', desc: 'Google Search, Meta & targeted inbound campaigns.' },
    { num: '02', title: 'Landing Page', desc: 'Instant sub-second load matched to user search intent.' },
    { num: '03', title: 'Website Experience', desc: 'Intuitive visual hierarchy & ergonomic mobile navigation.' },
    { num: '04', title: 'Trust', desc: 'Verified social proof, polished aesthetic & secure speed.' },
    { num: '05', title: 'Conversion', desc: 'Frictionless call-to-actions, inquiry funnels & revenue.' },
  ];

  const performanceDimensions = [
    { title: 'SEO Architecture', desc: 'Structured schema and semantic markup for top search engine indexing.' },
    { title: 'Page Speed', desc: 'Sub-second rendering with 99+ Core Web Vitals to eliminate visitor bounce.' },
    { title: 'User Experience', desc: 'Ergonomic navigation that naturally guides visitors to act.' },
    { title: 'Conversion Design', desc: 'Strategic micro-interactions turning casual browsers into qualified buyers.' },
    { title: 'Mobile Responsiveness', desc: 'Thumb-friendly touch targets optimized for mobile traffic.' },
    { title: 'Campaign Requirements', desc: 'High-converting dedicated landing pages matched to paid ad funnels.' },
  ];

  return (
    <section ref={ref} id="performance-marketing" data-section="performance-marketing" className="presentation-section bg-[#F8F9FB]">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">

        {/* ========================================================================= */}
        {/* 11. PERFORMANCE MARKETING MEETS DEVELOPMENT                               */}
        {/* ========================================================================= */}
        <div className="section-header text-center max-w-4xl mx-auto">

          <FadeReveal active={isInView} delay={0} className="flex flex-wrap items-center justify-center gap-3">
            <div className="ecurve-eyebrow reveal-element mb-0">
              <TrendingUp className="w-3.5 h-3.5 text-[#326DED]" />
              <span>PERFORMANCE MARKETING</span>
            </div>

            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>#1 in HDR for Performance Marketing</span>
            </span>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0E]">
              Performance Marketing Meets Development.
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-xl text-[#334155] mx-auto">
              Ecurve has strong experience in performance marketing. <strong className="text-[#0A0A0E]">We don't build websites just to look good — we build websites with performance marketing in mind.</strong>
            </p>
          </FadeReveal>
        </div>

        {/* ========================================================================= */}
        {/* 12. WEBSITES ACCORDING TO PERFORMANCE MARKETING (Visual Funnel Flow)       */}
        {/* ========================================================================= */}
        <div className="space-y-12">

          <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#326DED]">
              THE COMPLETE FUNNEL
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0E] font-['Outfit']">
              Websites According to Performance Marketing
            </h3>
            <p className="text-sm sm:text-base text-[#475569]">
              If your marketing brings the visitor in, your website needs to know what to do next.
            </p>
          </div>

          {/* Interactive 5-Step Funnel Progression Container with Staggered Steps */}
          <RevealContainer active={isInView} delay={450} className="cards-container p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E8EAED] shadow-sm flex flex-col gap-6 section-visual">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
              {funnelSteps.map((step, idx) => (
                <StaggerItem
                  key={step.num}
                  active={isInView}
                  index={idx}
                  baseDelay={480}
                  staggerDelay={80}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center flex flex-col justify-between gap-3 interactive-element ${activeStep === idx
                      ? 'bg-[#F0F7FD] border-[#326DED] ring-2 ring-[#326DED]/20 shadow-md scale-[1.02]'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs font-mono font-bold block ${activeStep === idx ? 'text-[#326DED]' : 'text-gray-400'
                      }`}>
                      {step.num}
                    </span>
                    <h4 className="text-base font-extrabold text-[#0A0A0E] font-['Outfit']">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </StaggerItem>
              ))}
            </div>

            <div className="pt-5 border-t border-gray-100 text-center">
              <span className="text-xs sm:text-sm font-semibold text-[#334155]">
                Traffic <span className="text-[#326DED]">→</span> Landing Page <span className="text-[#326DED]">→</span> Website Experience <span className="text-[#326DED]">→</span> Trust <span className="text-[#34A75D] font-bold">→ Conversion</span>
              </span>
            </div>
          </RevealContainer>

          {/* 6 Key Performance Dimensions Cards Staggered */}
          <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {performanceDimensions.map((dim, idx) => (
              <StaggerItem
                key={idx}
                active={isInView}
                index={idx}
                baseDelay={650}
                staggerDelay={70}
                className="card p-8 sm:p-10 rounded-3xl bg-white border border-[#E8EAED] shadow-xs flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 text-[#326DED]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0A0A0E] font-['Outfit']">
                    {dim.title}
                  </h4>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {dim.desc}
                </p>
              </StaggerItem>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
