import React, { useState, useEffect } from "react";
import logo from "./assets/images/coreguard_logo_1782336134989.jpg";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ExternalLink, 
  ArrowUp, 
  Sparkles, 
  CheckCircle, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Zap,
  Users,
  Coins,
  Award,
  Headphones,
  Camera,
  Layers,
  CheckCircle2,
  Lock,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  FileDown,
  Cable,
  Server
} from "lucide-react";

import { SERVICES as DEFAULT_SERVICES, BENEFITS as DEFAULT_BENEFITS, STATS as DEFAULT_STATS, FAQS as DEFAULT_FAQS } from "./data";
import { Service, Benefit, Stat, FAQItem } from "./types";
import { LucideIcon } from "./components/LucideIcon";
import { FloatingGeometrics } from "./components/FloatingGeometrics";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { QuoteDialog } from "./components/QuoteDialog";
import { NetworkBackground } from "./components/NetworkBackground";
import { ServiceDetailView } from "./components/ServiceDetailView";
import { ContactPage } from "./components/ContactPage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { WhyUsPage } from "./components/WhyUsPage";
import { Navbar } from "./components/Navbar";
import { CCTVCamera } from "./components/CCTVCamera";
import { SuccessNotification } from "./components/SuccessNotification";
import { CustomCursor } from "./components/CustomCursor";
import { SophiaChat } from "./components/SophiaChat";
import { HeroVideoBackground } from "./components/HeroVideoBackground";
import { EngineeringShowcase } from "./components/EngineeringShowcase";
import { PartnersShowcase } from "./components/PartnersShowcase";
import { ShowroomCard3D } from "./components/ShowroomCard3D";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Application Dynamic States (manageable from Backend)
  const [services, setServices] = useState<Service[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  
  // Manageable Contact Details
  const [contactInfo, setContactInfo] = useState({
    phone: "0306 4422550",
    email: "corevisionpk@gmail.com",
    address: "Flat #2, Ist Floor, Abdullah Plaza, Phase 4-A, Ghouri Town, Islamabad",
    latitude: "33.6186",
    longitude: "73.1368",
    whatsapp: "+92 306 4422550"
  });

  // Manageable Hero & About Config
  const [heroInfo, setHeroInfo] = useState({
    title1: "Powering Networks",
    title2: "Through",
    highlightText: "Security & Precision",
    tagline: "Professional HD CCTV, high-capacity fusion splicing, and robust structured cabling solutions designed to keep your business fully connected and absolutely secure.",
    cta1: "Get a Quote",
    cta2: "Explore Services"
  });

  const [aboutInfo, setAboutInfo] = useState({
    title: "Who We Are",
    tagline: "Secure. Connect. Protect.",
    headline: "Your Premier Infrastructure Systems Engineering Team",
    description1: "Core Vision Pakistan has emerged as a premier technology solution provider, introducing extreme attention-to-detail into hardware installations. We service commercial buildings, residential hubs, and industrial warehouses, laying fast optical fibers and smart networks.",
    description2: "Our engineering guidelines bypass general shortcuts, delivering certified calibrations, neat cabling, and lifetime peace of mind. Let us protect what matters to you with the highest standard in security systems."
  });

  // General App States
  const [currentRoute, setCurrentRoute] = useState<{ page: string; serviceId?: string }>({ page: "home" });
  const [pageLoading, setPageLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Interactive Modals
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<Service | null>(null);

  // Public Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [showGlobalSuccess, setShowGlobalSuccess] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // Load persistence database from localStorage on mount
  useEffect(() => {
    // Services
    const savedServices = localStorage.getItem("coreguard_services_db");
    if (savedServices) {
      try {
        const parsed = JSON.parse(savedServices) as Service[];
        const migrated = parsed.map(s => {
          const defaultService = DEFAULT_SERVICES.find(ds => ds.id === s.id);
          if (defaultService) {
            return { ...s, imageUrl: defaultService.imageUrl };
          }
          return s;
        });
        setServices(migrated);
        localStorage.setItem("coreguard_services_db", JSON.stringify(migrated));
      } catch (e) {
        setServices(DEFAULT_SERVICES);
      }
    } else {
      setServices(DEFAULT_SERVICES);
    }

    // Benefits
    const savedBenefits = localStorage.getItem("coreguard_benefits_db");
    if (savedBenefits) {
      try {
        setBenefits(JSON.parse(savedBenefits));
      } catch (e) {
        setBenefits(DEFAULT_BENEFITS);
      }
    } else {
      setBenefits(DEFAULT_BENEFITS);
    }

    // Stats
    const savedStats = localStorage.getItem("coreguard_stats_db");
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        setStats(DEFAULT_STATS);
      }
    } else {
      setStats(DEFAULT_STATS);
    }

    // FAQs
    const savedFaqs = localStorage.getItem("coreguard_faqs_db");
    if (savedFaqs) {
      try {
        setFaqs(JSON.parse(savedFaqs));
      } catch (e) {
        setFaqs(DEFAULT_FAQS);
      }
    } else {
      setFaqs(DEFAULT_FAQS);
    }

    // Contact info
    const savedContact = localStorage.getItem("coreguard_contact_db");
    if (savedContact) {
      try {
        const parsed = JSON.parse(savedContact);
        if (parsed.email === "support@coreguard.com" || parsed.phone?.includes("5826202") || parsed.address?.includes("I-8")) {
          const updated = {
            ...parsed,
            phone: "0306 4422550",
            email: "corevisionpk@gmail.com",
            address: "Flat #2, Ist Floor, Abdullah Plaza, Phase 4-A, Ghouri Town, Islamabad",
            latitude: "33.6186",
            longitude: "73.1368",
            whatsapp: "+92 306 4422550"
          };
          setContactInfo(updated);
          localStorage.setItem("coreguard_contact_db", JSON.stringify(updated));
        } else {
          setContactInfo(parsed);
        }
      } catch (e) {}
    }

    // Hero Customization
    const savedHero = localStorage.getItem("coreguard_hero_db");
    if (savedHero) {
      try {
        setHeroInfo(JSON.parse(savedHero));
      } catch (e) {}
    }

    // About Customization
    const savedAbout = localStorage.getItem("coreguard_about_db");
    if (savedAbout) {
      try {
        setAboutInfo(JSON.parse(savedAbout));
      } catch (e) {}
    }
  }, []);

  // Sync to database savers
  const saveServicesToStorage = (updated: Service[]) => {
    localStorage.setItem("coreguard_services_db", JSON.stringify(updated));
    setServices(updated);
  };

  const saveContactToStorage = (updated: typeof contactInfo) => {
    localStorage.setItem("coreguard_contact_db", JSON.stringify(updated));
    setContactInfo(updated);
  };

  const saveHeroToStorage = (updated: typeof heroInfo) => {
    localStorage.setItem("coreguard_hero_db", JSON.stringify(updated));
    setHeroInfo(updated);
  };

  const saveAboutToStorage = (updated: typeof aboutInfo) => {
    localStorage.setItem("coreguard_about_db", JSON.stringify(updated));
    setAboutInfo(updated);
  };

  const saveBenefitsToStorage = (updated: Benefit[]) => {
    localStorage.setItem("coreguard_benefits_db", JSON.stringify(updated));
    setBenefits(updated);
  };

  const saveStatsToStorage = (updated: Stat[]) => {
    localStorage.setItem("coreguard_stats_db", JSON.stringify(updated));
    setStats(updated);
  };



  // Core loading trigger mimics security sweep
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Sticky header and back-to-top thresholds
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced path and hash-based routing system
  const parseCurrentRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = window.location.search;
    
    if (path === "/contact" || path === "/contact/" || hash === "#/contact" || hash === "#contact") {
      return { page: "contact" };
    }
    if (path === "/services" || path === "/services/" || hash === "#/services" || hash === "#services") {
      return { page: "services" };
    }
    if (path === "/about" || path === "/about/" || hash === "#/about" || hash === "#about") {
      return { page: "about" };
    }
    if (path === "/why-us" || path === "/why-us/" || hash === "#/why-us" || hash === "#why-us") {
      return { page: "why-us" };
    }
    
    const servicePathMatch = path.match(/^\/service\/([^/]+)/);
    if (servicePathMatch) {
      return { page: "service", serviceId: servicePathMatch[1] };
    }
    
    const serviceHashMatch = hash.match(/^#\/service\/([^/]+)/);
    if (serviceHashMatch) {
      return { page: "service", serviceId: serviceHashMatch[1] };
    }
    
    const params = new URLSearchParams(search);
    const serviceId = params.get("service");
    if (serviceId) {
      return { page: "service", serviceId };
    }
    
    return { page: "home" };
  };

  const navigateTo = (route: { page: string; serviceId?: string }) => {
    let url = "/";
    if (route.page === "service" && route.serviceId) {
      url = `/service/${route.serviceId}`;
    } else if (route.page === "services") {
      url = "/services";
    } else if (route.page === "about") {
      url = "/about";
    } else if (route.page === "why-us") {
      url = "/why-us";
    } else if (route.page === "contact") {
      url = "/contact";
    }
    
    window.history.pushState(null, "", url);
    
    // Defer the popstate event to decouple it from current React render or event task queue
    setTimeout(() => {
      window.dispatchEvent(new Event("popstate"));
    }, 0);
  };

  useEffect(() => {
    const checkRoute = () => {
      const parsed = parseCurrentRoute();
      
      // Dynamic premium page loading transitions
      setPageLoading(true);
      setTimeout(() => {
        setCurrentRoute(parsed);
        setPageLoading(false);
        window.scrollTo(0, 0);
      }, 350);
    };

    checkRoute();

    window.addEventListener("popstate", checkRoute);
    window.addEventListener("hashchange", checkRoute);

    return () => {
      window.removeEventListener("popstate", checkRoute);
      window.removeEventListener("hashchange", checkRoute);
    };
  }, []);



  const triggerQuote = (serviceId?: string) => {
    window.dispatchEvent(new CustomEvent("open-sophia-chat", { detail: { serviceId } }));
  };

  const selectServiceDetail = (service: Service) => {
    navigateTo({ page: "service", serviceId: service.id });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      setShowGlobalSuccess(true);
      setContactForm({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => {
        setContactSuccess(false);
      }, 5000);
    }, 1200);
  };



  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FAFC] font-sans text-slate-800">
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-dashed border-orange-500 animate-[spin_40s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full border border-dotted border-orange-600 animate-[spin_60s_linear_infinite_reverse]" />
        </div>

        <div className="relative text-center max-w-sm px-6">
          <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full border border-slate-200 shadow-xl relative animate-bounce overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Core Vision Pakistan Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            CORE<span className="text-[#D95B16]">GUARD</span>
          </h2>
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#D95B16] font-bold mt-1.5">
            Secure . Connect . Protect
          </p>

          <div className="mt-8">
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-100">
              <div 
                className="h-full bg-[#D95B16] rounded-full transition-all duration-150"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2">
              <span className="text-[#D95B16] font-semibold animate-pulse">
                {loadingProgress < 40 ? "Checking Hardware Interfaces..." : 
                 loadingProgress < 80 ? "Verifying Telecom Trunking..." : 
                 "Workspace Initialized."}
              </span>
              <span>{Math.min(loadingProgress, 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-850 overflow-x-hidden selection:bg-orange-100 selection:text-slate-900 relative">
      <CustomCursor />
      
      {/* INTERACTIVE SOPHIA CHATBOT ASSISTANT */}
      <SophiaChat />

      {/* FLOAT BACK TO TOP */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 z-40 flex items-center justify-center h-10 w-10 rounded-full bg-white text-slate-700 hover:text-[#D95B16] border border-slate-200 shadow-md transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-5"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* BACKGROUND FLOATING PLEXUS LINES & PASTEL GEOMETRICS */}
      <NetworkBackground />
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-30">
        <FloatingGeometrics />
      </div>

      {/* NEW GLASSMORPHISM PREMIUM NAVBAR */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        contactPhone={contactInfo.phone}
        onTriggerQuote={(srvId) => triggerQuote(srvId)}
      />

      {/* CONDITIONAL MAIN CONTENT DISPLAY */}
      <AnimatePresence mode="wait">
        {currentRoute.page === "services" ? (
          <ServicesPage 
            key="services-page"
            services={services}
            onSelectService={(s) => selectServiceDetail(s)}
            onBackToHome={() => navigateTo({ page: "home" })}
            onTriggerQuote={(srvId) => triggerQuote(srvId)}
          />
        ) : currentRoute.page === "service" ? (
          (() => {
            const selectedService = services.find(s => s.id === currentRoute.serviceId);
            if (!selectedService) return <div className="pt-32 pb-24 text-center text-slate-500 font-mono text-sm">Service not found.</div>;
            return (
              <ServiceDetailView 
                key={`service-${currentRoute.serviceId}`}
                service={selectedService} 
                onBack={() => navigateTo({ page: "home" })} 
                onBook={(srvId) => triggerQuote(srvId)} 
              />
            );
          })()
        ) : currentRoute.page === "contact" ? (
          <ContactPage 
            key="contact-page"
            contactInfo={contactInfo} 
            onTriggerQuote={(srvId) => triggerQuote(srvId)} 
          />
        ) : currentRoute.page === "about" ? (
          <AboutPage key="about-page" />
        ) : currentRoute.page === "why-us" ? (
          <WhyUsPage key="why-us-page" />
        ) : (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white min-h-screen text-black font-['Open_Sans'] pt-16"
          >
            {/* INOVE HEADER IMAGE / AI VIDEO SHOWCASE (himage) */}
            <div className="inove-himage shadow-xs">
              <HeroVideoBackground />
            </div>

            {/* INOVE BLOCK 1: ABOUT / MANIFEST (.block.tri.about) */}
            <div className="inove-block inove-tri about text-left">
              {/* Column 1 */}
              <div className="inove-bbox font-['Open_Sans'] text-[13.5px] leading-relaxed text-black">
                <div className="whitespace-nowrap">We believe that we are here</div>
                <div className="whitespace-nowrap">to explore, learn and grow,</div>
                <div className="whitespace-nowrap mb-5">to push the boundaries towards better things.</div>
                <h2 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl font-light text-black uppercase tracking-tight whitespace-nowrap">
                  We are Core Vision Pakistan
                </h2>
              </div>

              {/* Column 2 */}
              <div className="inove-bbox font-['Open_Sans'] text-[13.5px] leading-relaxed text-black">
                <div className="whitespace-nowrap">Welcome in our world,</div>
                <h2 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl font-light text-black my-2.5 whitespace-nowrap">
                  we live in “precision”;
                </h2>
                <div className="whitespace-nowrap">we engineer and map out physical & optical</div>
                <div className="whitespace-nowrap">networks and their possibilities:</div>
                <div className="whitespace-nowrap">We study them, we secure them, we make them accessible to others.</div>
              </div>

              {/* Column 3: Follow us & Quick Channels */}
              <div className="inove-bbox followus text-left">
                <h3 className="font-['Open_Sans_Condensed'] text-2xl font-light text-black mb-4">
                  Direct Channels
                </h3>
                <div className="flex items-center gap-3">
                  <a 
                    href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 transition-all shadow-xs"
                    title="Direct WhatsApp Support"
                  >
                    <MessageSquare size={18} />
                  </a>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} 
                    className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0284C7] hover:bg-sky-50 text-[#0284C7] transition-all shadow-xs"
                    title="Priority Hotline"
                  >
                    <Phone size={18} />
                  </a>
                  <button 
                    onClick={() => triggerQuote()}
                    className="p-2.5 rounded-xl border border-slate-300 hover:border-[#0284C7] hover:bg-sky-50 text-[#0284C7] transition-all shadow-xs cursor-pointer"
                    title="Launch Quote Simulator"
                  >
                    <Sparkles size={18} />
                  </button>
                </div>

                {/* Micro-Metrics */}
                <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-500 space-y-1">
                  <div>SLA: <b className="text-emerald-600 font-bold">100% Guaranteed</b></div>
                  <div>LOSS BOUND: <b className="text-[#0284C7] font-bold">&le;0.02 dB</b></div>
                </div>
              </div>
            </div>

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="inove-hline" />

            {/* INOVE BLOCK 2: SHOWROOM GALLERY, CLIENTS & PROJECT TAGS (.block.tri.showroom) */}
            <div className="inove-block inove-tri showroom text-left">
              {/* Column 1: Showroom Gallery (Strictly User's 8 Services with 3D Side Swipe-In) */}
              <div className="inove-bbox inove-gallery">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl font-light text-black mb-8"
                >
                  Showroom Gallery
                </motion.h2>

                <div className="space-y-1">
                  {services.map((service, idx) => (
                    <ShowroomCard3D
                      key={service.id}
                      service={service}
                      index={idx}
                      onSelect={selectServiceDetail}
                    />
                  ))}
                </div>
              </div>

              {/* Column 2: Clients & Hardware Standards */}
              <div className="inove-bbox inove-clients">
                <h2 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl font-light text-black mb-8">
                  Hardware Standards
                </h2>

                <div className="world">
                  <div className="inove-topic">World OEM Hardware Partners</div>
                  <div className="grid grid-cols-2 gap-2.5 py-2 font-mono text-[11px] font-bold text-slate-700">
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-emerald-400 hover:text-emerald-600 transition-all rounded-lg">ZKTeco</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-red-400 hover:text-red-600 transition-all rounded-lg">HIKVISION</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-sky-400 hover:text-[#0284C7] transition-all rounded-lg">DAHUA</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-amber-400 hover:text-amber-600 transition-all rounded-lg">IMOU</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-rose-400 hover:text-rose-600 transition-all rounded-lg">HUAWEI</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-cyan-400 hover:text-cyan-600 transition-all rounded-lg">CISCO</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-sky-400 hover:text-sky-600 transition-all rounded-lg">VIVANCO</div>
                    <div className="p-2.5 border border-slate-200 bg-slate-50 text-center hover:border-indigo-400 hover:text-indigo-600 transition-all rounded-lg">CORNING</div>
                  </div>
                </div>

                <div className="local mt-6">
                  <div className="inove-topic">Local Site Infrastructure</div>
                  <div className="grid grid-cols-2 gap-3 py-2 font-mono text-xs font-bold text-slate-700">
                    <div className="p-3 border border-slate-200 bg-slate-50 text-center hover:border-sky-300 hover:text-[#0284C7] transition-all">Corporate HQs</div>
                    <div className="p-3 border border-slate-200 bg-slate-50 text-center hover:border-sky-300 hover:text-[#0284C7] transition-all">Commercial Hubs</div>
                    <div className="p-3 border border-slate-200 bg-slate-50 text-center hover:border-sky-300 hover:text-[#0284C7] transition-all">Datacenters</div>
                    <div className="p-3 border border-slate-200 bg-slate-50 text-center hover:border-sky-300 hover:text-[#0284C7] transition-all">Industrial Campuses</div>
                  </div>
                </div>
              </div>

              {/* Column 3: Project Tags */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inove-bbox inove-tags"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-['Open_Sans_Condensed'] text-3xl sm:text-4xl font-light text-black">
                    Project Tags
                  </h2>
                  <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    Live Taxonomy
                  </span>
                </div>

                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="inove-tag-list"
                >
                  {[
                    { text: "4K Surveillance", isLarge: true },
                    { text: "Fujikura Fusion", isLarge: false },
                    { text: "OTDR Diagnostics", isLarge: true },
                    { text: "Cat6A Solid Copper", isLarge: false },
                    { text: "Biometric AI", isLarge: true },
                    { text: "VLAN Isolation", isLarge: false },
                    { text: "Sub-Decibel Loss", isLarge: true },
                    { text: "Remote Cloud DDNS", isLarge: false },
                    { text: "Fluke Tested", isLarge: true },
                    { text: "RAID NVR Storage", isLarge: false },
                    { text: "Smart PTZ Tracking", isLarge: true },
                    { text: "Armored Conduit", isLarge: false },
                    { text: "H.265+ Compression", isLarge: true },
                    { text: "Patch Bay Modular", isLarge: false },
                    { text: "Zero Dead-Zones", isLarge: true }
                  ].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
                        show: { 
                          opacity: 1, 
                          x: 0, 
                          filter: "blur(0px)",
                          transition: { type: "spring", stiffness: 140, damping: 15 }
                        }
                      }}
                      whileHover={{ scale: 1.08, x: -3, transition: { duration: 0.15 } }}
                      className="inline-block cursor-pointer select-none"
                    >
                      {tag.isLarge ? (
                        <h4>{tag.text}</h4>
                      ) : (
                        <h5>{tag.text}</h5>
                      )}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Blueprint Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <button
                    onClick={() => triggerQuote()}
                    className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-['Open_Sans'] font-bold text-xs py-3.5 px-4 rounded-xl uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <Sparkles size={14} />
                    <span>Generate Instant Quote</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="inove-hline" />

            {/* OFFICIAL OEM PARTNERS & HARDWARE COMPLIANCE MARQUEE */}
            <PartnersShowcase />

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="inove-hline" />

            {/* CERTIFIED ENGINEERING SHOWCASE & DEPLOYMENT PROTOCOL */}
            <EngineeringShowcase 
              onTriggerQuote={(srvId) => triggerQuote(srvId)}
              onExploreServices={() => navigateTo({ page: "services" })}
            />

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="inove-hline" />

            {/* INOVE BLOCK 3: FOOTER (.block.footer) */}
            <div className="inove-block inove-footer text-center py-12 space-y-4">
              <a 
                className="font-['Open_Sans'] text-sm sm:text-base text-black hover:text-[#0284C7] font-medium tracking-wide transition-colors block"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email.replace("@", " @ ")}
              </a>
              <div className="w-12 h-12 mx-auto rounded-full overflow-hidden border border-slate-300 bg-white shadow-xs">
                <img src={logo} alt="Core Vision Pakistan" className="w-full h-full object-cover" />
              </div>
              <div className="font-['Open_Sans'] text-xs text-slate-400 font-bold tracking-widest uppercase">
                2026 &bull; Core Vision Pakistan &bull; Islamabad HQ
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAILED PREMIUM LIGHT ENTERPRISE FOOTER (For Subpages) */}
      {currentRoute.page !== "home" && (
        <footer className="bg-slate-100 text-slate-600 pt-16 pb-8 text-left relative border-t border-slate-200 z-10 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200 text-sm">
            
            {/* Column 1 info and desc */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full border border-slate-200 overflow-hidden bg-white shrink-0 shadow-sm">
                  <img
                    src={logo}
                    alt="Core Vision Pakistan Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-black text-lg text-slate-900 leading-none uppercase">
                  Core <span className="text-[#0284C7]">Vision</span> Pakistan
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed text-xs font-medium">
                A premium tech services provider specialized in corporate structured cabling trunkings, biometrics controls, smart optical fibers terminations, and high-definition CCTV security configurations.
              </p>
              <div className="flex gap-2.5 pt-2 text-[9px] font-mono uppercase tracking-wider font-bold">
                <span className="text-[#0284C7] hover:underline cursor-pointer">secure</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0284C7] hover:underline cursor-pointer">connect</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#0284C7] hover:underline cursor-pointer">protect</span>
              </div>
            </div>

            {/* Column 2 navigation links */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="font-sans font-extrabold text-[11px] uppercase tracking-widest text-slate-800 font-bold">Portal Index</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500 font-mono">
                <li><button onClick={() => navigateTo({ page: "home" })} className="hover:text-[#0284C7] text-left transition-colors cursor-pointer">Home landing</button></li>
                <li><button onClick={() => navigateTo({ page: "services" })} className="hover:text-[#0284C7] text-left transition-colors cursor-pointer">Solutions Catalog</button></li>
                <li><button onClick={() => navigateTo({ page: "about" })} className="hover:text-[#0284C7] text-left transition-colors cursor-pointer">About Engineering</button></li>
                <li><button onClick={() => navigateTo({ page: "why-us" })} className="hover:text-[#0284C7] text-left transition-colors cursor-pointer">Certified Promise</button></li>
                <li><button onClick={() => navigateTo({ page: "contact" })} className="hover:text-[#0284C7] text-left transition-colors cursor-pointer">Security Dispatch</button></li>
              </ul>
            </div>

            {/* Column 3 Quick request actions */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="font-sans font-extrabold text-[11px] uppercase tracking-widest text-slate-800 font-bold">Key Solutions</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-semibold font-mono">
                <li><button onClick={() => triggerQuote("cctv-install")} className="hover:text-[#0284C7] text-left cursor-pointer transition-colors">CCTV HD Deployments</button></li>
                <li><button onClick={() => triggerQuote("fiber-splicing")} className="hover:text-[#0284C7] text-left cursor-pointer transition-colors">Optical Fiber Splicing</button></li>
                <li><button onClick={() => triggerQuote("network-setup")} className="hover:text-[#0284C7] text-left cursor-pointer transition-colors">Enterprise Setup Routing</button></li>
                <li><button onClick={() => triggerQuote("biometric-system")} className="hover:text-[#0284C7] text-left cursor-pointer transition-colors">SSID & Biometric Loggers</button></li>
              </ul>
            </div>

            {/* Column 4 dispatch support info */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="font-sans font-extrabold text-[11px] uppercase tracking-widest text-slate-800 font-bold">Support Desk</h4>
              <p className="text-xs text-slate-500 leading-normal font-medium">
                Islamabad HQ Hub Block:<br />
                {contactInfo.address}
              </p>
              <div className="pt-2">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 hover:bg-sky-100 text-[#0284C7] py-2 px-3.5 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider hover:shadow-md transition-all cursor-pointer"
                >
                  <Phone size={10} /> Call Dispatch Priority
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium mt-8">
            <span>Copyright © 2026 Core Vision Pakistan Technology Services Company. All Rights Reserved.</span>
            <div className="flex gap-4 font-mono text-[9px] uppercase tracking-wider items-center">
              <span className="hover:text-[#0284C7] cursor-pointer">Terms</span>
              <span>•</span>
              <span className="hover:text-[#0284C7] cursor-pointer">Privacy Protocol</span>
            </div>
          </div>

        </div>
      </footer>
      )}
      {/* ESTIMATE QUOTE TRIGGER OVERLAY */}
      <QuoteDialog 
        isOpen={quoteDialogOpen}
        onClose={() => { setQuoteDialogOpen(false); setPreselectedService(undefined); }}
        preselectedServiceId={preselectedService}
        services={services}
        onSuccess={() => setShowGlobalSuccess(true)}
      />

      {/* DEDICATED THEMATIC SUCCESS NOTIFICATION */}
      <SuccessNotification 
        isOpen={showGlobalSuccess}
        onClose={() => setShowGlobalSuccess(false)}
      />

    </div>
  );
}
