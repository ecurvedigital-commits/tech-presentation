import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { EXPERIENCE_DATA } from '../data/presentationData';

export const ExperienceStorySection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="about"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center text-center gap-10 sm:gap-12 max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={EXPERIENCE_DATA.heading}
              speed={30}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>
        </div>

        {/* Large 14+ Centerpiece */}
        <RevealContainer active={isInView} delay={700}>
          <div className="text-8xl sm:text-9xl font-black font-['Outfit'] text-[#326DED] tracking-tight leading-none">
            {EXPERIENCE_DATA.stat}
          </div>
        </RevealContainer>

        {/* Subhead & Description */}
        <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <FadeReveal active={isInView} delay={900}>
            <p className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#0F172A]">
              {EXPERIENCE_DATA.subhead}
            </p>
          </FadeReveal>

          <FadeReveal active={isInView} delay={1100}>
            <p className="section-description text-base sm:text-lg text-[#475569] leading-relaxed break-words">
              {EXPERIENCE_DATA.description}
            </p>
          </FadeReveal>
        </div>

        {/* Simple Horizontal Timeline Sequence */}
        <FadeReveal active={isInView} delay={1300} className="w-full mt-4">
          <div className="pt-8 border-t border-gray-100 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5">
              {EXPERIENCE_DATA.timeline.map((item) => (
                <div 
                  key={item.step} 
                  className="clean-card p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 flex flex-col items-center text-center justify-center min-h-[145px] w-full"
                >
                  <span className="text-xs font-mono font-bold text-[#326DED] block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] block mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed break-words block">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>

      </div>
    </section>
  );
};

export default ExperienceStorySection;
