import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Video, Eye, ShieldCheck, Activity, Wifi, Radio } from "lucide-react";
import { motion } from "motion/react";

interface HeroVideoBackgroundProps {
  onExploreClick?: () => void;
}

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Live real-time timestamp for the AI surveillance HUD overlay
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      const millis = String(now.getMilliseconds()).padStart(3, "0");
      setCurrentTimeStr(`${timeString}.${millis}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* High-definition AI / Cyber Surveillance & Datacenter Loop Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2560&q=100"
        className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-[1.08] transition-all duration-700"
      >
        {/* High-reliability futuristic cyber network & surveillance video sources */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-traffic-at-night-44855-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blinking-lights-42587-large.mp4" type="video/mp4" />
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>

      {/* Layered high-contrast scrim overlays for supreme readability of dark/orange text */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1.5px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-slate-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,255,255,0.4),rgba(248,250,252,0.95))] pointer-events-none" />

      {/* Subtle high-tech grid matrix pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,91,22,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,91,22,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* AI Vision Scanner Line Animation traveling smoothly */}
      <motion.div 
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D95B16]/30 to-transparent shadow-[0_0_12px_rgba(217,91,22,0.3)] pointer-events-none z-10"
      />

      {/* Top Left AI Surveillance Telemetry Overlay HUD */}
      <div className="hidden lg:flex absolute top-28 left-8 z-10 flex-col gap-1.5 font-mono text-[9px] text-slate-500 bg-white/80 backdrop-blur-md border border-slate-200/80 px-3.5 py-2.5 rounded-2xl shadow-xs pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold text-slate-800 tracking-wider uppercase">AI VISION FEED: CAM-01</span>
          <span className="text-[#D95B16] font-bold">4K UHD</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-400">
          <span>TIME: <span className="text-slate-700 font-bold">{currentTimeStr || "12:00:00.000"}</span></span>
          <span>FPS: <span className="text-emerald-600 font-bold">60.0</span></span>
        </div>
        <div className="text-[8px] text-slate-400 pt-0.5 border-t border-slate-100 flex items-center justify-between">
          <span>ENCRYPTION: <b className="text-slate-700">AES-256 GCM</b></span>
          <span className="text-[#D95B16] font-bold">● ACTIVE</span>
        </div>
      </div>

      {/* Top Right Live Optical Link Telemetry HUD */}
      <div className="hidden lg:flex absolute top-28 right-8 z-10 flex-col gap-1.5 font-mono text-[9px] text-slate-500 bg-white/80 backdrop-blur-md border border-slate-200/80 px-3.5 py-2.5 rounded-2xl shadow-xs pointer-events-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-slate-800 font-bold">
            <Activity size={11} className="text-[#D95B16]" />
            <span className="tracking-wider uppercase">OPTICAL TRUNK #08</span>
          </div>
          <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[8px] font-extrabold px-1.5 py-0.2 rounded">≤0.02dB</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-400">
          <span>THROUGHPUT: <span className="text-slate-700 font-bold">10.0 Gbps</span></span>
          <span>PACKET LOSS: <span className="text-emerald-600 font-bold">0.000%</span></span>
        </div>
        <div className="text-[8px] text-slate-400 pt-0.5 border-t border-slate-100 flex items-center justify-between">
          <span>OTDR FAULT: <b className="text-emerald-600">NONE DETECTED</b></span>
          <span className="text-slate-500">1310/1550nm</span>
        </div>
      </div>

      {/* Floating Reticle Targeting Boxes in ambient space */}
      <div className="hidden xl:block absolute top-[45%] left-[12%] z-5 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <div className="relative border border-orange-400/40 w-28 h-20 rounded-lg p-1.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[7px] font-mono text-orange-600">
            <span>[FIBER CORE]</span>
            <span className="animate-pulse">99.8%</span>
          </div>
          <div className="text-[6.5px] font-mono text-slate-400">
            LATENCY: 0.4ms
          </div>
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#D95B16]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#D95B16]" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[52%] right-[14%] z-5 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <div className="relative border border-slate-300 w-32 h-24 rounded-lg p-1.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[7px] font-mono text-slate-600">
            <span>[AI DOME PTZ]</span>
            <span className="text-emerald-500 font-bold">ACTIVE</span>
          </div>
          <div className="text-[6.5px] font-mono text-slate-400">
            ZONE: ENTRANCE 01
          </div>
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-slate-400" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-r-2 border-slate-400" />
        </div>
      </div>

      {/* Bottom Video Play / Pause Control Pill */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
        <button
          onClick={togglePlay}
          className="inline-flex items-center gap-2 bg-white/85 hover:bg-white text-slate-700 hover:text-[#D95B16] border border-slate-200 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold shadow-xs hover:shadow-md transition-all cursor-pointer backdrop-blur-md"
          title={isPlaying ? "Pause Background Simulation" : "Play Background Simulation"}
        >
          {isPlaying ? (
            <>
              <Pause size={10} className="text-[#D95B16]" />
              <span>AI VIDEO: LIVE</span>
            </>
          ) : (
            <>
              <Play size={10} className="text-slate-500" />
              <span>AI VIDEO: PAUSED</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
