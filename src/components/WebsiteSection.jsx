import React, { useState } from 'react';
import { CheckCircle2, Monitor, Tablet, Smartphone, Code, Palette, Layout, Sparkles, Zap } from 'lucide-react';

export const WebsiteSection = () => {
  const [currentStep, setCurrentStep] = useState(5); // Default to live, clickable through steps 0 to 5
  const [viewportMode, setViewportMode] = useState('desktop'); // desktop, tablet, mobile

  const steps = [
    { num: '01', title: 'WIREFRAME', desc: 'Structural UX blueprint & clear information hierarchy.' },
    { num: '02', title: 'DESIGN', desc: 'Modern typography, curated colors & ergonomic layout.' },
    { num: '03', title: 'CONTENT', desc: 'High-conversion copy, visuals & client value propositions.' },
    { num: '04', title: 'DEVELOPMENT', desc: 'Clean, type-safe custom code with zero framework bloat.' },
    { num: '05', title: 'RESPONSIVE', desc: 'Pixel-perfect across Desktop, Tablet & Mobile.' },
    { num: '06', title: 'LIVE', desc: 'Sub-second Core Web Vitals deployed on edge CDN.' },
  ];

  const points = [
    'Responsive across all screen sizes (Desktop, Tablet & Mobile)',
    'Modern, high-conversion visual design and clear typography',
    'Sub-second Core Web Vitals performance and edge CDN caching',
    'SEO-ready semantic HTML structure and JSON-LD schema',
    'Clean, type-safe custom engineering with zero bloat'
  ];

  return (
    <section id="website-development" data-section="website-development" className="presentation-section bg-[#FFFFFF] border-b border-[#E8EAED]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Information & Step Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div>
              <div className="service-number text-[#326DED] font-black text-4xl sm:text-5xl">01</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit']">
                WEBSITE DEVELOPMENT
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-bold font-['Outfit']">
              "From idea to a live, high-speed website."
            </p>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              We engineer custom, ultra-fast websites designed around your specific business model. Follow the interactive transformation lifecycle below:
            </p>

            {/* Interactive Step Switcher Pills */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 p-1 bg-[#F8F9FB] rounded-2xl border border-gray-200">
                {steps.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => setCurrentStep(idx)}
                    className={`py-2 px-1 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer text-center ${
                      currentStep === idx
                        ? 'bg-[#326DED] text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {s.num}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-[#F0F7FD] rounded-xl border border-[#326DED]/20 text-xs font-mono text-[#0F172A] flex items-center justify-between">
                <span>Phase: <strong>{steps[currentStep].title}</strong></span>
                <span className="text-[#326DED] font-bold">{steps[currentStep].desc}</span>
              </div>
            </div>

            {/* Supporting Bullet Points */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#326DED] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {['Responsive', 'Modern UI', 'Performance', 'SEO-Ready', 'Custom Code'].map((tag) => (
                <span key={tag} className="tag-pill font-bold text-[#0F172A] bg-white border border-[#CBD5E1] shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Transforming Browser Mockup (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            
            {/* Viewport Width Switcher */}
            <div className="flex items-center gap-2 mb-4 p-1.5 rounded-2xl bg-[#F8F9FB] border border-gray-200 shadow-xs">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportMode === 'desktop' ? 'bg-white text-[#326DED] shadow-xs' : 'text-gray-500'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" /> Desktop
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportMode === 'tablet' ? 'bg-white text-[#326DED] shadow-xs' : 'text-gray-500'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" /> Tablet
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewportMode === 'mobile' ? 'bg-white text-[#326DED] shadow-xs' : 'text-gray-500'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile
              </button>
            </div>

            {/* Interactive Browser Sandbox */}
            <div
              className={`transition-all duration-500 rounded-3xl bg-[#0A0A0E] p-3 sm:p-4 border border-white/10 shadow-2xl overflow-hidden w-full ${
                viewportMode === 'mobile'
                  ? 'max-w-[340px]'
                  : viewportMode === 'tablet'
                  ? 'max-w-[500px]'
                  : 'max-w-[620px]'
              }`}
            >
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-white/10 px-3 py-0.5 rounded-full text-[10px] font-mono text-gray-300">
                  https://yourbrand.com
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <Zap className="w-3 h-3" /> 99/100
                </div>
              </div>

              {/* Dynamic Step-Based Website Transformation Display */}
              <div className="relative rounded-2xl overflow-hidden bg-white min-h-[320px] sm:min-h-[360px] flex flex-col justify-between p-4 sm:p-6 transition-all duration-500">
                
                {/* 01: Wireframe Step */}
                {currentStep === 0 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-2">
                      <div className="w-20 h-4 bg-gray-200 rounded" />
                      <div className="flex gap-2">
                        <div className="w-10 h-3 bg-gray-200 rounded" />
                        <div className="w-10 h-3 bg-gray-200 rounded" />
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="w-3/4 h-7 bg-gray-300 rounded" />
                      <div className="w-1/2 h-4 bg-gray-200 rounded" />
                      <div className="w-24 h-6 bg-gray-400 rounded mt-3" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      <div className="h-16 bg-gray-100 rounded border border-dashed border-gray-300" />
                      <div className="h-16 bg-gray-100 rounded border border-dashed border-gray-300" />
                      <div className="h-16 bg-gray-100 rounded border border-dashed border-gray-300" />
                    </div>
                  </div>
                )}

                {/* 02: Design Step */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="font-black text-sm text-[#0A0A0E] font-['Outfit']">BRAND<span className="text-[#326DED]">UI</span></span>
                      <div className="flex gap-3 text-[10px] font-bold text-gray-500">
                        <span>Services</span>
                        <span>About</span>
                        <span className="text-[#326DED]">Contact</span>
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h3 className="text-2xl font-extrabold text-[#0A0A0E] font-['Outfit'] leading-tight">
                        Transforming Digital Value.
                      </h3>
                      <p className="text-xs text-gray-500">
                        Curated typography & tailored color palette applied.
                      </p>
                      <button className="px-4 py-1.5 rounded-lg bg-[#326DED] text-white text-xs font-bold shadow-sm">
                        Get Started
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-700">Typography</div>
                      <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-100 text-[10px] font-bold text-cyan-700">Colors</div>
                      <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-[10px] font-bold text-purple-700">Interactions</div>
                    </div>
                  </div>
                )}

                {/* 03: Content Step */}
                {currentStep === 2 && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="font-extrabold text-sm text-[#0A0A0E]">eCurve Digital</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">Copy Populated</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                      High-converting messaging & structured storytelling.
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every headline, paragraph, and testimonial is placed with strict sales funnel precision.
                    </p>
                    <div className="h-20 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white flex items-center justify-between">
                      <span className="text-xs font-bold">Customer Value Blueprint</span>
                      <span className="text-[10px] bg-white/20 px-2 py-1 rounded">100% Ready</span>
                    </div>
                  </div>
                )}

                {/* 04: Development Step */}
                {currentStep === 3 && (
                  <div className="space-y-3 font-mono text-xs animate-fadeIn">
                    <div className="p-2.5 rounded-xl bg-[#0A0A0E] text-cyan-300 text-[11px] space-y-1">
                      <p className="text-emerald-400">✓ React 19 + TypeScript + Tailwind CSS</p>
                      <p className="text-blue-300">✓ Sub-second dynamic DOM rehydration</p>
                      <p className="text-purple-300">✓ Edge CDN global caching enabled</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 text-[11px]">
                      Zero boilerplate bloat. Clean semantic HTML with automated schema injections.
                    </div>
                  </div>
                )}

                {/* 05: Responsive Step */}
                {currentStep === 4 && (
                  <div className="space-y-3 animate-fadeIn text-center">
                    <div className="flex justify-center gap-4 text-xs font-mono font-bold text-gray-700 pb-2 border-b">
                      <span>Desktop 1440px</span> • <span>Tablet 768px</span> • <span>Mobile 375px</span>
                    </div>
                    <div className="p-4 bg-[#F0F7FD] rounded-2xl border border-[#326DED]/30 text-xs text-[#0F172A] font-semibold">
                      Fluid typography, adaptive navigation drawer, touch ergonomics, and flexible grid layouts.
                    </div>
                    <div className="text-[11px] font-mono text-[#326DED]">
                      Use the top viewport switcher to see layout adapting!
                    </div>
                  </div>
                )}

                {/* 06: Live Step (3D Architecture Visual) */}
                {currentStep === 5 && (
                  <div className="relative group w-full h-full flex items-center justify-center animate-fadeIn">
                    <img
                      src="/images/website-dev-3d.png"
                      alt="Website Development 3D Architecture"
                      className="w-full h-auto max-h-[260px] object-cover rounded-xl shadow-lg"
                    />
                  </div>
                )}

                {/* Footer Badge inside sandbox */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>Transformation: Step {currentStep + 1} of 6</span>
                  <span className="text-[#326DED] font-bold">Interactive Engineering Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
