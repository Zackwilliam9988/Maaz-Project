import React, { useState } from "react";
import { 
  Activity, 
  Camera, 
  Cpu, 
  ShieldCheck, 
  Wifi, 
  Radio, 
  Cable, 
  Zap, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Server,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LiveOperationsHubProps {
  onTriggerQuote: (serviceId?: string) => void;
  onExploreServices: () => void;
}

export const LiveOperationsHub: React.FC<LiveOperationsHubProps> = ({
  onTriggerQuote,
  onExploreServices
}) => {
  const [activeTab, setActiveTab] = useState<"cctv" | "fiber" | "network">("cctv");

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Dynamic Background Network Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,91,22,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,91,22,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(217,91,22,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-3.5 py-1 text-[10.5px] font-mono text-[#D95B16] font-bold uppercase tracking-widest">
              <Activity size={12} className="animate-pulse text-[#D95B16]" />
              <span>LIVE OPERATIONS SIMULATOR</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Enterprise Telemetry & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Hardware Monitoring Matrix
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the certified precision of our deployments in real time. We engineer zero-failure optical routes, encrypted multi-camera surveillance matrices, and high-throughput enterprise routing.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 self-start lg:self-auto backdrop-blur-md">
            <button
              onClick={() => setActiveTab("cctv")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "cctv"
                  ? "bg-[#D95B16] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Camera size={13} />
              <span>4K SURVEILLANCE</span>
            </button>
            <button
              onClick={() => setActiveTab("fiber")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "fiber"
                  ? "bg-[#D95B16] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Cable size={13} />
              <span>FIBER OTDR MATRIX</span>
            </button>
            <button
              onClick={() => setActiveTab("network")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === "network"
                  ? "bg-[#D95B16] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Server size={13} />
              <span>10G CORE NETWORK</span>
            </button>
          </div>
        </div>

        {/* Interactive HUD Matrix Display */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden text-left">
          
          <AnimatePresence mode="wait">
            {activeTab === "cctv" && (
              <motion.div
                key="cctv-hud"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Live Visual Feed Simulator */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex flex-col justify-between p-4 group">
                  <img 
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80" 
                    alt="4K Security Camera Simulation"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
                  
                  {/* Top HUD Line */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                      <span className="font-bold text-white uppercase tracking-wider">LIVE CAM-04: MAIN ENTRANCE</span>
                    </div>
                    <span className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">
                      4K UHD 60FPS
                    </span>
                  </div>

                  {/* AI Vision Detection Box Target */}
                  <div className="relative z-10 self-center border-2 border-dashed border-[#D95B16] rounded-xl p-3 bg-orange-500/10 backdrop-blur-xs max-w-xs text-center space-y-1">
                    <div className="text-[9px] font-mono font-bold text-orange-300 uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D95B16] animate-pulse" />
                      <span>AI RECOGNITION: SECURED ZONE</span>
                    </div>
                    <p className="text-[10px] font-mono text-white font-semibold">TARGET VEHICLE/HUMAN: 0.00% DRIFT</p>
                  </div>

                  {/* Bottom HUD Line */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-2 bg-black/50 px-3 py-1 rounded-xl backdrop-blur-md">
                    <span>IR ILLUMINATOR: <b className="text-white">100m ACTIVE</b></span>
                    <span>STORAGE: <b className="text-emerald-400">RAID NVR 100% HEALTH</b></span>
                    <span>BITRATE: <b className="text-white">14.2 Mbps</b></span>
                  </div>
                </div>

                {/* Right Specs & Capabilities Breakdown */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#D95B16] uppercase tracking-widest font-black">
                      SPECIFICATION SUMMARY
                    </span>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight">
                      Ultra 4K IP Surveillance & Neural Analytics
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      Complete angle laser calculation to eliminate reflection zones and blindspots. Features end-to-end H.265+ stream compression and military-grade SSL/TLS tunnels for authorized smartphone monitoring.
                    </p>
                  </div>

                  {/* Hardware Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">OPTICAL SENSOR</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">Sony Starvis 4K</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">NIGHT VISION</span>
                      <span className="font-bold text-[#D95B16] text-xs mt-0.5 block">100m Dual Smart IR</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">STORAGE BACKPLANE</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">RAID-1 Redundancy</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">WARRANTY SLA</span>
                      <span className="font-bold text-emerald-400 text-xs mt-0.5 block">3-Year On-Site SLA</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onTriggerQuote("cctv-install")}
                      className="flex-1 bg-[#D95B16] hover:bg-[#C2410C] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <Sparkles size={13} />
                      <span>Configure Surveillance Quote</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "fiber" && (
              <motion.div
                key="fiber-hud"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Live Splicing Graph Simulator */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex flex-col justify-between p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  {/* Top Line */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      OTDR SCANNER: FUJIKURA CORE-ALIGNMENT
                    </span>
                    <span className="bg-slate-900 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full">
                      1310 / 1550 nm DUAL LASER
                    </span>
                  </div>

                  {/* Simulated OTDR Pulse Graph */}
                  <div className="relative z-10 my-auto py-6 px-4">
                    <div className="h-24 w-full flex items-end gap-1.5 border-b border-l border-emerald-500/40 p-2">
                      {[40, 42, 41, 40, 85, 38, 39, 41, 40, 42, 41, 95, 39, 40, 41, 40].map((val, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 bg-gradient-to-t from-emerald-500 to-[#D95B16] rounded-t opacity-80 hover:opacity-100 transition-all"
                          style={{ height: `${val}%` }}
                          title={`Sample Point ${idx + 1}: Attenuation Verified`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-slate-500 pt-1">
                      <span>0.00 km</span>
                      <span>TRACE DISTANCE: 120.00 km MAX</span>
                      <span>PINPOINT ±1cm</span>
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-300 border-t border-slate-800 pt-2">
                    <span>INSERTION LOSS: <b className="text-emerald-400">&le; 0.018 dB</b></span>
                    <span>CORE OFFSET: <b className="text-emerald-400">&lt; 0.1 &mu;m</b></span>
                    <span>STATUS: <b className="text-[#D95B16]">SPLICED & SEALED</b></span>
                  </div>
                </div>

                {/* Right Specs */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-black">
                      OPTICAL PRECISION BENCHMARK
                    </span>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight">
                      Sub-Decibel Fusion Splicing & OTDR Trace
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      Utilizing Japanese Fujikura core-alignment splicers, diamond micro-cleavers, and reflectometers to ensure zero packet drop over kilometer-length optical trunk backbones.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">MAX DECIBEL LOSS</span>
                      <span className="font-bold text-emerald-400 text-xs mt-0.5 block">&le; 0.02 dB Certified</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">EQUIPMENT STANDARD</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">Fujikura Japan</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">FIBER TYPES</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">OS2 / OM3 / OM4</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">REPORTING</span>
                      <span className="font-bold text-[#D95B16] text-xs mt-0.5 block">PDF SLA Audit Log</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onTriggerQuote("fiber-splicing")}
                      className="w-full bg-[#D95B16] hover:bg-[#C2410C] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <Sparkles size={13} />
                      <span>Estimate Fiber Splicing Nodes</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "network" && (
              <motion.div
                key="network-hud"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Live Network Throughput Simulator */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex flex-col justify-between p-4">
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      ENTERPRISE ROUTING CORE #01
                    </span>
                    <span className="bg-slate-900 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full">
                      10 Gbps SFP+ BACKPLANE
                    </span>
                  </div>

                  {/* Network Nodes Visualization */}
                  <div className="relative z-10 my-auto grid grid-cols-3 gap-3 p-2">
                    <div className="bg-slate-900/90 border border-cyan-500/30 p-3 rounded-xl text-center space-y-1">
                      <span className="text-[8px] font-mono text-slate-400">VLAN 10 [CORP]</span>
                      <span className="block font-mono text-cyan-400 font-bold text-sm">9.84 Gbps</span>
                      <span className="text-[8px] text-emerald-400">0.00% Loss</span>
                    </div>
                    <div className="bg-slate-900/90 border border-orange-500/30 p-3 rounded-xl text-center space-y-1">
                      <span className="text-[8px] font-mono text-slate-400">VLAN 20 [CCTV]</span>
                      <span className="block font-mono text-orange-400 font-bold text-sm">4.21 Gbps</span>
                      <span className="text-[8px] text-emerald-400">ISOLATED</span>
                    </div>
                    <div className="bg-slate-900/90 border border-emerald-500/30 p-3 rounded-xl text-center space-y-1">
                      <span className="text-[8px] font-mono text-slate-400">VLAN 30 [GUEST]</span>
                      <span className="block font-mono text-emerald-400 font-bold text-sm">1.10 Gbps</span>
                      <span className="text-[8px] text-cyan-400">FIREWALL ON</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                    <span>PING: <b className="text-cyan-400">0.8 ms</b></span>
                    <span>WIRE: <b className="text-white">Cat6A Fluke Verified</b></span>
                    <span>FIREWALL: <b className="text-emerald-400">LAYER 3 DEEP PACKET</b></span>
                  </div>
                </div>

                {/* Right Specs */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-black">
                      STRUCTURED CABLING & ROUTING
                    </span>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight">
                      Gigabit Cat6A Trunking & AP Matrix
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      Structured modular patch bays with solid copper Cat6/6A wiring, metallic conduits for physical rodent/interference shielding, and zero dead-zone Wi-Fi 6 coverage.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">CABLE FREQUENCY</span>
                      <span className="font-bold text-cyan-400 text-xs mt-0.5 block">500 MHz Solid Copper</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">CERTIFICATION</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">Fluke Link Analyzer</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">CONDUIT SHIELD</span>
                      <span className="font-bold text-white text-xs mt-0.5 block">Armored Metallic</span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                      <span className="block text-[9px] text-slate-500 uppercase tracking-wider">UPTIME SLA</span>
                      <span className="font-bold text-emerald-400 text-xs mt-0.5 block">99.99% Reliability</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onTriggerQuote("network-setup")}
                      className="w-full bg-[#D95B16] hover:bg-[#C2410C] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <Sparkles size={13} />
                      <span>Estimate Structured Network Drops</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
