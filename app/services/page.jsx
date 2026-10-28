'use client'
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMaximize,
  FiTool,
  FiZap,
} from "react-icons/fi";



/* ---------- Images (swap for your own if needed) ---------- */
const images = {
  hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
  residential: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
  commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  renovationBefore: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
  renovationAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
};

/* ---------- Page data ---------- */
const heroChips = [
  "Residential",
  "Commercial",
  "Renovation",
  "Architectural & BIM",
  "Turnkey",
  "Finishing",
];

const disciplines = [
  {
    title: "Residential Construction",
    place: "Villas • Farmhouses • Private Estates",
    text: "Custom homes built from foundation to final coat, with structural design, material sourcing and site supervision handled by one team.",
    tags: ["Grey Structure", "Custom Villas", "Farmhouses", "Boundary Walls"],
  },
  {
    title: "Commercial Construction",
    place: "Plazas • Offices • Mixed-Use",
    text: "Multi-storey commercial buildings engineered for load, fire safety and tenant flexibility, delivered to a fixed schedule.",
    tags: ["Plazas", "Corporate Offices", "Showrooms", "Basements"],
  },
  {
    title: "Renovation & Retrofitting",
    place: "Structural Repair • Remodeling",
    text: "Structural assessment, strengthening and remodeling of existing buildings without compromising safety or occupancy.",
    tags: ["Structural Audits", "Jacketing", "Extensions", "Waterproofing"],
  },
  {
    title: "Architectural Planning & BIM",
    place: "Design • 3D Modeling • Approvals",
    text: "Concept drawings, working drawings and BIM coordination that catch clashes on screen before they reach the site.",
    tags: ["Concept Design", "BIM Models", "LDA Approvals", "BOQ"],
  },
  {
    title: "Turnkey Project Management",
    place: "Planning • Budget • Handover",
    text: "One accountable partner for scheduling, procurement, contractors and quality control, from first survey to keys in hand.",
    tags: ["Scheduling", "Procurement", "Cost Control", "Handover"],
  },
  {
    title: "Interior & Exterior Finishing",
    place: "Facades • Interiors • Landscaping",
    text: "Premium finishing work including facades, flooring, joinery, lighting and landscaping, completed to a snag-free standard.",
    tags: ["Facades", "Joinery", "Flooring", "Landscaping"],
  },
];

const residentialFeatures = [
  { title: "Custom Homes", text: "Layouts designed around how your family actually lives." },
  { title: "Structural Integrity", text: "Earthquake-aware design checked by licensed engineers." },
  { title: "Finishing Craft", text: "Skilled trades and premium materials in every room." },
  { title: "Complete Handover", text: "Snag-free delivery with drawings and warranties." },
];

const commercialFeatures = [
  { title: "Commercial Plazas", text: "Retail and office floors with efficient circulation." },
  { title: "Corporate Headquarters", text: "Custom-built offices for growing organizations." },
  { title: "Modernized Facades", text: "Glazing and cladding systems that age well." },
  { title: "Multi-Tenant Spaces", text: "Flexible layouts with separate utilities." },
];

const renovationPoints = [
  {
    icon: FiTool,
    title: "Structural Rehabilitation",
    text: "We test, reinforce and repair aging structures so they meet current safety codes.",
  },
  {
    icon: FiMaximize,
    title: "Spatial Optimization",
    text: "Layouts are reworked to add usable space, natural light and better flow.",
  },
  {
    icon: FiZap,
    title: "Energy & MEP Modernization",
    text: "New wiring, plumbing and cooling systems that cut running costs.",
  },
];

const stages = [
  {
    title: "Consultation & Site Analysis",
    text: "We survey the plot, review your brief and agree on scope, budget and timeline.",
    time: "Week 1–2",
  },
  {
    title: "Planning & Municipal Clearances",
    text: "Drawings, structural design and approvals are prepared and submitted for you.",
    time: "Week 3–8",
  },
  {
    title: "Construction & Milestone Audits",
    text: "Building begins with stage-wise inspections and weekly photo reports.",
    time: "Month 3–12",
  },
  {
    title: "Quality Snagging & Handover",
    text: "A full defect check is completed before we hand over the keys and documents.",
    time: "Final 2 weeks",
  },
];

/* ---------- Shared classes + small component ---------- */
const label = "font-mono text-[11px] uppercase tracking-widest text-neutral-500";
const tag =
  "rounded border border-black/10 bg-[#ecebe6] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-600";
const featureBox = "rounded-lg border border-black/10 bg-white p-4";
const photoFade =
  "bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.1),transparent)]";
// faint square grid used as the CTA background
const gridPattern =
  "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]";

function SectionHeader({ tag, title, text }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className={`${label} mb-3`}>{tag}</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {text && <p className="max-w-xs text-sm text-neutral-500">{text}</p>}
    </div>
  );
}

function Photo({ src, alt, caption, className = "", priority = false, sizes = "(min-width: 1024px) 560px, 100vw" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      <div className={`absolute inset-0 ${photoFade}`} />
      {caption && (
        <p className="absolute bottom-4 left-5 right-5 font-mono text-[10px] uppercase tracking-widest text-white/80">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ---------- Page ---------- */
export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className={`${label} mb-5`}>01 / Services & Expertise</p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Construction Expertise Built Around Your Vision.
            </h1>
          </div>

          <div>
            <p className="text-neutral-600">
              BuildCore provides end-to-end residential, commercial and
              structural engineering services across Punjab. From site surveys
              and architectural drawings to turnkey handover, one team is
              accountable for every stage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-[#123524] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1b4d36]"
              >
                View Our Projects
              </Link>
              <Link
                href="#methodology"
                className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-semibold hover:bg-black/5"
              >
                Our Process
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {heroChips.map((chip) => (
            <span key={chip} className={tag}>
              {chip}
            </span>
          ))}
        </div>

        <Photo
          src={images.hero}
          alt="Completed residential building by BuildCore"
          caption="Six disciplines • One accountable team • Lahore, Pakistan"
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="mt-6 h-[300px] md:h-[440px]"
        />
      </section>

      {/* SIX DISCIPLINES */}
      <section className="border-y border-black/10 bg-[#ecebe6]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeader
            tag="02 / Construction"
            title="Six Disciplines of Construction Excellence"
            text="Each discipline is led by a dedicated specialist, so your project gets the right expertise at the right stage."
          />

          <div className="divide-y divide-black/10 border-y border-black/10">
            {disciplines.map((d, index) => (
              <div
                key={d.title}
                className="grid gap-4 py-7 md:grid-cols-12 md:items-start md:gap-6"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-bold uppercase tracking-wide">
                    {d.title}
                  </h3>
                  <p className={`${label} mt-1 text-[10px]`}>{d.place}</p>
                </div>

                <div className="md:col-span-7">
                  <p className="max-w-lg text-sm text-neutral-600">{d.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span key={t} className={tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 md:justify-self-end">
                  <Link
                    href="/contact"
                    aria-label={`Enquire about ${d.title}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/20 hover:bg-[#123524] hover:text-white"
                  >
                    <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          tag="03 / Residential"
          title="Crafted for Generations: Bespoke Private Estates"
        />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Photo
            src={images.residential}
            alt="Luxury private residence"
            caption="Private residence • Gulberg, Lahore"
            className="h-[380px] md:h-[460px]"
          />

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {residentialFeatures.map((f) => (
                <div key={f.title} className={featureBox}>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs text-neutral-600">{f.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-black/10 px-4 py-3">
              <p className={`${label} text-[10px]`}>Typical build: 8–14 months</p>
              <Link href="/projects" className="flex items-center gap-1 text-xs font-semibold text-[#123524]">
                See homes <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="border-y border-black/10 bg-[#ecebe6]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className={`${label} mb-3`}>04 / Commercial</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Engineered for High-Density Urban Performance
            </h2>
            <p className="mt-5 max-w-lg text-neutral-600">
              We construct commercial real estate engineered for longevity,
              tenant comfort and rapid return on investment. Every structure is
              designed around load, fire safety and future expansion.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {commercialFeatures.map((f) => (
                <div key={f.title} className={featureBox}>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs text-neutral-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Photo
            src={images.commercial}
            alt="Commercial tower by BuildCore"
            caption="Mixed-use development • Johar Town"
            className="h-[380px] md:h-[500px]"
          />
        </div>
      </section>

      {/* RENOVATION */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          tag="05 / Renovation & Retrofit"
          title="Revitalizing Structure. Reimagining Space."
          text="We strengthen and reshape existing buildings so they perform like new, with minimal disruption to the people using them."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Photo
            src={images.renovationBefore}
            alt="Structure during renovation"
            caption="Before • Structural stripping"
            className="h-[300px] md:h-[380px]"
          />
          <Photo
            src={images.renovationAfter}
            alt="Finished renovated interior"
            caption="After • Completed interior"
            className="h-[300px] md:h-[380px]"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {renovationPoints.map((p) => (
            <div key={p.title}>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#123524] text-white">
                <p.icon />
              </span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="bg-[#123524] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#b9e3a8]">
                06 / Methodology
              </p>
              <h2 className="max-w-md text-3xl font-bold tracking-tight md:text-4xl">
                Our Four-Stage Engineering Methodology
              </h2>
            </div>
            <p className="max-w-xs text-sm text-white/70">
              A disciplined, transparent delivery framework from the first
              handshake to certified occupancy.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((s, index) => (
              <div
                key={s.title}
                className="flex flex-col rounded-xl border border-white/15 bg-white/5 p-6"
              >
                <p className="font-mono text-xs text-[#b9e3a8]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm text-white/70">{s.text}</p>
                <p className="mt-6 border-t border-white/15 pt-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {s.time}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:flex-row sm:items-center">
            <p>Fixed-scope proposals • No hidden costs</p>
            <Link href="/contact" className="flex items-center gap-1 text-[#b9e3a8] hover:text-white">
              Request a site audit <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className={`rounded-2xl bg-[#1a1f1c] p-8 text-white md:p-12 ${gridPattern}`}>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#b9e3a8]">
            Start Your Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Let's Build Your Project.
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Whether you are planning a villa, a plaza or a full renovation, our
            engineering directors will help you shape scope, budget and
            timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-[#b9e3a8] px-5 py-3 text-sm font-semibold text-[#123524] hover:bg-[#cdeebf]"
            >
              Request a Consultation <FiArrowRight />
            </Link>
            <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/70">
              PEC Registered
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/70">
              Free Site Visit
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}