import React, { useState, useEffect } from "react";
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
  Layers,
  Play,
  RotateCw,
  Sliders,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LiveOperationsHubProps {
  onTriggerQuote: (serviceId?: string) => void;
  onExploreServices: () => void;
}

const cameraFeeds = [
  {
    id: "cam-1",
    label: "CAM-01: HQ ENTRANCE",
    zone: "Zone A // Main Gate",
    res: "4K UHD 60FPS",
    status: "RECORDING",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    bitrate: "14.2 Mbps",
    temp: "38.2°C"
  },
  {
    id: "cam-2",
    label: "CAM-02: DATACENTER RACK",
    zone: "Zone B // Server Room",
    res: "4K UHD 60FPS",
    status: "RECORDING",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    bitrate: "16.8 Mbps",
    temp: "22.4°C"
  },
  {
    id: "cam-3",
    label: "CAM-03: FIBER ODF CORE",
    zone: "Zone C // Optical Loop",
    res: "4K UHD 60FPS",
    status: "RECORDING",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    bitrate: "12.5 Mbps",
    temp: "26.1°C"
  },
  {
    id: "cam-4",
    label: "CAM-04: PERIMETER NORTH",
    zone: "Zone D // Outer Fence",
    res: "4K UHD 60FPS",
    status: "RECORDING",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
    bitrate: "15.0 Mbps",
    temp: "31.0°C"
  }
];

export const LiveOperationsHub: React.FC<LiveOperationsHubProps> = ({
  onTriggerQuote,
  onExploreServices
}) => {
  const [selectedCam, setSelectedCam] = useState(cameraFeeds[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const [activePort, setActivePort] = useState(4);

  const runOtdrScan = () => {
    setIsScanning(true);
    setPulseKey(prev => prev + 1);
    setTimeout(() => {
      setIsScanning(false);
    }, 1800);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800 text-left">
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,91,22,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,91,22,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(217,91,22,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-3.5 py-1 text-[10px] font-mono text-[#D95B16] font-extrabold uppercase tracking-widest">
              <Activity size={12} className="animate-pulse text-[#D95B16]" />
              <span>LIVE OPERATIONS SIMULATOR</span>
            </div>
            <h2 className="font-['Open_Sans_Condensed'] font-light text-3xl sm:text-5xl text-white tracking-wide uppercase leading-none">
              Enterprise Telemetry & <br />
              <span className="text-[#D95B16] font-bold">Hardware Monitoring Matrix</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-['Open_Sans']">
              Live engineering telemetry simulation across 4K IP camera arrays, sub-decibel Fujikura optical fusion trunking, and 10G Gigabit routing infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onTriggerQuote()}
              className="bg-[#D95B16] hover:bg-[#C2410C] text-white px-5 py-3 rounded-xl font-['Open_Sans'] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Configure Site SLA</span>
            </button>
          </div>
        </div>

        {/* 3-Column Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* COLUMN 1: LIVE 4K SURVEILLANCE MATRIX SWITCHER */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Camera size={15} className="text-[#D95B16]" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">4K CCTV Grid</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                  ● 60 FPS LIVE
                </span>
              </div>

              {/* Main Monitor Display */}
              <div className="relative aspect-video rounded-xl overflow-hidden mt-4 border border-slate-800 bg-black group">
                <img 
                  src={selectedCam.img} 
                  alt={selectedCam.label}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top overlay */}
                <div className="absolute top-2 left-2 right-2 flex justify-between text-[8px] font-mono text-white">
                  <span className="bg-black/70 px-2 py-0.5 rounded">{selectedCam.label}</span>
                  <span className="bg-[#D95B16] px-1.5 py-0.5 rounded font-bold">{selectedCam.res}</span>
                </div>

                {/* Center Reticle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="border border-orange-500/60 w-24 h-16 rounded p-1 flex flex-col justify-between">
                    <span className="text-[6.5px] font-mono text-orange-400">[NEURAL AI ACTIVE]</span>
                    <span className="text-[6.5px] font-mono text-emerald-400 self-end">0.00% LOSS</span>
                  </div>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[8px] font-mono text-slate-300">
                  <span>ZONE: {selectedCam.zone}</span>
                  <span>BITRATE: {selectedCam.bitrate}</span>
                </div>
              </div>

              {/* Camera Selector Pills */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {cameraFeeds.map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => setSelectedCam(cam)}
                    className={`p-2 rounded-xl border text-left font-mono text-[9.5px] transition-all cursor-pointer ${
                      selectedCam.id === cam.id
                        ? "bg-orange-500/20 border-[#D95B16] text-white"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="font-bold truncate">{cam.label.split(":")[0]}</div>
                    <div className="text-[8px] text-slate-500 truncate">{cam.zone.split("//")[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>STORAGE: <b className="text-emerald-400">RAID-1 NVR 100%</b></span>
              <span>CODEC: <b className="text-white">H.265+</b></span>
            </div>
          </div>

          {/* COLUMN 2: FUJIKURA FIBER SPLICING & OTDR WAVE TRACE */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Cable size={15} className="text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">Fiber OTDR Trace</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                  LOSS-FREE CERTIFIED
                </span>
              </div>

              {/* OTDR Simulated Pulse Canvas */}
              <div className="relative aspect-video rounded-xl overflow-hidden mt-4 border border-slate-800 bg-black p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                  <span>1310/1550nm DUAL LASER</span>
                  <span className="text-emerald-400 font-bold">FUJIKURA CORE ALIGN</span>
                </div>

                {/* Dynamic Animated Pulse Bars */}
                <div className="h-20 w-full flex items-end gap-1 border-b border-l border-emerald-500/40 p-1 my-auto">
                  {[35, 38, 36, 92, 34, 35, 36, 88, 35, 37, 36, 35, 96, 34, 35, 36].map((val, idx) => (
                    <motion.div
                      key={`${pulseKey}-${idx}`}
                      initial={{ height: "10%" }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.4, delay: idx * 0.03 }}
                      className="flex-1 bg-gradient-to-t from-emerald-500 to-[#D95B16] rounded-t opacity-85"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                  <span>0.00 km</span>
                  <span>RANGE: 120 km MAX</span>
                  <span>±1cm PINPOINT</span>
                </div>
              </div>

              {/* Splicing Telemetry Specs */}
              <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-[9.5px]">
                <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-slate-500 block text-[8px]">CORE OFFSET</span>
                  <span className="font-bold text-emerald-400 mt-0.5 block">&lt;0.1 µm Optimal</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-slate-500 block text-[8px]">DEAD-ZONE</span>
                  <span className="font-bold text-white mt-0.5 block">≤0.8m Ultra Short</span>
                </div>
              </div>
            </div>

            {/* Run Laser Diagnostic Scan Button */}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={runOtdrScan}
                disabled={isScanning}
                className="w-full bg-slate-950 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 hover:text-white p-2.5 rounded-xl font-mono text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCw size={12} className={isScanning ? "animate-spin text-emerald-400" : ""} />
                <span>{isScanning ? "Running OTDR Laser Sweep..." : "Trigger OTDR Pulse Scan"}</span>
              </button>
            </div>
          </div>

          {/* COLUMN 3: 10G GIGABIT CORE SWITCH & VLAN ISOLATION */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">10G Core Rack</span>
                </div>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                  10G SFP+
                </span>
              </div>

              {/* 16-Port Interactive Switch Panel */}
              <div className="rounded-xl border border-slate-800 bg-black p-3 mt-4 space-y-2">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 border-b border-slate-800 pb-1">
                  <span>24-PORT MANAGED SWITCH #01</span>
                  <span className="text-cyan-400">FLUKE CERTIFIED</span>
                </div>

                {/* Ports Grid */}
                <div className="grid grid-cols-8 gap-1.5 py-1">
                  {Array.from({ length: 16 }).map((_, pIdx) => {
                    const isSelected = activePort === pIdx + 1;
                    return (
                      <button
                        key={pIdx}
                        onClick={() => setActivePort(pIdx + 1)}
                        className={`h-7 rounded flex flex-col items-center justify-center font-mono text-[7px] border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-xs"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"
                        }`}
                        title={`Port ${pIdx + 1}: Gigabit Active`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full mb-0.5 ${pIdx % 3 === 0 ? "bg-emerald-400 animate-ping" : "bg-emerald-400"}`} />
                        <span>P{pIdx + 1}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="text-[8px] font-mono text-slate-400 pt-1 flex items-center justify-between">
                  <span>ACTIVE PORT: <b className="text-cyan-300">PORT #{activePort}</b></span>
                  <span>THROUGHPUT: <b className="text-white">9.84 Gbps</b></span>
                </div>
              </div>

              {/* VLAN Routing Cards */}
              <div className="space-y-2 mt-4 font-mono text-[9px]">
                <div className="bg-slate-950 border border-slate-800 p-2 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">VLAN 10 [CORPORATE CORE]</span>
                  <span className="text-emerald-400 font-bold">9.84 Gbps • 0% Loss</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-2 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">VLAN 20 [CCTV TRAFFIC]</span>
                  <span className="text-[#D95B16] font-bold">ISOLATED • 4.2 Gbps</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>LATENCY: <b className="text-cyan-400">0.4 ms</b></span>
              <span>FIREWALL: <b className="text-emerald-400">LAYER 3 DEEP PACKET</b></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
