import React, { useState } from "react";
import { Calculator, Sparkles, ChevronRight, ShieldCheck, Clock, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface QuickQuoteEstimatorProps {
  onTriggerQuote: (serviceId?: string) => void;
}

export const QuickQuoteEstimator: React.FC<QuickQuoteEstimatorProps> = ({ onTriggerQuote }) => {
  const [cctvCount, setCctvCount] = useState<number>(8);
  const [fiberCores, setFiberCores] = useState<number>(24);
  const [cableDrops, setCableDrops] = useState<number>(16);

  // Dynamic estimate calculations
  const estimatedDays = Math.max(1, Math.ceil((cctvCount * 0.25) + (fiberCores * 0.1) + (cableDrops * 0.15)));
  const estimatedTechnicians = cctvCount > 16 || fiberCores > 48 || cableDrops > 32 ? 4 : 2;

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,91,22,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,91,22,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/90 rounded-full px-3.5 py-1 text-[10px] text-[#D95B16] font-mono font-bold uppercase tracking-widest">
              <Calculator size={12} className="text-[#D95B16]" />
              <span>INTERACTIVE PARAMETER CALCULATOR</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Instant Site Scope & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D95B16] to-orange-600">
                SLA Timeline Estimator
              </span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Select your expected hardware units to instantly preview project execution capacity. Our certified technicians arrive equipped with Fujikura splicers and Fluke link analyzers.
            </p>

            <div className="space-y-2.5 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle2 size={15} className="text-[#D95B16] shrink-0" />
                <span>Zero Hidden Fees • Written Itemized Estimates</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle2 size={15} className="text-[#D95B16] shrink-0" />
                <span>100% Tested under Sub-Decibel Optical Criteria</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle2 size={15} className="text-[#D95B16] shrink-0" />
                <span>Encrypted DDNS / Cloud Remote Feeds Included</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Sliders & Output Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-left space-y-6">
              
              {/* Slider 1: 4K CCTV Cameras */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D95B16]" />
                    <span>4K IP CCTV Cameras:</span>
                  </span>
                  <span className="font-mono font-black text-[#D95B16] bg-orange-100/70 border border-orange-200 px-2.5 py-0.5 rounded-lg text-xs">
                    {cctvCount} Units
                  </span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={64} 
                  value={cctvCount} 
                  onChange={(e) => setCctvCount(Number(e.target.value))}
                  className="w-full accent-[#D95B16] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>1 Cam (Retail / Home)</span>
                  <span>32 Cams (Warehouse)</span>
                  <span>64+ Cams (Industrial Campus)</span>
                </div>
              </div>

              {/* Slider 2: Fiber Splicing Core Points */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Optical Fiber Splicing Cores:</span>
                  </span>
                  <span className="font-mono font-black text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-lg text-xs">
                    {fiberCores} Cores
                  </span>
                </div>
                <input 
                  type="range" 
                  min={2} 
                  max={96} 
                  step={2}
                  value={fiberCores} 
                  onChange={(e) => setFiberCores(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>2 Cores</span>
                  <span>48 Cores</span>
                  <span>96+ Ribbon Cores</span>
                </div>
              </div>

              {/* Slider 3: Cat6A Structured Drops */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-600" />
                    <span>Cat6A Structured Network Drops:</span>
                  </span>
                  <span className="font-mono font-black text-cyan-700 bg-cyan-100/70 border border-cyan-200 px-2.5 py-0.5 rounded-lg text-xs">
                    {cableDrops} Nodes
                  </span>
                </div>
                <input 
                  type="range" 
                  min={4} 
                  max={120} 
                  step={4}
                  value={cableDrops} 
                  onChange={(e) => setCableDrops(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>4 Drops</span>
                  <span>60 Drops</span>
                  <span>120+ Corporate Drops</span>
                </div>
              </div>

              {/* Output Live Projections Metric Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xs">
                <div>
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold">ESTIMATED FIELD DEPLOYMENT</span>
                  <span className="block text-2xl font-black text-slate-900 font-display mt-0.5">
                    ~{estimatedDays} Business {estimatedDays === 1 ? "Day" : "Days"}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Staffed by {estimatedTechnicians} certified field specialists
                  </span>
                </div>

                <button 
                  onClick={() => onTriggerQuote()}
                  className="bg-[#D95B16] hover:bg-[#C2410C] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 group shrink-0"
                >
                  <Sparkles size={14} className="stroke-[2.5]" />
                  <span>Generate Full AI Proposal</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
