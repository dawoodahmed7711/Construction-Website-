import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "About | BuildCore Engineering",
  description:
    "Learn about BuildCore, a Lahore-based structural construction and civil engineering firm.",
};

/* ---------- Images (swap for your own if needed) ---------- */
const images = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
  site: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  ceo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  architect: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
};

/* ---------- Page data ---------- */
const overviewStats = [
  { value: "8+", label: "Years Active" },
  { value: "40+", label: "Projects Delivered" },
  { value: "25+", label: "Team Specialists" },
];

const milestones = [
  {
    year: "2017",
    title: "Inception",
    tag: "Launch",
    text: "Founded with a core team of 5 structural and civil engineers, focused on scientific site planning and certified material sourcing.",
  },
  {
    year: "2019",
    title: "Commercial Expansion",
    tag: "Growth",
    text: "Completed our first mid-rise commercial development in Gulberg, introducing milestone-based project reporting for clients.",
  },
  {
    year: "2021",
    title: "Architectural Synergy",
    tag: "Design-Build",
    text: "Brought design and construction under one roof, delivering integrated projects in DHA Phase 6 and Bahria Town.",
  },
  {
    year: "2024+",
    title: "Sustainable Standards",
    tag: "Active",
    active: true,
    text: "Adopted energy-efficient materials and waste-tracking on every site, and expanded into structural renovation.",
  },
];

const pillars = [
  {
    title: "Experienced Team",
    text: "Licensed civil engineers, PEC-verified project managers and trained site crews on every build.",
    note: "8+ years of practice",
  },
  {
    title: "Quality Materials",
    text: "We only use tested Grade 60 reinforcement steel, certified cement and graded aggregates.",
    note: "Lab-tested batches",
  },
  {
    title: "Transparent Communication",
    text: "Weekly photo reports, clear budgets and one point of contact from the first meeting to handover.",
    note: "Weekly site updates",
  },
  {
    title: "Professional Management",
    text: "Detailed scheduling, cost tracking and safety checks keep each project organized and predictable.",
    note: "Structured workflows",
  },
  {
    title: "On-Time Delivery",
    text: "Rigorous milestone tracking means your project is finished on the date we agreed on.",
    note: "Milestone-based planning",
  },
  {
    title: "Attention to Detail",
    text: "From reinforcement spacing to final finishing, every stage is inspected before we move on.",
    note: "Stage-wise inspection",
  },
];

const clients = [
  "Hameed Developers",
  "Crescent Estates",
  "Ravi Holdings",
  "Noor Group",
  "Faisal Builders",
  "Metro Realty",
];

const leaders = [
  {
    name: "Tariq Rehman",
    role: "CEO & Founder",
    img: images.ceo,
    text: "Civil engineer with over 12 years of experience leading residential and commercial builds across Punjab.",
  },
  {
    name: "Zoya Haroon",
    role: "Lead Architect",
    img: images.architect,
    text: "Sustainable design specialist who shapes every BuildCore project from concept sketch to final drawings.",
  },
];

const staff = [
  {
    initials: "FM",
    name: "Engr. Farhan Malik",
    role: "Project Manager",
    text: "Plans schedules and budgets, and keeps clients updated at every milestone.",
  },
  {
    initials: "BA",
    name: "Engr. Bilal Asim",
    role: "Structural Engineer",
    text: "Designs and verifies structural systems to meet PEC and local safety codes.",
  },
  {
    initials: "KS",
    name: "Kamran Sheikh",
    role: "Site Supervisor",
    text: "Oversees daily site work, material checks and crew safety from start to handover.",
  },
];

const bigStats = [
  { value: "08+", label: "Years of Practice", text: "Delivering reliable builds since 2017." },
  { value: "40+", label: "Projects Delivered", text: "Homes, plazas and renovations completed." },
  { value: "25+", label: "Team Specialists", text: "Engineers, architects and supervisors." },
  { value: "100%", label: "Quality & Safety", text: "Every project passes full compliance checks." },
];

/* ---------- Shared classes + small component ---------- */
const card = "rounded-xl border border-black/10 bg-white p-6";
const label = "font-mono text-[11px] uppercase tracking-widest text-neutral-500";
// dark fade used on top of photos so white text stays readable
const photoFade =
  "bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.15),transparent)]";

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

/* ---------- Page ---------- */
export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <p className={`${label} mb-5`}>01 / About BuildCore</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Building With Purpose. Delivering With Precision.
        </h1>
        <p className="mt-6 max-w-2xl text-neutral-600">
          An architectural construction and structural civil engineering
          practice based in Lahore. We orchestrate complex builds through
          meticulous methodology, uncompromising material standards, and
          tactical honesty.
        </p>

        <div className="relative mt-10 h-[300px] overflow-hidden rounded-2xl md:h-[460px]">
          <Image
            src={images.hero}
            alt="BuildCore headquarters"
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 ${photoFade}`} />
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-white/80">
            <span>BuildCore Headquarters • Gulberg III, Lahore • Est. 2017</span>
            <span>Lat 31.5204 / Lng 74.3587</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-y border-black/10 bg-[#ecebe6]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className={`${label} mb-4`}>02 / Editorial Overview</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              More Than Construction.
            </h2>
            <p className="mt-5 text-neutral-600">
              BuildCore is a Lahore-based structural construction and civil
              engineering firm with 8+ years of dedicated practice across luxury
              residential estates, modern commercial plazas and complex
              structural renovations.
            </p>
            <blockquote className="mt-6 rounded-lg border border-black/10 bg-white p-4 text-sm italic text-neutral-600">
              We remove the ambiguity of traditional construction by tracking
              every material lot on site and aligning concrete, steel and timber
              deliveries with the project plan.
            </blockquote>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-neutral-600">
              Founded in 2017 on civil engineering benchmarks and strict
              compliance, our studio works as a disciplined link between the
              client's vision and the built result. Every project, from bespoke
              villas to commercial towers, follows the same standard.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Through real-time site reporting, transparent milestone accounting
              and a direct client portal, you always know exactly where your
              project stands.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {overviewStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-black/10 bg-white p-4"
                >
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className={`${label} mt-1 text-[9px]`}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          tag="03 / Evolution & Heritage"
          title="From Ambitious Foundations to Industry Benchmarks"
          text="A progression of the defined engineering trajectory, told through the milestones that shaped us."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Photo card */}
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl">
            <Image
              src={images.site}
              alt="Engineers on site"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className={`absolute inset-0 ${photoFade}`} />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#b9e3a8]">
                Site Audit
              </p>
              <h3 className="text-xl font-bold">Sub-Millimeter Site Auditing</h3>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Every stage is verified on site by PEC-registered structural
                supervisors against digital coordinate plans.
              </p>
            </div>
          </div>

          {/* Timeline cards */}
          <div className="flex flex-col gap-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className={`${card} flex gap-5 ${
                  m.active ? "border-[#123524] bg-[#f1f7ee]" : ""
                }`}
              >
                <p className="w-14 shrink-0 text-lg font-bold">{m.year}</p>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{m.title}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                        m.active
                          ? "bg-[#123524] text-white"
                          : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 md:grid-cols-2">
        <div className="rounded-2xl bg-[#e6e5e0] p-8">
          <p className={label}>01 / Our Mission</p>
          <h3 className="mt-4 text-sm font-bold uppercase tracking-widest">Mission</h3>
          <p className="mt-4 text-2xl font-medium leading-snug">
            "To deliver reliable construction solutions through quality,
            transparency, and professional execution."
          </p>
          <p className="mt-5 text-sm text-neutral-600">
            We design and construct to the highest engineering tolerances,
            providing absolute clarity and accountability at every step.
          </p>
        </div>

        <div className="rounded-2xl bg-[#c9e3c1] p-8">
          <p className={`${label} text-[#123524]/70`}>02 / Strategic Vision</p>
          <h3 className="mt-4 text-sm font-bold uppercase tracking-widest">Vision</h3>
          <p className="mt-4 text-2xl font-medium leading-snug">
            "To create lasting spaces that improve the way people live and work."
          </p>
          <p className="mt-5 text-sm text-[#123524]/80">
            We aim to be the most trusted name in sustainable, well-engineered
            construction across Pakistan.
          </p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-black/10 bg-[#ecebe6]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-8 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <p className={`${label} mb-2`}>04 / Client Collaboration</p>
              <h2 className="text-2xl font-bold tracking-tight">
                Trusted by Institutional Developers & Private Clients
              </h2>
            </div>
            <p className={label}>Lahore • Islamabad • Karachi</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((name) => (
              <div
                key={name}
                className="rounded-lg border border-black/10 bg-white px-3 py-5 text-center font-mono text-[10px] uppercase tracking-wider text-neutral-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUILDCORE */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          tag="05 / Technical Pillars"
          title="Why BuildCore"
          text="A systematic operational framework that guarantees stability, transparent auditing and verified trust on every site."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, index) => (
            <div key={p.title} className={card}>
              <p className="font-mono text-xs text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.text}</p>
              <p className={`${label} mt-5 border-t border-black/10 pt-3 text-[10px]`}>
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionHeader
          tag="06 / Core Leadership"
          title="People Behind the Projects"
          text="A multidisciplinary collective of engineers, architects and construction managers."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Two photo cards */}
          {leaders.map((person) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-xl border border-black/10 bg-white"
            >
              <div className="relative h-72">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className={`${label} text-[10px]`}>{person.role}</p>
                <h3 className="mt-1 text-lg font-semibold">{person.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{person.text}</p>
              </div>
            </div>
          ))}

          {/* Stacked text cards */}
          <div className="flex flex-col gap-4">
            {staff.map((person) => (
              <div key={person.name} className={card}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#123524] text-xs font-semibold text-white">
                    {person.initials}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{person.name}</h3>
                    <p className={`${label} text-[9px]`}>{person.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{person.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG STATS */}
      <section className="border-t border-black/10 bg-[#ecebe6]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4">
          {bigStats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-xs text-neutral-500">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123524] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#b9e3a8]">
              07 / Initiate Your Build
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Speak directly with our project directors and structural team to
              review your architectural plans, blueprints, structural
              feasibility and delivery timelines.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-[#b9e3a8] px-5 py-3 text-sm font-semibold text-[#123524] hover:bg-[#cdeebf]"
              >
                Start a Conversation <FiArrowRight />
              </Link>
              <a
                href="tel:+923210000000"
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <FiPhone /> +92 321 000 0000
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              Project Office
            </p>
            <p className="mt-2 text-sm">
              Plot 15-D, Main Boulevard, Gulberg III, Lahore, Pakistan
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-white/50">
              Office Hours
            </p>
            <p className="mt-2 text-sm">Monday through Saturday, 09:00 – 18:00 PKT</p>
          </div>
        </div>
      </section>
    </main>
  );
}