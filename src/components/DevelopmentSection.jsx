import React from 'react';
import { Zap, TrendingUp, Users, Network } from 'lucide-react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem } from './Typewriter';
import { DEVELOPMENT_PILLARS } from '../data/presentationData';

const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Users: Users,
  Network: Network
};

export const DevelopmentSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="development"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col gap-12 sm:gap-14">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text="Development That Goes Beyond Code"
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="section-description text-base sm:text-lg text-[#475569] mt-2 leading-relaxed">
              Good development is not only about writing code. It is about understanding how the technology will actually be used.
            </p>
          </FadeReveal>
        </div>

        {/* 4 Clean Cards with 28-36px Padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DEVELOPMENT_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Zap;
            return (
              <StaggerItem
                key={pillar.title}
                active={isInView}
                index={index}
                baseDelay={800}
                staggerDelay={80}
                className="h-full"
              >
                <div className="clean-card p-6 sm:p-8 lg:p-9 min-h-[230px] flex flex-col justify-between gap-6 h-full w-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#326DED] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="clean-card-content flex flex-col">
                    <h3 className="text-base font-bold font-['Outfit'] text-[#0F172A] block mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed break-words">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DevelopmentSection;
