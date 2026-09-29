import React from 'react';
import { useSectionInView, TypewriterText, FadeReveal, StaggerItem } from './Typewriter';
import { TEAM_MEMBERS } from '../data/presentationData';

export const TeamMembersSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);

  return (
    <section
      ref={ref}
      id="team-members"
      className="presentation-section bg-white border-b border-gray-100"
    >
      <div className="section-container flex flex-col gap-12 sm:gap-14">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text="Meet Our Engineering Team"
              speed={28}
              delay={150}
              active={isInView}
              viewKey={viewKey}
            />
          </h2>

          <FadeReveal active={isInView} delay={700}>
            <p className="section-description text-base sm:text-lg text-[#475569] mt-2 leading-relaxed">
              9 dedicated specialists collaborating to build robust, scalable, and high-performance technology systems.
            </p>
          </FadeReveal>
        </div>

        {/* 9 Team Members Grid (3x3 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <StaggerItem
              key={member.id}
              active={isInView}
              index={index}
              baseDelay={800}
              staggerDelay={50}
              className="h-full"
            >
              <div className="clean-card p-6 sm:p-7 min-h-[230px] flex flex-col items-center text-center justify-center h-full w-full">
                
                {/* Template Avatar Image */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#E2E8F0] shadow-xs mb-3.5 bg-gray-100 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="clean-card-content flex flex-col items-center text-center">
                  {/* Template Name */}
                  <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-[#0F172A] block mb-1">
                    {member.name}
                  </h3>

                  {/* Template Role */}
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase tracking-wider block mb-2">
                    {member.role}
                  </span>

                  {/* Template Bio */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed break-words block max-w-xs">
                    {member.bio}
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

export default TeamMembersSection;
