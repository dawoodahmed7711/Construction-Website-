'use client'

const Navbar = () => {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#123d2a] text-[15px] font-bold text-white">
            <button className="bg-white px-4 py-4 text-green-600 text-2xl"><i class="fa-solid fa-house-user"></i></button>
          </div>

          <span className="text-[13px] text-black font-bold tracking-[-0.04em]">
            BUILDCORE
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            About
          </a>

          <a
            href="/services"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            Services
          </a>

          <a
            href="/projects"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            Projects
          </a>

          <a
            href="/Faqs"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            FAQs
          </a>

          <a
            href="/contact"
            className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#123d2a]"
          >
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Quote button */}
          <a
            href="/contact"
            className="rounded-full bg-[#123d2a] px-6 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#0c2e20]"
          >
            Get a Quote
          </a>

          

        </div>
      </div>
    </header>
  );
};

export default Navbar;