import React from 'react';
import { Plus, Equal, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer, StaggerItem } from './Typewriter';
import { ECURVE_DIFFERENCE_DATA } from '../data/presentationData';

export const EcurveDifferenceSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="ecurve-difference"
      className="presentation-section relative tech-grid-bg overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#326DED]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <FadeReveal active={isInView} delay={50}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{ECURVE_DIFFERENCE_DATA.eyebrow}</span>
            </div>
          </FadeReveal>

          <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-1 mb-4 min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={ECURVE_DIFFERENCE_DATA.title}
              speed={28}
              delay={150}
              showCursor={true}
              active={isInView}
              viewKey={viewKey}
              cursorClassName="text-[#00D2FF]"
            />
          </h2>

          <FadeReveal active={isInView} delay={800}>
            <p className="section-description text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              We synthesize these 5 core disciplines to create an engineering framework designed strictly around business value.
            </p>
          </FadeReveal>
        </div>

        {/* Animated Equation Formula: EXPERIENCE + TECHNOLOGY + TEAM + PERFORMANCE + CUSTOMIZATION */}
        <RevealContainer active={isInView} delay={1000} className="w-full max-w-5xl mx-auto">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 flex flex-col gap-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
              {ECURVE_DIFFERENCE_DATA.formula.map((item, idx) => (
                <StaggerItem
                  key={item.label}
                  active={isInView}
                  index={idx}
                  baseDelay={1100}
                  staggerDelay={120}
                  className="h-full"
                >
                  <div className="glass-card p-4 rounded-2xl border-white/10 flex flex-col items-center text-center justify-between h-36 group hover:border-[#00D2FF]/50 transition-all">
                    <span 
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      Pillar 0{idx + 1}
                    </span>

                    <h4 className="text-sm sm:text-base font-extrabold font-['Outfit'] text-white group-hover:text-[#00D2FF] transition-colors">
                      {item.label}
                    </h4>

                    <p className="text-[11px] text-[#94A3B8] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* Equals Sign & Final Statement Climax */}
            <FadeReveal active={isInView} delay={1800}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#326DED]/20 via-[#00D2FF]/10 to-[#562BDA]/20 border border-[#00D2FF]/40 shadow-2xl flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] font-bold uppercase tracking-widest">
                  <Equal className="w-5 h-5 text-[#00D2FF]" />
                  <span>THE UNIFIED RESULT</span>
                </div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] tracking-tight text-white">
                  "{ECURVE_DIFFERENCE_DATA.conclusion}"
                </div>
                <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl">
                  Not bloated off-the-shelf templates. Not unmeasured design. Pure, tailored technology engineered to scale your revenue.
                </p>
              </div>
            </FadeReveal>

          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default EcurveDifferenceSection;
