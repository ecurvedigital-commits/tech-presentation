import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, RevealContainer } from './Typewriter';

export const BeforeAfter = () => {
  const { ref, isInView } = useSectionInView(0.15);
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [mode, setMode] = useState('split'); // split, before, after

  return (
    <section ref={ref} id="before-after" data-section="before-after" className="presentation-section bg-[#F8F9FB] border-b border-[#E8EAED]">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto">
          <FadeReveal active={isInView} delay={0}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
              <span>Measurable Impact</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0E]">
              The Ecurve Difference
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-lg lg:text-xl text-[#334155] mx-auto">
              Drag the interactive slider below to compare a fragmented legacy presence with a unified Ecurve digital engine.
            </p>
          </FadeReveal>
        </div>

        {/* View Mode Switcher Pills */}
        <FadeReveal active={isInView} delay={420} className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { setMode('split'); setSliderPos(50); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'split' ? 'bg-[#326DED] text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            ↔ Interactive Split Comparison
          </button>
          <button
            onClick={() => { setMode('before'); setSliderPos(100); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'before' ? 'bg-red-500 text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            ✗ Before Ecurve
          </button>
          <button
            onClick={() => { setMode('after'); setSliderPos(0); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              mode === 'after' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            ✓ After Ecurve
          </button>
        </FadeReveal>

        {/* Interactive Comparison Container Card */}
        <RevealContainer active={isInView} delay={520} className="cards-container rounded-3xl bg-white border border-[#E8EAED] shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          
          {/* Slider Control Input Bar */}
          <div className="flex items-center gap-4 bg-[#F8F9FB] p-4 rounded-2xl border border-gray-200">
            <span className="text-xs font-mono text-red-500 font-bold shrink-0">BEFORE (0%)</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => {
                setSliderPos(Number(e.target.value));
                setMode('split');
              }}
              className="w-full accent-[#326DED] cursor-pointer"
              aria-label="Comparison Slider"
            />
            <span className="text-xs font-mono text-[#326DED] font-bold shrink-0">AFTER ECURVE (100%)</span>
          </div>

          {/* Comparison Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Card: BEFORE ECURVE */}
            <div
              className={`p-6 sm:p-8 lg:p-9 rounded-3xl border transition-all duration-300 flex flex-col gap-5 ${
                sliderPos >= 50
                  ? 'bg-red-50/40 border-red-200 opacity-100 shadow-sm'
                  : 'bg-gray-50 border-gray-200 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-red-200/60">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  ✗ Fragmented Legacy Digital State
                </span>
                <span className="text-[10px] font-mono text-red-500 bg-red-100 px-2.5 py-1 rounded-md font-bold">
                  Status: Friction
                </span>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Slow, Bloated Website</strong>
                    <span className="text-gray-500 leading-relaxed">12+ second load times causing massive bounce rates.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Invisible on Search Engines</strong>
                    <span className="text-gray-500 leading-relaxed">No schema, missing keywords, losing leads to competitors.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Manual, Laggy Updates</strong>
                    <span className="text-gray-500 leading-relaxed">Making basic edits takes days of developer dependency.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Zero Mobile Push Retention</strong>
                    <span className="text-gray-500 leading-relaxed">No direct smartphone touchpoint or loyalty notifications.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: AFTER ECURVE */}
            <div
              className={`p-6 sm:p-8 lg:p-9 rounded-3xl border transition-all duration-300 flex flex-col gap-5 ${
                sliderPos <= 50
                  ? 'bg-[#F0F7FD] border-[#326DED]/40 opacity-100 shadow-lg ring-1 ring-[#326DED]/20'
                  : 'bg-blue-50/20 border-blue-100 opacity-90'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#326DED]/20">
                <span className="text-xs font-mono font-bold text-[#326DED] uppercase tracking-wider">
                  ✓ Unified Ecurve Connected Engine
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md font-bold">
                  Status: High Growth
                </span>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#326DED] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Sub-Second Custom Website</strong>
                    <span className="text-gray-600 leading-relaxed">99+ Core Web Vitals score on global edge CDN.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Page 1 Technical SEO Foundation</strong>
                    <span className="text-gray-600 leading-relaxed">Structured JSON-LD schema & targeted high-intent keywords.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#562BDA] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Autonomous WordPress CMS</strong>
                    <span className="text-gray-600 leading-relaxed">Visual block editing allowing instant updates with zero code.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#34A75D] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-[#0A0A0E] block font-bold">Native Android App Pipeline</strong>
                    <span className="text-gray-600 leading-relaxed">Real-time push notifications & 1-tap customer booking funnels.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Summary Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0A0A0E] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-cyan-300 font-bold">
              Formula: Fast Website + First-Page SEO + WordPress CMS + Android App
            </span>
            <span className="text-emerald-400 font-bold">
              = Complete Digital Dominance
            </span>
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};
