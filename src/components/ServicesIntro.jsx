import React, { useState } from 'react';
import { 
  Sparkles, Globe, Search, Layers, Smartphone, 
  Zap, TrendingUp, ShieldCheck, Bell, Send, Check, Monitor, 
  Star 
} from 'lucide-react';
import { useSectionInView, SectionHeadingReveal, FadeReveal, RevealContainer } from './Typewriter';

export const ServicesIntro = ({ onOpenModal }) => {
  const { ref, isInView } = useSectionInView(0.15);
  const [activeTab, setActiveTab] = useState(0); // 0 = Website, 1 = SEO, 2 = WordPress, 3 = Android

  // 01. Website State: 6-Stage Transformation Lifecycle
  const [webStep, setWebStep] = useState(5); // 0 to 5
  const [webViewport, setWebViewport] = useState('desktop');

  const webSteps = [
    { num: '01', title: 'Wireframe', desc: 'Structural UX blueprint & clear hierarchy' },
    { num: '02', title: 'Design', desc: 'Modern typography & curated color tokens' },
    { num: '03', title: 'Content', desc: 'High-conversion copy & visual storytelling' },
    { num: '04', title: 'Clean Code', desc: 'Type-safe React / Vite with zero framework bloat' },
    { num: '05', title: 'Responsive', desc: 'Pixel-perfect across desktop, tablet & mobile' },
    { num: '06', title: 'Live Edge', desc: 'Sub-second Core Web Vitals on global CDN' },
  ];

  // 02. SEO State: Search Queries
  const [seoQueryKey, setSeoQueryKey] = useState('best tech agency');

  const seoQueries = {
    'best tech agency': {
      title: 'eCurve Digital — #1 Technology Solutions & Growth Agency',
      url: 'https://ecurvedigital.in/services/tech-solutions',
      snippet: 'Bespoke web engineering, technical SEO, WordPress architectures, and native Android apps designed for high-conversion growth.',
      rank: '#1 on Google (Verified Top Result)',
      badge: 'Organic Rich Snippet',
      stats: '+380% Inbound Leads',
      schema: 'ProfessionalService (Schema.org Validated)',
    },
    'high speed websites': {
      title: 'Sub-Second Web Development & 99+ Core Web Vitals — eCurve',
      url: 'https://ecurvedigital.in/services/website-development',
      snippet: 'Custom type-safe codebases deployed on global edge CDNs. Verified 99+ PageSpeed score across desktop and mobile.',
      rank: '#1 on Google (Verified Top Result)',
      badge: 'Speed Ranking Bonus',
      stats: '0.38s Average Load Time',
      schema: 'WebApplication / EdgeCDN Protocol',
    },
    'managed wordpress cms': {
      title: 'Autonomous WordPress CMS & Gutenberg Block Themes — eCurve',
      url: 'https://ecurvedigital.in/services/wordpress-cms',
      snippet: 'Custom theme development empowering marketing teams to publish pages, blogs, and media with zero developer lock-in.',
      rank: '#1 on Google (Verified Top Result)',
      badge: 'CMS Architecture Leader',
      stats: '100% Team Autonomy',
      schema: 'ContentManagementSystem',
    },
    'native android apps': {
      title: 'Enterprise Android Applications & Direct Push Retention — eCurve',
      url: 'https://ecurvedigital.in/services/android-development',
      snippet: 'Tailored Android applications built with Kotlin and real-time Firebase sync with 94% push notification open rates.',
      rank: '#1 on Google (Verified Top Result)',
      badge: 'Play Store Verified',
      stats: '94% Direct Push Open Rate',
      schema: 'MobileApplication (Android SDK)',
    },
  };

  // 03. WordPress State: Mini CMS Editor
  const [wpHeadline, setWpHeadline] = useState('Scale Your Business With Modern Technology');
  const [wpColor, setWpColor] = useState('#326DED');
  const [wpPublished, setWpPublished] = useState(false);
  const [wpBlockType, setWpBlockType] = useState('hero');

  const handleWpPublish = () => {
    setWpPublished(true);
    setTimeout(() => setWpPublished(false), 2400);
  };

  // 04. Android State: Smartphone Simulator
  const [appScreen, setAppScreen] = useState('home'); // 'home', 'booking', 'tracking'
  const [showPushNotification, setShowPushNotification] = useState(true);

  const handleTriggerPush = () => {
    setShowPushNotification(false);
    setTimeout(() => setShowPushNotification(true), 200);
  };

  const tabsInfo = [
    { num: '01', title: 'Website Development', icon: Globe, highlight: '0.38s Speed' },
    { num: '02', title: 'SEO Optimization', icon: Search, highlight: '#1 Ranking' },
    { num: '03', title: 'WordPress CMS', icon: Layers, highlight: '100% Control' },
    { num: '04', title: 'Android Applications', icon: Smartphone, highlight: '94% Retention' },
  ];

  return (
    <section ref={ref} id="services" data-section="services" className="presentation-section bg-[#FFFFFF] border-b border-[#E8EAED]">
      <div className="section-container flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto">
          <FadeReveal active={isInView} delay={0}>
            <div className="ecurve-eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-[#326DED]" />
              <span>Interactive Technology Sandbox</span>
            </div>
          </FadeReveal>

          <SectionHeadingReveal active={isInView} delay={60}>
            <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0E]">
              Four pillars of digital growth.
            </h2>
          </SectionHeadingReveal>

          <FadeReveal active={isInView} delay={180}>
            <p className="section-description text-base sm:text-lg text-[#334155]">
              Click or hover any pillar below to test the live working simulator, inspect engineering specifications, and explore deliverables.
            </p>
          </FadeReveal>
        </div>

        {/* ========================================================================= */}
        {/* MASTER 4-PILLAR INTERACTIVE SHOWCASE TABS & SPACIOUS SANDBOX               */}
        {/* ========================================================================= */}
        <RevealContainer active={isInView} delay={350} className="cards-container section-visual flex flex-col gap-6">
          
          {/* Top 4-Pillar Tabs Navigation Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {tabsInfo.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.num}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 interactive-element ${
                    isActive
                      ? 'bg-[#0B1120] text-white border-[#326DED] shadow-xl ring-2 ring-[#326DED]/30 scale-[1.02]'
                      : 'bg-white text-[#1E293B] border-[#E8EAED] hover:border-[#CBD5E1] hover:bg-[#F8F9FB] shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-xl ${
                      isActive ? 'bg-[#326DED] text-white' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tab.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/15 text-[#00D2FF]' : 'bg-[#F0F7FD] text-[#326DED]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h3 className={`text-sm sm:text-base font-bold font-['Outfit'] leading-snug ${
                      isActive ? 'text-white' : 'text-[#0A0A0E]'
                    }`}>
                      {tab.title}
                    </h3>
                    <span className={`text-xs font-mono font-semibold ${
                      isActive ? 'text-[#00D2FF]' : 'text-[#326DED]'
                    }`}>
                      {tab.highlight}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* ACTIVE FULL-WIDTH SANDBOX STYLING                                         */}
          {/* ========================================================================= */}
          <div className="w-full rounded-3xl sm:rounded-[32px] overflow-hidden border border-[#E8EAED] shadow-2xl transition-all duration-500">
            
            {/* ----------------------------------------------------------------------- */}
            {/* 01. WEBSITE DEVELOPMENT SANDBOX                                         */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === 0 && (
              <div className="bg-[#0B1120] text-white p-6 sm:p-10 lg:p-12 flex flex-col gap-8 animate-fadeIn">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black font-mono bg-[#326DED] px-4 py-2 rounded-2xl text-white shadow-md">
                      01
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                        Website Development
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">
                        From idea to a live, sub-second web presence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>0.38s Speed</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#00D2FF]">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 6-Stage Interactive Stepper */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-300 px-1">
                    <span>Interactive Engineering Lifecycle:</span>
                    <strong className="text-[#00D2FF] uppercase">{webSteps[webStep].num} • {webSteps[webStep].title}</strong>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-2 bg-white/5 rounded-2xl border border-white/10">
                    {webSteps.map((s, idx) => (
                      <button
                        key={s.num}
                        onClick={() => setWebStep(idx)}
                        className={`py-2.5 px-2 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer text-center ${
                          webStep === idx
                            ? 'bg-[#326DED] text-white shadow-md scale-[1.02]'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {s.num}. {s.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Browser Simulator & Metrics Grid */}
                <div className="rounded-2xl bg-[#131B2E] border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-gray-300">https://ecurvedigital.in</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setWebViewport('desktop')}
                        className={`p-1.5 rounded-lg cursor-pointer ${webViewport === 'desktop' ? 'bg-[#326DED] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <Monitor className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setWebViewport('mobile')}
                        className={`p-1.5 rounded-lg cursor-pointer ${webViewport === 'mobile' ? 'bg-[#326DED] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <Smartphone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Responsive Body */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#00D2FF] font-bold">Phase {webSteps[webStep].num}: {webSteps[webStep].title}</span>
                        <span className="text-emerald-400 font-bold">✓ Production Ready</span>
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {webSteps[webStep].desc}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono text-gray-300">
                        <span>✓ React 19 / Vite</span>
                        <span>✓ Type-Safe API</span>
                        <span>✓ Multi-Device QA</span>
                        <span>✓ JSON-LD Schema</span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 font-mono">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-xs text-gray-400">LCP Speed</span>
                        <strong className="text-sm text-emerald-400 font-bold">0.38s (A+)</strong>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-xs text-gray-400">CLS Shift</span>
                        <strong className="text-sm text-[#00D2FF] font-bold">0.00 (Zero)</strong>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-xs text-gray-400">Edge Hit</span>
                        <strong className="text-sm text-white font-bold">100% Global</strong>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Specs Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-300 font-mono pt-4 border-t border-white/10">
                    <span>✓ 100% Responsive</span>
                    <span>✓ Zero Bloatware</span>
                    <span>✓ Code Ownership</span>
                    <span>✓ Global Edge CDN</span>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-4">
                    <span>✓ 99+ PageSpeed Rating</span>
                    <span>✓ Sub-Second Response</span>
                  </div>
                  <button
                    onClick={() => onOpenModal && onOpenModal('Website Development')}
                    className="btn-primary w-full sm:w-auto text-sm py-3 px-8 justify-center shadow-lg shadow-blue-500/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start Web Project</span>
                  </button>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* 02. SEO OPTIMIZATION SANDBOX (Clean Google SERP)                        */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === 1 && (
              <div className="bg-[#0B132B] text-white p-6 sm:p-10 lg:p-12 flex flex-col gap-8 animate-fadeIn">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black font-mono bg-emerald-600 px-4 py-2 rounded-2xl text-white shadow-md">
                      02
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                        SEO Optimization
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">
                        Your customers are searching. We make sure they find you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Google #1 Ranking</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400">
                      <Search className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Keyword Simulator Chips */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-300 px-1">
                    <span>Live Google Search Query Simulation:</span>
                    <strong className="text-emerald-400">✓ Page 1 Verified</strong>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'best tech agency', label: 'best tech agency' },
                      { id: 'high speed websites', label: 'high speed web' },
                      { id: 'managed wordpress cms', label: 'wordpress cms' },
                      { id: 'native android apps', label: 'android apps' },
                    ].map((q) => (
                      <button
                        key={q.id}
                        onClick={() => setSeoQueryKey(q.id)}
                        className={`px-4 py-3 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer truncate flex items-center justify-center gap-2 ${
                          seoQueryKey === q.id
                            ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-emerald-400/30 scale-[1.02]'
                            : 'bg-white/10 text-gray-200 hover:text-white hover:bg-white/15'
                        }`}
                      >
                        <Search className="w-3.5 h-3.5 shrink-0" />
                        <span>{q.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive High-Contrast SERP Console */}
                <div className="rounded-2xl bg-white text-[#1E293B] p-6 sm:p-8 shadow-2xl flex flex-col gap-4 border border-gray-200">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-500 border-b border-gray-100 pb-3">
                    <span className="text-emerald-700 font-bold">{seoQueries[seoQueryKey].url}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold text-xs">
                      {seoQueries[seoQueryKey].rank}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#1A0DAB] leading-snug hover:underline cursor-pointer font-['Outfit']">
                    {seoQueries[seoQueryKey].title}
                  </h4>

                  <div className="text-xs text-[#006621] font-mono flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">Rating: 4.9 · 140+ verified client reviews · Schema Ready</span>
                  </div>

                  <p className="text-sm text-[#4D5156] leading-relaxed">
                    {seoQueries[seoQueryKey].snippet}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-gray-100 text-xs font-mono">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[11px]">Schema Data</span>
                      <strong className="text-gray-800 text-xs truncate block">{seoQueries[seoQueryKey].schema}</strong>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                      <span className="text-emerald-600 block text-[11px]">Impact</span>
                      <strong className="text-emerald-800 text-xs block">{seoQueries[seoQueryKey].stats}</strong>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="text-blue-600 block text-[11px]">Indexing</span>
                      <strong className="text-blue-800 text-xs block">&lt; 24h Google Sync</strong>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                      <span className="text-purple-600 block text-[11px]">Local Map</span>
                      <strong className="text-purple-800 text-xs block">Top 3-Pack Verified</strong>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-4">
                    <span>✓ Rich Snippets & Local 3-Pack</span>
                    <span>✓ High-Intent Discovery</span>
                  </div>
                  <button
                    onClick={() => onOpenModal && onOpenModal('SEO Optimization')}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Request SEO Audit</span>
                  </button>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* 03. WORDPRESS CMS SANDBOX                                               */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === 2 && (
              <div className="bg-[#0F172A] text-white p-6 sm:p-10 lg:p-12 flex flex-col gap-8 animate-fadeIn">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black font-mono bg-[#562BDA] px-4 py-2 rounded-2xl text-white shadow-md">
                      03
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                        WordPress CMS
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">
                        Your website. Your content. Your control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Zero Plugin Bloat</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-purple-400">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Module Selector Chips */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-300 px-1">
                    <span>Select Gutenberg Module Preset:</span>
                    <strong className="text-purple-300">100% Autonomous Control</strong>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'hero', label: '🚀 Hero Block' },
                      { id: 'grid', label: '📊 Metrics Grid' },
                      { id: 'form', label: '✉️ Lead Form' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setWpBlockType(b.id)}
                        className={`py-3 text-xs font-mono font-bold rounded-2xl transition-all cursor-pointer ${
                          wpBlockType === b.id
                            ? 'bg-[#562BDA] text-white shadow-md ring-2 ring-purple-400/30'
                            : 'bg-white/10 text-gray-300 hover:text-white'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Gutenberg Block Editor */}
                <div className="rounded-2xl bg-white text-[#1E293B] p-6 sm:p-8 shadow-2xl flex flex-col gap-5 border border-gray-200">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-mono font-bold text-gray-800">
                      ✏️ Gutenberg Block Editor (Live In-Browser Edit)
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 font-mono">Accent Color:</span>
                      {['#326DED', '#10B981', '#8B5CF6', '#F59E0B'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setWpColor(c)}
                          style={{ backgroundColor: c }}
                          className={`w-5 h-5 rounded-full border-2 border-white shadow-sm transition-transform cursor-pointer ${wpColor === c ? 'scale-125 ring-2 ring-gray-400' : ''}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono font-semibold text-gray-600">Headline Input Field:</label>
                      <input
                        type="text"
                        value={wpHeadline}
                        onChange={(e) => setWpHeadline(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-bold text-[#0A0A0E] focus:outline-none focus:border-[#562BDA] bg-gray-50 font-['Outfit'] shadow-xs"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-center gap-1">
                      <div className="text-xs font-mono text-gray-400">Live Frontend Preview:</div>
                      <div className="text-base font-extrabold font-['Outfit'] truncate" style={{ color: wpColor }}>
                        {wpHeadline || 'Your Live Heading Preview'}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleWpPublish}
                    className="w-full py-3.5 rounded-xl text-xs font-mono font-bold text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:brightness-110"
                    style={{ backgroundColor: wpColor }}
                  >
                    {wpPublished ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>✓ Live Site Synchronized (0ms Latency)</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Publish Updates Instantly</span>
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-gray-600 pt-2 border-t border-gray-100">
                    <span>✓ AWS S3 Cloud Backups</span>
                    <span>✓ RBAC Team Roles</span>
                    <span>✓ REST/GraphQL API</span>
                    <span>✓ Zero Developer Lock-in</span>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-4">
                    <span>✓ 100% Publishing Independence</span>
                    <span>✓ Hardened Security</span>
                  </div>
                  <button
                    onClick={() => onOpenModal && onOpenModal('WordPress CMS')}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#562BDA] hover:bg-[#4722B8] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Configure CMS Spec</span>
                  </button>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------------- */}
            {/* 04. ANDROID APPLICATIONS SANDBOX                                        */}
            {/* ----------------------------------------------------------------------- */}
            {activeTab === 3 && (
              <div className="bg-[#090D16] text-white p-6 sm:p-10 lg:p-12 flex flex-col gap-8 animate-fadeIn">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black font-mono bg-[#326DED] px-4 py-2 rounded-2xl text-white shadow-md">
                      04
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                        Android Applications
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">
                        Your brand in every customer's pocket.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300" />
                      <span>4.9 Play Store Ready</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#00D2FF]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Screen Switchers & Push Dispatcher */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {[
                      { id: 'home', label: 'Feed' },
                      { id: 'booking', label: '1-Tap Booking' },
                      { id: 'tracking', label: 'Live GPS' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setAppScreen(s.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                          appScreen === s.id
                            ? 'bg-[#326DED] text-white shadow-md'
                            : 'bg-white/10 text-gray-300 hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleTriggerPush}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#00D2FF] hover:bg-[#00B4DB] text-[#0A0A0E] shadow-lg cursor-pointer flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Dispatch Push Alert</span>
                  </button>
                </div>

                {/* Smartphone Simulator */}
                <div className="rounded-2xl bg-[#131620] border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/10 pb-3">
                    <span>9:41 AM • 5G</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-300 font-semibold">Firebase Connected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-3">
                      {showPushNotification && (
                        <div className="p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-start gap-3 animate-bounce">
                          <div className="p-2.5 rounded-xl bg-[#326DED] shrink-0 mt-0.5">
                            <Bell className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="text-xs font-bold text-white">New Booking Confirmed! 🎉</div>
                            <div className="text-[11px] text-gray-200">Order #8429 has been verified and dispatched.</div>
                          </div>
                        </div>
                      )}

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 text-xs">
                        {appScreen === 'home' && (
                          <div className="text-gray-200">
                            <strong className="text-[#00D2FF] block mb-1 text-sm">✦ Welcome back, Customer!</strong>
                            <span>Quick Actions: 1-Tap Reorder • Direct Video Consultation • SLA Dashboard</span>
                          </div>
                        )}
                        {appScreen === 'booking' && (
                          <div className="text-gray-200">
                            <strong className="text-emerald-400 block mb-1 text-sm">📅 Instant Appointment Reserved</strong>
                            <span>Live sync with corporate calendar, SMS confirmation, and payment gateway.</span>
                          </div>
                        )}
                        {appScreen === 'tracking' && (
                          <div className="text-gray-200">
                            <strong className="text-amber-400 block mb-1 text-sm">📍 Live Telemetry & GPS Tracking</strong>
                            <span>Real-time WebSocket connection updating sub-50ms coordinates.</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 font-mono">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-xs text-gray-400">Push Open</span>
                        <strong className="text-sm text-[#00D2FF] font-bold">94% Rate</strong>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                        <span className="text-xs text-gray-400">FPS Render</span>
                        <strong className="text-sm text-emerald-400 font-bold">60 FPS Native</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-gray-300 pt-3 border-t border-white/10">
                    <span>✓ Kotlin Engine</span>
                    <span>✓ SQLite Room DB</span>
                    <span>✓ FCM Push Engine</span>
                    <span>✓ Android 15 Ready</span>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-4">
                    <span>✓ 94% Direct Push Retention</span>
                    <span>✓ Google Play Console Ready</span>
                  </div>
                  <button
                    onClick={() => onOpenModal && onOpenModal('Android Development')}
                    className="btn-primary w-full sm:w-auto text-sm py-3 px-8 justify-center shadow-lg shadow-blue-500/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Launch App Project</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Subtext Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B] pt-2 px-1">
            <span>© Ecurve Digital • 4 Unified Pillars</span>
            <span className="text-[#326DED] font-semibold">Click any pillar above to test interactive features</span>
          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default ServicesIntro;
