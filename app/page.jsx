'use client'
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    text: "Modern homes built with thoughtful planning, quality materials and careful execution.",
  },
  {
    number: "02",
    title: "Commercial Construction",
    text: "Functional commercial spaces designed around your business and long-term needs.",
  },
  {
    number: "03",
    title: "Renovation",
    text: "Transforming existing spaces with better layouts, modern finishes and functionality.",
  },
  {
    number: "04",
    title: "Architectural Planning",
    text: "Smart planning that connects design, structure, functionality and construction.",
  },
  {
    number: "05",
    title: "Project Management",
    text: "Organized project coordination from the first stage to final handover.",
  },
  {
    number: "06",
    title: "Finishing",
    text: "Complete finishing solutions with attention to the smallest details.",
  },
];

const projects = [
  {
    title: "Modern Family Villa",
    location: "DHA, Lahore",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Crescent Business Center",
    location: "Islamabad",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Contemporary Residence",
    location: "Bahria Town",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
  },
];

const faqs = [
  {
    question: "How long does a construction project take?",
    answer:
      "The timeline depends on the size and complexity of the project. We provide an estimated schedule after understanding your requirements.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. We can handle architectural planning, construction, project management and finishing.",
  },
  {
    question: "Can you renovate an existing property?",
    answer:
      "Yes. We work on both residential and commercial renovation projects.",
  },
  {
    question: "How do you maintain quality?",
    answer:
      "Our team follows planned construction processes and quality checks throughout the project.",
  },
];

const SectionLabel = ({ children }) => (
  <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#123d2a]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#123d2a]" />
    {children}
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-[#111]">

      {/* ==================================================
          HERO
      ================================================== */}

      <section id="home" className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1380px] px-5 py-8 lg:px-8 lg:py-12">

          {/* Small top information */}
          <div className="mb-10 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400">
              Construction / Architecture / Development
            </p>

            <p className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400 md:block">
              Est. 2016 — Pakistan
            </p>
          </div>

          {/* Hero grid */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT CONTENT */}
            <div className="lg:pr-8">

              <SectionLabel>
                Building With Purpose
              </SectionLabel>

              <h1 className="max-w-2xl text-[52px] font-semibold leading-[0.91] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                Building spaces.
                <br />
                <span className="text-[#123d2a]">
                  Creating foundations.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-500">
                We create residential and commercial spaces through thoughtful
                planning, reliable construction and attention to every detail.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-5">

                <a
                  href="#projects"
                  className="flex items-center gap-5 rounded-full bg-[#123d2a] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-white transition hover:bg-[#0b2d1e]"
                >
                  Explore Projects
                  <span className="text-base">↗</span>
                </a>

                <a
                  href="#contact"
                  className=" border-1 border-black px-3 py-3.5 border-black rounded-4xl  flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wide"
                >
                  Start a Project
                  <span className="text-[#123d2a]">↗</span>
                </a>

              </div>

              {/* Hero stats */}
              <div className="mt-12 grid max-w-md grid-cols-3 border-t border-neutral-200 pt-5">

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    08+
                  </p>
                  <p className="mt-1 font-mono text-[7px] uppercase tracking-wider text-neutral-400">
                    Years
                  </p>
                </div>

                <div className="border-l border-neutral-200 pl-5">
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    40+
                  </p>
                  <p className="mt-1 font-mono text-[7px] uppercase tracking-wider text-neutral-400">
                    Projects
                  </p>
                </div>

                <div className="border-l border-neutral-200 pl-5">
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    100%
                  </p>
                  <p className="mt-1 font-mono text-[7px] uppercase tracking-wider text-neutral-400">
                    Commitment
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="overflow-hidden rounded-[14px]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"
                  alt="Modern architectural house"
                  className="h-[480px] w-full object-cover sm:h-[560px] lg:h-[650px]"
                />
              </div>

              {/* Image floating card */}
              <div className="absolute bottom-5 left-5 rounded-[10px] bg-white/95 px-5 py-4 backdrop-blur-sm">
                <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">
                  Current Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#123d2a]" />

                  <span className="text-xs font-medium">
                    12 Projects In Progress
                  </span>
                </div>
              </div>

              {/* Small image number */}
              <div className="absolute right-5 top-5 rounded-full bg-[#123d2a] px-3 py-2 font-mono text-[8px] text-white">
                01 / 06
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          EXPERIENCE
      ================================================== */}

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div className="overflow-hidden rounded-[14px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
                alt="Construction workers"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>

              <SectionLabel>
                Our Experience
              </SectionLabel>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Experience you can build on.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
                Every project starts with clear communication, careful
                planning and a team that understands how to turn an idea
                into something real.
              </p>

              <div className="mt-10 grid grid-cols-2 border-t border-neutral-200">

                <div className="border-b border-r border-neutral-200 py-7 pr-5">
                  <p className="text-4xl font-semibold tracking-[-0.05em]">
                    08+
                  </p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-neutral-400">
                    Years Experience
                  </p>
                </div>

                <div className="border-b border-neutral-200 py-7 pl-5">
                  <p className="text-4xl font-semibold tracking-[-0.05em]">
                    40+
                  </p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-neutral-400">
                    Projects Delivered
                  </p>
                </div>

                <div className="border-r border-neutral-200 py-7 pr-5">
                  <p className="text-4xl font-semibold tracking-[-0.05em]">
                    25+
                  </p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-neutral-400">
                    Team Members
                  </p>
                </div>

                <div className="py-7 pl-5">
                  <p className="text-4xl font-semibold tracking-[-0.05em]">
                    100%
                  </p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-neutral-400">
                    Commitment
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          ABOUT
      ================================================== */}

      <section id="about">
        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <SectionLabel>
                About BuildCore
              </SectionLabel>

              <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                More than construction
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                We don't just build structures. We build spaces designed to
                become part of people's lives.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-500">
                BuildCore brings together construction, planning and project
                management to deliver spaces that balance functionality,
                quality and modern design.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wide"
              >
                Discover BuildCore
                <span className="text-[#123d2a]">↗</span>
              </a>

            </div>

          </div>

          <div className="mt-14 overflow-hidden rounded-[14px]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
              alt="Modern home"
              className="h-[450px] w-full object-cover md:h-[600px]"
            />
          </div>

        </div>
      </section>


      {/* ==================================================
          SERVICES
      ================================================== */}

      <section id="services" className="border-y border-neutral-200">

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">

            <div>
              <SectionLabel>
                What We Do
              </SectionLabel>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                From first idea to final detail.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500 md:ml-auto">
              Complete construction services designed to keep your project
              simple, organized and moving forward.
            </p>

          </div>

          <div className="border-t border-neutral-200">

            {services.map((service) => (
              <div
                key={service.number}
                className="group grid gap-5 border-b border-neutral-200 py-7 transition hover:bg-[#f7faf6] md:grid-cols-[70px_1fr_1fr_auto] md:items-center md:px-4"
              >

                <span className="font-mono text-[9px] text-neutral-400">
                  {service.number}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>

                <p className="max-w-md text-xs leading-6 text-neutral-500">
                  {service.text}
                </p>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition group-hover:border-[#123d2a] group-hover:bg-[#d8f5d0]">
                  ↗
                </span>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ==================================================
          WHY BUILDCORE
      ================================================== */}

      <section className="bg-[#dff5d8]">

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <SectionLabel>
                Why BuildCore
              </SectionLabel>

              <h2 className="max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Built around your project.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-600">
                We keep the construction process straightforward. From the
                first conversation to final handover, every stage is planned
                with your goals in mind.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#123d2a] px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-white"
              >
                Talk to our team
                <span>↗</span>
              </a>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                ["01", "Clear Communication", "Regular updates and transparent communication throughout your project."],
                ["02", "Quality First", "Careful execution and attention to detail at every stage."],
                ["03", "Reliable Teams", "Experienced professionals who understand construction from the ground up."],
                ["04", "On-Time Delivery", "Structured planning designed to keep your project moving."],
              ].map(([number, title, text], index) => (
                <div
                  key={number}
                  className={`rounded-[12px] p-7 ${
                    index === 1
                      ? "bg-[#123d2a] text-white"
                      : "bg-white"
                  }`}
                >

                  <span
                    className={`font-mono text-[9px] ${
                      index === 1
                        ? "text-white/40"
                        : "text-neutral-400"
                    }`}
                  >
                    {number}
                  </span>

                  <h3 className="mt-12 text-xl font-semibold">
                    {title}
                  </h3>

                  <p
                    className={`mt-3 text-xs leading-6 ${
                      index === 1
                        ? "text-white/60"
                        : "text-neutral-500"
                    }`}
                  >
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section id="projects">

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>

              <SectionLabel>
                Selected Projects
              </SectionLabel>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Spaces we're proud to build.
              </h2>

            </div>

            <a
              href="#"
              className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wide"
            >
              View all projects
              <span>↗</span>
            </a>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className={index === 0 ? "md:col-span-2" : ""}
              >

                <div className="group relative overflow-hidden rounded-[14px]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                      index === 0
                        ? "h-[500px] md:h-[620px]"
                        : "h-[400px]"
                    }`}
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-wider">
                    {project.type}
                  </span>

                </div>

                <div className="mt-4 flex items-start justify-between">

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>

                    <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400">
                      {project.location}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200">
                    ↗
                  </span>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* ==================================================
          PROCESS
      ================================================== */}

      <section className="bg-[#123d2a] text-white">

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#d8f5d0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8f5d0]" />
                Our Process
              </div>

              <h2 className="max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                A clear process from start to finish.
              </h2>

            </div>

            <div className="border-t border-white/15">

              {[
                ["01", "Discover", "We understand your goals, requirements, budget and vision."],
                ["02", "Plan", "We develop the right approach, timeline and execution plan."],
                ["03", "Build", "Construction begins with regular quality checks and updates."],
                ["04", "Deliver", "We complete the final details and hand over your finished space."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid gap-5 border-b border-white/15 py-7 md:grid-cols-[60px_180px_1fr]"
                >

                  <span className="font-mono text-[9px] text-white/40">
                    {number}
                  </span>

                  <h3 className="text-xl font-medium">
                    {title}
                  </h3>

                  <p className="max-w-md text-xs leading-6 text-white/50">
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          TESTIMONIAL
      ================================================== */}

      <section>

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <SectionLabel>
            Client Stories
          </SectionLabel>

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              What our clients say.
            </h2>

            <div className="rounded-[14px] bg-[#f4f7f3] p-7 md:p-10">

              <div className="text-[#123d2a]">
                ★ ★ ★ ★ ★
              </div>

              <blockquote className="mt-7 max-w-3xl text-2xl font-medium leading-[1.25] tracking-[-0.025em] md:text-4xl">
                “BuildCore made the entire process feel simple. From planning
                to handover, their team was professional and transparent.”
              </blockquote>

              <div className="mt-10 border-t border-neutral-200 pt-5">

                <p className="text-sm font-semibold">
                  Ahmed Khan
                </p>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400">
                  Residential Client
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          FAQ
      ================================================== */}

      <section id="faq" className="border-t border-neutral-200">

        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <SectionLabel>
                FAQs
              </SectionLabel>

              <h2 className="max-w-md text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Questions, answered.
              </h2>

            </div>

            <div className="border-t border-neutral-200">

              {faqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-neutral-200"
                  >

                    <button
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 py-6 text-left"
                    >

                      <span className="text-sm font-medium md:text-base">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-lg transition ${
                          isOpen
                            ? "rotate-45 bg-[#d8f5d0]"
                            : ""
                        }`}
                      >
                        +
                      </span>

                    </button>

                    {isOpen && (
                      <div className="pb-6 pr-12">
                        <p className="max-w-2xl text-sm leading-7 text-neutral-500">
                          {faq.answer}
                        </p>
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section id="contact" className="px-5 pb-5 lg:px-8 lg:pb-8">

        <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[14px] bg-[#d8f5d0]">

          <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">

            <SectionLabel>
              Start Something New
            </SectionLabel>

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
                Have a project
                <br />
                in mind?
              </h2>

              <a
                href="mailto:hello@buildcore.com"
                className="flex w-fit items-center gap-6 rounded-full bg-[#123d2a] px-6 py-4 text-[10px] font-medium uppercase tracking-wide text-white"
              >
                Let's Talk
                <span>↗</span>
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
