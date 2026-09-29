import React, { useState } from 'react';
import { 
  Globe, LayoutGrid, Smartphone, LayoutDashboard, Zap, Bot, Cog, Lightbulb,
  ArrowRight, CheckCircle2, Layers, Sparkles, Terminal, Cpu
} from 'lucide-react';
import { BUILDER_OPTIONS } from '../data/presentationData';

export const InteractiveBuilder = ({ onOpenModalWithScope }) => {
  const [selectedOptionId, setSelectedOptionId] = useState('webapp');

  const optionIcons = {
    'website': Globe,
    'webapp': LayoutGrid,
    'mobile': Smartphone,
    'dashboard': LayoutDashboard,
    'automation': Zap,
    'ai': Bot,
    'custom': Cog,
    'idea': Lightbulb,
  };

  const currentOption = BUILDER_OPTIONS.find(o => o.id === selectedOptionId) || BUILDER_OPTIONS[1];
  const CurrentIcon = optionIcons[currentOption.id] || LayoutGrid;

  return (
    <section
      id="builder"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#326DED]/10 border border-[#326DED]/30 text-[#00D2FF] font-mono text-xs uppercase font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Solution Configurator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            What are you trying to build?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Select your primary business requirement below to see how Ecurve maps out the technical architecture, data pipeline, and delivery plan.
          </p>
        </div>

        {/* Option Selectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {BUILDER_OPTIONS.map((opt) => {
            const Icon = optionIcons[opt.id];
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedOptionId(opt.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#18233C] border-[#00D2FF] shadow-xl shadow-[#00D2FF]/20 scale-[1.02]'
                    : 'bg-[#0E1322] border-white/5 text-[#94A3B8] hover:text-white hover:bg-[#131A2D]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#00D2FF] text-[#090C16]' : 'bg-white/5'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B]">Select</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                  {opt.label}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Pipeline Presentation Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#326DED]/30 bg-[#0D1220] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Solution Architecture Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF]">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#326DED] font-bold uppercase">
                      Tailored Solution Blueprint
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                      {currentOption.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Ideal For */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider block mb-1">
                  Ideal Operational Scope:
                </span>
                <p className="text-xs sm:text-sm text-[#E2E8F0]">
                  {currentOption.idealFor}
                </p>
              </div>

              {/* Data Flow Diagram Steps */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider block">
                  Engineered Data Flow:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentOption.flowDiagram.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#121829] border border-white/5">
                      <div className="text-xs font-bold text-[#00D2FF] font-mono">
                        0{idx + 1}. {item.step}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] mt-1">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stack */}
              <div>
                <span className="text-xs font-mono font-bold text-[#326DED] uppercase tracking-wider block mb-2">
                  Recommended Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentOption.stack.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#161F34] border border-[#326DED]/30 text-xs font-mono text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenModalWithScope(currentOption.title)}
                  className="btn-primary py-3 px-6 text-sm font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <span>Build This Solution With Ecurve</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Delivery Pipeline Roadmap (5 cols) */}
            <div className="lg:col-span-5">
              <div className="code-window p-5 sm:p-7 rounded-2xl border border-white/10 bg-[#080B14] shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-[#94A3B8]">
                    ecurve-plan::{currentOption.id}
                  </span>
                  <span className="text-[10px] font-mono text-[#22C55E]">
                    READY TO SCOPE
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[#326DED] font-bold text-[11px] uppercase">
                    // Delivery Lifecycle Phases:
                  </div>

                  {currentOption.pipeline.map((phase, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span className="text-white/90">{phase}</span>
                      </div>
                      <span className="text-[10px] text-[#64748B]">Phase {idx + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-[#64748B] text-center">
                  100% Bespoke Code • Complete Intellectual Property Ownership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
