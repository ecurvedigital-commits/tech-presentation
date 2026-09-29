import React, { useState } from 'react';
import {
  Globe, Search, LayoutTemplate, Smartphone, CheckCircle,
  ArrowRight, Sparkles, Monitor, Tablet
} from 'lucide-react';
import { SERVICES, SEO_AUDIT_DATA } from '../data/presentationData';

export const FourServices = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('website');

  // Service 01: Website Development State
  const [websiteDevice, setWebsiteDevice] = useState('desktop');
  const [websiteStage, setWebsiteStage] = useState('finished'); // 'wireframe' | 'ui' | 'finished'

  // Service 02: SEO Optimization State
  const [seoState, setSeoState] = useState('optimized');

  // Service 03: WordPress Interactive Editor State
  const [wpHeading, setWpHeading] = useState('Elevate Your Business With Custom Tech');
  const [wpParagraph, setWpParagraph] = useState('We build high-performance websites and digital solutions tailored to your operational workflows.');
  const [wpButton] = useState('Explore Services');
  const [wpColor] = useState('#326DED');

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

  return (
    <section id="services" className="presentation-section bg-white border-b border-gray-100">
      <div className="section-container flex flex-col gap-10 sm:gap-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="ecurve-eyebrow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Four Core Pillars</span>
          </div>

          <h2 className="section-title text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight flex items-center justify-center">
            Four ways we build your digital presence.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Not generic service cards. Explore the four interactive showcases that transform your business visibility, control, and mobile reach.
          </p>
        </div>

        {/* 4 Pillar Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {SERVICES.map((s) => {
            const isSelected = activeServiceTab === s.id;
            const icons = {
              website: Globe,
              seo: Search,
              wordpress: LayoutTemplate,
              android: Smartphone
            };
            const Icon = icons[s.id] || Globe;
            return (
              <button
                key={s.id}
                onClick={() => setActiveServiceTab(s.id)}
                style={{ padding: '28px 30px' }}
                className={`pillar-tab-card min-h-[190px] sm:min-h-[210px] rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between w-full box-border h-full ${isSelected
                  ? 'bg-[#326DED] text-white border-[#326DED] shadow-md scale-[1.01]'
                  : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-white hover:border-[#CBD5E1]'
                  }`}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#326DED] border border-[#E2E8F0]'
                      }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${isSelected ? 'bg-white/10 text-white' : 'bg-gray-100 text-[#64748B]'
                      }`}>
                      {s.num}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold font-['Outfit'] block break-words mb-1.5 ${isSelected ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                    {s.title}
                  </h3>

                  <p className={`text-xs leading-relaxed block break-words ${isSelected ? 'text-white/80' : 'text-[#64748B]'
                    }`}>
                    {s.subtitle}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t text-xs font-mono flex items-center justify-between w-full ${isSelected ? 'border-white/20 text-white' : 'border-[#E2E8F0] text-[#326DED]'
                  }`}>
                  <span className="font-semibold">{isSelected ? '● Active Showcase' : 'Explore Pillar'}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SERVICE 01: WEBSITE DEVELOPMENT */}
        {/* ========================================================================= */}
        {activeServiceTab === 'website' && (
          <div className="clean-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#E2E8F0] bg-white w-full box-border shadow-xs animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full">
                <div className="ecurve-eyebrow w-fit">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Service 01 // Modern Web Engineering</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-['Outfit'] leading-tight">
                    WEBSITE DEVELOPMENT
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed break-words">
                    Your website is often the first interaction a customer has with your business. We engineer ultra-fast, responsive websites with clean architecture and modern UX that inspire confidence and convert visitors.
                  </p>
                </div>

                {/* Lifecycle flow */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block tracking-wider">
                    Engineering Progression:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 w-full">
                    {SERVICES[0]?.flow?.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-mono font-bold text-[#326DED]">
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
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block tracking-wider">
                    Technologies We Deploy:
                  </span>
                  <div className="flex flex-wrap gap-2 w-full">
                    {SERVICES[0]?.tech?.map((t, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0F172A]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase block mb-1.5 tracking-wider">
                    The Outcome:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A] font-['Outfit'] leading-relaxed">
                    "{SERVICES[0]?.statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive Browser Window */}
              <div className="lg:col-span-6 flex flex-col gap-6 w-full max-w-full overflow-hidden">

                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] w-full box-border">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setWebsiteStage('wireframe')}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all shrink-0 ${websiteStage === 'wireframe' ? 'bg-[#326DED] text-white border border-[#326DED] shadow-xs' : 'bg-white text-[#64748B] border border-[#CBD5E1] hover:text-[#0F172A]'
                        }`}
                    >
                      Wireframe
                    </button>
                    <button
                      onClick={() => setWebsiteStage('ui')}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all shrink-0 ${websiteStage === 'ui' ? 'bg-[#326DED] text-white border border-[#326DED] shadow-xs' : 'bg-white text-[#64748B] border border-[#CBD5E1] hover:text-[#0F172A]'
                        }`}
                    >
                      UI Layout
                    </button>
                    <button
                      onClick={() => setWebsiteStage('finished')}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all shrink-0 ${websiteStage === 'finished' ? 'bg-[#326DED] text-white border border-[#326DED] shadow-xs' : 'bg-white text-[#64748B] border border-[#CBD5E1] hover:text-[#0F172A]'
                        }`}
                    >
                      Live Website
                    </button>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <button
                      onClick={() => setWebsiteDevice('desktop')}
                      className={`p-2.5 rounded-xl cursor-pointer transition-all ${websiteDevice === 'desktop' ? 'bg-white shadow-xs text-[#326DED] border border-[#CBD5E1]' : 'text-gray-400 hover:text-gray-600'}`}
                      title="Desktop View"
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setWebsiteDevice('tablet')}
                      className={`p-2.5 rounded-xl cursor-pointer transition-all ${websiteDevice === 'tablet' ? 'bg-white shadow-xs text-[#326DED] border border-[#CBD5E1]' : 'text-gray-400 hover:text-gray-600'}`}
                      title="Tablet View"
                    >
                      <Tablet className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setWebsiteDevice('mobile')}
                      className={`p-2.5 rounded-xl cursor-pointer transition-all ${websiteDevice === 'mobile' ? 'bg-white shadow-xs text-[#326DED] border border-[#CBD5E1]' : 'text-gray-400 hover:text-gray-600'}`}
                      title="Mobile View"
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated Browser Window */}
                <div className={`transition-all duration-300 mx-auto w-full border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs ${websiteDevice === 'mobile' ? 'max-w-[320px]' : websiteDevice === 'tablet' ? 'max-w-[480px]' : 'w-full'
                  }`}>
                  {/* Browser Bar */}
                  <div className="bg-[#F1F5F9] px-5 py-3.5 border-b border-[#E2E8F0] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    </div>
                    <span className="text-xs font-mono text-[#64748B] bg-white px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] truncate max-w-[220px]">
                      https://yourbusiness.com
                    </span>
                    <span className="text-xs text-[#10B981] font-mono font-bold shrink-0">SSL ✓</span>
                  </div>

                  {/* Browser Content Simulated Layout */}
                  <div className={`p-6 sm:p-8 transition-all duration-300 flex flex-col gap-6 ${websiteStage === 'wireframe' ? 'bg-gray-50' : 'bg-white'
                    }`}>
                    {/* Simulated Nav */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div className={`h-5 rounded-md ${websiteStage === 'wireframe' ? 'w-24 bg-gray-300' : 'font-extrabold text-sm text-[#0F172A] tracking-wide'}`}>
                        {websiteStage !== 'wireframe' && 'BRAND LOGO'}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`h-4 rounded ${websiteStage === 'wireframe' ? 'w-10 bg-gray-200' : 'text-xs text-[#64748B] font-semibold'}`}>
                          {websiteStage !== 'wireframe' && 'Services'}
                        </div>
                        <div className={`h-4 rounded ${websiteStage === 'wireframe' ? 'w-10 bg-gray-200' : 'text-xs text-[#64748B] font-semibold'}`}>
                          {websiteStage !== 'wireframe' && 'Contact'}
                        </div>
                      </div>
                    </div>

                    {/* Simulated Hero */}
                    <div className="flex flex-col gap-4 py-3">
                      <div className={`rounded-xl ${websiteStage === 'wireframe' ? 'h-8 w-3/4 bg-gray-300' : "text-lg sm:text-2xl font-extrabold text-[#0F172A] font-['Outfit'] leading-tight"}`}>
                        {websiteStage !== 'wireframe' && 'Grow Your Revenue With Modern Tech'}
                      </div>
                      <div className={`rounded-md ${websiteStage === 'wireframe' ? 'h-4 w-full bg-gray-200' : 'text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-lg'}`}>
                        {websiteStage !== 'wireframe' && 'Custom web engineering that attracts clients and drives conversions.'}
                      </div>
                      <div className="pt-2">
                        <div className={`rounded-xl ${websiteStage === 'wireframe' ? 'h-10 w-36 bg-gray-400' : 'inline-flex items-center gap-2 bg-[#326DED] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm'}`}>
                          {websiteStage !== 'wireframe' && 'Get Started →'}
                        </div>
                      </div>
                    </div>

                    {/* Simulated Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-gray-100">
                      {[1, 2, 3].map((f) => (
                        <div key={f} className={`p-4 rounded-xl flex flex-col justify-center items-center text-center ${websiteStage === 'wireframe' ? 'bg-gray-200 h-16' : 'bg-[#F8FAFC] border border-[#E2E8F0]'}`}>
                          {websiteStage !== 'wireframe' && (
                            <>
                              <div className="text-xs font-bold text-[#0F172A] mb-1">Fast & Fluid</div>
                              <div className="text-[11px] text-[#64748B]">Sub-second speed</div>
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
        {/* SERVICE 02: TECHNICAL SEO */}
        {/* ========================================================================= */}
        {activeServiceTab === 'seo' && (
          <div className="clean-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#E2E8F0] bg-white w-full box-border shadow-xs animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

              <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full">
                <div className="ecurve-eyebrow w-fit">
                  <Search className="w-3.5 h-3.5" />
                  <span>Service 02 // Technical Search Optimization</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-['Outfit'] leading-tight">
                    TECHNICAL SEO & DISCOVERABILITY
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed break-words">
                    A beautiful website is useless if nobody can find it. We structure your website for maximum search engine visibility with clean HTML, fast load times, and structured data.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block tracking-wider">
                    Optimization Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 w-full">
                    {SERVICES[1]?.flow?.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-mono font-bold text-[#326DED]">
                          {step}
                        </span>
                        {idx < SERVICES[1].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block tracking-wider">
                    Optimization Pillars:
                  </span>
                  <div className="flex flex-wrap gap-2 w-full">
                    {SERVICES[1]?.pillars?.map((p, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0F172A]">
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase block mb-1.5 tracking-wider">
                    Organic Value:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A] font-['Outfit'] leading-relaxed">
                    "{SERVICES[1]?.statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive SEO Audit Simulator */}
              <div className="lg:col-span-6 flex flex-col gap-5 w-full box-border">
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                    Simulated Performance Audit:
                  </span>
                  <button
                    onClick={() => setSeoState(seoState === 'optimized' ? 'unoptimized' : 'optimized')}
                    className="btn-primary py-2 px-5 text-xs font-bold cursor-pointer rounded-xl shadow-xs"
                  >
                    Toggle {seoState === 'optimized' ? 'Slow View' : 'Fast View'}
                  </button>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-white shadow-xs p-1">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-mono">
                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs">Audit Metric</th>
                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs">Current Score</th>
                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-sans">
                      {SEO_AUDIT_DATA.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-5 py-4 font-semibold text-[#0F172A]">{item.factor}</td>
                          <td className="px-5 py-4 font-mono font-medium">
                            {seoState === 'optimized' ? (
                              <span className="text-[#10B981] font-bold">{item.optimized}</span>
                            ) : (
                              <span className="text-red-500 font-bold">{item.unoptimized}</span>
                            )}
                          </td>
                          <td className="px-5 py-4">
                            {seoState === 'optimized' ? (
                              <span className="inline-flex items-center gap-1.5 text-[#10B981] font-bold">
                                <CheckCircle className="w-4 h-4 shrink-0" /> Passed
                              </span>
                            ) : (
                              <span className="text-red-500 font-bold">Needs Fix</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SERVICE 03: WORDPRESS CMS */}
        {/* ========================================================================= */}
        {activeServiceTab === 'wordpress' && (
          <div className="clean-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#E2E8F0] bg-white w-full box-border shadow-xs animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

              <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full">
                <div className="ecurve-eyebrow w-fit">
                  <LayoutTemplate className="w-3.5 h-3.5" />
                  <span>Service 03 // Autonomous Publishing</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-['Outfit'] leading-tight">
                    WORDPRESS CMS & FREEDOM
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed break-words">
                    Take full control of your website content. We build custom WordPress themes and Gutenberg block systems that let your team publish, edit, and update without hiring developers every time.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase block mb-1.5 tracking-wider">
                    CMS Freedom:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A] font-['Outfit'] leading-relaxed">
                    "{SERVICES[2]?.statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive WordPress Editor Sandbox */}
              <div className="lg:col-span-6 flex flex-col gap-5 w-full box-border">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-5 shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                    Interactive Content Editor Sandbox:
                  </span>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm">
                    <label className="font-bold text-[#334155]">Headline Copy:</label>
                    <input
                      type="text"
                      value={wpHeading}
                      onChange={(e) => setWpHeading(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED] focus:ring-2 focus:ring-[#326DED]/10 w-full font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm">
                    <label className="font-bold text-[#334155]">Body Copy:</label>
                    <textarea
                      rows={3}
                      value={wpParagraph}
                      onChange={(e) => setWpParagraph(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED] focus:ring-2 focus:ring-[#326DED]/10 w-full font-medium leading-relaxed"
                    />
                  </div>

                  {/* Preview Canvas */}
                  <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] mt-2 flex flex-col gap-4 shadow-xs">
                    <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">Live Canvas Preview:</span>
                    <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] font-['Outfit'] leading-snug">{wpHeading}</h4>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{wpParagraph}</p>
                    <div className="pt-2">
                      <span
                        className="inline-block text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-xs"
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
          <div className="clean-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#E2E8F0] bg-white w-full box-border shadow-xs animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

              <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full">
                <div className="ecurve-eyebrow w-fit">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Service 04 // Android Engineering</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-['Outfit'] leading-tight">
                    NATIVE ANDROID APPS
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed break-words">
                    Over 75% of internet traffic happens on mobile devices. A custom Android app puts your business directly on your customer’s home screen with push notifications, offline access, and fast booking.
                  </p>
                </div>

                {/* Android Flow */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block tracking-wider">
                    Mobile Development Journey:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 w-full">
                    {SERVICES[3]?.flow?.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3.5 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-mono font-bold text-[#326DED]">
                          {step}
                        </span>
                        {idx < SERVICES[3].flow.length - 1 && (
                          <span className="text-xs text-[#94A3B8]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
                  <span className="text-xs font-mono font-bold text-[#326DED] uppercase block mb-1.5 tracking-wider">
                    Mobile Advantage:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A] font-['Outfit'] leading-relaxed">
                    "{SERVICES[3]?.statement}"
                  </p>
                </div>
              </div>

              {/* Right Interactive Smartphone Mockup */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center w-full box-border">

                {/* Screens Clicker */}
                <div className="w-full mb-8 sm:mb-10">
                  <span className="text-xs font-mono text-[#64748B] uppercase font-bold block mb-3 text-center tracking-wider">
                    Select Screen View:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
                    {androidScreens.map((scr, i) => (
                      <button
                        key={i}
                        onClick={() => setAndroidScreenIndex(i)}
                        className={`p-3 rounded-xl text-left text-xs font-mono border cursor-pointer transition-all ${androidScreenIndex === i
                          ? 'bg-[#326DED] text-white border-[#326DED] shadow-xs font-bold'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:bg-white'
                          }`}
                      >
                        <div>0{i + 1}. {scr.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Smartphone Display Frame */}
                <div className="w-full max-w-[320px] p-4 rounded-[36px] bg-[#0F172A] border-4 border-gray-800 shadow-xl text-white box-border mt-2">
                  <div className="w-20 h-3.5 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/60" />
                  </div>

                  <div className="bg-[#1E293B] rounded-[24px] p-5 min-h-[350px] flex flex-col justify-between border border-white/10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 pb-2.5 border-b border-white/10">
                      <span>9:41 AM</span>
                      <span className="text-[#00D2FF]">Android App ● 5G</span>
                    </div>

                    <div className="my-auto py-4 flex flex-col gap-2.5">
                      <span className="text-[10px] font-mono text-[#00D2FF] bg-[#00D2FF]/10 px-2.5 py-1 rounded-md uppercase font-bold w-fit">
                        {androidScreens[androidScreenIndex].tag}
                      </span>
                      <h4 className="text-xl font-bold font-['Outfit'] text-white">
                        {androidScreens[androidScreenIndex].title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {androidScreens[androidScreenIndex].content}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-3 border-t border-white/10 text-center text-[10px] font-mono text-gray-400">
                      <span className={androidScreenIndex === 0 ? 'text-[#00D2FF] font-bold' : ''}>Home</span>
                      <span className={androidScreenIndex === 1 ? 'text-[#00D2FF] font-bold' : ''}>Catalog</span>
                      <span className={androidScreenIndex === 3 ? 'text-[#00D2FF] font-bold' : ''}>Profile</span>
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

export default FourServices;
