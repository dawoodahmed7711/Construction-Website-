"use client"; // needed for the filter tabs and the view toggle (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiPhone } from "react-icons/fi";

/* ---------- Images (swap for your own if needed) ---------- */
const images = {
  featured: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
  villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  residence: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
  plaza: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
  hq: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  retrofit: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  family: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  caseStudy: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  thumb1: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80",
  thumb2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
  thumb3: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80",
};

/* ---------- Page data ---------- */
const heroStats = [
  { label: "Registry", value: "PEC E-2 / No Limit" },
  { label: "Volume", value: "40+ Structures" },
  { label: "Standard", value: "BIM Level 2" },
  { label: "Structural QA", value: "0.0% Defect Index" },
];

const featured = {
  division: "Pinnacle Residential Division • Sector H, DHA Phase 5",
  title: "The Horizon Monolith",
  text: "Post-tensioned cantilevered overhangs, perimeter thermal glazing and a custom monolithic concrete frame.",
};

const categoryNames = {
  residential: "Residential",
  commercial: "Commercial",
  renovation: "Renovation",
};

const tabs = [
  { key: "all", name: "All Projects" },
  { key: "residential", name: "Residential" },
  { key: "commercial", name: "Commercial" },
  { key: "renovation", name: "Renovation" },
];

const projects = [
  {
    category: "residential",
    year: "2026",
    title: "DHA Modern Villa",
    badge: "Plot: 1 Kanal",
    ref: "BC-RES-0041",
    place: "DHA Phase 6, Lahore",
    text: "A monolithic cantilevered concrete residence with a basement leisure floor, acoustic theatre glazing and a cantilevered infinity pool.",
    specLabel: "Structural Scope",
    spec: "Monolithic Cantilever / Basement Level",
    link: "View Structural File",
    img: images.villa,
  },
  {
    category: "residential",
    year: "2025",
    title: "Bahria Town Residence",
    badge: "Plot: 3 Kanal",
    ref: "BC-RES-0038",
    place: "Bahria Town, Lahore",
    text: "Italian travertine facade wrapped around a high-efficiency smart thermal envelope with automated louvers.",
    specLabel: "Structural Scope",
    spec: "Smart Envelope / Travertine Clad",
    link: "View Specs",
    img: images.residence,
  },
  {
    category: "commercial",
    year: "2025",
    title: "Gulberg Commercial Plaza",
    badge: "Height: G+7",
    ref: "BC-COM-0022",
    place: "Main Boulevard, Gulberg",
    text: "A G+7 commercial hub with a basement parking floor, post-tensioned slabs and a Grade-60 seismic steel framework.",
    specLabel: "Civil Metrics",
    spec: "Post-Tensioned Slabs / Grade-60 Steel",
    link: "View Specs",
    img: images.plaza,
  },
  {
    category: "commercial",
    year: "2024",
    title: "Johar Town Corporate HQ",
    badge: "Area: 26,000 sq.ft",
    ref: "BC-COM-0029",
    place: "Emporium Corridor, Johar Town",
    text: "Corporate headquarters with a fair-faced off-shutter concrete frame, solar curtain wall and integrated HVAC plant floors.",
    specLabel: "Facade System",
    spec: "Off-Shutter Concrete / Solar Curtain",
    link: "View Commercial Brief",
    img: images.hq,
  },
  {
    category: "renovation",
    year: "2024",
    title: "Model Town Modernization",
    badge: "Heritage Retrofit",
    ref: "BC-REN-0021",
    place: "Model Town, Lahore",
    text: "A 1970s courtyard house retrofitted with steel frames, a glazed biophilic atrium and new MEP services.",
    specLabel: "Re-Engineering Type",
    spec: "Steel Frames / Biophilic Atrium",
    link: "View Case Study",
    img: images.retrofit,
  },
  {
    category: "residential",
    year: "2024",
    title: "DHA Family Residence",
    badge: "Plot: 1 Kanal",
    ref: "BC-RES-0033",
    place: "DHA Phase 5, Lahore",
    text: "A family home with double-height glazing, acoustic-laminated glass, solar roof arrays and warm landscape lighting.",
    specLabel: "Build Specs",
    spec: "Double-Height Glazing / Acoustic Seal",
    link: "View Specs",
    img: images.family,
  },
];

const caseThumbs = [
  { name: "Staircase", img: images.thumb1 },
  { name: "Glass Corridor", img: images.thumb2 },
  { name: "Pool Courtyard", img: images.thumb3 },
];

const caseRows = [
  { param: "Location", value: "Sector H, Phase 5, DHA Lahore" },
  { param: "Project Classification", value: "Turnkey Luxury Residential" },
  { param: "Year of Delivery", value: "Q1 2026 (Completed)" },
  { param: "Structural Consultant", value: "BuildCore Civil & MEP Division" },
  { param: "Foundation Engineering", value: "Raft Foundation with Double Grade" },
  { param: "Monolithic Concrete Spec", value: "4,500 PSI Batch Mixed" },
];

// column widths for the "Masonry" view, repeated as needed
const masonrySpans = [
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

/* ---------- Shared classes ---------- */
const label = "font-mono text-[11px] uppercase tracking-widest text-neutral-500";
const badge =
  "rounded bg-black/55 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur";
const photoFade =
  "bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.1),transparent)]";

/* ---------- Page ---------- */
export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("masonry");

  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // how many projects each tab has (for the small counters)
  const countFor = (key) =>
    key === "all" ? projects.length : projects.filter((p) => p.category === key).length;

  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14">
        <p className={`${label} mb-5`}>03 / Our Projects • Verified Portfolio</p>

        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Built. Completed. <em className="font-normal">Delivered.</em>
            </h1>
            <p className="mt-6 max-w-xl text-neutral-600">
              Explore selected residential, commercial and renovation projects
              completed by BuildCore across Lahore and Punjab. Each structure
              represents rigorous engineering benchmarks, careful measurement
              and architectural permanence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-lg border border-black/10 bg-white p-3">
                <p className={`${label} text-[9px]`}>{s.label}</p>
                <p className="mt-1 text-sm font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured project */}
        <div className="relative mt-10 h-[420px] overflow-hidden rounded-2xl md:h-[540px]">
          <Image
            src={images.featured}
            alt={featured.title}
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 ${photoFade}`} />

          <div className="absolute left-5 right-5 top-5 flex flex-wrap justify-between gap-2">
            <span className={badge}>Recent Project Showcase • 2026 Handover</span>
            <span className={badge}>Lat: 31.5204° N, Lng: 74.3587° E</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white md:flex-row md:items-end md:justify-between md:p-8">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                {featured.division}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-2 text-sm text-white/80">{featured.text}</p>
            </div>
            <Link
              href="#case-study"
              className="flex shrink-0 items-center gap-2 self-start rounded-full bg-[#b9e3a8] px-5 py-3 text-sm font-semibold text-[#123524] hover:bg-[#cdeebf] md:self-auto"
            >
              Explore Engineering Study <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FILTER BAR + GRID */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-widest ${
                  filter === tab.key
                    ? "border-[#123524] bg-[#123524] text-white"
                    : "border-black/15 hover:bg-black/5"
                }`}
              >
                {tab.name}
                <span className="opacity-60">{String(countFor(tab.key)).padStart(2, "0")}</span>
              </button>
            ))}
          </div>

          <p className={`${label} hidden text-[10px] xl:block`}>
            Displaying verified structural records
          </p>

          <div className="flex self-start rounded-full border border-black/15 p-1 font-mono text-[10px] uppercase tracking-widest">
            {["masonry", "blueprint"].map((mode) => (
              <button
                key={mode}
                onClick={() => setView(mode)}
                className={`rounded-full px-3 py-1.5 ${
                  view === mode ? "bg-[#123524] text-white" : "text-neutral-500"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {visibleProjects.map((project, index) => (
            <article
              key={project.ref}
              className={`rounded-2xl border border-black/10 bg-white p-3 ${
                view === "masonry"
                  ? masonrySpans[index % masonrySpans.length]
                  : "md:col-span-6 lg:col-span-4"
              }`}
            >
              <div className="relative h-64 overflow-hidden rounded-xl md:h-72">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded bg-[#b9e3a8] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#123524]">
                    {categoryNames[project.category]}
                  </span>
                  <span className={badge}>Handover {project.year}</span>
                </div>
                <span className={`${badge} absolute bottom-3 right-3`}>
                  {project.badge}
                </span>
              </div>

              <div className="p-3">
                <div className="flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  <span>Project Ref: {project.ref}</span>
                  <span>{project.place}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{project.text}</p>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-black/10 pt-3">
                  <div>
                    <p className={`${label} text-[9px]`}>{project.specLabel}</p>
                    <p className="mt-1 text-xs font-medium">{project.spec}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#123524] hover:underline"
                  >
                    {project.link} <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case-study" className="border-y border-black/10 bg-[#ecebe6]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <p className={label}>Architectural Case Study // BC-RES-0041</p>
              <span className="rounded bg-[#b9e3a8] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#123524]">
                Flagship 2026
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              The DHA Villa: Cantilevered Precision Meets Thermal Integrity
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left: photos */}
            <div className="lg:col-span-3">
              <div className="relative h-[380px] overflow-hidden rounded-2xl md:h-[460px]">
                <Image
                  src={images.caseStudy}
                  alt="DHA Villa cantilever"
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${photoFade}`} />
                <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                  <span className={badge}>14-Foot Reinforced Cantilever Overhang</span>
                  <span className={badge}>4,500 PSI Compressive Strength Mix</span>
                </div>
                <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-lg bg-black/55 p-3 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur">
                  <span>Coverage: 4,500 sq ft</span>
                  <span>Timeline: 14 months</span>
                  <span>Tolerance: ±3 mm</span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {caseThumbs.map((t) => (
                  <div key={t.name} className="relative h-24 overflow-hidden rounded-lg">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${photoFade}`} />
                    <p className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-wider text-white">
                      {t.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: narrative + spec table */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold">Engineering Narrative</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Commissioned as a private residence in Sector H, DHA Phase 5,
                the design demanded an uninterrupted 14-foot monolithic concrete
                cantilever projecting over the main terrace without intermediate
                columns. BuildCore implemented post-tensioned tendon cables
                coupled with high-durability Grade-60 steel.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                To mitigate Lahore&apos;s extreme thermal variance, the envelope
                incorporates double-glazed argon-filled low-E panels with
                thermal-break aluminium profiles, cutting cooling load
                significantly.
              </p>

              <div className="mt-6 overflow-hidden rounded-lg border border-black/10 bg-white">
                <div className="flex justify-between bg-black/5 px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                  <span>Structural Parameter</span>
                  <span>Verified Spec</span>
                </div>
                <div className="divide-y divide-black/10">
                  {caseRows.map((row) => (
                    <div key={row.param} className="grid grid-cols-2 gap-3 px-4 py-2.5 text-xs">
                      <span className="text-neutral-500">{row.param}</span>
                      <span className="font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg bg-[#123524] px-4 py-3 text-xs font-semibold text-white hover:bg-[#1b4d36]"
                >
                  <FiDownload /> Download Case Study (PDF)
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-black/20 px-4 py-3 text-xs font-semibold hover:bg-black/5"
                >
                  Inquire Similar Build
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-8 rounded-2xl bg-[#123524] p-8 text-white md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#b9e3a8]">
              Initiate Your Project // Tender Access
            </p>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight md:text-5xl">
              Have a project like this in mind?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Whether you are planning an architectural residence, commercial
              development or a complex structural renovation, our engineering
              directors are ready to review your blueprints.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Free Structural Feasibility", "Fixed-Fee Transparency", "PEC Licensed C-3"].map((chip) => (
                <span
                  key={chip}
                  className="rounded border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#b9e3a8] px-6 py-3 text-sm font-semibold text-[#123524] hover:bg-[#cdeebf]"
            >
              Start Your Project <FiArrowRight />
            </Link>
            <a
              href="tel:+924235789900"
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm"
            >
              <FiPhone /> +92 (42) 3578-9900
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}