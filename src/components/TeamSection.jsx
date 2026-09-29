import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { TEAM_DATA } from '../data/presentationData';

export const TeamSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="team"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col gap-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={TEAM_DATA.heading}
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="text-lg sm:text-xl font-bold font-['Outfit'] text-[#326DED] mt-2 mb-3">
              "{TEAM_DATA.statement}"
            </p>
          </FadeReveal>

          <FadeReveal active={isInView} delay={900}>
            <p className="section-description text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
              {TEAM_DATA.explanation}
            </p>
          </FadeReveal>
        </div>

        {/* Two Clean Cards Grid with Generous 30-36px Padding */}
        <RevealContainer active={isInView} delay={1100} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Experienced Team */}
            <div className="clean-card p-7 sm:p-9 lg:p-10 flex flex-col justify-center min-h-[190px] w-full">
              <div className="clean-card-content flex flex-col">
                <h3 className="text-xs font-mono font-bold uppercase text-[#326DED] tracking-wider block mb-3">
                  {TEAM_DATA.experienced.title}
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed break-words">
                  {TEAM_DATA.experienced.desc}
                </p>
              </div>
            </div>

            {/* Card 2: Emerging Talent */}
            <div className="clean-card p-7 sm:p-9 lg:p-10 flex flex-col justify-center min-h-[190px] w-full">
              <div className="clean-card-content flex flex-col">
                <h3 className="text-xs font-mono font-bold uppercase text-[#10B981] tracking-wider block mb-3">
                  {TEAM_DATA.emerging.title}
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed break-words">
                  {TEAM_DATA.emerging.desc}
                </p>
              </div>
            </div>

          </div>
        </RevealContainer>

        {/* Bottom Statement */}
        <FadeReveal active={isInView} delay={1300} className="text-center pt-2">
          <p className="text-base sm:text-lg font-bold font-['Outfit'] text-[#0F172A]">
            {TEAM_DATA.bottomStatement}
          </p>
        </FadeReveal>

      </div>
    </section>
  );
};

export default TeamSection;
