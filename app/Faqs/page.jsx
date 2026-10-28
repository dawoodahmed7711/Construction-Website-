"use client"; // needed for the category filter and the accordion (useState)

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

/* ---------- Image (swap for your own if it fails to load) ---------- */
const heroImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80";

/* ---------- Page data ---------- */
const trustChips = ["PEC C-3 Compliant", "Zero Hidden Costs", "Fixed-Timeline Guarantee"];

const tabs = [
  { key: "all", name: "All Questions" },
  { key: "timelines", name: "Timelines & Costing" },
  { key: "technical", name: "Technical & Structural" },
  { key: "process", name: "Process & Approvals" },
];

const faqs = [
  {
    id: 1,
    category: "timelines",
    q: "How long does a construction project take?",
    a: "Typical luxury residential turn-key builds (1 to 2 Kanal) range between 12 to 16 months from groundbreaking to final key handover. Commercial structures (G+6 to G+10) typically span 18 to 24 months, contingent on subterranean levels and soil stabilization requirements. We deliver a detailed Primavera P6 critical-path schedule before site mobilization with guaranteed milestone deadlines.",
    tags: ["Grey Structure: 5-7 Months", "MEP & Finishing: 7-9 Months", "Commissioning: 1 Month"],
  },
  {
    id: 2,
    category: "technical",
    q: "What is grey structure construction?",
    a: "Grey structure is the complete structural shell of a building: excavation, foundations, columns, beams, slabs, brickwork and rough plumbing and electrical conduits. It excludes finishing work such as tiles, paint, joinery and fixtures, which are quoted separately.",
    tags: ["Foundations", "Columns & Slabs", "Brickwork"],
  },
  {
    id: 3,
    category: "timelines",
    q: "How is construction cost estimated?",
    a: "We prepare a line-by-line Bill of Quantities from your approved drawings, pricing materials, labour and supervision separately. Estimates are fixed-scope, and any variation is approved by you in writing before the work begins.",
    tags: ["BOQ Based", "Fixed Scope", "Written Variations"],
  },
  {
    id: 4,
    category: "technical",
    q: "Do you handle renovation projects?",
    a: "Yes. We carry out structural assessment, strengthening, remodeling and MEP upgrades for existing homes and commercial buildings, and we plan the work to keep disruption to occupants as low as possible.",
    tags: ["Structural Audit", "Retrofitting", "Remodeling"],
  },
  {
    id: 5,
    category: "technical",
    q: "Do you provide architectural planning?",
    a: "Yes. Our in-house architects prepare concept designs, working drawings and 3D models, and coordinate structural and MEP drawings so problems are found on paper instead of on site.",
    tags: ["Concept Design", "Working Drawings", "BIM Coordination"],
  },
  {
    id: 6,
    category: "process",
    q: "Do you provide project management?",
    a: "Yes. A dedicated project manager and site engineer handle scheduling, procurement, subcontractors and quality checks, and send you weekly photo and progress reports until handover.",
    tags: ["Weekly Reports", "Cost Control", "Quality Audits"],
  },
  {
    id: 7,
    category: "process",
    q: "What areas do you provide construction services in?",
    a: "We build across Lahore and the wider Punjab region, including Gujranwala, Faisalabad and Sialkot. For projects beyond these areas, contact us and we will confirm feasibility.",
    tags: ["Lahore", "Punjab"],
  },
  {
    id: 8,
    category: "timelines",
    q: "How can I request a quotation?",
    a: "Send your plot details through the contact form or call our office. We arrange a free site visit and share a detailed quotation within five working days.",
    tags: ["Free Site Visit", "5 Working Days"],
  },
  {
    id: 9,
    category: "process",
    q: "Can I visit a completed BuildCore project?",
    a: "Yes. With prior notice we arrange visits to completed and ongoing projects, with the permission of the owners, so you can see the quality of our work in person.",
    tags: ["By Appointment"],
  },
  {
    id: 10,
    category: "process",
    q: "What information do you need before starting a project?",
    a: "Plot size and location, approved or draft drawings, your budget range and target timeline. A soil test report helps, and we can arrange one if you do not have it.",
    tags: ["Plot Details", "Drawings", "Budget & Timeline"],
  },
];

/* ---------- Shared classes ---------- */
const label = "font-mono text-[10px] uppercase tracking-widest text-neutral-500";
const chip =
  "rounded border border-black/10 bg-black/[0.03] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-600";
// faint square grid used as the CTA background
const gridPattern =
  "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]";

/* ---------- Page ---------- */
export default function FaqsPage() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(1); // first question starts open

  const visibleFaqs =
    filter === "all" ? faqs : faqs.filter((f) => f.category === filter);

  const countFor = (key) =>
    key === "all" ? faqs.length : faqs.filter((f) => f.category === key).length;

  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#141a17]">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className={label}>04 / FAQ • Frequently Asked Questions</p>
            <span className="rounded bg-[#b9ead0] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#123524]">
              Verified Client Directory
            </span>
          </div>

          <h1 className="max-w-md text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-lg text-neutral-600">
            Everything you need to know before starting your construction
            project with BuildCore. Rigorous engineering standards, transparent
            financial schedules, and uncompromising site integrity across Lahore
            and Punjab.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustChips.map((c) => (
              <span key={c} className={chip}>
                {c}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`rounded-full px-4 py-2 font-mono text-[10px] tracking-wider ${
                  filter === tab.key
                    ? "bg-[#123524] text-white"
                    : "bg-black/5 text-neutral-600 hover:bg-black/10"
                }`}
              >
                {tab.name} [{String(countFor(tab.key)).padStart(2, "0")}]
              </button>
            ))}
          </div>
        </div>

        {/* Image card */}
        <div className="relative">
          <span className="absolute -top-3 right-4 z-10 flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[9px] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#123524]" />
            ISO 9001:2015 Audited
          </span>

          <div className="relative h-[340px] overflow-hidden rounded-2xl border-4 border-[#123524] md:h-[400px]">
            <Image
              src={heroImage}
              alt="Engineers reviewing site plans"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-white/90 p-3 backdrop-blur">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest">
                  Site Metrology & Auditing
                </p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                  Sector H, DHA Phase 6 // Lahore
                </p>
              </div>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c9f0dc] text-[#123524]">
                <FiCheckCircle />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className={`${label} mb-2`}>// Indexed Knowledge Archive</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Structural & Commercial FAQ Directives
            </h2>
          </div>
          <p className={`${label} flex items-center gap-2 text-[9px]`}>
            Precision Code: BC-SPEC-2025 <FiFileText />
          </p>
        </div>

        <div className="space-y-3">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="rounded-xl bg-[#ebeae6]">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-mono text-[10px] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-medium tracking-tight">
                    {faq.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white shadow-sm">
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* grid-rows trick: animates the height from 0 to the content height */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-14">
                      <p className="max-w-4xl text-sm leading-relaxed text-neutral-600">
                        {faq.a}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {faq.tags.map((t) => (
                          <span key={t} className={chip}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex flex-col gap-6 rounded-2xl bg-[#b9ead0] p-8 text-[#123524] md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-md">
            <p className="font-mono text-[9px] uppercase tracking-widest opacity-70">
              // Direct Consultation
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Still Have Questions?
            </h2>
            <p className="mt-3 text-sm opacity-80">
              Our senior civil engineering team and principal architects are
              happy to discuss your specific plot dimensions, soil conditions
              and spatial requirements without obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-[#123524] px-5 py-3 text-xs font-semibold text-white hover:bg-[#1b4d36]"
            >
              Contact Us <FiArrowRight />
            </Link>
            <a
              href="tel:+924235788900"
              className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-2.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#123524] text-white">
                <FiPhone />
              </span>
              <span>
                <span className="block text-base font-semibold">+92 (42) 3578-8900</span>
                <span className="block font-mono text-[9px] uppercase tracking-wider opacity-60">
                  Mon–Sat: 08:30 – 18:00 PKT
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div
          className={`flex flex-col gap-8 rounded-2xl bg-[#123524] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12 ${gridPattern}`}
        >
          <div className="max-w-lg">
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#b9e3a8]">
              // Initiate Your Project • Direct Tender Access
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Let&apos;s Talk About Your Project.
            </h2>
            <p className="mt-4 text-white/70">
              Whether you are planning a high-end private residence in DHA or a
              commercial mid-rise in Gulberg, our engineering directors are
              ready to review your blueprints.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-[#b9ead0] px-6 py-3 text-sm font-semibold text-[#123524] hover:bg-[#cdf3df]"
            >
              Get a Quote <FiArrowRight />
            </Link>
            <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-white/60">
              <FiMapPin /> HQ: Plaza 42, Gulberg III, Lahore
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}