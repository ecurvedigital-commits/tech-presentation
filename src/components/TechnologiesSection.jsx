import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem } from './Typewriter';
import { TECH_CARDS } from '../data/presentationData';

export const TechnologiesSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="technology"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col gap-12 sm:gap-14">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text="Experience Across Technologies"
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="text-base sm:text-lg text-[#64748B] mt-2 font-normal">
              Different technologies. One goal — solving the right problem.
            </p>
          </FadeReveal>
        </div>

        {/* Clean White Cards Grid with Generous 28-30px Padding & Safe Wrapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {TECH_CARDS.map((tech, index) => (
            <StaggerItem
              key={tech.name}
              active={isInView}
              index={index}
              baseDelay={800}
              staggerDelay={40}
              className="h-full"
            >
              <div className="clean-card min-h-[170px] h-full flex flex-col justify-center text-left">
                <div className="clean-card-content flex flex-col">
                  <h3 className="text-xs font-mono font-bold uppercase text-[#326DED] tracking-wider block mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed break-words">
                    {tech.desc}
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

export default TechnologiesSection;
