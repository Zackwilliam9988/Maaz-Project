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
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesPageProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onBackToHome: () => void;
  onTriggerQuote: (serviceId?: string) => void;
}

// Domain-specific engineering telemetry specs for each service
const serviceTelemetry: Record<string, { label: string; val: string }[]> = {
  "cctv-install": [
    { label: "Stream Quality", val: "4K UHD IP Matrix" },
    { label: "Night Vision", val: "100m Smart IR Array" },
    { label: "Storage Mode", val: "RAID Local / Cloud NVR" }
  ],
  "fiber-splicing": [
    { label: "Core Splicer", val: "Fujikura Core Thermal" },
    { label: "Splice Loss", val: "<0.02 dB Decibel Limit" },
    { label: "Standard", val: "ITU-T G.652 Single-Mode" }
  ],
  "network-setup": [
    { label: "Backbone", val: "10 Gbps High Throughput" },
    { label: "Coverage", val: "Smart Wi-Fi 6 AP Matrix" },
    { label: "Security", val: "VLAN & Edge Firewalls" }
  ],
  "cctv-repair": [
    { label: "SLA Response", val: "<60 Mins Priority Dispatch" },
    { label: "Components", val: "OEM Brand Certified" },
    { label: "Diagnostics", val: "RF & Voltage Calibration" }
  ],
  "fiber-testing": [
    { label: "Scan Mode", val: "Dual 1310/1550nm OTDR" },
    { label: "Precision", val: "±1 cm Fault Pinpointing" },
    { label: "Range", val: "120 km Max Sweep Loop" }
  ],
  "biometric-system": [
    { label: "Sensor Engine", val: "AI Facial & Fingerprint" },
    { label: "Read Speed", val: "<0.2s Instant Access" },
    { label: "Locking", val: "Magnetic Relay Controls" }
  ],
  "structured-cabling": [
    { label: "Cable Spec", val: "Cat6 / Cat6A Shielded" },
    { label: "Frequency", val: "500 MHz Solid Copper" },
    { label: "Protection", val: "Fire-Resistant Conduit" }
  ],
  "remote-cctv": [
    { label: "Encryption", val: "SSL/TLS DDNS Tunnels" },
    { label: "Platform", val: "Native iOS / Android" },
    { label: "Latency", val: "<50ms Real-Time Feeds" }
  ]
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
    { id: "all", label: "All Solutions", icon: Layers },
    { id: "security", label: "Surveillance & Access", icon: ShieldCheck },
    { id: "fiber", label: "Fiber Optics (OTDR)", icon: Activity },
    { id: "network", label: "Structured Networking", icon: Cpu }
  ] as const;

  return (
    <div className="pt-28 pb-28 bg-[#F8FAFC] min-h-screen text-slate-800 font-sans relative overflow-hidden">
      
      {/* Decorative ambient engineering grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(217,91,22,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Navigation Bar */}
        <div className="mb-8 text-left">
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-slate-700 hover:text-[#D95B16] uppercase transition-all duration-300 cursor-pointer bg-white border border-slate-200 hover:border-orange-300 px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform stroke-[2.5] text-[#D95B16]" />
            <span>Back to Home</span>
          </motion.button>
        </div>

        {/* Hero Section */}
        <div className="text-left mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-200/80">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/80 rounded-full px-4 py-1.5 text-[10px] text-[#D95B16] font-mono font-bold uppercase tracking-widest">
                <Sparkles size={12} className="text-[#D95B16]" />
                <span>ENTERPRISE ENGINEERING & SURVEILLANCE SOLUTIONS</span>
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]">
                Certified Security & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D95B16] via-orange-600 to-amber-600">
                  Infrastructure Catalog
                </span>
              </h1>
              
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-normal pt-1">
                Precision 4K CCTV setups, Japanese Fujikura optical fiber fusion splicing, OTDR laser testing, and clean structured Cat6 network architecture across Islamabad and Rawalpindi.
              </p>
            </div>
            
            {/* Quick Metrics Badge */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-center gap-6 sm:gap-8 shadow-sm self-start lg:self-auto">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{services.length}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">Active Services</span>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-[#D95B16] tracking-tight">0.02dB</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">Optic Loss Limit</span>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">100%</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-1 block">Field Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-slate-200/90 p-3 rounded-2xl shadow-sm">
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
                      ? "bg-[#D95B16] text-white shadow-md shadow-orange-500/20" 
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100"
                  }`}
                >
                  <TabIcon size={14} className={isSelected ? "text-white" : "text-slate-500"} />
                  <span>{tab.label}</span>
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
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#D95B16] focus:bg-white rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all font-medium"
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

        {/* Services Grid */}
        <AnimatePresence mode="popLayout">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 items-stretch">
              {filteredServices.map((service) => {
                const telemetry = serviceTelemetry[service.id] || [];
                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    onClick={() => onSelectService(service)}
                    className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                  >
                    <div>
                      {/* Image Frame with Aspect Ratio and Floating Badges */}
                      <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                        
                        {/* Top Category Tag */}
                        <span className="absolute top-3 left-3 text-[9px] font-mono font-black text-slate-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                          {service.id.includes("fiber") ? "OTDR FIBER" : service.id.includes("cctv") ? "SURVEILLANCE" : service.id.includes("biometric") ? "ACCESS CONTROL" : "NETWORKING"}
                        </span>
                        
                        {service.hot && (
                          <span className="absolute top-3 right-3 text-[9px] font-bold text-white bg-gradient-to-r from-[#D95B16] to-[#EA580C] px-3 py-1 rounded-full uppercase tracking-wide shadow-md flex items-center gap-1">
                            <Sparkles size={10} /> HIGH DEMAND
                          </span>
                        )}

                        {/* Title overlay on bottom of image for sleek presentation */}
                        <div className="absolute bottom-3 left-4 right-4 text-left">
                          <h3 className="font-display font-bold text-lg text-white tracking-tight leading-snug drop-shadow-md group-hover:text-orange-200 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 text-left space-y-4">
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 min-h-[54px] font-normal">
                          {service.description}
                        </p>

                        {/* Telemetry Micro-Pills */}
                        {telemetry.length > 0 && (
                          <div className="space-y-1.5 pt-1 border-t border-slate-100">
                            {telemetry.map((t, idx) => (
                              <div key={idx} className="flex items-center justify-between text-[10.5px] font-mono">
                                <span className="text-slate-400">{t.label}:</span>
                                <span className="font-bold text-slate-750 text-slate-800">{t.val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); onSelectService(service); }}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-[#D95B16] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          <span>Explore Specs</span>
                          <ChevronRight size={13} className="stroke-[2.5]" />
                        </button>
                        
                        <a 
                          href={`https://wa.me/923064422550?text=${encodeURIComponent(`Hello CoreVision, I would like to inquire about ${service.title}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-sm"
                          title="Instant WhatsApp Quote"
                        >
                          <MessageCircle size={16} />
                        </a>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl max-w-xl mx-auto mt-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#D95B16] flex items-center justify-center mx-auto mb-4">
                <ShieldAlert size={22} />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-1.5">No matching services found</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                No solutions matched "{searchQuery}". Try selecting another category or clear the search query.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-5 bg-[#D95B16] hover:bg-[#C2410C] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all tracking-wider cursor-pointer shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Compliance Certification Strip */}
        <div className="mt-16 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div>
            <span className="block text-[10px] font-mono text-[#D95B16] uppercase tracking-widest font-black">
              ENTERPRISE OEM HARDWARE COMPLIANCE
            </span>
            <h4 className="text-slate-900 font-bold text-sm sm:text-base mt-1">
              Configured exclusively with certified telecom and surveillance standards
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono font-bold tracking-widest">
            <span className="hover:text-[#D95B16] transition-colors">HIKVISION</span>
            <span>•</span>
            <span className="hover:text-[#D95B16] transition-colors">DAHUA</span>
            <span>•</span>
            <span className="hover:text-[#D95B16] transition-colors">FUJIKURA</span>
            <span>•</span>
            <span className="hover:text-[#D95B16] transition-colors">UBIQUITI</span>
            <span>•</span>
            <span className="hover:text-[#D95B16] transition-colors">CISCO</span>
          </div>
        </div>

      </div>
    </div>
  );
};
