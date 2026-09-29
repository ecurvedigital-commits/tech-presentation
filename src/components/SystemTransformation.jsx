import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Users, Globe, Network, Server, Database, LayoutDashboard, Zap, Bot, TrendingUp,
  Clock, CheckCircle, AlertCircle, ArrowDown
} from 'lucide-react';

export const SystemTransformation = () => {
  const [selectedNode, setSelectedNode] = useState('api');
  const [pulseActive, setPulseActive] = useState(true);

  const beforeFlow = [
    { name: 'Customer Inquires', desc: 'Fills form or calls', flaw: 'Delay starts here' },
    { name: 'Website Form', desc: 'Stored in unread inbox', flaw: 'No instant feedback' },
    { name: 'WhatsApp Message', desc: 'Sent to personal device', flaw: 'Lost when busy' },
    { name: 'Spreadsheet Entry', desc: 'Manual copy-paste', flaw: 'Data typos & lags' },
    { name: 'Manual Work', desc: 'Staff calls back late', flaw: 'High drop-off rate' },
  ];

  const modernNodes = [
    { id: 'customer', title: 'CUSTOMER', icon: Users, role: 'Trigger', desc: 'Customer interacts via high-speed web app, mobile portal, or WhatsApp endpoint.', color: '#326DED' },
    { id: 'website', title: 'WEBSITE / APP', icon: Globe, role: 'Interface', desc: 'Sub-second interface collects structured inputs and validates data client-side.', color: '#00D2FF' },
    { id: 'api', title: 'SECURE API', icon: Network, role: 'Router', desc: 'Authenticated REST/GraphQL gateway parses payload, verifies signatures & routes traffic.', color: '#6336F5' },
    { id: 'backend', title: 'BACKEND CORE', icon: Server, role: 'Engine', desc: 'Node.js server executes business logic, security checks, and transactional rules.', color: '#D93D6D' },
    { id: 'database', title: 'DATABASE', icon: Database, role: 'State', desc: 'MongoDB / PostgreSQL records atomic transaction with complete audit logs.', color: '#F59E0B' },
    { id: 'dashboard', title: 'DASHBOARD', icon: LayoutDashboard, role: 'Visibility', desc: 'Executive telemetry updates in real-time without needing a browser refresh.', color: '#22C55E' },
    { id: 'automation', title: 'AUTOMATION', icon: Zap, role: 'Action', desc: 'Auto-dispatches invoices, WhatsApp vouchers, inventory adjustments, and email receipts.', color: '#326DED' },
    { id: 'ai', title: 'AI LAYER', icon: Bot, role: 'Intelligence', desc: 'Analyzes intent, scores lead conversion probability, and personalizes responses.', color: '#00D2FF' },
    { id: 'insight', title: 'BUSINESS GROWTH', icon: TrendingUp, role: 'Outcome', desc: 'Immediate revenue recognition, zero lost leads, and higher operational margins.', color: '#22C55E' },
  ];

  const activeNodeData = modernNodes.find(n => n.id === selectedNode) || modernNodes[2];

  return (
    <section
      id="transformation"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Headline Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest font-bold block mb-3">
            // Architecture Evolution
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-tight">
            We don't just build interfaces. <br />
            <span className="grad-text-blue">We build systems.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A website is merely the visible layer of your business. The true enterprise value lies in the architecture connecting every touchpoint into an automated data loop.
          </p>
        </div>

        {/* Comparative Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Broken Legacy Chain (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#120F16] border border-red-500/20 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/10">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                [Legacy Architecture]
              </span>
              <span className="text-[11px] font-mono text-red-400/80 bg-red-500/10 px-2 py-0.5 rounded">
                High Drop-Off
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              The Fragile Manual Chain
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Every manual hand-off introduces latency, missed messages, and human error.
            </p>

            {/* Step list */}
            <div className="space-y-3">
              {beforeFlow.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-red-500/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white/90">
                        {idx + 1}. {step.name}
                      </div>
                      <div className="text-[11px] text-[#94A3B8]">
                        {step.desc}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">
                      {step.flaw}
                    </span>
                  </div>
                  {idx < beforeFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-3.5 h-3.5 text-red-400/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
              <span className="text-xs text-red-300 font-medium">
                Average conversion leakage: High • Processing delay: Hours to Days
              </span>
            </div>
          </div>

          {/* Right Column: Ecurve's Unified Living Engine (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0E1322] border border-[#326DED]/30 shadow-2xl relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                  [Ecurve Digital Ecosystem]
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-0.5 rounded border border-[#22C55E]/20">
                ⚡ Sub-Second Automated Sync
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
              The 9-Stage Connected System
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Click any node in the architecture below to inspect its operational role and data payload.
            </p>

            {/* Interactive Grid of Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {modernNodes.map((node, i) => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#151D33] border-[#00D2FF] shadow-lg shadow-[#00D2FF]/20 scale-[1.03]'
                        : 'bg-[#111728]/70 border-white/5 hover:border-white/20 hover:bg-[#151D33]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-white/5">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] font-mono text-[#64748B]">0{i + 1}</span>
                    </div>
                    <div className="text-xs font-bold text-white">
                      {node.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#00D2FF] uppercase">
                      {node.role}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Live Telemetry Card */}
            <div className="p-5 rounded-2xl bg-[#090D18] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#326DED]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-[#326DED] font-bold uppercase">
                  Active Node Inspector // {activeNodeData.title}
                </span>
                <span className="text-[10px] font-mono text-[#22C55E] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Live Telemetry
                </span>
              </div>

              <p className="text-sm text-[#E2E8F0] leading-relaxed mb-3">
                {activeNodeData.desc}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#94A3B8]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Latency: &lt;150ms
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Protocol: TLS 1.3 / HTTPS
                </span>
                <span className="px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">
                  Status: 99.99% Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
