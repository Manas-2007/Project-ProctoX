const Hero = () => {
  const features = [
    {
      title: "AI-Powered",
      subtitle: "Detection",
    },
    {
      title: "Multi-Signal",
      subtitle: "Analysis",
    },
    {
      title: "Human",
      subtitle: "Verification",
    },
    {
      title: "Privacy",
      subtitle: "First",
    },
  ];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main blue glow */}
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[110px]" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-15%] right-[-8%] h-[420px] w-[420px] rounded-full bg-cyan-200/25 blur-[110px]" />

        {/* Center glow */}
        <div className="absolute left-[48%] top-[30%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-100/20 blur-[100px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes heroReveal {
            0% {
              opacity: 0;
              transform: translateY(35px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroRevealScale {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.92);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes heroFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-14px) rotate(0.15deg);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.25;
              transform: scale(0.94);
            }

            50% {
              opacity: 0.5;
              transform: scale(1.07);
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-140%);
              opacity: 0;
            }

            20% {
              opacity: 0.2;
            }

            55% {
              transform: translateX(160%);
              opacity: 0;
            }

            100% {
              transform: translateX(160%);
              opacity: 0;
            }
          }

          @keyframes badgeFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-4px);
            }
          }

          .hero-reveal {
            opacity: 0;
            animation: heroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .hero-delay-1 {
            animation-delay: 0.1s;
          }

          .hero-delay-2 {
            animation-delay: 0.22s;
          }

          .hero-delay-3 {
            animation-delay: 0.36s;
          }

          .hero-delay-4 {
            animation-delay: 0.5s;
          }

          .hero-delay-5 {
            animation-delay: 0.64s;
          }

          .hero-image {
            opacity: 0;
            animation:
              heroRevealScale 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards,
              heroFloat 5.2s ease-in-out 1.45s infinite;
          }

          .hero-glow {
            animation: glowPulse 5s ease-in-out infinite;
          }

          .hero-shine {
            animation: shine 6s ease-in-out 2s infinite;
          }

          .hero-badge {
            animation: badgeFloat 4.5s ease-in-out infinite;
          }

          .feature-card {
            animation: cardFloat 4s ease-in-out infinite;
          }

          .feature-card:nth-child(2) {
            animation-delay: 0.35s;
          }

          .feature-card:nth-child(3) {
            animation-delay: 0.7s;
          }

          .feature-card:nth-child(4) {
            animation-delay: 1.05s;
          }

          @media (max-width: 1023px) {
            .hero-image {
              animation:
                heroRevealScale 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards,
                heroFloat 4.5s ease-in-out 1.35s infinite;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-reveal,
            .hero-image,
            .hero-glow,
            .hero-shine,
            .hero-badge,
            .feature-card {
              opacity: 1;
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-4 pt-24 sm:px-8 sm:pb-8 lg:grid-cols-2 lg:gap-4 lg:px-10 lg:pb-14 lg:pt-28 xl:max-w-[1420px] xl:gap-0">

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="relative z-10 order-1 max-w-2xl">

          {/* Eyebrow */}
          <div className="hero-reveal hero-delay-1 mb-5 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-600 sm:text-xs">
            <span>Secure</span>
            <span className="text-blue-400">•</span>
            <span>Intelligent</span>
            <span className="text-blue-400">•</span>
            <span>Resilient</span>
          </div>

          {/* Heading */}
          <h1 className="hero-reveal hero-delay-2 max-w-3xl text-[2.2rem] font-bold leading-[1.1] tracking-[-0.01em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[2.8rem] xl:text-[3.9rem]">
            Resilient &amp; Trustworthy

            <span className="mt-1 block bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Online Assessment
            </span>
          </h1>

          {/* Description */}
          <p className="hero-reveal hero-delay-3 mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
            Secure digital examinations through intelligent monitoring,
            device security, AI-assisted detection, and resilient incident
            handling.
          </p>

          {/* CTA */}
          <div className="hero-reveal hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">

            {/* Primary CTA */}
            <a
              href="#security"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_18px_38px_rgba(37,99,235,0.28)]"
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/20 hero-shine" />

              <span className="relative">
                Explore Platform
              </span>

              <span className="relative text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#security"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[10px] text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                ▶
              </span>

              View Security Architecture
            </a>
          </div>

         {/* Feature Cards */}
<div className="hero-reveal hero-delay-5 mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
  {[
    {
      title: "AI-Powered",
      subtitle: "Detection",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5"
        >
          <path d="M9 3H7.5A3.5 3.5 0 0 0 4 6.5V9" />
          <path d="M15 3h1.5A3.5 3.5 0 0 1 20 6.5V9" />
          <path d="M9 21H7.5A3.5 3.5 0 0 1 4 17.5V15" />
          <path d="M15 21h1.5a3.5 3.5 0 0 0 3.5-3.5V15" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5V9" />
          <path d="M12 15V19" />
          <path d="M5 12H9" />
          <path d="M15 12H19" />
        </svg>
      ),
    },
    {
      title: "Multi-Signal",
      subtitle: "Analysis",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5"
        >
          <circle cx="8" cy="8" r="2.5" />
          <circle cx="16" cy="8" r="2.5" />
          <circle cx="8" cy="16" r="2.5" />
          <circle cx="16" cy="16" r="2.5" />
          <path d="M10 8h4" />
          <path d="M8 10v4" />
          <path d="M16 10v4" />
          <path d="M10 16h4" />
        </svg>
      ),
    },
    {
      title: "Human",
      subtitle: "Verification",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20C5.8 16.3 8.1 14.5 12 14.5C15.9 14.5 18.2 16.3 19 20" />
          <path d="M16.5 5.5L18 7L21 4" />
        </svg>
      ),
    },
    {
      title: "Privacy",
      subtitle: "First",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5"
        >
          <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      ),
    },
  ].map((feature) => (
    <div
      key={feature.title}
      className="feature-card flex items-center gap-3 rounded-xl border border-blue-100 bg-white/90 px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {feature.icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-xs font-semibold text-slate-700">
          {feature.title}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-500">
          {feature.subtitle}
        </p>
      </div>
    </div>
  ))}
</div>

          {/* Small trust line */}
          <div className="hero-reveal hero-delay-5 mt-6 flex items-center gap-2 text-[10px] font-medium text-slate-400 sm:text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </span>

            Designed for secure, fair and resilient assessments
          </div>
        </div>

        {/* ===================================================
            RIGHT VISUAL
        ==================================================== */}

        <div className="order-2 flex items-center justify-center lg:justify-end">

          <div className="relative w-full max-w-[720px] lg:max-w-[850px] xl:max-w-[940px]">

            {/* Outer glow */}
            <div className="hero-glow pointer-events-none absolute inset-[-7%] rounded-[60px] bg-blue-200/40 blur-[55px]" />

            {/* Secondary glow */}
            <div className="pointer-events-none absolute bottom-[-8%] left-[12%] h-28 w-[70%] rounded-full bg-cyan-200/40 blur-3xl" />

            {/* Image */}
            <div className="hero-image relative z-10">

              <div className="relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-white/55 p-1.5 shadow-[0_35px_75px_rgba(15,23,42,0.15)] backdrop-blur-sm">

                {/* Shine layer */}
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px]">
                  <div className="hero-shine absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/15" />
                </div>

                <img
                  src="/HomeHero.png"
                  alt="ETECH Online Assessment platform"
                  className="relative z-10 h-auto w-full rounded-[22px] object-contain"
                />
              </div>

              {/* Floating security badge */}
              <div className="hero-badge absolute -bottom-5 left-4 z-30 hidden rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.13)] backdrop-blur-md sm:block lg:left-[-18px]">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
                      <path d="M9 12L11 14L15 10" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-slate-800">
                      Secure Session
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-500">
                      Identity • Device • Network
                    </p>
                  </div>

                  <span className="ml-1 h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Floating status pill */}
              <div className="hero-badge absolute -right-2 top-5 z-30 hidden rounded-xl border border-blue-100 bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.11)] backdrop-blur-md md:block">

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />

                  <span className="text-[10px] font-semibold text-slate-700">
                    AI-Assisted Security
                  </span>
                </div>
              </div>

              {/* Bottom shadow */}
              <div className="pointer-events-none absolute -bottom-4 left-[15%] right-[15%] h-8 rounded-full bg-blue-300/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


