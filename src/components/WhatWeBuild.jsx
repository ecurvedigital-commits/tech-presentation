import React, { useState } from 'react';
import { 
  Globe, LayoutGrid, Smartphone, Cog, Bot, Share2, 
  CheckCircle, ArrowUpRight, Cpu, Layers, Code2, Sparkles, Terminal, Activity
} from 'lucide-react';
import { CAPABILITIES } from '../data/presentationData';

export const WhatWeBuild = () => {
  const [activeTab, setActiveTab] = useState('web-app');

  const capabilityIcons = {
    'web-exp': Globe,
    'web-app': LayoutGrid,
    'mobile-app': Smartphone,
    'custom-soft': Cog,
    'ai-auto': Bot,
    'integrations': Share2,
  };

  const selectedCap = CAPABILITIES.find(c => c.id === activeTab) || CAPABILITIES[1];
  const SelectedIcon = capabilityIcons[selectedCap.id] || LayoutGrid;

  return (
    <section
      id="what-we-build"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#090C16] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#326DED]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#6336F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#326DED]/10 border border-[#326DED]/30 text-[#00D2FF] font-mono text-xs uppercase font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Digital Engineering Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We don't offer rigid boilerplate packages. We engineer 6 interconnected digital product disciplines tailored to your exact business requirements.
          </p>
        </div>

        {/* Interactive Centerpiece & Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {CAPABILITIES.map((cap) => {
            const Icon = capabilityIcons[cap.id];
            const isActive = activeTab === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-[#18233C] to-[#0F1626] border-[#326DED] shadow-xl shadow-[#326DED]/20 scale-[1.03]'
                    : 'bg-[#111625]/60 border-white/5 hover:border-white/20 hover:bg-[#151B2E]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-[#326DED] text-white shadow-md shadow-[#326DED]/40' : 'bg-white/5 text-[#94A3B8]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#64748B]">{cap.num}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {cap.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-[#00D2FF]">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Interactive Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-[#326DED]/30 relative overflow-hidden bg-[#0D1220]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00D2FF]">
                <SelectedIcon className="w-3.5 h-3.5" />
                <span>Capability {selectedCap.num} // {selectedCap.title}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                  {selectedCap.title}
                </h3>
                <p className="text-sm font-medium text-[#326DED] mt-1 font-mono">
                  // {selectedCap.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {selectedCap.summary}
                </p>
              </div>

              {/* Core Deliverable Bullet Points */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-white/50 tracking-wider">
                  Engineered Features & Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Involved */}
              <div>
                <div className="text-xs font-mono uppercase text-[#326DED] mb-2 font-semibold">
                  Underlying Tech Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCap.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#131B2E] border border-[#326DED]/30 text-xs font-mono text-[#E2E8F0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Mock Interface Preview (6 cols) */}
            <div className="lg:col-span-6">
              <div className="code-window p-4 sm:p-6 rounded-2xl relative border border-white/10 shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-xs font-mono text-[#64748B] ml-2">
                      ecurve-sys::{selectedCap.id}.live_engine
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20">
                    STATUS: OPTIMIZED
                  </span>
                </div>

                {/* Simulated Visual Mock Preview according to mockType */}
                <div className="space-y-4 font-mono text-xs">
                  {selectedCap.mockType === 'web' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-[#00D2FF]">Lighthouse Performance Score:</span>
                        <span className="text-[#22C55E] font-bold">99 / 100</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">First Contentful Paint (FCP):</span>
                        <span className="text-[#22C55E] font-bold">0.42s</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Dynamic SEO Schema:</span>
                        <span className="text-[#326DED] font-bold">JSON-LD Auto-Injected</span>
                      </div>
                    </div>
                  )}

                  {selectedCap.mockType === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-xl bg-[#141C30] border border-[#326DED]/20">
                          <div className="text-[#94A3B8] text-[10px]">Active Sessions</div>
                          <div className="text-white font-bold text-base mt-1">2,840 Live</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#141C30] border border-[#326DED]/20">
                          <div className="text-[#94A3B8] text-[10px]">API Response Time</div>
                          <div className="text-[#22C55E] font-bold text-base mt-1">42ms</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">WebSocket State:</span>
                        <span className="text-[#22C55E] font-bold">Synchronized (0 Packet Loss)</span>
                      </div>
                    </div>
                  )}

                  {selectedCap.mockType === 'mobile' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-[#00D2FF]">Target Runtimes:</span>
                        <span className="text-white font-bold">iOS + Android Native</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Offline Cache:</span>
                        <span className="text-[#22C55E] font-bold">Local SQLite + Delta Sync</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Push Notification Gateway:</span>
                        <span className="text-[#326DED] font-bold">FCM & APNs Pipeline</span>
                      </div>
                    </div>
                  )}

                  {selectedCap.mockType === 'software' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-[#00D2FF]">Bespoke Workflow Model:</span>
                        <span className="text-white font-bold">100% Customized Logic</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Multi-Tenant RBAC:</span>
                        <span className="text-[#22C55E] font-bold">Granular Permission Matrix</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Data Isolation:</span>
                        <span className="text-[#326DED] font-bold">Encrypted Multi-Schema</span>
                      </div>
                    </div>
                  )}

                  {selectedCap.mockType === 'ai' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-[#D93D6D]">LLM Integration:</span>
                        <span className="text-white font-bold">OpenAI / Claude Microservices</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Doc Ingestion Speed:</span>
                        <span className="text-[#22C55E] font-bold">&lt; 1.2s per 50-page PDF</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Automated Triage:</span>
                        <span className="text-[#00D2FF] font-bold">99.4% Accuracy</span>
                      </div>
                    </div>
                  )}

                  {selectedCap.mockType === 'integration' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-[#00D2FF]">Webhook Delivery:</span>
                        <span className="text-[#22C55E] font-bold">Retry Queue with Exponential Backoff</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">Payment Gate:</span>
                        <span className="text-white font-bold">Razorpay / Stripe Webhook Handlers</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <span className="text-white/80">WhatsApp Cloud API:</span>
                        <span className="text-[#22C55E] font-bold">Automated Template Messaging</span>
                      </div>
                    </div>
                  )}

                  {/* Code snippet demonstration */}
                  <div className="mt-4 p-3 rounded-xl bg-[#060810] border border-white/5 text-[11px] text-[#94A3B8] overflow-x-auto">
                    <span className="text-[#6336F5]">const</span> engine = <span className="text-[#326DED]">new EcurveSystem</span>({`{\n`}
                    &nbsp;&nbsp;capability: <span className="text-[#22C55E]">"{selectedCap.id}"</span>,{`\n`}
                    &nbsp;&nbsp;architecture: <span className="text-[#22C55E]">"custom-engineered"</span>,{`\n`}
                    &nbsp;&nbsp;performance: <span className="text-[#00D2FF]">"edge-optimized"</span>{`\n`}
                    {`}`});
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
