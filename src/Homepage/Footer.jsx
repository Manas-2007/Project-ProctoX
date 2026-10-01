const Footer = () => {
  const quickLinks = [
    ["Home", "#home"],
    ["How It Works", "#how-it-works"],
    ["Security", "#security"],
    ["For Institutions", "#institutions"],
    ["About", "#about"],
  ];

  const supportLinks = [
    ["Help Center", "#help"],
    ["Contact Us", "#contact"],
    ["Privacy Policy", "#privacy"],
    ["Terms of Service", "#terms"],
  ];

  const socialLinks = [
    { label: "in", name: "LinkedIn" },
    { label: "𝕏", name: "X" },
    { label: "▶", name: "YouTube" },
    { label: "◉", name: "Community" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#031B3D] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 text-blue-400"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3L19 6V11.5C19 16 16.3 19.4 12 21C7.7 19.4 5 16 5 11.5V6L12 3Z" />
                  <path d="M9 12L11 14L15 10" />
                </svg>
              </div>

              <span className="text-3xl font-bold tracking-tight">
                ETECH
              </span>
            </a>

            <p className="mt-4 text-sm font-medium tracking-wide text-blue-100/80">
              Secure
              <span className="mx-2 text-blue-400">•</span>
              Fair
              <span className="mx-2 text-blue-400">•</span>
              Future-Ready
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-blue-100/65 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-blue-100/65 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-5 text-sm font-semibold text-white">
              Stay Connected
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-100 transition-all duration-200 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-blue-100/60">
              Together for fair and secure digital assessments.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-start gap-4 text-xs text-blue-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 ETECH. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy
            </a>

            <span className="text-blue-100/20">|</span>

            <a
              href="#terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms
            </a>

            <span className="text-blue-100/20">|</span>

            <a
              href="#cookies"
              className="transition-colors duration-200 hover:text-white"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;