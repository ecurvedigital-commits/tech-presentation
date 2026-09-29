import React, { useState } from 'react';
import { CheckCircle2, Search, ArrowRight, TrendingUp, Sparkles, Star, Zap, ShieldCheck } from 'lucide-react';

export const SEOSection = () => {
  const [seoStage, setSeoStage] = useState(4); // 0 to 4

  const stages = [
    { name: '01 Technical Audit', desc: 'Crawl errors fixed, XML sitemaps registered, SSL secured.' },
    { name: '02 On-Page Meta', desc: 'Title tags, meta descriptions, and semantic H1-H3 tagging.' },
    { name: '03 Schema Markup', desc: 'JSON-LD structured data for rich snippets and Google cards.' },
    { name: '04 Core Web Vitals', desc: 'Sub-second speed caching for maximum ranking bonus.' },
    { name: '05 Page 1 Visibility', desc: 'Targeted local & industry keywords ranking prominently.' },
  ];

  const points = [
    'Comprehensive technical SEO audits & speed fixes',
    'On-page metadata, semantic tags & schema markup',
    'Search-friendly content structure & architecture',
    'Targeted high-intent local & industry keywords',
    'Sustainable organic traffic & customer discovery'
  ];

  return (
    <section id="seo-optimization" data-section="seo-optimization" className="presentation-section bg-[#F8F9FB] border-b border-[#E8EAED]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Interactive Search Simulation Console (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center justify-center">
            
            {/* SEO Stage Scrubber */}
            <div className="w-full max-w-xl mb-3">
              <div className="flex justify-between items-center text-xs font-mono text-gray-500 mb-2">
                <span>SEO Optimization Progress:</span>
                <span className="text-[#326DED] font-bold">{stages[seoStage].name}</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 p-1 bg-white rounded-2xl border border-gray-200">
                {stages.map((s, idx) => (
                  <button
                    key={s.name}
                    onClick={() => setSeoStage(idx)}
                    className={`py-1.5 text-[10px] font-mono font-bold rounded-xl transition-all cursor-pointer text-center ${
                      seoStage === idx
                        ? 'bg-[#326DED] text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-900 bg-gray-50'
                    }`}
                  >
                    Step {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Search Engine Card */}
            <div className="w-full max-w-xl rounded-3xl bg-[#0A0A0E] p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4">
              
              {/* Search Engine Header Bar */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121826] border border-white/10 text-white text-xs font-mono">
                <Search className="w-4 h-4 text-[#00D2FF]" />
                <span className="text-gray-200 font-semibold">google.com/search?q=best+tech+services+near+me</span>
                <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                  Live Index
                </span>
              </div>

              {/* Dynamic Google Result Simulation Card */}
              <div className="bg-[#161D2F] rounded-2xl p-4 sm:p-6 border border-white/5 space-y-3 transition-all duration-500">
                
                {/* Ranking Position Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                    seoStage === 4
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : seoStage >= 2
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {seoStage === 4 ? '🏆 Result #1 • Page 1 Ranking' : `Simulated Rank: Page ${5 - seoStage} • Position #${(5 - seoStage) * 8 + 2}`}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    {seoStage >= 3 ? '⚡ Fast Core Web Vitals' : '⏳ Optimizing Speed'}
                  </span>
                </div>

                {/* Google Result Preview */}
                <div className="space-y-1">
                  <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                    <span>https://yourbusiness.com</span>
                    <span>› services</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#00D2FF] hover:underline cursor-pointer">
                    Your Business Name — Modern Technology, Web & App Solutions
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Custom high-performance websites, managed WordPress architectures, and native Android applications designed to drive customer discovery and high-conversion business growth.
                  </p>
                </div>

                {/* Schema Markup Star Ratings & Sitelinks */}
                {seoStage >= 2 && (
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-300 animate-fadeIn">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>5.0 (48 Reviews)</span>
                    </div>
                    <span>•</span>
                    <span className="text-cyan-300 underline">Website Dev</span>
                    <span className="text-cyan-300 underline">WordPress CMS</span>
                    <span className="text-cyan-300 underline">Android Apps</span>
                  </div>
                )}
              </div>

              {/* 3D Visual Preview Thumbnail at Bottom */}
              <div className="p-2.5 rounded-2xl bg-[#121826] border border-white/5 flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="text-emerald-400 font-bold">✓ {stages[seoStage].desc}</span>
                <span className="text-[#00D2FF]">Technical Schema Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 order-1 lg:order-2">
            <div>
              <div className="service-number text-[#326DED] font-black text-4xl sm:text-5xl">02</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit']">
                SEO OPTIMIZATION
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-bold font-['Outfit']">
              "Being online is not enough. Your customers need to find you."
            </p>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              A visually stunning website generates zero value if potential clients cannot find it on Google. We optimize your website's technical foundation, keyword alignment, site structure, and speed to build sustainable organic search visibility.
            </p>

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
              {['Technical SEO', 'On-Page Meta', 'Schema Markup', 'Performance', 'Search Visibility'].map((tag) => (
                <span key={tag} className="tag-pill font-bold text-[#0F172A] bg-white border border-[#CBD5E1] shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
