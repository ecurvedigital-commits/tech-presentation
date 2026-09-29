import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';
import { RICH_EXPERIENCE_DATA } from '../data/presentationData';

export const RichExperienceTransition = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.15);

  return (
    <section
      ref={ref}
      id="rich-experience"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={RICH_EXPERIENCE_DATA.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>
        </div>

        {/* 5 Simple Words Across the Screen with Clean Padding */}
        <RevealContainer active={isInView} delay={700} className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5 w-full">
            {RICH_EXPERIENCE_DATA.words.map((word, index) => (
              <StaggerItem
                key={word}
                active={isInView}
                index={index}
                baseDelay={800}
                staggerDelay={120}
                className="h-full"
              >
                <div className="clean-card p-6 sm:p-7 min-h-[145px] flex flex-col items-center justify-center text-center w-full">
                  <span className="text-xs font-mono text-[#326DED] font-bold block mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-['Outfit'] tracking-wider text-[#0F172A] block">
                    {word}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </div>
        </RevealContainer>

        {/* Statement */}
        <FadeReveal active={isInView} delay={1500}>
          <p className="section-description text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed break-words">
            {RICH_EXPERIENCE_DATA.statement}
          </p>
        </FadeReveal>

      </div>
    </section>
  );
};

export default RichExperienceTransition;
