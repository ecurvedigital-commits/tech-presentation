import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { PERFORMANCE_MARKETING_DATA } from '../data/presentationData';

export const PerformanceMarketingSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="performance"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={PERFORMANCE_MARKETING_DATA.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="text-lg sm:text-xl font-bold font-['Outfit'] text-[#326DED] mt-2 mb-3">
              "{PERFORMANCE_MARKETING_DATA.statement}"
            </p>
          </FadeReveal>

          <FadeReveal active={isInView} delay={900}>
            <p className="section-description text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed break-words">
              {PERFORMANCE_MARKETING_DATA.description}
            </p>
          </FadeReveal>
        </div>

        {/* Simple Visual Flow: WEBSITE -> SEO -> ADS -> USER EXPERIENCE -> CONVERSION with 24-28px Padding */}
        <RevealContainer active={isInView} delay={1100} className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5 w-full">
            {PERFORMANCE_MARKETING_DATA.flow.map((node) => (
              <div
                key={node.step}
                className="clean-card p-6 sm:p-7 min-h-[155px] flex flex-col items-center text-center justify-between gap-3 w-full"
              >
                <span className="text-xs font-mono font-bold text-[#326DED] block">
                  {node.step}
                </span>
                
                <h3 className="text-sm font-bold font-['Outfit'] text-[#0F172A] block my-1">
                  {node.label}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed break-words block">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default PerformanceMarketingSection;
