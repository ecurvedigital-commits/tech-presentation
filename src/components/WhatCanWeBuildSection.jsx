import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem } from './Typewriter';
import { WHAT_WE_BUILD_CARDS } from '../data/presentationData';

export const WhatCanWeBuildSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="custom-solutions"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col gap-12 sm:gap-14">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text="Software Built Around Your Requirements"
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Examples of customized systems and applications we can develop for your business.
            </p>
          </FadeReveal>
        </div>

        {/* 8 Clean White Solution Cards with 28-36px Padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {WHAT_WE_BUILD_CARDS.map((card, index) => (
            <StaggerItem
              key={card.title}
              active={isInView}
              index={index}
              baseDelay={800}
              staggerDelay={60}
              className="h-full"
            >
              <div className="clean-card p-6 sm:p-8 lg:p-9 min-h-[180px] flex flex-col justify-center h-full w-full text-left">
                <div className="clean-card-content flex flex-col">
                  <h3 className="text-base font-bold font-['Outfit'] text-[#0F172A] block mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed break-words block">
                    {card.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatCanWeBuildSection;
