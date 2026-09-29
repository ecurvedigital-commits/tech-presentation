import React, { useState } from 'react';
import { AlertTriangle, XCircle, ArrowRight, RefreshCw, Smartphone, Search, Database, Globe } from 'lucide-react';

export const ProblemSection = () => {
  const [activeProblem, setActiveProblem] = useState(0);

  const problems = [
    {
      id: 'outdated',
      title: 'Outdated Website',
      category: 'Performance & Aesthetics',
      desc: 'Heavy legacy themes and slow servers cause 53% of potential clients to bounce before your page even loads.',
      impact: 'Lost First Impressions & High Bounce Rate',
      visualType: 'outdated',
    },
    {
      id: 'visibility',
      title: 'Low Search Visibility',
      category: 'Discovery & SEO',
      desc: 'Without structured schema markup, keyword architecture, and technical SEO, prospective buyers never discover you on Google.',
      impact: 'Zero Inbound Organic Leads',
      visualType: 'visibility',
    },
    {
      id: 'cms',
      title: 'Difficult Content Management',
      category: 'Operational Agility',
      desc: 'Making basic text edits or posting announcements requires days of developer back-and-forth and recurring maintenance costs.',
      impact: 'High Maintenance Friction',
      visualType: 'cms',
    },
    {
      id: 'mobile',
      title: 'No Mobile Retention Channel',
      category: 'Customer Lifetime Value',
      desc: 'Without a dedicated mobile presence or app touchpoint, repeat orders, instant bookings, and push notifications remain untapped.',
      impact: 'Lost Customer Retention',
      visualType: 'mobile',
    },
  ];

  return (
    <section id="the-challenge" data-section="the-challenge" className="presentation-section bg-[#F8F9FB] border-b border-[#E8EAED]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-5">
          <div className="ecurve-eyebrow">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>The Reality Check</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit'] section-heading">
            Being online isn't enough.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed section-description font-normal">
            Most businesses invest in websites that look decorative but don't function as working business assets. Click each challenge below to inspect the visual breakdown.
          </p>
        </div>

        {/* Interactive Problem Exploration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: 4 Selectable Problem Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {problems.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveProblem(idx)}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                  activeProblem === idx
                    ? 'bg-white border-red-300 shadow-lg shadow-red-500/5 ring-1 ring-red-200'
                    : 'bg-white/60 hover:bg-white border-[#E8EAED] text-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    activeProblem === idx
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    0{idx + 1} • {p.category}
                  </span>
                  <XCircle className={`w-4 h-4 ${activeProblem === idx ? 'text-red-500' : 'text-gray-300'}`} />
                </div>

                <h3 className={`text-lg sm:text-xl font-bold font-['Outfit'] ${
                  activeProblem === idx ? 'text-[#0A0A0E]' : 'text-[#475569]'
                }`}>
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {p.desc}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono border-t border-gray-100 mt-1">
                  <span className="text-gray-400">Impact:</span>
                  <span className="font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    {p.impact}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Central Interactive Visual Simulator (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl bg-[#0A0A0E] rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4">
              
              {/* Simulator Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-gray-400">
                  Simulation: {problems[activeProblem].title}
                </span>
                <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  Status: Friction Detected
                </span>
              </div>

              {/* Dynamic Simulated Problem Screen */}
              <div className="bg-[#121826] rounded-2xl p-5 sm:p-8 min-h-[340px] flex flex-col justify-center border border-white/5 relative overflow-hidden transition-all duration-500">
                
                {/* 01: Outdated Website Visual */}
                {activeProblem === 0 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-between text-xs text-red-400 font-mono">
                      <span>⚠️ Page Speed Score: 24/100 (Critical)</span>
                      <span className="animate-pulse font-bold">12.8s Load Time</span>
                    </div>
                    <div className="space-y-2 opacity-50 blur-[0.5px]">
                      <div className="h-6 w-1/2 bg-gray-600 rounded animate-pulse" />
                      <div className="h-3 w-3/4 bg-gray-700 rounded" />
                      <div className="h-3 w-2/3 bg-gray-700 rounded" />
                      <div className="h-20 bg-gray-800 rounded-xl border border-dashed border-gray-600 flex items-center justify-center text-xs text-gray-400">
                        [ Unoptimized Heavy Image (8.4 MB) Loading... ]
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-xs font-mono text-red-400 font-bold">
                        Result: 68% of users close the tab before viewing.
                      </span>
                    </div>
                  </div>
                )}

                {/* 02: Low Search Visibility Visual */}
                {activeProblem === 1 && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="p-3 bg-[#1A2234] rounded-xl border border-white/10 flex items-center gap-3 text-xs font-mono text-gray-300">
                      <Search className="w-4 h-4 text-cyan-400" />
                      <span>Google Search: "your business services"</span>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-gray-800/40 border border-gray-700 text-xs text-gray-400">
                        #1 Competitor A — 1st Position (High Inbound Traffic)
                      </div>
                      <div className="p-2.5 rounded-lg bg-gray-800/40 border border-gray-700 text-xs text-gray-400">
                        #2 Competitor B — 2nd Position (Active Leads)
                      </div>
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono flex items-center justify-between">
                        <span>#78 Your Website (Page 8)</span>
                        <span className="font-bold">0 Inbound Clicks</span>
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-xs font-mono text-red-400 font-bold">
                        Result: Invisible to 99% of high-intent searchers.
                      </span>
                    </div>
                  </div>
                )}

                {/* 03: Difficult Content Management Visual */}
                {activeProblem === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-3 text-xs text-amber-300 font-mono">
                      <Database className="w-4 h-4" />
                      <span>Admin CMS: Access Locked / Code Edit Required</span>
                    </div>
                    <div className="p-4 rounded-xl bg-black/60 border border-red-500/30 font-mono text-xs text-red-400 space-y-1">
                      <p className="text-gray-500">// Cannot update announcement</p>
                      <p>Error: Hardcoded static HTML layout</p>
                      <p className="text-amber-400">Developer ticket submitted: Estimated delay 4-7 days</p>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-xs font-mono text-red-400 font-bold">
                        Result: Business is dependent on external agency for basic edits.
                      </span>
                    </div>
                  </div>
                )}

                {/* 04: No Mobile Retention Visual */}
                {activeProblem === 3 && (
                  <div className="space-y-3 animate-fadeIn flex flex-col items-center text-center">
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono w-full">
                      <Smartphone className="w-4 h-4 mx-auto mb-1" />
                      <span>Desktop Layout Broken on Mobile Viewport</span>
                    </div>
                    <div className="w-44 h-28 rounded-xl border border-dashed border-red-400/50 bg-gray-900 flex items-center justify-center text-[11px] text-gray-400 p-2">
                      [ Horizontal scroll overflow & unclickable buttons ]
                    </div>
                    <span className="text-xs font-mono text-red-400 font-bold">
                      Result: Zero repeat push notifications or direct retention.
                    </span>
                  </div>
                )}

              </div>

              {/* Bottom Simulator Controller */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-1">
                <span>Selected: {activeProblem + 1} / 4</span>
                <span className="text-[#326DED] font-bold">Interactive Audit Sandbox</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Banner: "Let's fix that." */}
        <div className="mt-14 sm:mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#326DED] to-[#2155C9] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-200 font-bold">
              The Ecurve Transformation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">
              Let's fix that.
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl">
              We replace disconnected friction with four synchronized engineering pillars.
            </p>
          </div>

          <a
            href="#services"
            className="btn-secondary whitespace-nowrap font-bold shrink-0 text-sm shadow-md"
          >
            <span>EXPLORE THE 4 PILLARS</span>
            <ArrowRight className="w-4 h-4 text-[#326DED]" />
          </a>
        </div>
      </div>
    </section>
  );
};
