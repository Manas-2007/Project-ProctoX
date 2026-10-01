import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5L12 3L21 10.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 9.5V21H19V9.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 21V14H15V21"
        />
      </svg>
    ),
  },
  {
    name: "How It Works",
    href: "#how-it-works",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7V12L15 14"
        />
      </svg>
    ),
  },
  {
    name: "Security",
    href: "#security",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12L11 14L15 10"
        />
      </svg>
    ),
  },
  {
    name: "For Institutions",
    href: "#institutions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10L12 4L21 10"
        />
        <path strokeLinecap="round" d="M5 10V19" />
        <path strokeLinecap="round" d="M9 10V19" />
        <path strokeLinecap="round" d="M15 10V19" />
        <path strokeLinecap="round" d="M19 10V19" />
        <path strokeLinecap="round" d="M3 19H21" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "#about",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path strokeLinecap="round" d="M12 10V16" />
        <circle cx="12" cy="7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const ArrowIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12H19" />
    <path d="M13 6L19 12L13 18" />
  </svg>
);

const UserIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21C4.8 16.8 7.6 15 12 15C16.4 15 19.2 16.8 20 21" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3L19 6V11.5C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.5V6L12 3Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M6 6L18 18" />
    <path d="M18 6L6 18" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="7" cy="17" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="17" cy="17" r="1.2" fill="currentColor" stroke="none" />
    <path d="M7 12H17" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#031B3D]/95 shadow-[0_8px_30px_rgba(0,20,55,0.25)] backdrop-blur-xl"
            : "bg-[#031B3D]"
        }`}
      >
        <div className="mx-auto flex h-[64px] w-full max-w-[1540px] items-center justify-between px-4 sm:px-7 lg:h-[68px] lg:px-10 xl:px-12">

          {/* Desktop Logo */}
{/* ================= DESKTOP LOGO ================= */}
<a
  href="#home"
  onClick={closeMenu}
  className="group flex shrink-0 items-center gap-3"
  aria-label="ProctoX Home"
>
  <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11 lg:h-12 lg:w-12">
    <div className="absolute -inset-3 rounded-2xl bg-blue-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

    <img
      src="/Logo.png"
      alt="ProctoX Logo"
      className="relative h-full w-full object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]"
    />
  </div>

  <div className="leading-none">
    <span className="block text-[20px] font-bold tracking-tight text-white sm:text-[22px] lg:text-[24px]">
      ProctoX
    </span>

    <span className="mt-1 hidden text-[7px] font-medium uppercase tracking-[0.22em] text-blue-100/55 sm:block lg:text-[8px]">
      AI-ASSISTED SECURITY
    </span>
  </div>
</a>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="ml-auto hidden items-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="group relative rounded-lg px-4 py-2 text-[12px] font-medium text-blue-100/75 transition-all duration-300 hover:bg-white/[0.045] hover:text-white xl:px-[18px] xl:text-[13px]"
              >
                {link.name}

                <span
                  className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                    index === 0
                      ? "w-7"
                      : "w-0 group-hover:w-7"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="ml-6 hidden items-center gap-4 lg:flex">

            <a
              href="#login"
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium text-blue-100/80 transition-all duration-300 hover:bg-white/[0.045] hover:text-white xl:text-[13px]"
            >
              <UserIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
              Login
            </a>

            <a
              href="#choice"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-[12px] font-semibold text-white shadow-[0_8px_22px_rgba(0,130,220,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,130,220,0.32)] xl:px-6 xl:text-[13px]"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

              <span className="relative">
                Get Started
              </span>

              <ArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-blue-300/20 bg-white/[0.06] text-white transition-all duration-300 hover:border-blue-300/40 hover:bg-white/[0.1] active:scale-95 lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-[#031B3D]/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =====================================================
          MOBILE OFF-CANVAS
      ====================================================== */}

      <div
        className={`fixed inset-x-0 top-0 z-[60] origin-top lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        } transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        <div className="mx-auto overflow-hidden rounded-b-[24px] border-b border-white/10 bg-[#071933] shadow-[0_20px_55px_rgba(0,0,0,0.5)]">

          {/* Top accent */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500" />

          {/* Soft glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-[60px]" />

          {/* ================= DRAWER HEADER ================= */}

          <div className="relative flex h-[58px] items-center justify-between px-4 sm:px-5">

            <a
  href="#home"
  onClick={closeMenu}
  className="flex items-center gap-2.5"
>
  {/* Logo */}
  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
    <img
      src="/Logo.png"
      alt="ProctoX Logo"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Brand */}
  <div className="leading-none">
    <p className="text-[15px] font-bold tracking-tight text-white">
      ProctoX
    </p>

    <p className="mt-0.5 text-[6px] font-medium uppercase tracking-[0.2em] text-blue-200/55">
      AI-ASSISTED SECURITY
    </p>
  </div>
</a>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100 transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              <CloseIcon />
            </button>
          </div>

          {/* ================= DRAWER BODY ================= */}

          <div className="relative px-4 pb-4 pt-1 sm:px-5">

            <div className="mb-2.5">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-300/55">
                Navigation
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1.5">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex h-[42px] items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.045] px-3 transition-all duration-300 hover:border-blue-400/25 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-2.5">

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-300 ${
                        index === 0
                          ? "bg-blue-600 text-white shadow-[0_0_14px_rgba(37,99,235,0.35)]"
                          : "border border-white/[0.08] bg-white/[0.025] text-blue-200 group-hover:border-blue-400/30 group-hover:text-white"
                      }`}
                    >
                      {link.icon}
                    </span>

                    <span className="text-[11px] font-medium tracking-wide text-blue-50 group-hover:text-white">
                      {link.name}
                    </span>
                  </div>

                  <span className="text-blue-400/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-3.5 h-px bg-white/[0.07]" />

            {/* ================= ACTIONS ================= */}

            <div className="grid grid-cols-2 gap-2.5">

              <a
                href="#login"
                onClick={closeMenu}
                className="flex h-[42px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent text-[11px] font-semibold text-white transition-all duration-300 hover:bg-white/[0.06] active:scale-[0.98]"
              >
                <span className="text-blue-300">
                  <UserIcon className="h-4 w-4" />
                </span>
                Login
              </a>

              <a
                href="#choice"
                onClick={closeMenu}
                className="group flex h-[42px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get Started

                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Bottom identity */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[7px] font-medium text-blue-100/40">
              <ShieldIcon className="h-3 w-3 text-blue-400/70" />
              Secure • Fair • Future-Ready
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;