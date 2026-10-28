'use client'
const Footer = () => {
  return (
    <footer className="bg-[#123d2a] text-white">
      <div className="mx-auto max-w-[1380px] px-5 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#d8f5d0] text-[11px] font-bold text-[#123d2a]">
                B
              </div>

              <span className="text-sm font-bold tracking-[-0.04em]">
                BUILDCORE
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              Building spaces that are made to last.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
              Reliable construction, thoughtful design and quality
              workmanship for residential and commercial projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#d8f5d0]">
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-white/70 transition hover:text-white">
                Home
              </a>

              <a href="#about" className="text-sm text-white/70 transition hover:text-white">
                About
              </a>

              <a href="#services" className="text-sm text-white/70 transition hover:text-white">
                Services
              </a>

              <a href="#projects" className="text-sm text-white/70 transition hover:text-white">
                Projects
              </a>

              <a href="#faq" className="text-sm text-white/70 transition hover:text-white">
                FAQs
              </a>

              <a href="#contact" className="text-sm text-white/70 transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#d8f5d0]">
              Contact
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href="mailto:hello@buildcore.com"
                className="transition hover:text-white"
              >
                hello@buildcore.com
              </a>

              <a
                href="tel:+923001234567"
                className="transition hover:text-white"
              >
                +92 300 1234567
              </a>

              <p className="max-w-[180px] leading-6">
                Bahawalpur, Punjab
                <br />
                Pakistan
              </p>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8f5d0] hover:bg-[#d8f5d0] hover:text-[#123d2a]"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8f5d0] hover:bg-[#d8f5d0] hover:text-[#123d2a]"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs transition hover:border-[#d8f5d0] hover:bg-[#d8f5d0] hover:text-[#123d2a]"
              >
                ig
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 BuildCore. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>

          <p className="font-mono uppercase tracking-wider">
            Built with precision
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;