import React, { useState } from 'react';
import { Sparkles, Code2, Database, Layers, Smartphone } from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, RevealContainer } from './Typewriter';

export const TechExperienceSection = () => {
  const { ref, isInView } = useSectionInView(0.15);
  const [activeCategory, setActiveCategory] = useState('fullstack');

  const techEcosystem = {
    fullstack: {
      title: 'Full-Stack Modern Web',
      techs: ['React.js', 'JavaScript (ES6+)', 'Node.js', 'Express.js'],
      description: 'High-speed interactive interfaces coupled with robust, scalable server architectures.',
      benefit: 'Sub-second interaction velocity & type-safe API communication.',
    },
    cms: {
      title: 'Content Management Systems',
      techs: ['WordPress', 'Custom Gutenberg Blocks', 'Headless CMS'],
      description: 'Autonomous publishing workflows enabling teams to manage content without code dependencies.',
      benefit: 'Total editorial freedom with zero bloat or slow legacy plugins.',
    },
    mobile: {
      title: 'Mobile Applications',
      techs: ['Android Development', 'Native APIs', 'Offline Sync'],
      description: 'Purpose-built mobile applications delivering direct customer retention and offline capability.',
      benefit: 'Push notifications, hardware acceleration & seamless device integration.',
    },
    backend: {
      title: 'Databases & APIs',
      techs: ['MongoDB', 'SQL Databases', 'RESTful & GraphQL APIs', 'Custom Software'],
      description: 'Resilient database schemas and microservice integrations engineered for reliability.',
      benefit: 'Complete ownership of your proprietary datasets with zero vendor lock-in.',
    },
  };

  return (
    <section ref={ref} id="tech-experience" data-section="tech-experience" className="presentation-section bg-black border-b border-white/10">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* ========================================================================= */}
        {/* 1. RICH EXPERIENCE. DIVERSE PERSPECTIVE.                                  */}
        {/* ========================================================================= */}
        <div className="section-header text-center max-w-4xl mx-auto">
          <FadeReveal active={isInView} delay={0}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>RICH EXPERIENCE</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-white">
              Rich Experience. Diverse Perspective.
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-xl text-gray-300 mx-auto">
              Our experience comes from working across different projects, technologies and requirements. We don't rely on one fixed technology — <strong className="text-white">we understand how different technologies can be used according to the actual problem.</strong>
            </p>
          </FadeReveal>
        </div>

        {/* ========================================================================= */}
        {/* 2. ONE CLEAN INTERACTIVE TECHNOLOGY AREA                                  */}
        {/* ========================================================================= */}
        <RevealContainer active={isInView} delay={450} className="cards-container p-6 sm:p-10 lg:p-12 rounded-3xl bg-black/90 border border-white/10 flex flex-col gap-8 shadow-2xl">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-2.5">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D2FF]">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Experience Across Technologies
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              We bring experience working with both established and modern development stacks.
            </p>
          </div>

          {/* Interactive Stack Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'fullstack', label: 'React.js & Node.js', icon: Code2 },
              { id: 'cms', label: 'WordPress & CMS', icon: Layers },
              { id: 'mobile', label: 'Android Development', icon: Smartphone },
              { id: 'backend', label: 'Databases & APIs', icon: Database },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#326DED] text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                      : 'bg-black text-gray-300 border border-white/10 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Ecosystem Deep-Dive Showcase Card */}
          <div className="card p-6 sm:p-8 lg:p-10 rounded-3xl bg-black border border-white/10 shadow-xl max-w-4xl mx-auto w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                  Technology Group
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                  {techEcosystem[activeCategory].title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {techEcosystem[activeCategory].techs.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#326DED]/15 border border-[#326DED]/30 text-[#00D2FF] text-xs font-mono font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
              <div className="p-5 sm:p-6 rounded-2xl bg-black/80 border border-white/10 flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  Engineering Purpose:
                </span>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {techEcosystem[activeCategory].description}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-black/80 border border-white/10 flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Business Value:
                </span>
                <p className="text-sm text-white font-semibold leading-relaxed">
                  ✓ {techEcosystem[activeCategory].benefit}
                </p>
              </div>
            </div>
          </div>

          {/* Evolution Progression Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/90 border border-white/10 max-w-4xl mx-auto w-full text-center flex flex-col gap-3 shadow-xl">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
              TECHNOLOGY EVOLUTION
            </span>
            <div className="text-lg sm:text-2xl font-extrabold text-white font-['Outfit']">
              Legacy Systems <span className="text-[#326DED]">→</span> Modern Development <span className="text-[#34A75D]">→</span> Scalable Platforms
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              We can work with what your business already has — while helping you move toward what it needs next.
            </p>
          </div>

        </RevealContainer>

      </div>
    </section>
  );
};

export default TechExperienceSection;
