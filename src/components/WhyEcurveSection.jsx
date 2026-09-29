import React from 'react';
import { Sparkles } from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';

export const WhyEcurveSection = () => {
  const { ref, isInView } = useSectionInView(0.15);

  return (
    <section ref={ref} id="why-ecurve" data-section="why-ecurve" className="presentation-section bg-black border-b border-white/10">
      <div className="section-container flex flex-col gap-8 sm:gap-10 lg:gap-12">

        {/* 1. MAJOR STATEMENT: DEVELOPMENT EXPERIENCE */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center gap-3.5 sm:gap-4 !mb-0">
          <FadeReveal active={isInView} delay={0} className="w-full flex justify-center">
            <div className="ecurve-eyebrow mx-auto !mb-0">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>DEVELOPMENT EXPERIENCE</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60} className="w-full text-center flex justify-center">
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-white text-center max-w-4xl mx-auto leading-tight">
              We Have Strong <span className="text-[#326DED]">Development Experience.</span>
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180} className="w-full text-center flex justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Rich development experience across different types of projects, technologies and business requirements. We don't simply build software — <strong className="text-white">we understand why it needs to be built.</strong>
            </p>
          </FadeReveal>
        </div>

        {/* ========================================================================= */}
        {/* 2. FOUNDER EXPERIENCE: 14+ YEARS (Contained Unified Card)                  */}
        {/* ========================================================================= */}
        <FadeReveal active={isInView} delay={380} className="cards-container max-w-5xl mx-auto w-full p-8 sm:p-12 lg:p-14 rounded-[32px] bg-black/90 border border-white/10 shadow-2xl flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Big Stat Typography (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-3 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D2FF] bg-[#00D2FF]/10 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0 border border-[#00D2FF]/20">
                PRACTICAL INSIGHT
              </span>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black font-['Outfit'] text-white tracking-tighter leading-none my-1">
                14<span className="text-[#326DED]">+</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Years of Founder Experience
              </span>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Direct leadership across enterprise codebases, full-funnel architectures, and digital growth.
              </p>
            </div>

            {/* Narrative & Practical Mindset Box (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Our founder brings <strong className="text-white">14+ years of industry experience</strong>, giving the team practical insight into technology, business requirements, development, and digital growth.
              </p>

              {/* Mindset Contrast Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black border border-white/10 flex flex-col gap-4">
                <span className="text-xs font-mono text-gray-400 uppercase font-bold tracking-wider block">
                  That experience helps us look beyond:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 sm:p-5 rounded-xl bg-red-950/30 border border-red-500/30 flex flex-col gap-1">
                    <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider block">Traditional View:</span>
                    <span className="text-sm font-bold text-white">“Can we build it?”</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col gap-1">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">The Ecurve View:</span>
                    <span className="text-sm font-bold text-white">“Will it actually work for the business?”</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </FadeReveal>

        {/* ========================================================================= */}
        {/* 3. OUR TEAM: A TEAM BUILT DIFFERENTLY (Spacious Dark Card)                */}
        {/* ========================================================================= */}
        <RevealContainer
          active={isInView}
          delay={550}
          className="cards-container max-w-5xl mx-auto w-full p-8 sm:p-12 lg:p-16 rounded-[32px] bg-black text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-8 sm:gap-10"
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 sm:gap-10 items-center">

            <div className="text-center flex flex-col items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D2FF] bg-[#00D2FF]/10 px-3.5 py-1 rounded-full border border-[#00D2FF]/20">
                OUR TEAM
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight text-center">
                A Team Built Differently.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
                Our team brings together people at different stages of their technology journey.
              </p>
            </div>

            {/* Two Pillars in Spacious Staggered Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              <StaggerItem active={isInView} index={0} baseDelay={600} staggerDelay={120} className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-black/90 border border-white/10 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00D2FF]/40 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#00D2FF]/15 text-[#00D2FF] border border-[#00D2FF]/30 flex items-center justify-center font-bold font-mono text-base">
                  01
                </div>
                <div className="card-content flex flex-col gap-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                    Experienced Professionals
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Bring deep technical depth, architectural rigor, and proven industry knowledge.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem active={isInView} index={1} baseDelay={600} staggerDelay={120} className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-black/90 border border-white/10 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#34A75D]/40 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#34A75D]/15 text-[#34A75D] border border-[#34A75D]/30 flex items-center justify-center font-bold font-mono text-base">
                  02
                </div>
                <div className="card-content flex flex-col gap-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                    Emerging Developers & Interns
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Bring fresh ideas, new approaches, curiosity, and familiarity with modern technologies.
                  </p>
                </div>
              </StaggerItem>
            </div>

            {/* The Equation Card */}
            <FadeReveal active={isInView} delay={780} className="w-full p-6 sm:p-8 lg:p-9 rounded-2xl bg-black/95 border border-[#326DED]/40 text-center flex flex-col gap-3 items-center justify-center shadow-2xl">
              <span className="text-xs font-mono text-[#00D2FF] uppercase font-bold tracking-widest block">
                Together, this creates a team that combines:
              </span>
              <div className="text-lg sm:text-2xl lg:text-3xl font-black font-['Outfit'] tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span className="text-white">Experience</span>
                <span className="text-[#00D2FF] font-bold text-xl sm:text-2xl">×</span>
                <span className="text-[#4ADE80]">Fresh Ideas</span>
                <span className="text-[#A78BFA] font-bold text-xl sm:text-2xl">×</span>
                <span className="text-[#F472B6]">Different Perspectives</span>
              </div>
            </FadeReveal>

          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default WhyEcurveSection;
