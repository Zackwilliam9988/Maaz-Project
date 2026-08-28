import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Activity, Radio, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroVideoBackgroundProps {
  onExploreClick?: () => void;
}

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Real-time precision timestamp for AI CCTV HUD
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
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* High-definition AI Surveillance & Optical Infrastructure Video Loop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2560&q=100"
        className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] scale-102 transition-all duration-700"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-traffic-at-night-44855-large.mp4" type="video/mp4" />
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays for High-End Professionalism & Contrast */}
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* High-Tech Grid Matrix Scrim */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Moving Laser Scanner Line */}
      <motion.div 
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D95B16] to-transparent shadow-[0_0_15px_rgba(217,91,22,0.8)] pointer-events-none z-10"
      />

      {/* Top Left AI Surveillance Telemetry Overlay */}
      <div className="absolute top-4 left-4 sm:left-8 z-20 font-mono text-[9.5px] text-white/90 bg-black/60 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl shadow-lg flex flex-col gap-1 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold text-white tracking-wider uppercase">AI VISION GRID // NODE-01</span>
          <span className="bg-[#D95B16] text-white text-[8px] font-black px-1.5 py-0.2 rounded">4K UHD</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-300 text-[8.5px]">
          <span>REC: <b className="text-white">{currentTimeStr || "12:00:00.000"}</b></span>
          <span>FPS: <b className="text-emerald-400">60.0</b></span>
          <span>CODEC: <b className="text-white">H.265+</b></span>
        </div>
      </div>

      {/* Top Right Live Optical Link Telemetry */}
      <div className="hidden sm:flex absolute top-4 right-4 sm:right-8 z-20 font-mono text-[9.5px] text-white/90 bg-black/60 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl shadow-lg flex-col gap-1 pointer-events-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-white font-bold">
            <Activity size={12} className="text-[#D95B16]" />
            <span className="tracking-wider uppercase">OPTICAL TRUNK #08</span>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[8px] font-extrabold px-1.5 py-0.2 rounded">≤0.02dB LOSS</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-slate-300 text-[8.5px]">
          <span>THROUGHPUT: <b className="text-white">10.0 Gbps</b></span>
          <span>STATUS: <b className="text-emerald-400">OPTIMAL</b></span>
        </div>
      </div>

      {/* Center Cinematic Title Overlay inside the video frame */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-15 pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-black/50 backdrop-blur-md border border-white/15 px-6 py-3.5 rounded-2xl shadow-2xl max-w-lg"
        >
          <div className="inline-flex items-center gap-2 text-[#D95B16] font-mono text-[10px] font-extrabold uppercase tracking-widest mb-1">
            <Sparkles size={12} className="animate-spin" style={{ animationDuration: "8s" }} />
            <span>ENTERPRISE SURVEILLANCE & OPTICAL CORE</span>
          </div>
          <h2 className="font-['Open_Sans_Condensed'] text-2xl sm:text-4xl text-white font-light uppercase tracking-wider leading-tight">
            High Precision Digital Infrastructure
          </h2>
        </motion.div>
      </div>

      {/* Floating Target Tracking Reticle in ambient space */}
      <div className="hidden lg:block absolute bottom-12 left-10 z-15 pointer-events-none">
        <div className="border border-orange-500/50 bg-black/40 backdrop-blur-xs w-32 h-16 rounded p-1 flex flex-col justify-between">
          <div className="flex justify-between text-[7px] font-mono text-orange-400">
            <span>[FIBER OTDR TRACE]</span>
            <span className="text-emerald-400">100%</span>
          </div>
          <div className="text-[6.5px] font-mono text-slate-300">
            ATTENUATION: 0.018 dB/km
          </div>
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#D95B16]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#D95B16]" />
        </div>
      </div>

      {/* Bottom Video Play / Pause Control Pill */}
      <div className="absolute bottom-4 right-4 sm:right-8 z-20 pointer-events-auto">
        <button
          onClick={togglePlay}
          className="inline-flex items-center gap-2 bg-black/70 hover:bg-black text-white hover:text-[#D95B16] border border-white/20 px-3 py-1.5 rounded-full text-[9.5px] font-mono font-bold shadow-lg transition-all cursor-pointer backdrop-blur-md"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            <>
              <Pause size={10} className="text-[#D95B16]" />
              <span>LIVE FEED</span>
            </>
          ) : (
            <>
              <Play size={10} className="text-slate-400" />
              <span>PAUSED</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
