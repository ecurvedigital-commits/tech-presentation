import React from 'react';
import { Sparkles, ArrowRight, ArrowUpRight, Globe, Zap, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BentoFeatures = ({ onOpenModal }) => {
  return (
    <section id="platform-capabilities" data-section="platform-capabilities" className="presentation-section bg-[#F8F9FB] border-b border-[#E8EAED]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-5">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit'] section-heading">
            The best platform
          </h2>

          <div className="flex items-center justify-center gap-2 max-w-lg mx-auto pt-1">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs shrink-0">
              🌱
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed section-description">
              Engineered with modern architectures, clean type-safe code, and high-conversion business ergonomics.
            </p>
          </div>
        </div>

        {/* Asymmetric 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Top-Left (5 cols) — Adaptation for any device */}
          <div className="md:col-span-5 rounded-3xl bg-[#F0F5FF] border border-[#DCE7FC] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs group hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#326DED] tracking-wider uppercase block">
                Adaptation for any device
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0E] font-['Outfit'] leading-tight">
                View products easily with your browser!
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Responsive layouts engineered to render seamlessly across all desktop monitors, tablets, and smartphones.
              </p>
            </div>

            {/* Subtle Abstract Wave Nodes */}
            <div className="pt-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#326DED]" />
              <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#562BDA]" />
              <span className="text-[11px] font-mono text-gray-500 ml-auto">100% Fluid Viewports</span>
            </div>
          </div>

          {/* Card 2: Top-Right (7 cols) — Stories & Scalable Content */}
          <div className="md:col-span-7 rounded-3xl bg-[#FFF4F0] border border-[#FCDED4] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs group hover:shadow-md transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="space-y-3 z-10 max-w-md">
              <span className="text-xs font-mono font-bold text-[#EA580C] tracking-wider uppercase block">
                Stories & Growth
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0E] font-['Outfit'] leading-tight">
                More than 1,000 new stories every month
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Effortless content publishing workflows with built-in SEO schema so your audience stays engaged continuously.
              </p>
            </div>

            {/* Bottom Row: Learn More Button & Abstract Geometric Speedometer */}
            <div className="flex items-end justify-between pt-4 z-10">
              <button
                onClick={() => onOpenModal('Content Management')}
                className="px-5 py-2 rounded-full bg-white/90 hover:bg-white text-[#0A0A0E] text-xs font-bold border border-orange-200/80 shadow-xs flex items-center gap-2 cursor-pointer transition-all hover:gap-3"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
              </button>

              {/* Abstract Speedometer / Geometric Illustration */}
              <div className="relative w-28 h-20 flex items-end justify-end pointer-events-none">
                <div className="w-24 h-24 rounded-full border-4 border-[#F97316]/30 border-t-[#EA580C] -mb-8 -mr-4 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#EA580C]/10 rounded-full" />
                </div>
                <div className="absolute top-2 right-4 text-xs font-mono text-[#EA580C] opacity-70">
                  〜〜〜
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom-Left (7 cols) — All Categories at One Platform */}
          <div className="md:col-span-7 rounded-3xl bg-[#F0F9FF] border border-[#D2EEFC] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs group hover:shadow-md transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="space-y-3 z-10 max-w-md">
              <span className="text-xs font-mono font-bold text-[#0284C7] tracking-wider uppercase block">
                Categories & Capabilities
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0E] font-['Outfit'] leading-tight">
                All categories at one platform
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                From bespoke website development and SEO rankings to custom WordPress CMS and native Android applications.
              </p>
            </div>

            <div className="flex items-end justify-between pt-4 z-10">
              <button
                onClick={() => onOpenModal('Digital Ecosystem')}
                className="px-5 py-2 rounded-full bg-white/90 hover:bg-white text-[#0A0A0E] text-xs font-bold border border-sky-200/80 shadow-xs flex items-center gap-2 cursor-pointer transition-all hover:gap-3"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
              </button>

              {/* Abstract Topographic Contour Lines */}
              <div className="relative w-36 h-20 flex items-center justify-end pointer-events-none">
                <svg className="w-32 h-20 opacity-40 text-[#0284C7]" viewBox="0 0 120 80" fill="none" stroke="currentColor">
                  <path d="M10,70 Q40,10 90,40 T120,20" strokeWidth="2" />
                  <path d="M0,50 Q30,20 80,60 T120,40" strokeWidth="1.5" />
                  <circle cx="45" cy="30" r="6" fill="#38BDF8" />
                  <circle cx="85" cy="55" r="3" stroke="currentColor" />
                  <circle cx="95" cy="55" r="3" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom-Right (5 cols) — Lots of convenient functions */}
          <div className="md:col-span-5 rounded-3xl bg-[#FFF9F0] border border-[#FCECD2] p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs group hover:shadow-md transition-all duration-300 hover:scale-[1.01] relative">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#D97706] tracking-wider uppercase block">
                Features & Security
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0E] font-['Outfit'] leading-tight">
                Lots of convenient functions!
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Automated security backups, edge cloud CDN caching, schema validators, and real-time push pipelines.
              </p>
            </div>

            {/* Bottom Row: Diagonal Hashes and Circular Arrow Icon */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-1.5 font-mono text-sm text-[#D97706]/70 tracking-widest font-black">
                ////
              </div>

              <div className="w-10 h-10 rounded-full bg-white border border-[#D97706]/30 flex items-center justify-center text-[#D97706] shadow-2xs group-hover:scale-110 group-hover:bg-[#D97706] group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
