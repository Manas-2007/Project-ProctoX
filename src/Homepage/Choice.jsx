const pcFeatures = [
  "BLE Detection",
  "RSSI Signal Strength",
  "Unknown Device Detection",
  "Faculty Verification",
];

const mobileFeatures = [
  "Face Verification",
  "Liveness Detection",
  "AI Object Detection",
  "App Security",
  "Device Integrity",
];

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

const CheckIcon = ({ purple = false }) => (
  <span
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
      purple
        ? "bg-violet-100 text-violet-600"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <path d="M5 12L10 17L19 7" />
    </svg>
  </span>
);

const ArrowIcon = ({ purple = false }) => (
  <span
    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 ${
      purple
        ? "bg-violet-600 group-hover:bg-violet-500"
        : "bg-blue-600 group-hover:bg-blue-500"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M5 12H19" />
      <path d="M13 6L19 12L13 18" />
    </svg>
  </span>
);

const DeviceIcon = ({ mobile = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    {mobile ? (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M10 6H14" />
        <circle cx="12" cy="18" r="0.7" fill="currentColor" stroke="none" />
      </>
    ) : (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20H16" />
        <path d="M12 16V20" />
      </>
    )}
  </svg>
);

const PhaseCard = ({
  phase,
  title,
  description,
  image,
  features,
  purple = false,
  label,
}) => {
  return (
    <article
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.07)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.11)] ${
        purple
          ? "border-violet-500 hover:border-violet-300"
          : "border-blue-500 hover:border-blue-300"
      }`}
    >
      {/* Soft card glow */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          purple
            ? "bg-gradient-to-br from-violet-50/60 via-transparent to-transparent"
            : "bg-gradient-to-br from-blue-50/60 via-transparent to-transparent"
        }`}
      />

      <div className="relative flex h-full flex-col p-3 sm:p-5 lg:p-6">

        {/* Phase badge */}
        <span
          className={`w-fit rounded-full px-3 py-1 text-[8px] font-bold uppercase tracking-[0.14em] sm:text-[10px] ${
            purple
              ? "bg-violet-100 text-violet-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {phase}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-[1.05rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[52px] text-[10px] leading-4 text-slate-500 sm:min-h-0 sm:text-sm sm:leading-5">
          {description}
        </p>

        {/* Image + Features */}
        <div className="mt-4 flex flex-col gap-4 sm:mt-5 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-5">

          {/* Image */}
          <div
            className={`overflow-hidden rounded-xl border ${
              purple
                ? "border-violet-100 bg-violet-50"
                : "border-blue-100 bg-blue-50"
            }`}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/10]">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div
                className={`pointer-events-none absolute inset-0 ${
                  purple
                    ? "bg-gradient-to-t from-violet-900/10 via-transparent to-transparent"
                    : "bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"
                }`}
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2.5 sm:space-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-[10px] leading-4 text-slate-700 sm:text-xs lg:text-sm"
              >
                <CheckIcon purple={purple} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          className={`mt-4 flex items-center justify-between rounded-xl border px-3 py-2.5 sm:mt-5 sm:px-4 sm:py-3 ${
            purple
              ? "border-violet-100 bg-violet-50/80"
              : "border-blue-100 bg-blue-50/80"
          }`}
        >
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${
                purple ? "text-violet-600" : "text-blue-600"
              }`}
            >
              <DeviceIcon mobile={purple} />
            </span>

            <span className="truncate text-[9px] font-semibold text-slate-700 sm:text-xs lg:text-sm">
              {label}
            </span>
          </div>

          <ArrowIcon purple={purple} />
        </div>
      </div>
    </article>
  );
};

const Choice = () => {
  return (
    <section
      id="choice"
      className="relative overflow-hidden bg-slate-100/80"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-10%] h-80 w-80 rounded-full bg-blue-200/25 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-violet-200/20 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,64,175,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16 xl:max-w-[1420px]">

        {/* ================= HEADER ================= */}
        <div className="mb-8 grid gap-4 sm:mb-10 lg:grid-cols-2 lg:items-end">

          {/* Heading */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-100/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-[10px]">
              Two-Phase System
            </span>

            <h2 className="mt-4 max-w-xl text-[1.8rem] font-bold leading-[1.08] tracking-[-0.025em] text-slate-900 sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              Flexible. Secure.
              <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Comprehensive.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:justify-self-end lg:text-base">
            From exam halls to mobile devices, ETECH adapts to your needs
            with a two-phase security ecosystem designed for reliable,
            trustworthy assessments.
          </p>
        </div>

        {/* ================= PHASE CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-7">

          {/* PC */}
          <PhaseCard
            phase="Phase 1"
            title="PC-Based CBT"
            description="Examination in a strictly controlled environment with deep BLE room scanning and hardware-level checks."
            image="/HomeLab.png"
            features={pcFeatures}
            label="PC as Exam Device"
          />

          {/* Mobile */}
          <PhaseCard
            phase="Phase 2"
            title="Mobile-Based CBT"
            description="Students securely use their own registered smartphones with app integrity and intelligent security checks."
            image="/HomeQuiz.png"
            features={mobileFeatures}
            purple
            label="Mobile as Exam Device"
          />

        </div>
      </div>
      <SecurityIntelligence />
      <DashboardShowcase />
      <InstitutionShowcase />
    </section>
    
  );
};

export default Choice;


//============================== NEXT SECTION ========================================

const SecurityIntelligence = () => {
  const signals = [
    {
      name: "Face",
      color: "blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20C5.8 16.3 8.2 14.5 12 14.5C15.8 14.5 18.2 16.3 19 20" />
          <path d="M5 8C5.5 5 8 3 12 3C16 3 18.5 5 19 8" />
        </svg>
      ),
    },
    {
      name: "Camera",
      color: "sky",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M8 7L9.5 4H14.5L16 7H19C20.1 7 21 7.9 21 9V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V9C3 7.9 3.9 7 5 7H8Z" />
          <circle cx="12" cy="13.5" r="3.2" />
        </svg>
      ),
    },
    {
      name: "Device",
      color: "cyan",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 6H14" />
          <circle
            cx="12"
            cy="18"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      name: "App",
      color: "orange",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      ),
    },
    {
      name: "AI",
      color: "violet",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M12 3V21" />
          <path d="M5 8C7 5.5 9 5.5 12 8C15 5.5 17 5.5 19 8" />
          <path d="M5 16C7 18.5 9 18.5 12 16C15 18.5 17 18.5 19 16" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      name: "Network",
      color: "blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M4 9.5C8.8 5.3 15.2 5.3 20 9.5" />
          <path d="M7 13C10 10.4 14 10.4 17 13" />
          <path d="M10 16.5C11.2 15.5 12.8 15.5 14 16.5" />
          <circle
            cx="12"
            cy="19"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
  ];

  const signalStyles = {
    blue: {
      ring: "border-blue-200 bg-blue-50 text-blue-600",
      glow: "bg-blue-300/35",
    },
    sky: {
      ring: "border-sky-200 bg-sky-50 text-sky-600",
      glow: "bg-sky-300/35",
    },
    cyan: {
      ring: "border-cyan-200 bg-cyan-50 text-cyan-600",
      glow: "bg-cyan-300/35",
    },
    orange: {
      ring: "border-orange-200 bg-orange-50 text-orange-500",
      glow: "bg-orange-300/30",
    },
    violet: {
      ring: "border-violet-200 bg-violet-50 text-violet-600",
      glow: "bg-violet-300/35",
    },
  };

  const ShieldIcon = ({ className = "h-5 w-5" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );

  const AuditIcon = ({ className = "h-5 w-5" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8H15" />
      <path d="M9 12H15" />
      <path d="M9 16H13" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12H19" />
      <path d="M13 6L19 12L13 18" />
    </svg>
  );

  const ModuleCard = ({ children, className = "" }) => (
    <div
      className={`group relative overflow-hidden rounded-[20px] border border-blue-100/90 bg-white shadow-[0_10px_28px_rgba(15,45,90,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,45,90,0.13)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/45" />
      <div className="relative h-full">{children}</div>
    </div>
  );

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-gradient-to-br from-[#EAF5FF] via-[#DCEBFA] to-[#EFF5FF] py-9 sm:py-11 lg:py-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-[90px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-200/25 blur-[90px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes securityReveal {
            from {
              opacity: 0;
              transform: translateY(18px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes signalFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes signalGlow {
            0%, 100% {
              opacity: 0.18;
              transform: scale(0.96);
            }

            50% {
              opacity: 0.42;
              transform: scale(1.06);
            }
          }

          .security-reveal {
            opacity: 0;
            animation: securityReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .security-delay-1 {
            animation-delay: 0.08s;
          }

          .security-delay-2 {
            animation-delay: 0.18s;
          }

          .security-delay-3 {
            animation-delay: 0.28s;
          }

          .signal-float {
            animation: signalFloat 4s ease-in-out infinite;
          }

          .signal-glow {
            animation: signalGlow 3.5s ease-in-out infinite;
          }

          @media (max-width: 639px) {
            .security-reveal {
              animation-duration: 0.6s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .security-reveal,
            .signal-float,
            .signal-glow {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1280px]">

        {/* =====================================================
            2 × 2 GRID

            Desktop:
            ┌─────────────────┬─────────────────┐
            │ Multi-Signal    │ Trust           │
            ├─────────────────┼─────────────────┤
            │ Resilience      │ Audit           │
            └─────────────────┴─────────────────┘

            Mobile:
            ┌───────────────────────────────┐
            │ Multi-Signal                  │
            ├──────────────┬────────────────┤
            │ Trust        │ Resilience     │
            ├───────────────────────────────┤
            │ Audit                         │
            └───────────────────────────────┘
        ====================================================== */}

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">

          {/* ===================================================
              1. MULTI-SIGNAL SECURITY
          ==================================================== */}

          <ModuleCard
            className="security-reveal security-delay-1 col-span-2 p-4 sm:p-5 lg:col-span-1 lg:p-6"
          >
            <div className="flex items-start justify-between gap-3">

              <div>
                <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  Multi-Signal Security
                </h2>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Different signals. Stronger decisions.
                </p>
              </div>

              <div className="hidden h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600 sm:flex">
                <ShieldIcon className="h-4 w-4" />
              </div>
            </div>

            {/* Signals */}
            <div className="mt-6 grid grid-cols-3 gap-y-5 sm:grid-cols-6 sm:gap-3">
              {signals.map((signal, index) => {
                const style = signalStyles[signal.color];

                return (
                  <div
                    key={signal.name}
                    className="signal-float flex flex-col items-center"
                    style={{
                      animationDelay: `${index * 0.18}s`,
                    }}
                  >
                    <div className="relative">

                      <div
                        className={`signal-glow absolute inset-0 rounded-full blur-lg ${style.glow}`}
                        style={{
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />

                      <div
                        className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 ${style.ring} shadow-sm transition-transform duration-300 hover:scale-110 sm:h-13 sm:w-13 lg:h-14 lg:w-14`}
                      >
                        {signal.icon}
                      </div>
                    </div>

                    <span className="mt-2 text-[8px] font-semibold text-slate-700 sm:text-[10px]">
                      {signal.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Violation Engine */}
            <div className="relative mt-6 flex justify-center">

              <div className="hidden absolute left-[10%] top-1/2 h-px w-[27%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300 to-blue-500 lg:block" />

              <div className="hidden absolute right-[10%] top-1/2 h-px w-[27%] -translate-y-1/2 bg-gradient-to-l from-transparent via-blue-300 to-blue-500 lg:block" />

              <div className="relative flex items-center gap-2.5 rounded-xl border border-blue-200 bg-[#063A73] px-4 py-2.5 text-white shadow-[0_10px_24px_rgba(3,58,115,0.18)] sm:px-5 sm:py-3">

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 sm:h-8 sm:w-8">
                  <ShieldIcon className="h-4 w-4 text-cyan-200" />
                </div>

                <div>
                  <p className="text-[9px] font-bold sm:text-[10px]">
                    Violation Engine
                  </p>

                  <p className="text-[7px] text-blue-100/65 sm:text-[8px]">
                    Correlate • Analyze • Review
                  </p>
                </div>
              </div>
            </div>
          </ModuleCard>

          {/* ===================================================
              2. TRUST & INTELLIGENCE
          ==================================================== */}

          <ModuleCard
            className="security-reveal security-delay-2 col-span-2 p-4 sm:col-span-1 sm:p-5 lg:p-6"
          >
            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4A8A] text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path d="M12 3V21" />
                  <path d="M5 8C7 5.5 9 5.5 12 8C15 5.5 17 5.5 19 8" />
                  <path d="M5 16C7 18.5 9 18.5 12 16C15 18.5 17 18.5 19 16" />
                </svg>
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  Trust &amp; Intelligence
                </h3>

                <p className="mt-2 text-[9px] leading-4 text-slate-500 sm:text-[10px] sm:leading-5">
                  The system does not depend on a single signal.
                  Multiple signals are correlated before escalation.
                  Human review remains part of the workflow.
                </p>
              </div>
            </div>

            {/* Intelligence Features */}
            <div className="mt-5 grid grid-cols-3 gap-2">

              {[
                {
                  title: "Smarter Detection",
                  sub: "with AI",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="7" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                },
                {
                  title: "Correlated",
                  sub: "Signal Analysis",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path d="M5 7H19" />
                      <path d="M5 12H15" />
                      <path d="M5 17H11" />
                      <circle cx="18" cy="12" r="2" />
                    </svg>
                  ),
                },
                {
                  title: "Human",
                  sub: "Verification",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="8" r="3" />
                      <path d="M5 20C5.8 16.2 8.2 14.5 12 14.5C15.8 14.5 18.2 16.2 19 20" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-blue-100 bg-blue-50/65 p-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm sm:rounded-xl sm:p-2.5"
                >
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm sm:h-8 sm:w-8">
                    {item.icon}
                  </div>

                  <p className="mt-1.5 text-[7px] font-semibold leading-3 text-slate-700 sm:text-[9px]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[7px] leading-3 text-slate-500 sm:text-[8px]">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </ModuleCard>

          {/* ===================================================
              3. RESILIENCE
          ==================================================== */}

          <ModuleCard
            className="security-reveal security-delay-2 col-span-2 p-4 sm:col-span-1 sm:p-5 lg:p-6"
          >
            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4A8A] text-white shadow-md">
                <ShieldIcon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  Resilience
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                  Stay secure. Even when things go wrong.
                </p>
              </div>
            </div>

            {/* Recovery Flow */}
            <div className="mt-6 grid grid-cols-4 items-start gap-1 sm:gap-2">

              {[
                {
                  symbol: "×",
                  title: "Network Failure",
                  color: "bg-red-500",
                },
                {
                  symbol: "⇄",
                  title: "Secure Local Queue",
                  color: "bg-blue-600",
                },
                {
                  symbol: "↻",
                  title: "Recovery",
                  color: "bg-emerald-500",
                },
                {
                  symbol: "☁",
                  title: "Synchronisation",
                  color: "bg-violet-600",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex min-w-0 flex-col items-center text-center"
                >
                  <div
                    className={`signal-float flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white shadow-md sm:h-11 sm:w-11 ${item.color}`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {item.symbol}
                  </div>

                  <p className="mt-2 text-[7px] font-semibold leading-3 text-slate-700 sm:text-[8px] lg:text-[9px]">
                    {item.title}
                  </p>

                  {index < 3 && (
                    <span className="absolute -right-2 top-3 text-[9px] text-blue-400 sm:text-xs">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2.5 text-[8px] leading-4 text-slate-600 sm:text-[9px]">
              Local storage, encrypted queues and seamless recovery keep
              examinations running even during temporary disruptions.
            </p>
          </ModuleCard>

          {/* ===================================================
              4. AUDIT & TRANSPARENCY
          ==================================================== */}

          <ModuleCard
            className="security-reveal security-delay-3 col-span-2 p-4 sm:p-5 lg:col-span-1 lg:p-6"
          >
            <div className="flex items-start justify-between gap-3">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4A8A] text-white shadow-md">
                  <AuditIcon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                    Audit &amp; Transparency
                  </h3>

                  <p className="mt-1 text-[9px] text-slate-500 sm:text-[10px]">
                    Every event. Fully traceable.
                  </p>
                </div>
              </div>

              <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-[7px] font-semibold text-blue-600 sm:inline-flex">
                Tamper-Evident Trail
              </span>
            </div>

            {/* Timeline + CTA */}
            <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">

              {/* Timeline */}
              <div className="space-y-1.5">

                {[
                  ["10:02", "Exam Started", "bg-blue-600"],
                  ["10:03", "Identity Verified", "bg-emerald-500"],
                  ["10:47", "Security Event", "bg-orange-500"],
                  ["10:47", "Warning", "bg-red-500"],
                  ["10:52", "Review Completed", "bg-blue-600"],
                ].map(([time, event, color]) => (
                  <div
                    key={`${time}-${event}`}
                    className="flex items-center gap-2.5 rounded-lg px-1.5 py-1 transition hover:bg-blue-50"
                  >
                    <span className="w-9 text-[7px] font-semibold text-slate-400 sm:w-10 sm:text-[8px]">
                      {time}
                    </span>

                    <span className={`h-2 w-2 shrink-0 rounded-full ${color}`} />

                    <span className="text-[8px] font-semibold text-slate-700 sm:text-[9px]">
                      {event}
                    </span>
                  </div>
                ))}

              </div>

              {/* Audit CTA */}
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-3 sm:w-[165px]">

                <p className="text-[8px] leading-4 text-slate-600 sm:text-[9px]">
                  Complete audit trail for accountability, transparency
                  and institutional trust.
                </p>

                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-[7px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:text-[8px]"
                >
                  View Audit Logs
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </ModuleCard>

        </div>
      </div>
    </section>
  );
};


// ============================ BOTTOM SECTION ========================================
const DashboardShowcase = () => {
  const highlights = [
    {
      title: "Live Monitoring",
      subtitle: "PC & Mobile",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 20H16" />
          <path d="M12 17V20" />
        </svg>
      ),
    },
    {
      title: "Security Events",
      subtitle: "& Alerts",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
          <path d="M12 8V12" />
          <circle cx="12" cy="15.5" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Audit Logs",
      subtitle: "& Reports",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8H15" />
          <path d="M9 12H15" />
          <path d="M9 16H13" />
        </svg>
      ),
    },
    {
      title: "System Health",
      subtitle: "& Network",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M4 12H7L9 7L13 17L15 12H20" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="monitoring"
      className="relative overflow-hidden bg-[#062B52]"
    >
      {/* ================= ANIMATIONS ================= */}

      <style>
        {`
          @keyframes dashboardReveal {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes dashboardImageReveal {
            from {
              opacity: 0;
              transform: translateX(35px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes dashboardFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes dashboardGlow {
            0%, 100% {
              opacity: 0.25;
              transform: scale(0.96);
            }

            50% {
              opacity: 0.45;
              transform: scale(1.05);
            }
          }

          @keyframes dashboardShine {
            0% {
              transform: translateX(-140%);
              opacity: 0;
            }

            20% {
              opacity: 0.15;
            }

            55% {
              transform: translateX(170%);
              opacity: 0;
            }

            100% {
              transform: translateX(170%);
              opacity: 0;
            }
          }

          .dashboard-reveal {
            opacity: 0;
            animation: dashboardReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .dashboard-image {
            opacity: 0;
            animation:
              dashboardImageReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards,
              dashboardFloat 5.5s ease-in-out 1.35s infinite;
          }

          .dashboard-glow {
            animation: dashboardGlow 5s ease-in-out infinite;
          }

          .dashboard-shine {
            animation: dashboardShine 6s ease-in-out 2s infinite;
          }

          .dashboard-delay-1 {
            animation-delay: 0.08s;
          }

          .dashboard-delay-2 {
            animation-delay: 0.18s;
          }

          .dashboard-delay-3 {
            animation-delay: 0.28s;
          }

          .dashboard-delay-4 {
            animation-delay: 0.4s;
          }

          @media (max-width: 1023px) {
            .dashboard-image {
              animation:
                dashboardReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards,
                dashboardFloat 5s ease-in-out 1.25s infinite;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dashboard-reveal,
            .dashboard-image,
            .dashboard-glow,
            .dashboard-shine {
              opacity: 1;
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-[110px]" />

        <div className="absolute left-[42%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-300/10 blur-[90px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Decorative wave */}
        <div className="absolute bottom-[-35px] left-[25%] h-32 w-[55%] rounded-[50%] border-t border-blue-300/20 rotate-[-8deg]" />
        <div className="absolute bottom-[-55px] left-[28%] h-32 w-[50%] rounded-[50%] border-t border-blue-300/10 rotate-[-8deg]" />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-10 lg:py-16 xl:max-w-[1320px]">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="order-1 max-w-xl">

          {/* Badge */}
          <div className="dashboard-reveal dashboard-delay-1 inline-flex items-center rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-blue-100 sm:text-[9px]">
            Powerful Dashboards
          </div>

          {/* Heading */}
          <h2 className="dashboard-reveal dashboard-delay-2 mt-4 text-[1.9rem] font-bold leading-[1.08] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.55rem] xl:text-[2.8rem]">
            Real-Time Monitoring
            <span className="block text-cyan-300">
              &amp; Control
            </span>
          </h2>

          {/* Description */}
          <p className="dashboard-reveal dashboard-delay-3 mt-4 max-w-lg text-xs leading-5 text-blue-100/70 sm:text-sm sm:leading-6 lg:text-base">
            Get complete visibility with intuitive dashboards built for
            admins, examiners and institutions.
          </p>

          {/* Highlight Grid */}
          <div className="dashboard-reveal dashboard-delay-4 mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-blue-300/15 bg-white/[0.06] p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/30 hover:bg-white/[0.1]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200/20 bg-blue-400/10 text-blue-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-400/20">
                  {item.icon}
                </div>

                <p className="mt-3 text-[9px] font-semibold leading-3 text-white sm:text-[10px]">
                  {item.title}
                </p>

                <p className="mt-0.5 text-[8px] leading-3 text-blue-100/55 sm:text-[9px]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="dashboard-reveal dashboard-delay-4 mt-7">
            <a
              href="#dashboard"
              className="group inline-flex items-center gap-3 rounded-xl border border-blue-300/20 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(0,100,200,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,100,200,0.3)]"
            >
              Explore Dashboards

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12H19" />
                <path d="M13 6L19 12L13 18" />
              </svg>
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <div className="order-2 flex items-center justify-center lg:justify-end">

          <div className="relative w-full max-w-[760px] xl:max-w-[820px]">

            {/* Glow */}
            <div className="dashboard-glow pointer-events-none absolute inset-[-7%] rounded-[45px] bg-blue-300/25 blur-[50px]" />

            {/* Image */}
            <div className="dashboard-image relative z-10">

              <div className="relative overflow-hidden rounded-[22px] border border-blue-200/25 bg-white/10 p-1.5 shadow-[0_28px_65px_rgba(0,0,0,0.28)] backdrop-blur-sm">

                {/* Shine */}
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[18px]">
                  <div className="dashboard-shine absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/15" />
                </div>

                <img
                  src="/HomeDown.png"
                  alt="ETECH real-time monitoring dashboard"
                  className="relative z-10 h-auto w-full rounded-[16px] object-contain"
                />
              </div>

              {/* Small glow underneath */}
              <div className="pointer-events-none absolute -bottom-5 left-[12%] right-[12%] h-8 rounded-full bg-cyan-300/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ===========================FINAL SECTION =========================================
const InstitutionShowcase = () => {
  const institutionFeatures = [
    {
      title: "Scalable",
      subtitle: "Architecture",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.5 11L15.5 7" />
          <path d="M8.5 13L15.5 17" />
        </svg>
      ),
    },
    {
      title: "Enterprise",
      subtitle: "Security",
      icon: (
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
      ),
    },
    {
      title: "Real-Time",
      subtitle: "Monitoring",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8V12L15 14" />
          <path d="M4 4L7 7" />
        </svg>
      ),
    },
    {
      title: "Comprehensive",
      subtitle: "Reporting",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8H15" />
          <path d="M9 12H15" />
          <path d="M9 16H13" />
        </svg>
      ),
    },
  ];

  const stats = [
    {
      value: "99.9%",
      label: "System Uptime",
      icon: (
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
      ),
    },
    {
      value: "1000+",
      label: "Institutions Trust Us",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="6" y="5" width="12" height="15" rx="2" />
          <path d="M9 9H15" />
          <path d="M9 13H15" />
          <path d="M10 3H14" />
        </svg>
      ),
    },
    {
      value: "2M+",
      label: "Exams Secured",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
          <path d="M12 8V16" />
          <path d="M9 11H15" />
        </svg>
      ),
    },
    {
      value: "5+",
      label: "Security Layers",
      icon: (
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
      ),
    },
  ];

  return (
    <section
      id="institutions"
      className="relative overflow-hidden bg-white"
    >
      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes institutionReveal {
            from {
              opacity: 0;
              transform: translateY(22px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes institutionImage {
            from {
              opacity: 0;
              transform: translateX(-25px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes institutionFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes statPulse {
            0%, 100% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.04);
            }
          }

          .institution-reveal {
            opacity: 0;
            animation: institutionReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          .institution-image {
            opacity: 0;
            animation:
              institutionImage 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards,
              institutionFloat 5s ease-in-out 1.3s infinite;
          }

          .institution-stat {
            animation: statPulse 4s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .institution-reveal,
            .institution-image,
            .institution-stat {
              opacity: 1;
              animation: none;
              transform: none;
            }
          }
        `}
      </style>

      {/* =====================================================
          BUILT FOR INSTITUTIONS
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:max-w-[1320px]">

        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:gap-8">

          {/* IMAGE */}
          <div className="institution-image order-1">
            <div className="relative overflow-hidden rounded-[20px] border border-blue-100 shadow-[0_16px_35px_rgba(15,45,90,0.12)]">

              <img
                src="/HomeChild.png"
                alt="Student using ETECH assessment platform"
                className="h-auto w-full object-cover"
              />

              {/* Soft overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="institution-reveal order-2">

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-[9px]">
              Built for Institutions
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[2.3rem]">
              Built for
              <span className="block text-blue-600">
                Institutions
              </span>
            </h2>

            <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
              Secure. Scalable. Future-Ready.
            </p>

            <p className="mt-4 max-w-lg text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              ETECH empowers educational institutions with a reliable,
              AI-assisted examination ecosystem that helps support fairness,
              integrity, resilience and trust at scale.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Partner with Us

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M5 12H19" />
                <path d="M13 6L19 12L13 18" />
              </svg>
            </a>
          </div>

          {/* FEATURES */}
          <div className="institution-reveal order-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

            {institutionFeatures.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center border-l border-blue-100 px-3 py-3 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-100">
                  {item.icon}
                </div>

                <p className="mt-2 text-[9px] font-semibold leading-3 text-slate-700 sm:text-[10px]">
                  {item.title}
                </p>

                <p className="mt-0.5 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                  {item.subtitle}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <div className="relative overflow-hidden bg-gradient-to-r from-[#052B55] via-[#063A70] to-[#052B55]">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-full w-64 bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-0 h-full w-64 bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8 xl:max-w-[1320px]">

          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`institution-stat flex items-center justify-center gap-3 border-blue-300/15 px-3 py-5 sm:py-6 lg:py-7 ${
                index !== 3 ? "lg:border-r" : ""
              } ${
                index < 2 ? "border-b lg:border-b-0" : ""
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >

              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-blue-400/10 text-cyan-200">
                {stat.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-[8px] text-blue-100/65 sm:text-[9px]">
                  {stat.label}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* =====================================================
          FINAL TRUST CTA
      ====================================================== */}

      <div
        id="contact"
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.82)), url('/HomeChild.png')",
        }}
      >

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/80" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-12 text-center sm:py-14 lg:py-16">

          {/* Logo mark */}
          <div className="institution-reveal flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
            <ShieldIcon />
          </div>

          <h2 className="institution-reveal mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Build exams students and institutions can trust.
          </h2>

          <p className="institution-reveal mt-2 max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm">
            A modern, AI-assisted, multi-layered security ecosystem for
            the future of digital assessments.
          </p>

          <a
            href="#security"
            className="institution-reveal mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore Secure Assessment

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};