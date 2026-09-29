import React, { useState } from 'react';
import { 
  Lightbulb, HelpCircle, PenTool, Layout, Box, Code, Database, Network, Rocket, 
  ChevronRight, Play, CheckCircle2, Terminal
} from 'lucide-react';
import { IDEA_STAGES } from '../data/presentationData';

export const IdeaToProduct = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const pipelineStages = [
    { name: '1. Hand-Drawn Idea', icon: Lightbulb, color: '#F59E0B', badge: 'CONCEPT', detail: 'Napkin sketches, business model notes, and unstructured feature requests.' },
    { name: '2. Wireframe & UX', icon: Layout, color: '#00D2FF', badge: 'BLUEPRINT', detail: 'Information hierarchy, interaction paths, and frictionless ergonomic wireframes.' },
    { name: '3. UI Design System', icon: PenTool, color: '#6336F5', badge: 'INTERFACE', detail: 'High-fidelity visual design, typography tokens, glassmorphism, and responsive layouts.' },
    { name: '4. React Components', icon: Box, color: '#326DED', badge: 'FRONTEND', detail: 'Modular, type-safe frontend components with micro-interactions and fast rendering.' },
    { name: '5. Production Code', icon: Code, color: '#22C55E', badge: 'ENGINEERING', detail: 'Backend controllers, business logic verification, and error-resilient exception handling.' },
    { name: '6. Database & Cache', icon: Database, color: '#D93D6D', badge: 'DATA LAYER', detail: 'Relational or document schemas with indexing, encryption, and transactional integrity.' },
    { name: '7. Secure API Layer', icon: Network, color: '#00D2FF', badge: 'INTEGRATION', detail: 'REST/GraphQL endpoints, JWT authentication tokens, and payment webhooks.' },
    { name: '8. Live Cloud Product', icon: Rocket, color: '#22C55E', badge: 'DEPLOYED', detail: 'Production release on high-availability edge cloud with real-time telemetry.' },
  ];

  const current = pipelineStages[currentStep];
  const CurrentIcon = current.icon;

  return (
    <section
      id="idea-to-product"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-widest font-bold block mb-3">
            // The Evolution Pipeline
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            An idea is not a product. <br />
            <span className="grad-text-cyan">We turn ideas into working products.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Having an idea is only step zero. We bridge the massive gap between concept and a scalable, production-hardened digital reality.
          </p>
        </div>

        {/* Interactive Step Scrubber Navigation */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[700px] sm:min-w-full gap-2 p-2 rounded-2xl bg-[#111625] border border-white/10">
            {pipelineStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isSelected = currentStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex-1 py-3 px-2 rounded-xl text-center transition-all duration-300 cursor-pointer flex flex-col items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#326DED] text-white shadow-lg shadow-[#326DED]/30'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <StageIcon className="w-4 h-4" />
                  <span className="text-[11px] font-mono font-bold whitespace-nowrap">
                    Stage 0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Transformation Display Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#00D2FF]/30 bg-[#0C111E] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  Stage {currentStep + 1} of {pipelineStages.length}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] flex items-center gap-3">
                  <CurrentIcon className="w-8 h-8 text-[#00D2FF]" />
                  <span>{current.name}</span>
                </h3>
                <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
                  {current.detail}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 font-mono text-xs text-[#E2E8F0]">
                <div className="text-[#326DED] font-bold uppercase text-[10px]">
                  // Engineering Transformation Checkpoint
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Requirement validation & technical scope lock</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Modular component isolation for zero regressions</span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  className="btn-secondary py-2 px-4 text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous Stage
                </button>

                <button
                  disabled={currentStep === pipelineStages.length - 1}
                  onClick={() => setCurrentStep(prev => Math.min(pipelineStages.length - 1, prev + 1))}
                  className="btn-primary py-2 px-4 text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span>Next Transformation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual Simulation Window */}
            <div className="lg:col-span-6">
              <div className="code-window p-5 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden bg-[#070A12] shadow-2xl min-h-[300px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#94A3B8]">
                  <span>pipeline_stage_{currentStep + 1}.tsx</span>
                  <span className="text-[#22C55E] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                    LIVE COMPILED
                  </span>
                </div>

                {/* Visual Representation for Current Step */}
                <div className="my-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-[#E2E8F0] space-y-2">
                  <div className="text-[#00D2FF]">
                    &gt; Executing Stage 0{currentStep + 1}: {current.name}
                  </div>
                  <div className="text-white/80">
                    &gt; Status: Validated by Ecurve engineering pipeline
                  </div>
                  <div className="text-[#22C55E]">
                    &gt; Next Pipeline Bridge: {pipelineStages[(currentStep + 1) % pipelineStages.length].name}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>Zero Tech Debt Architecture</span>
                  <span className="text-[#326DED]">Ecurve Digital Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
