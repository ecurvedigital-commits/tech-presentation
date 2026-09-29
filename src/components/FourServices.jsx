import React, { useState } from 'react';
import { 
  Globe, Search, LayoutTemplate, Smartphone, CheckCircle, 
  ArrowRight, Sparkles, Monitor, Tablet, CheckCircle2, XCircle, RefreshCw, Layers, ExternalLink
} from 'lucide-react';
import { SERVICES, SEO_AUDIT_DATA } from '../data/presentationData';

export const FourServices = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('website');

  // Service 01: Website Development State
  const [websiteDevice, setWebsiteDevice] = useState('desktop');
  const [websiteStage, setWebsiteStage] = useState('finished'); // 'wireframe' | 'ui' | 'finished'

  // Service 02: SEO Optimization State
  const [seoState, setSeoState] = useState('optimized'); // 'unoptimized' | 'optimized'

  // Service 03: WordPress Interactive Editor State
  const [wpHeading, setWpHeading] = useState('Elevate Your Business With Custom Tech');
  const [wpParagraph, setWpParagraph] = useState('We build high-performance websites and digital solutions tailored to your operational workflows.');
  const [wpButton, setWpButton] = useState('Explore Services');
  const [wpColor, setWpColor] = useState('#326DED');
  const [wpPublishedNotification, setWpPublishedNotification] = useState(false);

  // Service 04: Android Interactive Screen State
  const [androidScreenIndex, setAndroidScreenIndex] = useState(0);

  const androidScreens = [
    { title: 'Home Feed', tag: 'Welcome Screen', content: 'Hero banner, quick services, search bar & instant booking button.' },
    { title: 'Product Catalog', tag: 'Store View', content: 'Filterable categories, real-time inventory, pricing & cart sync.' },
    { title: 'Service Details', tag: 'Item Page', content: 'Detailed specifications, photo galleries, customer reviews & one-tap order.' },
    { title: 'User Profile', tag: 'Account Hub', content: 'Order tracking, saved preferences, invoices & loyalty points.' },
    { title: 'Push Alerts', tag: 'Engagement', content: 'Instant promotional broadcasts, shipment updates & booking reminders.' },
    { title: 'Help & Support', tag: 'Direct Care', content: 'Integrated WhatsApp live chat, phone assistance & FAQ portal.' },
  ];

  const handleWpPublish = (e) => {
    e.preventDefault();
    setWpPublishedNotification(true);
    setTimeout(() => setWpPublishedNotification(false), 3000);
  };

  return (
    <section id="services" className="relative section-padding bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="presentation-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ecurve-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Four Core Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0E] tracking-tight font-['Outfit']">
            Four ways we build your digital presence.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Not generic service cards. Explore the four interactive worlds that transform your business visibility, control, and mobile reach.
          </p>
        </div>

        {/* 4 Service Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {SERVICES.map((s) => {
            const isSelected = activeServiceTab === s.id;
            const icons = {
              website: Globe,
              seo: Search,
              wordpress: LayoutTemplate,
              android: Smartphone
            };
            const Icon = icons[s.id];
            return (
              <button
                key={s.id}
                onClick={() => setActiveServiceTab(s.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#326DED] text-white border-[#326DED] shadow-xl shadow-[#326DED]/25 scale-[1.02]'
                    : 'bg-[#F8F9FB] border-[#E2E8F0] text-[#64748B] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#326DED] border border-[#E2E8F0]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-white/80' : 'text-[#94A3B8]'}`}>
                      {s.num}
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-[#0A0A0E]'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-[#64748B]'}`}>
                    {s.subtitle}
                  </p>
                </div>
                <div className={`mt-4 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${isSelected ? 'border-white/20 text-white' : 'border-[#E2E8F0] text-[#326DED]'}`}>
                  <span>{isSelected ? '● Active Showcase' : 'Explore World'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SERVICE 01: WEBSITE DEVELOPMENT */}
        {/* ========================================================================= */}
        {activeServiceTab === 'website' && (
          <div className="ecurve-card p-6 sm:p-10 rounded-3xl border-[#E2E8F0] bg-white shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="ecurve-eyebrow">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Service 01 // Modern Web Engineering</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                    WEBSITE DEVELOPMENT
                  </h3>
                  <p className="text-base text-[#64748B] mt-3 leading-relaxed">
                    Your website is often the first interaction a customer has with your business. We engineer ultra-fast, responsive websites with clean architecture and modern UX that inspire confidence and convert visitors.
                  </p>
                </div>

                {/* Lifecycle flow */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold">
                    // Engineering Progression:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {SERVICES[0].flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3 py-1 rounded-lg bg-[#F0F7FD] border border-[#326DED]/20 text-xs font-mono font-bold text-[#326DED]">
                          {step}
                        </span>
                        {idx < SERVICES[0].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div>
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block mb-2">
                    Technologies We Deploy:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES[0].tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#F8F9FB] border border-[#E2E8F0] text-xs font-mono text-[#0A0A0E]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F7FD] border border-[#326DED]/20">
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase block mb-1">
                    The Outcome:
                  </span>
                  <p className="text-sm font-bold text-[#0A0A0E] font-['Outfit']">
                    "{SERVICES[0].statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive Browser Window */}
              <div className="lg:col-span-6 space-y-4">
                {/* Stage and Device Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-[#F8F9FB] border border-[#E2E8F0]">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setWebsiteStage('wireframe')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer ${websiteStage === 'wireframe' ? 'bg-[#326DED] text-white' : 'text-[#64748B]'}`}
                    >
                      Wireframe
                    </button>
                    <button
                      onClick={() => setWebsiteStage('ui')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer ${websiteStage === 'ui' ? 'bg-[#326DED] text-white' : 'text-[#64748B]'}`}
                    >
                      UI Layout
                    </button>
                    <button
                      onClick={() => setWebsiteStage('finished')}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold cursor-pointer ${websiteStage === 'finished' ? 'bg-[#326DED] text-white' : 'text-[#64748B]'}`}
                    >
                      Live Website
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setWebsiteDevice('desktop')}
                      className={`p-1.5 rounded-lg cursor-pointer ${websiteDevice === 'desktop' ? 'bg-white shadow text-[#326DED]' : 'text-gray-400'}`}
                      title="Desktop View"
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setWebsiteDevice('tablet')}
                      className={`p-1.5 rounded-lg cursor-pointer ${websiteDevice === 'tablet' ? 'bg-white shadow text-[#326DED]' : 'text-gray-400'}`}
                      title="Tablet View"
                    >
                      <Tablet className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setWebsiteDevice('mobile')}
                      className={`p-1.5 rounded-lg cursor-pointer ${websiteDevice === 'mobile' ? 'bg-white shadow text-[#326DED]' : 'text-gray-400'}`}
                      title="Mobile View"
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated Browser Window */}
                <div className={`browser-frame transition-all duration-500 mx-auto ${
                  websiteDevice === 'mobile' ? 'max-w-[300px]' : websiteDevice === 'tablet' ? 'max-w-[460px]' : 'w-full'
                }`}>
                  {/* Browser Bar */}
                  <div className="bg-[#F1F5F9] px-4 py-2.5 border-b border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-[#64748B] bg-white px-3 py-0.5 rounded-md border border-[#E2E8F0]">
                      https://yourbusiness.com
                    </span>
                    <span className="text-[10px] text-[#22C55E] font-mono">SSL ✓</span>
                  </div>

                  {/* Browser Content Simulated Layout */}
                  <div className={`p-4 sm:p-6 transition-all duration-500 ${
                    websiteStage === 'wireframe' ? 'bg-gray-50' : 'bg-white'
                  }`}>
                    {/* Simulated Nav */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                      <div className={`h-4 rounded ${websiteStage === 'wireframe' ? 'w-20 bg-gray-300' : 'font-extrabold text-xs text-[#0A0A0E]'}`}>
                        {websiteStage !== 'wireframe' && 'BRAND LOGO'}
                      </div>
                      <div className="flex gap-2">
                        <div className={`h-3 rounded ${websiteStage === 'wireframe' ? 'w-10 bg-gray-200' : 'text-[10px] text-[#64748B]'}`}>
                          {websiteStage !== 'wireframe' && 'Services'}
                        </div>
                        <div className={`h-3 rounded ${websiteStage === 'wireframe' ? 'w-10 bg-gray-200' : 'text-[10px] text-[#64748B]'}`}>
                          {websiteStage !== 'wireframe' && 'Contact'}
                        </div>
                      </div>
                    </div>

                    {/* Simulated Hero */}
                    <div className="space-y-3 py-3">
                      <div className={`rounded-xl ${websiteStage === 'wireframe' ? 'h-6 w-3/4 bg-gray-300' : "text-base sm:text-lg font-black text-[#0A0A0E] font-['Outfit']"}`}>
                        {websiteStage !== 'wireframe' && 'Grow Your Revenue With Modern Tech'}
                      </div>
                      <div className={`rounded ${websiteStage === 'wireframe' ? 'h-3 w-full bg-gray-200' : 'text-xs text-[#64748B]'}`}>
                        {websiteStage !== 'wireframe' && 'Custom web engineering that attracts clients and drives conversions.'}
                      </div>
                      <div className={`rounded-lg ${websiteStage === 'wireframe' ? 'h-8 w-28 bg-gray-400' : 'inline-block bg-[#326DED] text-white text-xs font-bold px-4 py-2 rounded-lg'}`}>
                        {websiteStage !== 'wireframe' && 'Get Started →'}
                      </div>
                    </div>

                    {/* Simulated Features Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
                      {[1, 2, 3].map((f) => (
                        <div key={f} className={`p-2 rounded-lg ${websiteStage === 'wireframe' ? 'bg-gray-200 h-14' : 'bg-[#F8F9FB] border border-[#E2E8F0] text-center'}`}>
                          {websiteStage !== 'wireframe' && (
                            <>
                              <div className="text-[10px] font-bold text-[#0A0A0E]">Fast & Fluid</div>
                              <div className="text-[8px] text-[#64748B]">Sub-second</div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SERVICE 02: SEO OPTIMIZATION */}
        {/* ========================================================================= */}
        {activeServiceTab === 'seo' && (
          <div className="ecurve-card p-6 sm:p-10 rounded-3xl border-[#E2E8F0] bg-white shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left SEO Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="ecurve-eyebrow text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/20">
                  <Search className="w-3.5 h-3.5" />
                  <span>Service 02 // Search Engine Optimization</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                    BUILD IT. <span className="text-[#326DED]">GET FOUND.</span>
                  </h3>
                  <p className="text-base text-[#64748B] mt-3 leading-relaxed">
                    A high-performing website is only half the battle. We optimize on-page signals, site structure, keywords, and technical performance so customers organically discover you on Google.
                  </p>
                </div>

                {/* SEO Flow */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold">
                    // Organic Visibility Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {SERVICES[1].flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3 py-1 rounded-lg bg-[#F0FDF4] border border-[#22C55E]/30 text-xs font-mono font-bold text-[#16A34A]">
                          {step}
                        </span>
                        {idx < SERVICES[1].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 7 SEO Pillars */}
                <div>
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block mb-2">
                    7 Core Optimization Pillars:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES[1].pillars.map((p, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#F8F9FB] border border-[#E2E8F0] text-xs font-mono text-[#0A0A0E]">
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#22C55E]/30">
                  <span className="text-xs font-mono font-bold text-[#16A34A] uppercase block mb-1">
                    Organic Value:
                  </span>
                  <p className="text-sm font-bold text-[#0A0A0E] font-['Outfit']">
                    "{SERVICES[1].statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive Google Search & Audit Demonstration */}
              <div className="lg:col-span-6 space-y-4">
                {/* Search Simulator Card */}
                <div className="browser-frame p-5 bg-white border border-[#E2E8F0] shadow-lg">
                  {/* Google-Style Search Bar */}
                  <div className="flex items-center gap-3 p-3 rounded-full border border-[#E2E8F0] bg-white shadow-sm mb-4">
                    <Search className="w-4 h-4 text-[#326DED]" />
                    <span className="text-xs sm:text-sm font-medium text-[#0A0A0E] flex-1">
                      best web development agency near me
                    </span>
                    <span className="text-[10px] font-mono bg-[#326DED]/10 text-[#326DED] px-2 py-0.5 rounded-full font-bold">
                      Google Search
                    </span>
                  </div>

                  {/* Simulated Search Result Highlight */}
                  <div className="p-3.5 rounded-2xl bg-[#F0F7FD] border border-[#326DED]/20 space-y-1">
                    <div className="text-[11px] text-[#16A34A] font-mono">
                      https://ecurvedigital.in › services › web
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#1A0DAB] hover:underline cursor-pointer">
                      Ecurve Digital | High-Performance Websites & Digital Systems
                    </div>
                    <p className="text-xs text-[#4D5156] leading-relaxed">
                      Custom digital marketing, modern website design, SEO optimization, and web application engineering. Certified Google Partner.
                    </p>
                  </div>
                </div>

                {/* Interactive SEO Audit Toggle */}
                <div className="p-5 rounded-2xl bg-[#F8F9FB] border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-[#64748B]">
                      Interactive SEO Audit Switch:
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setSeoState('unoptimized')}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer ${seoState === 'unoptimized' ? 'bg-red-500 text-white' : 'text-gray-500'}`}
                      >
                        Needs Work
                      </button>
                      <button
                        onClick={() => setSeoState('optimized')}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer ${seoState === 'optimized' ? 'bg-[#22C55E] text-white' : 'text-gray-500'}`}
                      >
                        Search Ready
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {(seoState === 'optimized' ? SEO_AUDIT_DATA.optimized : SEO_AUDIT_DATA.unoptimized).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        {seoState === 'optimized' ? (
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                        <span className={seoState === 'optimized' ? 'text-[#0A0A0E] font-medium' : 'text-red-700 font-medium'}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SERVICE 03: WORDPRESS DEVELOPMENT */}
        {/* ========================================================================= */}
        {activeServiceTab === 'wordpress' && (
          <div className="ecurve-card p-6 sm:p-10 rounded-3xl border-[#E2E8F0] bg-white shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left WordPress Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="ecurve-eyebrow text-[#562BDA] bg-[#562BDA]/10 border-[#562BDA]/20">
                  <LayoutTemplate className="w-3.5 h-3.5" />
                  <span>Service 03 // Self-Managed CMS Control</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                    NEED CONTROL? <br />
                    <span className="text-[#562BDA]">BUILD WITH WORDPRESS.</span>
                  </h3>
                  <p className="text-base text-[#64748B] mt-3 leading-relaxed">
                    WordPress powers over 40% of the web. We build clean, custom, unbloated WordPress platforms that give you 100% control over your blogs, pages, services, media, and customer announcements.
                  </p>
                </div>

                {/* WordPress Flow */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold">
                    // Custom WordPress Delivery Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {SERVICES[2].flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-lg bg-[#FAF5FF] border border-[#562BDA]/20 text-xs font-mono font-bold text-[#562BDA]">
                          {step}
                        </span>
                        {idx < SERVICES[2].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block mb-2">
                    What You Can Manage Effortlessly:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#0A0A0E]">
                    {['Pages & Layouts', 'Blogs & Articles', 'Product Catalogs', 'Photos & Media', 'Contact Forms', 'SEO Meta Fields'].map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F8F9FB] border border-[#E2E8F0]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#562BDA]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF5FF] border border-[#562BDA]/20">
                  <span className="text-xs font-mono font-bold text-[#562BDA] uppercase block mb-1">
                    Control Philosophy:
                  </span>
                  <p className="text-sm font-bold text-[#0A0A0E] font-['Outfit']">
                    "{SERVICES[2].statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive WordPress Live CMS Editor & Live Preview */}
              <div className="lg:col-span-7 space-y-4">
                {/* Admin CMS Panel */}
                <div className="p-5 rounded-2xl bg-[#1D2327] text-white border border-gray-700 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#562BDA] flex items-center justify-center font-bold text-[10px]">
                        W
                      </div>
                      <span className="text-xs font-mono text-gray-300">
                        WordPress Admin Console // Live Editor
                      </span>
                    </div>
                    {wpPublishedNotification && (
                      <span className="text-xs font-mono bg-[#22C55E] text-white px-2.5 py-0.5 rounded-full animate-bounce">
                        ✓ Page Published Live!
                      </span>
                    )}
                  </div>

                  {/* Editable Inputs */}
                  <form onSubmit={handleWpPublish} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Edit Headline:
                      </label>
                      <input
                        type="text"
                        value={wpHeading}
                        onChange={(e) => setWpHeading(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-white text-xs focus:outline-none focus:border-[#562BDA]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Edit Paragraph Body:
                      </label>
                      <textarea
                        rows={2}
                        value={wpParagraph}
                        onChange={(e) => setWpParagraph(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-white text-xs focus:outline-none focus:border-[#562BDA]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-400 mb-1">
                          Button CTA Text:
                        </label>
                        <input
                          type="text"
                          value={wpButton}
                          onChange={(e) => setWpButton(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-white text-xs focus:outline-none focus:border-[#562BDA]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-gray-400 mb-1">
                          Accent Theme:
                        </label>
                        <select
                          value={wpColor}
                          onChange={(e) => setWpColor(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-white text-xs focus:outline-none"
                        >
                          <option value="#326DED">Ecurve Blue</option>
                          <option value="#562BDA">Royal Purple</option>
                          <option value="#22C55E">Emerald Green</option>
                          <option value="#D93D6D">Vibrant Pink</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="btn-ecurve-primary py-2 px-5 text-xs font-bold cursor-pointer"
                        style={{ backgroundColor: wpColor }}
                      >
                        <span>Click to "PUBLISH" Changes</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Instant Live Website Preview Window */}
                <div className="browser-frame p-5 bg-white border border-[#E2E8F0]">
                  <div className="text-[10px] font-mono uppercase text-[#64748B] mb-2 flex items-center justify-between">
                    <span>Live Website Output (Updates Instantly):</span>
                    <span className="text-[#22C55E]">● LIVE SYNC</span>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-[#F8F9FB] space-y-2">
                    <h4 className="text-base sm:text-lg font-black font-['Outfit'] text-[#0A0A0E]">
                      {wpHeading}
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      {wpParagraph}
                    </p>
                    <div className="pt-2">
                      <span
                        className="inline-block text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm"
                        style={{ backgroundColor: wpColor }}
                      >
                        {wpButton}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SERVICE 04: ANDROID DEVELOPMENT */}
        {/* ========================================================================= */}
        {activeServiceTab === 'android' && (
          <div className="ecurve-card p-6 sm:p-10 rounded-3xl border-[#E2E8F0] bg-white shadow-xl animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Android Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="ecurve-eyebrow text-[#34A75D] bg-[#34A75D]/10 border-[#34A75D]/20">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Service 04 // Android Mobile Engineering</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0A0A0E] font-['Outfit']">
                    YOUR CUSTOMERS ARE ON MOBILE. <br />
                    <span className="text-[#34A75D]">BUILD FOR THEM.</span>
                  </h3>
                  <p className="text-base text-[#64748B] mt-3 leading-relaxed">
                    Over 75% of internet traffic happens on mobile devices. A custom Android app puts your business directly on your customer’s home screen with push notifications, offline access, and fast booking.
                  </p>
                </div>

                {/* Android Flow */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold">
                    // Mobile Development Journey:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {SERVICES[3].flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-lg bg-[#F0FDF4] border border-[#34A75D]/20 text-xs font-mono font-bold text-[#16A34A]">
                          {step}
                        </span>
                        {idx < SERVICES[3].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Screens interactive clicker */}
                <div>
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block mb-2">
                    Click Screen to Test Mobile App View:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {androidScreens.map((scr, i) => (
                      <button
                        key={i}
                        onClick={() => setAndroidScreenIndex(i)}
                        className={`p-2.5 rounded-xl text-left text-xs font-mono border cursor-pointer transition-all ${
                          androidScreenIndex === i
                            ? 'bg-[#34A75D] text-white border-[#34A75D] shadow-md font-bold'
                            : 'bg-[#F8F9FB] border-[#E2E8F0] text-[#0A0A0E] hover:bg-white'
                        }`}
                      >
                        <div>0{i + 1}. {scr.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#34A75D]/20">
                  <span className="text-xs font-mono font-bold text-[#16A34A] uppercase block mb-1">
                    Mobile Statement:
                  </span>
                  <p className="text-sm font-bold text-[#0A0A0E] font-['Outfit']">
                    "{SERVICES[3].statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive Smartphone Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="phone-mockup w-[290px] sm:w-[320px] p-3 text-white relative">
                  {/* Phone Speaker Notch */}
                  <div className="w-24 h-4 bg-[#1E2433] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black/80" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="bg-[#0D111A] rounded-[26px] p-4 min-h-[420px] flex flex-col justify-between border border-white/5">
                    {/* Top status */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pb-2 border-b border-white/10">
                      <span>9:41 AM</span>
                      <span className="text-[#34A75D]">Android App ● 5G</span>
                    </div>

                    {/* Dynamic Screen View */}
                    <div className="my-auto py-4 space-y-3">
                      <span className="text-[10px] font-mono text-[#34A75D] bg-[#34A75D]/10 px-2 py-0.5 rounded uppercase font-bold">
                        {androidScreens[androidScreenIndex].tag}
                      </span>

                      <h4 className="text-xl font-bold font-['Outfit'] text-white">
                        {androidScreens[androidScreenIndex].title}
                      </h4>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        {androidScreens[androidScreenIndex].content}
                      </p>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                        ⚡ Native gesture response & zero lag
                      </div>
                    </div>

                    {/* Bottom nav tabs in app */}
                    <div className="grid grid-cols-3 gap-1 pt-3 border-t border-white/10 text-center text-[10px] font-mono text-gray-400">
                      <span className={androidScreenIndex === 0 ? 'text-[#34A75D] font-bold' : ''}>Home</span>
                      <span className={androidScreenIndex === 1 ? 'text-[#34A75D] font-bold' : ''}>Catalog</span>
                      <span className={androidScreenIndex === 3 ? 'text-[#34A75D] font-bold' : ''}>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
