import React, { useState } from 'react';
import { 
  Building2, Globe, GraduationCap, Truck, ArrowUpRight, CheckCircle2, 
  ExternalLink, Layers, Monitor, Tablet, Smartphone, Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from '../data/presentationData';

export const CaseStudies = () => {
  const [selectedCaseId, setSelectedCaseId] = useState('diamond-hospitalities');
  const [deviceView, setDeviceView] = useState('desktop');

  const caseIcons = {
    'diamond-hospitalities': Building2,
    'csn-world': Globe,
    'the-oxford-school': GraduationCap,
    'custom-fleet-ops': Truck,
  };

  const currentProject = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];
  const Icon = caseIcons[currentProject.id] || Building2;

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] font-mono text-xs uppercase font-semibold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Engineering Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Real Problems. Real Products.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We turn complex business operations into seamless digital applications. Here is how Ecurve engineered solutions for real brands.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CASE_STUDIES.map((project) => {
            const ProjectIcon = caseIcons[project.id];
            const isSelected = selectedCaseId === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedCaseId(project.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#151D33] border-[#326DED] shadow-xl shadow-[#326DED]/20 scale-[1.02]'
                    : 'bg-[#0E121E] border-white/5 text-[#94A3B8] hover:text-white hover:bg-[#131929]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <ProjectIcon className="w-5 h-5 text-[#00D2FF]" />
                  <span className="text-[10px] font-mono text-[#64748B]">Case Study</span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1">
                  {project.client}
                </h3>
                <p className="text-[11px] text-[#94A3B8] mt-0.5 line-clamp-1">
                  {project.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* In-Depth Case Study Presentation Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 bg-[#0C101E] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#00D2FF]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                      {currentProject.client}
                    </h3>
                    <span className="text-xs font-mono text-[#326DED] font-semibold">
                      {currentProject.category}
                    </span>
                  </div>
                </div>

                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#00D2FF] hover:underline"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 1. Problem */}
              <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/15 space-y-1">
                <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                  // 01. The Business Problem
                </span>
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                  {currentProject.problem}
                </p>
              </div>

              {/* 2. What We Built */}
              <div className="p-4 rounded-2xl bg-[#326DED]/10 border border-[#326DED]/20 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                  // 02. What Ecurve Engineered
                </span>
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                  {currentProject.built}
                </p>
              </div>

              {/* 3. How It Works */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                  // 03. End-to-End System Workflow
                </span>
                <div className="space-y-2">
                  {currentProject.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-xs font-mono text-[#00D2FF] font-bold mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="text-xs text-[#94A3B8] leading-relaxed">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Tech Stack */}
              <div>
                <span className="text-xs font-mono font-bold text-[#326DED] uppercase tracking-wider block mb-2">
                  // 04. Technology Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#141C30] border border-[#326DED]/30 text-xs font-mono text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Business Impact */}
              <div className="p-4 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20">
                <span className="text-[10px] font-mono font-bold text-[#22C55E] uppercase tracking-wider block mb-1">
                  // 05. Tangible Operational Result
                </span>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {currentProject.impact}
                </p>
              </div>
            </div>

            {/* Right Mockup Preview & Device Switcher (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Device Selector */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#080B14] border border-white/10">
                <span className="text-xs font-mono text-[#94A3B8] ml-2">Responsive Preview</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 cursor-pointer ${
                      deviceView === 'desktop' ? 'bg-[#326DED] text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 cursor-pointer ${
                      deviceView === 'tablet' ? 'bg-[#326DED] text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Tablet</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 cursor-pointer ${
                      deviceView === 'mobile' ? 'bg-[#326DED] text-white' : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>
              </div>

              {/* Simulated Device Interface Container */}
              <div className="code-window p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#060912] shadow-2xl min-h-[380px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-[#94A3B8]">
                  <span>https://ecurvedigital.in/systems/{currentProject.id}</span>
                  <span className="text-[#22C55E]">● SECURE SSL</span>
                </div>

                {/* Simulated Visual Interface Card */}
                <div className="my-auto py-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#326DED] to-[#00D2FF] mx-auto flex items-center justify-center text-white shadow-xl shadow-[#326DED]/30">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Outfit']">
                    {currentProject.client} Live Deployment
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-xs mx-auto">
                    Full-stack product operating on zero-downtime infrastructure.
                  </p>
                  <div className="pt-2">
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 px-4 text-xs font-mono inline-flex items-center gap-1.5"
                    >
                      <span>Explore Case Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-center text-[#64748B]">
                  Verified Client System • Production Environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
