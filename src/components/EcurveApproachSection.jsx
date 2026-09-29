import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { ECURVE_APPROACH } from '../data/presentationData';

export const EcurveApproachSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="ecurve-approach"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={ECURVE_APPROACH.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>
        </div>

        {/* Horizontal Sequence with Generous Padding */}
        <RevealContainer active={isInView} delay={700} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 px-6 sm:px-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] w-full box-border">
            {ECURVE_APPROACH.sequence.map((item, index) => (
              <React.Fragment key={item}>
                <span className="text-xs sm:text-sm font-bold font-mono text-[#0F172A] px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                  {item}
                </span>
                {index < ECURVE_APPROACH.sequence.length - 1 && (
                  <span className="text-base font-bold text-[#326DED] px-1">+</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </RevealContainer>

        {/* Statement */}
        <FadeReveal active={isInView} delay={1100}>
          <p className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#326DED] break-words">
            "{ECURVE_APPROACH.conclusion}"
          </p>
        </FadeReveal>

      </div>
    </section>
  );
};

export default EcurveApproachSection;
