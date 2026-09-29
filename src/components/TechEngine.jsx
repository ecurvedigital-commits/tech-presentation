import React, { useState, useEffect } from 'react';
import { 
  Cpu, Zap, Search, Palette, Code, ShieldCheck, Rocket, TrendingUp, 
  ArrowRight, Sparkles, Activity, CheckCircle2, RotateCw
} from 'lucide-react';

export const TechEngine = () => {
  const [activeEngineStage, setActiveEngineStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const engineStages = [
    {
      id: 'discover',
      title: 'DISCOVER',
      tagline: 'Deconstruct Business Friction',
      icon: Search,
      color: '#326DED',
      details: 'We audit operational bottlenecks, team hand-offs, customer inquiry channels, and existing software friction.',
      metrics: 'Zero assumptions • 100% workflow clarity'
    },
    {
      id: 'design',
      title: 'DESIGN',
      tagline: 'Ergonomic Architecture & UX',
      icon: Palette,
      color: '#00D2FF',
      details: 'Creating interactive design systems, component trees, and data models that eliminate user friction.',
      metrics: 'Sub-second interface interaction design'
    },
    {
      id: 'engineer',
      title: 'ENGINEER',
      tagline: 'Full-Stack Modular Codebase',
      icon: Code,
      color: '#6336F5',
      details: 'Production-hardened React, Node.js, and database engineering adhering to clean architecture standards.',
      metrics: 'Type-safe • Zero technical debt'
    },
    {
      id: 'test',
      title: 'TEST',
      tagline: 'Stress, Security & Edge Cases',
      icon: ShieldCheck,
      color: '#D93D6D',
      details: 'Automated unit tests, load stress testing, mobile viewport verification, and API latency hardening.',
      metrics: '100% cross-device compatibility'
    },
    {
      id: 'deploy',
      title: 'DEPLOY',
      tagline: 'Edge Cloud Infrastructure',
      icon: Rocket,
      color: '#F59E0B',
      details: 'Continuous integration, automated SSL, global edge CDN caching, and automated database backups.',
      metrics: 'Global edge distribution • 99.99% uptime'
    },
    {
      id: 'scale',
      title: 'SCALE',
      tagline: 'Telemetry & Automation Growth',
      icon: TrendingUp,
      color: '#22C55E',
      details: 'Real-time telemetry, automated background syncs, AI optimizations, and feature enhancements.',
      metrics: 'Continuous operational acceleration'
    },
  ];

  // Auto-cycle particle through the engine
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveEngineStage(prev => (prev + 1) % engineStages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, engineStages.length]);

  const currentStage = engineStages[activeEngineStage];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      id="tech-engine"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090D] overflow-hidden"
    >
      {/* Dynamic Background Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#326DED]/15 via-[#00D2FF]/10 to-[#6336F5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] font-mono text-xs uppercase font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Centerpiece Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-tight">
            The Ecurve Tech Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            An automated continuous feedback engine that transforms ambiguous business problems into high-performing, revenue-generating digital products.
          </p>
        </div>

        {/* Engine Visual Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Orbital Controller (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-[#0C101C] border border-white/10 shadow-2xl min-h-[420px]">
            {/* Orbital Center Core */}
            <div className="relative flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#326DED] via-[#00D2FF] to-[#6336F5] p-[2px] shadow-2xl shadow-[#326DED]/40 z-20">
              <div className="w-full h-full bg-[#080B14] rounded-full flex flex-col items-center justify-center p-4 text-center">
                <Cpu className="w-8 h-8 text-[#00D2FF] animate-pulse-glow" />
                <span className="text-[10px] font-mono text-[#326DED] font-bold mt-1 uppercase tracking-wider">
                  ECURVE
                </span>
                <span className="text-xs font-black text-white uppercase tracking-tight">
                  TECH ENGINE
                </span>
              </div>
            </div>

            {/* Orbiting Stage Buttons */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-8 z-20">
              {engineStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeEngineStage === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveEngineStage(idx);
                    }}
                    className={`p-3 rounded-xl text-left transition-all duration-300 border cursor-pointer flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-[#18233C] border-[#00D2FF] text-white shadow-lg shadow-[#00D2FF]/25 scale-105'
                        : 'bg-white/5 border-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#00D2FF] text-[#080B14]' : 'bg-white/5'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold">{stage.title}</div>
                      <div className="text-[9px] font-mono text-[#64748B]">Phase 0{idx + 1}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Auto Playback Toggle */}
            <div className="mt-4 flex items-center justify-between w-full pt-4 border-t border-white/5 text-[11px] font-mono text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#22C55E] animate-ping' : 'bg-[#64748B]'}`} />
                {isAutoPlaying ? 'Continuous Particle Cycle Active' : 'Manual Inspection Mode'}
              </span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-[#00D2FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCw className="w-3 h-3" />
                {isAutoPlaying ? 'Pause Cycle' : 'Resume Auto Cycle'}
              </button>
            </div>
          </div>

          {/* Right Column: Active Stage Telemetry & Transformation Result (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-[#00D2FF]/30 bg-[#0E1424] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF]">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#00D2FF] font-bold">
                      Active Stage 0{activeEngineStage + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white font-['Outfit']">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-md border border-[#22C55E]/20">
                  ⚡ Optimal Velocity
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#326DED] font-semibold uppercase">
                    // Purpose & Operational Impact:
                  </div>
                  <p className="text-sm text-[#E2E8F0] mt-1 leading-relaxed">
                    {currentStage.details}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070A12] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase">
                    Engine Verification Guarantee:
                  </div>
                  <div className="text-xs font-bold text-[#00D2FF] font-mono">
                    ✓ {currentStage.metrics}
                  </div>
                </div>
              </div>
            </div>

            {/* The Ultimate Result Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#18233C] via-[#101726] to-[#0A0E18] border border-[#326DED]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-red-400 uppercase font-bold block">
                  FROM INPUT:
                </span>
                <span className="text-sm font-extrabold text-white">
                  "Ambiguous Business Problem"
                </span>
              </div>

              <div className="flex items-center justify-center p-2 rounded-full bg-[#326DED]/20 text-[#00D2FF]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              <div className="text-center sm:text-right">
                <span className="text-[10px] font-mono text-[#22C55E] uppercase font-bold block">
                  TO OUTPUT:
                </span>
                <span className="text-sm font-extrabold text-[#22C55E]">
                  "Working Scalable Digital Product"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
