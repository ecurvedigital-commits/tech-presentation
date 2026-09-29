import React from 'react';
import { Sparkles, Cpu } from 'lucide-react';

export const KineticStatement = () => {
  const keywords = [
    'STRATEGY.',
    'DESIGN.',
    'ENGINEERING.',
    'AI.',
    'AUTOMATION.',
    'INTEGRATION.',
    'PERFORMANCE.',
    'OPTIMIZATION.'
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#07090F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#326DED]/15 via-[#00D2FF]/10 to-[#6336F5]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00D2FF] uppercase">
          <Cpu className="w-3.5 h-3.5" />
          <span>The Synchronized Standard</span>
        </div>

        {/* Kinetic Words Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-5xl mx-auto">
          {keywords.map((word, idx) => (
            <span
              key={idx}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Outfit'] tracking-tight select-none transition-all duration-300 text-white/40 hover:text-white hover:scale-105 cursor-default hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-[#00D2FF]"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Core Climax Statement */}
        <div className="pt-8 max-w-3xl mx-auto border-t border-white/10">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            "Technology works when <span className="grad-text-blue">all of it works together.</span>"
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
            No broken hand-offs. No finger-pointing. Ecurve delivers unified digital engines built to scale your business.
          </p>
        </div>
      </div>
    </section>
  );
};
