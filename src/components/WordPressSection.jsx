import React, { useState } from 'react';
import { CheckCircle2, LayoutTemplate, Layers, FileEdit, Image, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const WordPressSection = () => {
  const [headingText, setHeadingText] = useState('Scale Your Business With Modern Technology');
  const [accentColor, setAccentColor] = useState('#326DED');
  const [isPublished, setIsPublished] = useState(false);

  const points = [
    'Custom bespoke theme development with zero unnecessary bloat',
    'Intuitive Gutenberg & block-based visual editing',
    'Effortless management of pages, blogs, services & media',
    'Seamless plugin, form, payment & analytics integration',
    'Enterprise security hardening and automated backup pipelines'
  ];

  const handlePublish = () => {
    setIsPublished(true);
    setTimeout(() => {
      setIsPublished(false);
    }, 2800);
  };

  return (
    <section id="wordpress-development" data-section="wordpress-development" className="presentation-section bg-[#FFFFFF] border-b border-[#E8EAED]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div>
              <div className="service-number text-[#326DED] font-black text-4xl sm:text-5xl">03</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit']">
                WORDPRESS DEVELOPMENT
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-bold font-['Outfit']">
              "Your website. Your content. Your control."
            </p>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              For businesses that need full autonomy over their digital assets. We engineer flexible, custom-themed WordPress websites that allow your team to publish articles, update offerings, and edit media without touching code.
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
              {['Custom Themes', 'Gutenberg CMS', 'Autonomous Control', 'Security Hardened', 'Zero Bloat'].map((tag) => (
                <span key={tag} className="tag-pill font-bold text-[#0F172A] bg-white border border-[#CBD5E1] shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive CMS + Website Split Screen Sandbox (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            
            <div className="w-full max-w-2xl rounded-3xl bg-[#0A0A0E] p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4">
              
              {/* Sandbox Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#562BDA] text-white flex items-center justify-center font-bold text-xs">
                    W
                  </div>
                  <span className="text-xs font-mono text-gray-300 font-bold">
                    WordPress Live CMS Sandbox
                  </span>
                </div>

                <button
                  onClick={handlePublish}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#326DED] to-[#562BDA] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
                >
                  {isPublished ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Published!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                      <span>Publish Changes</span>
                    </>
                  )}
                </button>
              </div>

              {/* Split Screen Container: Left Editor & Right Live Site */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
                
                {/* Left: Interactive Gutenberg Admin Editor (5 cols) */}
                <div className="md:col-span-5 bg-[#121826] rounded-2xl p-4 border border-white/5 space-y-3">
                  <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileEdit className="w-3.5 h-3.5 text-purple-400" />
                    <span>Block Editor</span>
                  </div>

                  {/* Heading Edit Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400">Headline Content:</label>
                    <input
                      type="text"
                      value={headingText}
                      onChange={(e) => setHeadingText(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#326DED]"
                      placeholder="Type a headline..."
                    />
                  </div>

                  {/* Accent Color Palette Picker */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400">Theme Accent Color:</label>
                    <div className="flex gap-2">
                      {['#326DED', '#00D2FF', '#562BDA', '#34A75D', '#F59E0B'].map((color) => (
                        <button
                          key={color}
                          onClick={() => setAccentColor(color)}
                          className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                            accentColor === color ? 'scale-110 border-white shadow-md' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-gray-400">
                    💡 Edit the headline or click a color above to see the live site respond instantly!
                  </div>
                </div>

                {/* Right: Real-time Live Website Preview (7 cols) */}
                <div className="md:col-span-7 bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 flex flex-col justify-between shadow-inner min-h-[220px]">
                  <div>
                    {/* Live Website Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-3">
                      <span className="font-black text-xs text-[#0A0A0E] font-['Outfit']">
                        YOUR<span style={{ color: accentColor }}>BUSINESS</span>
                      </span>
                      <span className="text-[9px] font-mono bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold">
                        ● LIVE PREVIEW
                      </span>
                    </div>

                    {/* Dynamic Live Headline */}
                    <h3
                      className="text-base sm:text-lg font-black font-['Outfit'] leading-tight transition-all duration-300"
                      style={{ color: '#0A0A0E' }}
                    >
                      {headingText || 'Your Custom Headline Here'}
                    </h3>

                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Custom responsive layout engineered with bespoke Gutenberg blocks and zero code bloat.
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      className="px-3.5 py-1 rounded-lg text-white text-xs font-bold shadow-xs transition-colors"
                      style={{ backgroundColor: accentColor }}
                    >
                      Explore Offerings
                    </button>
                    <span className="text-[10px] font-mono text-gray-400">
                      Sync Status: Instant (0ms)
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Notification if Published */}
              {isPublished && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs font-mono flex items-center justify-between animate-fadeIn">
                  <span>✓ Changes successfully deployed to live production site in 0.18s</span>
                  <span className="font-bold">Edge CDN Synced</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
