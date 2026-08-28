import React, { useState } from "react";
import { Service } from "../types";
import { LucideIcon } from "./LucideIcon";
import { 
  Search, 
  Sparkles, 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Layers, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ShieldAlert, 
  ArrowUpRight, 
  Zap, 
  Cable, 
  CheckCircle, 
  Eye, 
  Sliders, 
  Award,
  Calculator,
  ExternalLink,
  Flame
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesPageProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onBackToHome: () => void;
  onTriggerQuote: (serviceId?: string) => void;
}

// Domain-specific engineering telemetry specs and feature chips for each service
const serviceSpecs: Record<string, {
  categoryLabel: string;
  badgeType: string;
  chips: { label: string; highlight?: boolean }[];
  telemetry: { label: string; val: string }[];
  guaranteeText: string;
}> = {
  "cctv-install": {
    categoryLabel: "SURVEILLANCE MATRIX",
    badgeType: "4K ULTRA HD",
    chips: [
      { label: "4K UHD Sony Starvis", highlight: true },
      { label: "100m Smart IR Array" },
      { label: "RAID NVR Storage" }
    ],
    telemetry: [
      { label: "Sensor Array", val: "Ultra 4K Sony Starvis" },
      { label: "Night Vision", val: "100m Dual Infrared" },
      { label: "Stream Security", val: "H.265+ End-to-End" }
    ],
    guaranteeText: "Zero Blindspot Mapping"
  },
  "fiber-splicing": {
    categoryLabel: "OPTICAL TRUNKING",
    badgeType: "SUB-DECIBEL",
    chips: [
      { label: "Fujikura Thermal Fusion", highlight: true },
      { label: "≤0.02 dB Decibel Loss" },
      { label: "ITU-T OS2 Single-Mode" }
    ],
    telemetry: [
      { label: "Splicer Engine", val: "Fujikura Core-Alignment" },
      { label: "Insertion Loss", val: "<0.02 dB Certified" },
      { label: "Protection", val: "Micro Heat-Shrink" }
    ],
    guaranteeText: "Japanese Fusion Precision"
  },
  "network-setup": {
    categoryLabel: "ENTERPRISE ROUTING",
    badgeType: "GIGABIT CORE",
    chips: [
      { label: "10 Gbps Backplane", highlight: true },
      { label: "VLAN Network Isolation" },
      { label: "Wi-Fi 6 High Coverage" }
    ],
    telemetry: [
      { label: "Bandwidth", val: "10 Gbps Fiber Uplink" },
      { label: "AP Matrix", val: "Zero Dead-Zone Beam" },
      { label: "Firewall", val: "Layer 3 Deep Packet" }
    ],
    guaranteeText: "Enterprise VLAN Isolation"
  },
  "cctv-repair": {
    categoryLabel: "SYSTEM SLA SUPPORT",
    badgeType: "RAPID RESPONSE",
    chips: [
      { label: "<60 Min Field Dispatch", highlight: true },
      { label: "OEM Brand Components" },
      { label: "RF Signal Sweep" }
    ],
    telemetry: [
      { label: "SLA Window", val: "<60 Min Priority Dispatch" },
      { label: "Diagnostics", val: "Voltage & Wave Sweep" },
      { label: "Warranty", val: "1-Year Full Coverage" }
    ],
    guaranteeText: "Priority Field Dispatch"
  },
  "fiber-testing": {
    categoryLabel: "OTDR DIAGNOSTICS",
    badgeType: "CERTIFIED SCAN",
    chips: [
      { label: "Dual 1310/1550nm Laser", highlight: true },
      { label: "±1 cm Fault Pinpointing" },
      { label: "120 km Max Trace" }
    ],
    telemetry: [
      { label: "Reflectometer", val: "Dual Wavelength OTDR" },
      { label: "Dead-Zone", val: "≤0.8m Ultra Precision" },
      { label: "Compliance", val: "Full PDF SLA Audit Logs" }
    ],
    guaranteeText: "Trace Accuracy ±1cm"
  },
  "biometric-system": {
    categoryLabel: "ACCESS CONTROL",
    badgeType: "AI BIOMETRIC",
    chips: [
      { label: "Dynamic Facial & Touch", highlight: true },
      { label: "<0.2s Access Speed" },
      { label: "Magnetic Relay Lock" }
    ],
    telemetry: [
      { label: "Recognition", val: "Dual IR Facial Scan" },
      { label: "Anti-Spoofing", val: "Live Capacitive Sensor" },
      { label: "Integration", val: "Auto Payroll Sync Cloud" }
    ],
    guaranteeText: "Sub-Second Identification"
  },
  "structured-cabling": {
    categoryLabel: "STRUCTURED CABLING",
    badgeType: "CAT6A CERTIFIED",
    chips: [
      { label: "Cat6/6A Solid Copper", highlight: true },
      { label: "500 MHz Frequency" },
      { label: "Armored Conduit Trunking" }
    ],
    telemetry: [
      { label: "Wire Standard", val: "Cat6A Shielded Pair" },
      { label: "Certification", val: "Fluke Tested Link-by-Link" },
      { label: "Rack Layout", val: "Modular Velcro Bundling" }
    ],
    guaranteeText: "100% Fluke Link Certified"
  },
  "remote-cctv": {
    categoryLabel: "CLOUD TELEMETRY",
    badgeType: "SECURE TUNNEL",
    chips: [
      { label: "Encrypted SSL/TLS DDNS", highlight: true },
      { label: "iOS & Android Native" },
      { label: "<50ms Low-Latency Stream" }
    ],
    telemetry: [
      { label: "Remote Access", val: "Encrypted VPN / DDNS" },
      { label: "Alerts", val: "Instant Push Motion Triggers" },
      { label: "Multi-User", val: "Role-Based Guard" }
    ],
    guaranteeText: "Zero Port Hijacking Shield"
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  services,
  onSelectService,
  onBackToHome,
  onTriggerQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "security" | "fiber" | "network">("all");

  const filteredServices = services.filter((s) => {
    const matchesSearch = 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === "all") return matchesSearch;
    if (selectedCategory === "security") {
      return matchesSearch && (s.id.includes("cctv") || s.id.includes("biometric") || s.id.includes("home"));
    }
    if (selectedCategory === "fiber") {
      return matchesSearch && s.id.includes("fiber");
    }
    if (selectedCategory === "network") {
      return matchesSearch && (s.id.includes("network") || s.id.includes("cabling") || s.id.includes("support"));
    }
    return matchesSearch;
  });

  const filterTabs = [
    { id: "all", label: "All Solutions", icon: Layers, count: services.length },
    { id: "security", label: "Surveillance & Access", icon: ShieldCheck, count: services.filter(s => s.id.includes("cctv") || s.id.includes("biometric")).length },
    { id: "fiber", label: "Fiber Optics (OTDR)", icon: Activity, count: services.filter(s => s.id.includes("fiber")).length },
    { id: "network", label: "Structured Networking", icon: Cpu, count: services.filter(s => s.id.includes("network") || s.id.includes("cabling")).length }
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 140, 
        damping: 18 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.96, 
      y: 12,
      transition: { duration: 0.18 } 
    }
  };

  return (
    <div className="pt-28 pb-28 bg-[#F8FAFC] min-h-screen text-slate-800 font-sans relative overflow-hidden">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(217,91,22,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(217,91,22,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Return Hook */}
        <div className="mb-8 text-left">
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-slate-700 hover:text-[#0284C7] uppercase transition-all duration-300 cursor-pointer bg-white border border-slate-200 hover:border-sky-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform stroke-[2.5] text-[#0284C7]" />
            <span>Return to Overview</span>
          </motion.button>
        </div>

        {/* Hero Header Section */}
        <div className="text-left mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-200/80">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/90 rounded-full px-4 py-1.5 text-[10px] text-[#0284C7] font-mono font-bold uppercase tracking-widest shadow-xs">
                <Sparkles size={12} className="text-[#0284C7] animate-pulse" />
                <span>CERTIFIED TELECOM & SURVEILLANCE INFRASTRUCTURE</span>
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]">
                Engineering Solutions & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-600">
                  Infrastructure Catalog
                </span>
              </h1>
              
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-normal pt-1">
                Precision optical fiber fusion splicing with Japanese Fujikura equipment, ultra 4K CCTV surveillance deployments, OTDR optical distance mapping, and certified Cat6 structural layouts.
              </p>
            </div>
            
            {/* Quick Metrics Badge */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-center gap-6 sm:gap-8 shadow-sm hover:shadow-md transition-shadow self-start lg:self-auto">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{services.length}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">Active Capabilities</span>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#0284C7] tracking-tight">≤0.02dB</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">Optic Loss Bound</span>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">100%</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">SLA Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-slate-200/90 p-3 rounded-2xl shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? "bg-[#0284C7] text-white shadow-md shadow-sky-500/20 scale-[1.02]" 
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100"
                  }`}
                >
                  <TabIcon size={14} className={isSelected ? "text-white" : "text-slate-500"} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-200/70 text-slate-600"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] md:max-w-xs">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search solutions or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dahua-Inspired Animated Professional Services Grid with Generous Breathing Space */}
        <AnimatePresence mode="popLayout">
          {filteredServices.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch"
            >
              {filteredServices.map((service, idx) => {
                const spec = serviceSpecs[service.id] || {
                  categoryLabel: "CERTIFIED SYSTEM",
                  badgeType: "ENTERPRISE",
                  chips: [{ label: "High-Integrity Build", highlight: true }],
                  telemetry: [],
                  guaranteeText: "Enterprise Certified"
                };

                // Directional scroll animation pattern for mobile and desktop (Left, Right, Top, Bottom)
                const animPattern = idx % 4;
                const getInitialDirection = () => {
                  if (animPattern === 0) return { x: -60, y: 0 }; // From Left
                  if (animPattern === 1) return { x: 60, y: 0 };  // From Right
                  if (animPattern === 2) return { y: -50, x: 0 }; // From Top
                  return { y: 50, x: 0 };                         // From Bottom
                };
                const initialDir = getInitialDirection();

                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, ...initialDir, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.12 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 110, 
                      damping: 16, 
                      mass: 0.8,
                      delay: (idx % 2) * 0.08
                    }}
                    whileHover={{ y: -8 }}
                    onClick={() => onSelectService(service)}
                    className="group relative bg-white border border-slate-200/90 hover:border-[#0284C7]/80 rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_28px_60px_rgba(2,132,199,0.12),0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer select-none"
                  >
                    {/* Top Dahua Accent Glow Bar */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-[#0284C7] group-hover:to-blue-600 transition-all duration-500 z-30" />

                    <div>
                      {/* Dahua-Style Media Header with Smooth Image Float & Laser Beam Sweep */}
                      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-950 border-b border-slate-100">
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-all duration-700 ease-out filter brightness-[0.93]"
                        />
                        
                        {/* Dahua Light Sweep Beam */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                        {/* Cinematic Ambient Scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-black/35 pointer-events-none z-10" />
                        
                        {/* Top Left: Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-md z-20">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                            {spec.categoryLabel}
                          </span>
                        </div>

                        {/* Top Right: Status Tag */}
                        <div className="absolute top-4 right-4 z-20">
                          {service.hot ? (
                            <span className="bg-[#0284C7] text-white px-2.5 py-1 rounded-full text-[9px] font-mono font-extrabold uppercase tracking-wide shadow-md flex items-center gap-1">
                              <Flame size={11} className="fill-white animate-bounce" />
                              <span>POPULAR</span>
                            </span>
                          ) : (
                            <span className="bg-black/60 backdrop-blur-md text-white/90 border border-white/20 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                              {spec.badgeType}
                            </span>
                          )}
                        </div>

                        {/* Title & Module Identity in Media Header */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 z-20">
                          <div>
                            <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-widest block mb-1">
                              ENGINEERING MODULE // 0{idx + 1}
                            </span>
                            <h3 className="font-['Open_Sans_Condensed'] font-bold text-2xl text-white tracking-wide uppercase leading-tight group-hover:text-sky-300 transition-colors drop-shadow-md">
                              {service.title}
                            </h3>
                          </div>
                          <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-[#0284C7] group-hover:scale-110 group-hover:border-transparent transition-all duration-300 shadow-md">
                            <LucideIcon name={service.iconName} size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Card Content Body with Generous Breathing Room */}
                      <div className="p-6 space-y-4 text-left">
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[40px] font-['Open_Sans']">
                          {service.description}
                        </p>

                        {/* Technical Telemetry Grid Table */}
                        {spec.telemetry && spec.telemetry.length > 0 && (
                          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3.5 space-y-2 font-mono text-[10px] group-hover:border-sky-200/80 transition-colors">
                            <div className="flex items-center justify-between text-[8.5px] font-bold text-slate-400 uppercase tracking-widest pb-1.5 border-b border-slate-200/80">
                              <span>Hardware Calibration</span>
                              <span className="text-emerald-600 font-bold flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                                VERIFIED
                              </span>
                            </div>
                            {spec.telemetry.map((t, tIdx) => (
                              <div key={tIdx} className="flex items-center justify-between text-[10.5px]">
                                <span className="text-slate-500 font-normal">{t.label}:</span>
                                <span className="font-bold text-slate-800 text-right truncate ml-2">{t.val}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Micro Feature Chips */}
                        {spec.chips && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {spec.chips.map((chip, cIdx) => (
                              <span 
                                key={cIdx} 
                                className={`text-[9.5px] font-mono px-2.5 py-1 rounded-lg border transition-all ${
                                  chip.highlight 
                                    ? "bg-sky-50 border-sky-200 text-[#0284C7] font-bold shadow-xs" 
                                    : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {chip.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Footer with Dahua-Style Interaction */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                        {/* Primary Explore Action Button */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); onSelectService(service); }}
                          className="group/btn flex-1 inline-flex items-center justify-center gap-2 bg-black hover:bg-[#0284C7] active:scale-98 text-white text-xs font-['Open_Sans'] font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <span>Explore Blueprint</span>
                          <ChevronRight size={14} className="stroke-[3] group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        {/* Instant Quote Button */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); onTriggerQuote(service.id); }}
                          className="inline-flex items-center justify-center p-3 rounded-xl border border-sky-200 bg-sky-50 text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95"
                          title="Instant Quote Simulator"
                        >
                          <Calculator size={15} />
                        </button>
                        
                        {/* WhatsApp Support Button */}
                        <a 
                          href={`https://wa.me/923064422550?text=${encodeURIComponent(`Hello Core Vision Pakistan, I would like to inquire about ${service.title}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center p-3 rounded-xl border border-emerald-200 bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-xs hover:scale-105 active:scale-95"
                          title="WhatsApp Inquiry"
                        >
                          <MessageCircle size={15} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white border border-slate-200 rounded-3xl max-w-xl mx-auto mt-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284C7] flex items-center justify-center mx-auto mb-4">
                <ShieldAlert size={22} />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-1.5">No matching services found</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed font-sans">
                No security hardware or structural parameters matched "{searchQuery}". Restructure your search query or reset filters.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-5 bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all tracking-wider cursor-pointer shadow-sm"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enterprise Compliance & Hardware Standards Strip */}
        <div className="mt-16 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-[#D95B16]" />
              <span className="block text-[10px] font-mono text-[#D95B16] uppercase tracking-widest font-black">
                ENTERPRISE OEM HARDWARE COMPLIANCE
              </span>
            </div>
            <h4 className="text-slate-900 font-bold text-sm sm:text-base">
              Configured exclusively with certified telecom, optical, and surveillance standards
            </h4>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500 font-mono font-bold tracking-widest">
            <span className="hover:text-emerald-600 transition-colors cursor-pointer">ZKTECO</span>
            <span>•</span>
            <span className="hover:text-red-600 transition-colors cursor-pointer">HIKVISION</span>
            <span>•</span>
            <span className="hover:text-[#D95B16] transition-colors cursor-pointer">DAHUA</span>
            <span>•</span>
            <span className="hover:text-amber-600 transition-colors cursor-pointer">IMOU</span>
            <span>•</span>
            <span className="hover:text-rose-600 transition-colors cursor-pointer">HUAWEI</span>
            <span>•</span>
            <span className="hover:text-cyan-600 transition-colors cursor-pointer">CISCO</span>
            <span>•</span>
            <span className="hover:text-sky-600 transition-colors cursor-pointer">VIVANCO</span>
            <span>•</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">CORNING</span>
          </div>
        </div>

      </div>
    </div>
  );
};

