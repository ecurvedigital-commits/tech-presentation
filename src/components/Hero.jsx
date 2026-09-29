import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useSectionInView, TypewriterText, FadeReveal } from './Typewriter';
import { HERO_DATA } from '../data/presentationData';

export const Hero = ({ onExploreClick }) => {
  const { ref, isInView, viewKey } = useSectionInView(0.1);

  return (
    <section
      ref={ref}
      id="hero"
      className="presentation-section pt-16 sm:pt-20 pb-16 sm:pb-20 bg-white flex items-center justify-center text-center border-b border-gray-100"
    >
      <div className="section-container flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Small Eyebrow */}
        <FadeReveal active={isInView} delay={50}>
          <div className="ecurve-eyebrow">
            <span>{HERO_DATA.eyebrow}</span>
          </div>
        </FadeReveal>

        {/* Main Headline with Typewriter Animation */}
        <h1 className="section-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight mt-3 mb-6 min-h-[90px] sm:min-h-[140px] flex items-center justify-center">
          <TypewriterText
            text={HERO_DATA.mainHeadline}
            speed={30}
            delay={150}
            showCursor={true}
            active={isInView}
            viewKey={viewKey}
            cursorClassName="text-[#326DED]"
          />
        </h1>

        {/* Supporting Paragraph */}
        <FadeReveal active={isInView} delay={1400}>
          <p className="section-description text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-normal">
            {HERO_DATA.subtitle}
          </p>
        </FadeReveal>

        {/* Simple CTA */}
        <FadeReveal active={isInView} delay={1700} className="mt-16 sm:mt-20 lg:mt-24 mb-6">
          <button
            onClick={onExploreClick}
            className="btn-primary text-sm font-medium py-4 px-9 cursor-pointer flex items-center gap-2.5 transition-all hover:scale-[1.02] mt-4 sm:mt-6"
          >
            <span>{HERO_DATA.cta}</span>
          </button>
        </FadeReveal>

      </div>
    </section>
  );
};

export default Hero;
