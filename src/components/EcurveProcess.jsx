import React, { useState } from 'react';
import { 
  Search, Compass, Palette, Code2, Gauge, Rocket, LifeBuoy, 
  CheckCircle2, ArrowRight, Sparkles
} from 'lucide-react';
import { ECURVE_PROCESS_STEPS } from '../data/presentationData';

export const EcurveProcess = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const processIcons = [
    Search, Compass, Palette, Code2, Gauge, Rocket, LifeBuoy
  ];

  const currentStep = ECURVE_PROCESS_STEPS[activeStepIndex];
  const CurrentIcon = processIcons[activeStepIndex];

  return (
    <section id="process" className="relative section-padding bg-[#F8F9FB] border-b border-[#E2E8F0] overflow-hidden">
      <div className="presentation-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ecurve-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 7-Step Delivery Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0E] tracking-tight font-['Outfit']">
            How we work.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            From your initial business problem to ongoing optimization, our structured 7-stage engineering lifecycle guarantees predictable, high-speed execution.
          </p>
        </div>

        {/* Step Scrubber / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
          {ECURVE_PROCESS_STEPS.map((s, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-2xl text-center transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#326DED] text-white border-[#326DED] shadow-md shadow-[#326DED]/20 scale-105'
                    : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="text-[10px] font-mono font-bold opacity-80">{s.num}</div>
                <div className="text-xs font-bold font-['Outfit'] mt-0.5 truncate">{s.title}</div>
              </button>
            );
          })}
        </div>

        {/* Major Central Morphing Visual Component */}
        <div className="ecurve-card-dark p-8 sm:p-14 rounded-3xl bg-[#0F1422] border border-[#326DED]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Stage Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#326DED]/20 text-[#00D2FF] font-mono text-xs font-bold">
                  PHASE {currentStep.num} OF 07
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {currentStep.subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] flex items-center gap-3">
                  <CurrentIcon className="w-10 h-10 text-[#00D2FF]" />
                  <span>{currentStep.title}</span>
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono text-[#E2E8F0]">
                <div className="text-[#326DED] font-bold uppercase text-[10px]">
                  // Milestone Guarantee:
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Zero assumptions • Verified with stakeholders before next phase</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="btn-ecurve-outline py-2 px-4 text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed text-white bg-transparent border-white/20"
                >
                  ← Previous Phase
                </button>
                <button
                  disabled={activeStepIndex === ECURVE_PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(ECURVE_PROCESS_STEPS.length - 1, prev + 1))}
                  className="btn-ecurve-primary py-2 px-4 text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Central Dynamic Visual Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#326DED] via-[#00D2FF] to-[#562BDA] p-[2px] shadow-2xl shadow-[#326DED]/30">
                <div className="w-full h-full bg-[#090D18] rounded-full flex flex-col items-center justify-center p-6 text-center">
                  <CurrentIcon className="w-12 h-12 text-[#00D2FF] mb-2 animate-pulse" />
                  <span className="text-[10px] font-mono text-[#326DED] font-bold uppercase tracking-widest">
                    STEP {currentStep.num}
                  </span>
                  <h4 className="text-xl font-black text-white font-['Outfit'] mt-1">
                    {currentStep.title}
                  </h4>
                  <span className="text-[11px] text-gray-400 mt-1 max-w-[150px]">
                    {currentStep.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
