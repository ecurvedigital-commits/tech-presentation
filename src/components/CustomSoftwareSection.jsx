import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { CUSTOM_SOFTWARE_DATA } from '../data/presentationData';

export const CustomSoftwareSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="software"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[60px] sm:min-h-[80px]">
            <TypewriterText
              text={CUSTOM_SOFTWARE_DATA.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="text-base sm:text-lg text-[#475569] mt-3 leading-relaxed break-words">
              {CUSTOM_SOFTWARE_DATA.statement1}
            </p>
          </FadeReveal>

          <FadeReveal active={isInView} delay={900}>
            <p className="text-lg sm:text-2xl font-bold font-['Outfit'] text-[#326DED] mt-2 break-words">
              "{CUSTOM_SOFTWARE_DATA.statement2}"
            </p>
          </FadeReveal>
        </div>

        {/* Clean 6-Step Numbered Process with 24-28px Padding */}
        <RevealContainer active={isInView} delay={1100} className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 w-full">
            {CUSTOM_SOFTWARE_DATA.steps.map((item) => (
              <div
                key={item.num}
                className="clean-card p-6 sm:p-7 min-h-[150px] flex flex-col items-center justify-center text-center w-full"
              >
                <span className="text-xs font-mono font-bold text-[#326DED] block mb-2.5">
                  {item.num}
                </span>
                <h3 className="text-xs sm:text-sm font-bold font-['Outfit'] text-[#0F172A] leading-normal break-words block">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default CustomSoftwareSection;
