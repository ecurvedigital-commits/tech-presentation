import React, { useState } from 'react';
import { HelpCircle, Globe, Search, Share2, Target, BarChart3, Users, UserCheck, Sparkles, Network } from 'lucide-react';
import { useSectionInView, TypewriterText, FadeReveal, RevealContainer } from './Typewriter';
import { WHY_THIS_APPROACH_DATA } from '../data/presentationData';

const nodeIcons = {
  google: Search,
  social: Share2,
  ads: Target,
  seo: Globe,
  analytics: BarChart3,
  leads: Users,
  customers: UserCheck
};

export const WhyThisApproachSection = () => {
  const { ref, isInView, viewKey } = useSectionInView(0.12);
  const [activeNodeId, setActiveNodeId] = useState('leads');

  const activeNode = WHY_THIS_APPROACH_DATA.nodes.find(n => n.id === activeNodeId) || WHY_THIS_APPROACH_DATA.nodes[0];

  return (
    <section
      ref={ref}
      id="growth-system"
      className="presentation-section relative tech-grid-bg overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#326DED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
          <FadeReveal active={isInView} delay={50}>
            <div className="ecurve-eyebrow">
              <HelpCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{WHY_THIS_APPROACH_DATA.eyebrow}</span>
            </div>
          </FadeReveal>

          <h2 className="section-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-1 mb-4 min-h-[50px] sm:min-h-[70px]">
            <TypewriterText
              text={WHY_THIS_APPROACH_DATA.question}
              speed={28}
              delay={150}
              showCursor={true}
              active={isInView}
              viewKey={viewKey}
              cursorClassName="text-[#00D2FF]"
            />
          </h2>

          <FadeReveal active={isInView} delay={850}>
            <p className="text-lg sm:text-2xl font-bold font-['Outfit'] text-[#00D2FF] mb-2">
              "{WHY_THIS_APPROACH_DATA.statement}"
            </p>
          </FadeReveal>

          <FadeReveal active={isInView} delay={1050}>
            <p className="section-description text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
              When software architecture and marketing telemetry are synchronized, your platform turns every visitor interaction into measurable pipeline momentum.
            </p>
          </FadeReveal>
        </div>

        {/* Central Website Hub & Connected Growth Ecosystem */}
        <RevealContainer active={isInView} delay={1200} className="w-full">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/10 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Connected Nodes List */}
              <div className="lg:col-span-5 flex flex-col gap-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-1">
                  Connected Growth Channels:
                </span>
                {WHY_THIS_APPROACH_DATA.nodes.map((node) => {
                  const Icon = nodeIcons[node.id] || Globe;
                  const isSelected = activeNodeId === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#326DED]/20 border-[#00D2FF] text-white shadow-lg shadow-[#326DED]/20'
                          : 'bg-white/[0.02] border-white/5 text-[#94A3B8] hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${node.color}15`, border: `1px solid ${node.color}40` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: node.color }} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold font-['Outfit'] text-white">
                            {node.name}
                          </span>
                          <span className="text-[11px] text-[#94A3B8]">
                            {node.desc}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs font-mono ${isSelected ? 'text-[#00D2FF]' : 'text-[#64748B]'}`}>
                        Active Sync →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right: Visual Animated Hub Representation */}
              <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border-white/10 bg-black/90 flex flex-col items-center justify-center text-center relative min-h-[380px]">
                
                {/* Visual Radial Pulses */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full border border-[#326DED]/20 animate-ping opacity-20" />
                  <div className="w-80 h-80 rounded-full border border-[#00D2FF]/20 animate-pulse-glow" />
                </div>

                {/* Central Platform Hub Icon */}
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#326DED] to-[#00D2FF] p-0.5 shadow-2xl shadow-[#326DED]/40 flex items-center justify-center mb-4 animate-float">
                  <div className="w-full h-full bg-black rounded-[22px] flex flex-col items-center justify-center p-2">
                    <Globe className="w-8 h-8 text-[#00D2FF]" />
                    <span className="text-[9px] font-mono font-bold text-white uppercase mt-1">
                      ECURVE
                    </span>
                  </div>
                </div>

                {/* Active Connected Channel Callout */}
                <div className="relative z-10 max-w-md flex flex-col items-center gap-2">
                  <span className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
                    Synchronized Growth Node:
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                    {activeNode.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    Integrated directly with server-side events, clean SEO crawl trees, and automated conversion responders.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-around text-xs font-mono text-[#94A3B8]">
                  <span>Zero Data Silos</span>
                  <span className="text-[#10B981] font-bold">100% Signal Fidelity</span>
                  <span>Automated Routing</span>
                </div>

              </div>

            </div>

          </div>
        </RevealContainer>

      </div>
    </section>
  );
};

export default WhyThisApproachSection;
