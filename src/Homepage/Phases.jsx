import React from "react";

// Advanced CSS Styles for continuous, fast, and color-shifting animations
const CustomAnimations = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes scanLine {
      0% { top: -10%; opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { top: 110%; opacity: 0; }
    }
    .animate-scan-line {
      /* Speed increased from 2.5s to 1.2s */
      animation: scanLine 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes floatSoft {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-4px) scale(1.03); }
    }
    .animate-float-soft {
      /* Speed increased from 3s to 1.5s */
      animation: floatSoft 1.5s infinite ease-in-out;
    }
    
    @keyframes pulseColor {
      0%, 100% { filter: hue-rotate(0deg) brightness(1); opacity: 0.9; }
      50% { filter: hue-rotate(15deg) brightness(1.15); opacity: 1; }
    }
    .animate-pulse-color {
      /* New continuous color shifting effect */
      animation: pulseColor 2s infinite alternate ease-in-out;
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-bg-gradient {
      /* Smoothly animates the main background gradient */
      background-size: 200% 200%;
      animation: gradientMove 6s ease infinite;
    }
  `}} />
);

const lifecycleStages = [
  {
    title: "PREVENT",
    color: "bg-emerald-500",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]",
    borderHover: "border-2 border-emerald-400/80",
    bgHover: "bg-emerald-50/60",
    ringHover: "ring-emerald-200",
    textHover: "text-emerald-600",
    badgeHover: "bg-emerald-100 text-emerald-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "DETECT",
    color: "bg-sky-500",
    glow: "shadow-[0_0_15px_rgba(14,165,233,0.5)]",
    borderHover: "border-2 border-sky-400/80",
    bgHover: "bg-sky-50/60",
    ringHover: "ring-sky-200",
    textHover: "text-sky-600",
    badgeHover: "bg-sky-100 text-sky-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M15 15L20 20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ANALYZE",
    color: "bg-violet-600",
    glow: "shadow-[0_0_15px_rgba(124,58,237,0.5)]",
    borderHover: "border-2 border-violet-400/80",
    bgHover: "bg-violet-50/60",
    ringHover: "ring-violet-200",
    textHover: "text-violet-600",
    badgeHover: "bg-violet-100 text-violet-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M12 3V21" strokeLinecap="round" />
        <path d="M5 8C7 5.5 9 5.5 12 8C15 5.5 17 5.5 19 8" strokeLinecap="round" />
        <path d="M5 16C7 18.5 9 18.5 12 16C15 18.5 17 18.5 19 16" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "RESPOND",
    color: "bg-orange-500",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.5)]",
    borderHover: "border-2 border-orange-400/80",
    bgHover: "bg-orange-50/60",
    ringHover: "ring-orange-200",
    textHover: "text-orange-600",
    badgeHover: "bg-orange-100 text-orange-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7V12L15 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "RECOVER",
    color: "bg-cyan-600",
    glow: "shadow-[0_0_15px_rgba(8,145,178,0.5)]",
    borderHover: "border-2 border-cyan-400/80",
    bgHover: "bg-cyan-50/60",
    ringHover: "ring-cyan-200",
    textHover: "text-cyan-600",
    badgeHover: "bg-cyan-100 text-cyan-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M7 18H18C20.2 18 22 16.2 22 14C22 11.9 20.4 10.2 18.4 10C18 6.7 15.4 4 12 4C9 4 6.5 6 5.7 8.8C3.6 9 2 10.7 2 12.8C2 15.1 3.9 18 7 18Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AUDIT",
    color: "bg-fuchsia-600",
    glow: "shadow-[0_0_15px_rgba(192,38,211,0.5)]",
    borderHover: "border-2 border-fuchsia-400/80",
    bgHover: "bg-fuchsia-50/60",
    ringHover: "ring-fuchsia-200",
    textHover: "text-fuchsia-600",
    badgeHover: "bg-fuchsia-100 text-fuchsia-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" />
        <path d="M9 8H15" strokeLinecap="round" />
        <path d="M9 12H15" strokeLinecap="round" />
        <path d="M9 16H13" strokeLinecap="round" />
      </svg>
    ),
  },
];
const phaseFeatures = {
  pc: [
    "BLE Detection",
    "RSSI Signal Strength",
    "Unknown Device Detection",
    "Faculty Verification",
  ],
  mobile: [
    "Face Verification",
    "Liveness Detection",
    "AI Object Detection",
    "App Security",
    "Device Integrity",
  ],
};

const Arrow = () => (
  <svg viewBox="0 0 32 16" fill="none" className="h-4 w-6 text-slate-300/80 transition-colors duration-300 xl:w-8">
    <path d="M1 8H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 3L25 8L20 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ purple = false }) => (
  <span
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
      purple ? "bg-violet-100 text-violet-600 group-hover:bg-violet-200" : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    }`}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
      <path d="M5 12L10 17L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const SecurityLifecycle = () => {
  return (
    <section className="relative overflow-hidden border-t border-blue-100/40 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 animate-bg-gradient">
      {/* Decorative Orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-400/10 blur-[80px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:py-20 xl:max-w-[1420px]">
        
        {/* Left Section */}
        <div className="shrink-0 lg:w-[25%] xl:w-[22%]">
          <p className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
            Our Security Lifecycle
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Multiple layers working together. One primary goal — <span className="font-semibold text-slate-800">Absolute Trust.</span>
          </p>
        </div>

        {/* Right Section (Workflow) */}
        <div className="w-full lg:w-[75%] xl:w-[78%]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-0">
            
            {lifecycleStages.map((stage, index) => (
              <div key={stage.title} className="flex flex-col lg:flex-row lg:items-center">
                
                {/* Workflow Box */}
                <div className={`group relative flex w-full cursor-default flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:w-[110px] xl:w-[130px] ${stage.borderHover} ${stage.bgHover}`}>
                  
                  {/* Highlight Number Badge */}
                  <div className={`absolute left-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-500 shadow-sm transition-colors duration-300 ${stage.badgeHover}`}>
                    {index + 1}
                  </div>

                  {/* Icon with Color Pulse & Float Animation */}
                  <div className={`animate-pulse-color mt-3 flex h-12 w-12 items-center justify-center rounded-full text-white ring-4 ring-white transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 ${stage.color} ${stage.glow} ${stage.ringHover}`}>
                    <div className="animate-float-soft">
                      {stage.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <span className={`mt-4 text-center text-[10px] font-bold tracking-wide text-slate-700 transition-colors duration-300 sm:text-xs ${stage.textHover}`}>
                    {stage.title}
                  </span>
                </div>

                {/* Arrow */}
                {index < lifecycleStages.length - 1 && (
                  <div className="mx-2 hidden lg:block xl:mx-3">
                    <Arrow />
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

const TwoPhaseSystem = () => {
  return (
    <section id="security" className="relative overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 animate-bg-gradient">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 xl:max-w-[1420px]">
        
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-200/60 bg-blue-100/50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Two-Phase System
          </span>
          <h2 className="mt-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Flexible. Secure. Comprehensive.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            From exam halls to mobile devices, ETECH adapts to your needs with a two-phase security ecosystem designed to prevent any malpractices.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          
          {/* ================= PC PHASE ================= */}
          <article className="group relative overflow-hidden rounded-[24px] border border-blue-200/50 bg-white/60 p-6 shadow-[0_8px_30px_rgba(37,99,235,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300/80 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 transition-all duration-300 group-hover:from-blue-50/50 group-hover:to-transparent" />
            
            <div className="relative">
              <span className="inline-flex rounded-full bg-blue-100/80 px-3.5 py-1 text-[10px] font-bold tracking-wide text-blue-700 ring-1 ring-blue-200/50 transition-colors duration-300 group-hover:bg-blue-100 group-hover:ring-blue-300/50">
                PHASE 1
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">PC-Based CBT</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Examination in a strictly controlled environment with deep BLE room scanning and physical verification.
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                
                {/* PC Visual with FASTER Continuous Scanner Animation */}
                <div className="flex h-48 items-center justify-center rounded-2xl border border-blue-100/60 bg-gradient-to-br from-slate-50 to-blue-50/50 transition-colors duration-300 group-hover:border-blue-200/60">
                  <div className="animate-pulse-color text-center">
                    <div className="relative mx-auto flex h-16 w-24 overflow-hidden items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow duration-300 group-hover:shadow-md">
                      
                      {/* Live Laser Scanner Line (Fast) */}
                      <div className="absolute inset-x-0 h-[2px] w-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] animate-scan-line" />
                      
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="relative z-10 h-10 w-10 text-blue-500">
                        <rect x="3" y="4" width="18" height="12" rx="2" />
                        <path d="M8 20H16" />
                        <path d="M12 16V20" />
                      </svg>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-slate-500 transition-colors duration-300 group-hover:text-blue-600">Secure Exam Hall</p>
                  </div>
                </div>

                {/* Features (Staggered slide on hover) */}
                <div className="flex flex-col gap-3.5">
                  {phaseFeatures.pc.map((feature, i) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:translate-x-1.5"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-xl bg-white/80 px-5 py-3.5 shadow-sm ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-blue-50/80 group-hover:ring-blue-100/50">
                <span className="text-sm font-bold text-slate-700 transition-colors duration-300 group-hover:text-blue-900">PC as Exam Device</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1 group-hover:shadow-md">
                  →
                </span>
              </div>
            </div>
          </article>

          {/* ================= MOBILE PHASE ================= */}
          <article id="institutions" className="group relative overflow-hidden rounded-[24px] border border-violet-200/50 bg-white/60 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300/80 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-50/0 to-violet-50/0 transition-all duration-300 group-hover:from-violet-50/50 group-hover:to-transparent" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-violet-100/80 px-3.5 py-1 text-[10px] font-bold tracking-wide text-violet-700 ring-1 ring-violet-200/50 transition-colors duration-300 group-hover:bg-violet-100 group-hover:ring-violet-300/50">
                PHASE 2
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Mobile-Based CBT</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Students securely use their own registered smartphones powered by military-grade app integrity checks.
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                
                {/* Mobile Visual with Color Pulse */}
                <div className="flex h-48 items-center justify-center rounded-2xl border border-violet-100/60 bg-gradient-to-br from-slate-50 to-violet-50/50 transition-colors duration-300 group-hover:border-violet-200/60">
                  <div className="animate-pulse-color text-center">
                    <div className="relative mx-auto flex h-24 w-12 overflow-hidden items-center justify-center rounded-[16px] border-[3px] border-slate-800 bg-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      
                      {/* Live Screen Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-violet-500 opacity-80 transition-all duration-300 group-hover:scale-110" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-90 transition-transform duration-300 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-5 w-5">
                          <path d="M7 3H5C3.89543 3 3 3.89543 3 5V7" strokeLinecap="round" />
                          <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" strokeLinecap="round" />
                          <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" strokeLinecap="round" />
                          <path d="M17 21H19C20.1046 21 21 20.1046 21 19V17" strokeLinecap="round" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-slate-500 transition-colors duration-300 group-hover:text-violet-600">Secure Mobile Exam</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3.5">
                  {phaseFeatures.mobile.map((feature, i) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:translate-x-1.5"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <CheckIcon purple />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-xl bg-white/80 px-5 py-3.5 shadow-sm ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-violet-50/80 group-hover:ring-violet-100/50">
                <span className="text-sm font-bold text-slate-700 transition-colors duration-300 group-hover:text-violet-900">Mobile as Exam Device</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:translate-x-1 group-hover:shadow-md">
                  →
                </span>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
};

const Phases = () => {
  return (
    <>
      <CustomAnimations />
      <SecurityLifecycle />
    </>
  );
};

export default Phases;


