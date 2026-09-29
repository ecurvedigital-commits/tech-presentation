import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal } from './Typewriter';
import { FINAL_SECTION_DATA } from '../data/presentationData';

export const FinalCTA = ({ onOpenModal }) => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="contact"
      className="presentation-section pt-24 sm:pt-36 pb-24 sm:pb-36 bg-white text-center"
    >
      <div className="section-container flex flex-col items-center gap-6 max-w-3xl mx-auto">
        
        {/* Large Heading */}
        <h2 className="section-title text-4xl sm:text-6xl font-extrabold text-[#0F172A] min-h-[60px] sm:min-h-[80px]">
          <TypewriterText
            text={FINAL_SECTION_DATA.heading}
            speed={30}
            delay={150}
            showCursor={true}
            active={isInView}
            viewKey={viewKey}
            cursorClassName="text-[#326DED]"
          />
        </h2>

        {/* Subheading */}
        <FadeReveal active={isInView} delay={700}>
          <p className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-[#326DED]">
            {FINAL_SECTION_DATA.subheading}
          </p>
        </FadeReveal>

        {/* Short Note */}
        <FadeReveal active={isInView} delay={950}>
          <p className="text-base sm:text-lg text-[#64748B] mt-2 font-normal">
            {FINAL_SECTION_DATA.note}
          </p>
        </FadeReveal>

        {/* CTA Button */}
        <FadeReveal active={isInView} delay={1200} className="mt-6">
          <button
            onClick={() => onOpenModal('Final Section Inquiry')}
            className="btn-primary text-base font-semibold py-4 px-10 cursor-pointer shadow-md"
          >
            <span>{FINAL_SECTION_DATA.cta}</span>
          </button>
        </FadeReveal>

      </div>
    </section>
  );
};

export default FinalCTA;
