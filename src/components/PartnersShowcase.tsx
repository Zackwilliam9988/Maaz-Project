import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

export interface PartnerBrand {
  id: string;
  name: string;
  category: string;
  tagline: string;
  accentColor: string;
  svgIcon: React.ReactNode;
}

export const PARTNERS_DATA: PartnerBrand[] = [
  {
    id: "zkteco",
    name: "ZKTeco",
    category: "Biometric & Access AI",
    tagline: "Facial Recognition & Relays",
    accentColor: "#10B981",
    svgIcon: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" letterSpacing="1.5">ZKT<tspan fill="#10B981">eco</tspan></text>
      </svg>
    )
  },
  {
    id: "hikvision",
    name: "HIKVISION",
    category: "4K AI Surveillance",
    tagline: "ColorVu & AcuSense Ultra NVR",
    accentColor: "#EF4444",
    svgIcon: (
      <svg viewBox="0 0 160 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" letterSpacing="2">HIK<tspan fill="#EF4444">VISION</tspan></text>
      </svg>
    )
  },
  {
    id: "dahua",
    name: "DAHUA",
    category: "Smart IoT & Video Core",
    tagline: "WizSense & Thermal Optics",
    accentColor: "#E51C24",
    svgIcon: (
      <div className="flex items-center h-7">
        <img 
          src="https://www.dahuasecurity.com/logo.png" 
          alt="Dahua Technology Logo" 
          className="h-6 w-auto object-contain max-w-[110px]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback SVG if image is blocked
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        <svg viewBox="0 0 130 36" fill="currentColor" className="h-6 w-auto hidden items-center">
          <circle cx="10" cy="18" r="8" fill="#E51C24" />
          <path d="M10 10 A 8 8 0 0 1 18 18 L 14 18 A 4 4 0 0 0 10 14 Z" fill="#FFFFFF" />
          <text x="24" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5">
            <tspan fill="#E51C24">d</tspan>ahua
          </text>
        </svg>
      </div>
    )
  },
  {
    id: "imou",
    name: "IMOU",
    category: "Cloud Edge Surveillance",
    tagline: "Smart IoT & Wireless PTZ",
    accentColor: "#F59E0B",
    svgIcon: (
      <svg viewBox="0 0 110 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" letterSpacing="2"><tspan fill="#F59E0B">Im</tspan>ou</text>
      </svg>
    )
  },
  {
    id: "huawei",
    name: "HUAWEI",
    category: "Telecom & Optical Core",
    tagline: "OptiX Optical & AirEngine APs",
    accentColor: "#CE1126",
    svgIcon: (
      <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="23" letterSpacing="2">HUA<tspan fill="#CE1126">WEI</tspan></text>
      </svg>
    )
  },
  {
    id: "cisco",
    name: "CISCO",
    category: "Enterprise Switching",
    tagline: "Catalyst Switches & Meraki",
    accentColor: "#049FD9",
    svgIcon: (
      <svg viewBox="0 0 130 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" letterSpacing="3">CIS<tspan fill="#049FD9">CO</tspan></text>
      </svg>
    )
  },
  {
    id: "vivanco",
    name: "VIVANCO",
    category: "Structured Cabling",
    tagline: "German Cat6A & Modular Racks",
    accentColor: "#0284C7",
    svgIcon: (
      <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="3">VIVAN<tspan fill="#0284C7">CO</tspan></text>
      </svg>
    )
  },
  {
    id: "corning",
    name: "CORNING",
    category: "Optical Fiber Systems",
    tagline: "Single-Mode OS2 & OM4 Core",
    accentColor: "#6366F1",
    svgIcon: (
      <svg viewBox="0 0 150 36" fill="currentColor" className="h-7 w-auto">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="23" letterSpacing="2">CORN<tspan fill="#6366F1">ING</tspan></text>
      </svg>
    )
  }
];

export const PartnersShowcase: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`py-12 bg-slate-50 border-y border-slate-200 ${className}`}>
      <div className="w-[85%] max-w-[1500px] mx-auto text-left">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#0284C7] font-mono text-[10px] font-bold uppercase tracking-widest mb-1">
              <Award size={13} />
              <span>OFFICIAL OEM HARDWARE PARTNERS</span>
            </div>
            <h3 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl text-black font-light uppercase tracking-wide">
              Certified Technology & Hardware Standards
            </h3>
          </div>
          <span className="text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
            100% Genuine Direct Deployment
          </span>
        </div>

        {/* 8 Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-8">
          {PARTNERS_DATA.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 hover:border-[#0284C7] rounded-2xl p-4 flex flex-col justify-between text-left hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all duration-300 group cursor-default select-none"
            >
              {/* Logo Area */}
              <div className="text-slate-900 group-hover:text-black transition-colors flex items-center justify-start h-8">
                {partner.svgIcon}
              </div>

              {/* Info Details */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-0.5">
                <span className="block font-['Open_Sans'] font-bold text-[11px] text-black group-hover:text-[#0284C7] transition-colors uppercase tracking-wider truncate">
                  {partner.name}
                </span>
                <span className="block font-mono text-[8.5px] text-slate-500 font-medium leading-tight truncate">
                  {partner.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
