import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem, RevealContainer } from './Typewriter';
import { WHY_PERFORMANCE_DATA } from '../data/presentationData';

export const WhyPerformanceSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="why-performance"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={WHY_PERFORMANCE_DATA.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>
        </div>

        {/* 4 Clean Cards with 28-32px Padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {WHY_PERFORMANCE_DATA.cards.map((card, index) => (
            <StaggerItem
              key={card.title}
              active={isInView}
              index={index}
              baseDelay={600}
              staggerDelay={70}
              className="h-full"
            >
              <div className="clean-card p-6 sm:p-8 lg:p-9 min-h-[175px] flex flex-col justify-center h-full text-left w-full">
                <div className="clean-card-content flex flex-col">
                  <h3 className="text-xs font-mono font-bold uppercase text-[#326DED] tracking-wider block mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed break-words">
                    {card.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        {/* Large Statement Callout */}
        <RevealContainer active={isInView} delay={1100} className="w-full pt-4">
          <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-4 items-center text-center w-full box-border">
            <p className="text-lg sm:text-2xl font-bold font-['Outfit'] text-[#0F172A] break-words max-w-2xl">
              "{WHY_PERFORMANCE_DATA.statements[0]}"
            </p>
            <p className="text-xl sm:text-3xl font-extrabold font-['Outfit'] text-[#326DED] break-words max-w-2xl">
              "{WHY_PERFORMANCE_DATA.statements[1]}"
            </p>
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default WhyPerformanceSection;
