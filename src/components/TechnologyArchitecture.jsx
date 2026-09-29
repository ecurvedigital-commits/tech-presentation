import React, { useState } from 'react';
import { 
  Layers, Code2, Server, Database, Share2, Bot, Cloud, CheckCircle, 
  ArrowDown, ChevronRight, ShieldCheck, Cpu
} from 'lucide-react';
import { TECH_STACK_LAYERS } from '../data/presentationData';

export const TechnologyArchitecture = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const layerIcons = [Code2, Server, Database, Share2, Cloud];

  return (
    <section
      id="architecture"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#090C16] border-t border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#326DED]/10 border border-[#326DED]/30 text-[#00D2FF] font-mono text-xs uppercase font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proven Modern Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            Built on the right technology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We select production-grade, battle-tested technologies that ensure lightning-fast performance, rock-solid security, and effortless scalability.
          </p>
        </div>

        {/* Layered Interactive Architecture Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stack Layers Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {TECH_STACK_LAYERS.map((layer, idx) => {
              const Icon = layerIcons[idx] || Layers;
              const isSelected = activeLayerIndex === idx;
              return (
                <button
                  key={layer.layer}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#18233C] to-[#0F1626] border-[#326DED] shadow-xl shadow-[#326DED]/20 scale-[1.02]'
                      : 'bg-[#101422]/70 border-white/5 hover:border-white/20 hover:bg-[#141A2C]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#326DED] text-white' : 'bg-white/5 text-[#94A3B8]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#00D2FF] uppercase font-bold block">
                        {layer.layer}
                      </span>
                      <h3 className="text-sm font-bold text-white">
                        {layer.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00D2FF] translate-x-1' : 'text-white/30'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Layer Tech Inspector (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-[#326DED]/30 bg-[#0C101E] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#326DED] uppercase font-bold">
                    {TECH_STACK_LAYERS[activeLayerIndex].layer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-0.5">
                    {TECH_STACK_LAYERS[activeLayerIndex].title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-md border border-[#22C55E]/20">
                  ⚡ Type-Safe & Scalable
                </span>
              </div>

              {/* Technologies in this Layer */}
              <div className="space-y-3.5">
                {TECH_STACK_LAYERS[activeLayerIndex].techs.map((t, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#326DED]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-mono">
                          {t.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#00D2FF] border border-white/10">
                          {t.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-1">
                        {t.role}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-[#22C55E] flex items-center gap-1 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" /> Production Ready
                    </span>
                  </div>
                ))}
              </div>

              {/* Architectural Safety Footnote */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>No experimental bloat • High-availability SLA</span>
                <span className="text-[#326DED]">Ecurve Digital Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
