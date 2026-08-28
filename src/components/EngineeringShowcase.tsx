import React, { useState } from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  Flame,
  Award,
  Zap,
  Cable,
  Camera,
  Server,
  FileCheck
} from "lucide-react";
import { motion } from "motion/react";

interface EngineeringShowcaseProps {
  onTriggerQuote: (serviceId?: string) => void;
  onExploreServices: () => void;
}

const engineeringPillars = [
  {
    code: "PIL-01",
    icon: Camera,
    title: "4K AI Surveillance Matrix",
    subtitle: "Precision Optical Mapping",
    desc: "Laser-calculated camera positioning with ultra 4K Sony Starvis sensors, eliminating blindspots and optical reflections.",
    specs: [
      { label: "Sensor Array", val: "Sony Starvis 4K UHD" },
      { label: "Coverage", val: "Zero Blindspots Verified" },
      { label: "Stream Security", val: "H.265+ / AES-256 GCM" }
    ],
    badge: "4K ULTRA HD"
  },
  {
    code: "PIL-02",
    icon: Cable,
    title: "Japanese Optical Fusion",
    subtitle: "Fujikura Core-Alignment",
    desc: "Sub-decibel optical trunk splicing ensuring lossless data transit over multi-kilometer corporate backbones.",
    specs: [
      { label: "Insertion Loss", val: "≤ 0.018 dB Certified" },
      { label: "Equipment", val: "Fujikura Japan Core Align" },
      { label: "Verification", val: "Dual 1310/1550nm OTDR" }
    ],
    badge: "SUB-DECIBEL LOSS"
  },
  {
    code: "PIL-03",
    icon: Server,
    title: "10G Structured Cabling",
    subtitle: "Cat6A High-Throughput Core",
    desc: "Modular patch bay topologies with 500 MHz solid copper cabling, physical metallic conduit shielding, and VLAN isolation.",
    specs: [
      { label: "Frequency", val: "500 MHz Solid Copper" },
      { label: "Testing", val: "100% Fluke Link Certified" },
      { label: "Backbone", val: "10 Gbps SFP+ Uplink" }
    ],
    badge: "FLUKE CERTIFIED"
  },
  {
    code: "PIL-04",
    icon: ShieldCheck,
    title: "Enterprise SLA & Support",
    subtitle: "Guaranteed On-Site Dispatch",
    desc: "Continuous SLA support with rapid field dispatch throughout Islamabad and Rawalpindi industrial & commercial zones.",
    specs: [
      { label: "Dispatch Window", val: "<60 Min Priority SLA" },
      { label: "Parts Standard", val: "100% OEM Brand Genuine" },
      { label: "Warranty", val: "1-Year Comprehensive" }
    ],
    badge: "100% SLA BACKED"
  }
];

const deploymentSteps = [
  {
    num: "01",
    title: "Laser Site Survey & CAD Mapping",
    desc: "Complete structural inspection, angle laser scans, and CAD routing design to ensure zero blindspots."
  },
  {
    num: "02",
    title: "Fujikura Fusion & Optical Pull",
    desc: "Precision core-alignment fusion splicing with sub-decibel attenuation bounds across all fiber links."
  },
  {
    num: "03",
    title: "VLAN Segmentation & 4K Setup",
    desc: "Layer 3 firewall routing, isolated CCTV data channels, and encrypted smartphone cloud DDNS configuration."
  },
  {
    num: "04",
    title: "Fluke Certification & PDF Handover",
    desc: "Link-by-link OTDR & Cat6A Fluke testing with complete signed SLA audit documentation delivered to client."
  }
];

export const EngineeringShowcase: React.FC<EngineeringShowcaseProps> = ({
  onTriggerQuote,
  onExploreServices
}) => {
  return (
    <section className="py-16 bg-white text-black text-left font-['Open_Sans']">
      <div className="w-[85%] max-w-[1500px] mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#0284C7] font-mono text-[10px] font-bold uppercase tracking-widest">
              <Award size={13} className="text-[#0284C7]" />
              <span>CERTIFIED DEPLOYMENT STANDARDS</span>
            </div>
            <h2 className="font-['Open_Sans_Condensed'] font-light text-3xl sm:text-5xl text-black tracking-wide uppercase leading-tight">
              Precision Infrastructure & <br />
              <span className="text-[#0284C7] font-bold">Quality Benchmarks</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
              Every deployment adheres to rigorous international telecom and surveillance standards, certified with calibrated Japanese equipment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onTriggerQuote()}
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-3 rounded-xl font-['Open_Sans'] font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Launch Quote Simulator</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid (Clean, High-End INOVE Minimalist Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white border border-slate-200 hover:border-[#0284C7] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(2,132,199,0.1)] select-none"
              >
                {/* Top Corner Code & Badge */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 font-bold tracking-wider">
                      {pillar.code}
                    </span>
                    <span className="bg-sky-50 text-[#0284C7] border border-sky-200 text-[8.5px] font-mono font-extrabold px-2 py-0.5 rounded">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="pt-4 space-y-2">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-[#0284C7] group-hover:border-[#0284C7] text-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Open_Sans_Condensed'] font-bold text-2xl text-black uppercase tracking-wide leading-tight group-hover:text-[#0284C7] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Micro Specs Table */}
                  <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 font-mono text-[10px]">
                    {pillar.specs.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between">
                        <span className="text-slate-400">{s.label}:</span>
                        <span className="font-bold text-slate-800">{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onExploreServices()}
                    className="w-full py-2.5 rounded-xl border border-slate-200 group-hover:border-[#0284C7] bg-slate-50 group-hover:bg-[#0284C7] text-slate-700 group-hover:text-white font-['Open_Sans'] font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Deployment Workflow Timeline */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[#0284C7] font-mono text-[10px] font-extrabold uppercase tracking-widest">
              DEPLOYMENT PROTOCOL
            </span>
            <h3 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl text-black font-light uppercase tracking-wide">
              Engineering Execution Process
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Standardized step-by-step procedure guaranteeing zero defect handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, sIdx) => (
              <div 
                key={step.num}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 text-left relative space-y-2 hover:border-[#0284C7] transition-colors shadow-2xs"
              >
                <span className="font-mono text-3xl font-black text-slate-200 group-hover:text-[#0284C7] block leading-none">
                  {step.num}
                </span>
                <h4 className="font-['Open_Sans'] font-bold text-sm text-black">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
