"use client"; // needed for the form state (useState)

import { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
  FiBriefcase,
  FiClock,
  FiCompass,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiPhone,
} from "react-icons/fi";
import { FaParking, FaWheelchair } from "react-icons/fa";

/* ---------- Page data ---------- */
const contactCards = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 300 7283492",
    href: "tel:+923007283492",
    dark: true, // dark green icon box
    big: true, // larger bold value
  },
  {
    icon: FiMail,
    label: "Email",
    value: "info@buildcore.pk",
    href: "mailto:info@buildcore.pk",
    big: true,
  },
  {
    icon: FiMapPin,
    label: "Corporate Office",
    value: "Plaza 42, Main Boulevard, Gulberg III, Lahore, Pakistan",
  },
  {
    icon: FiClock,
    label: "Working Hours",
    value: "Monday – Saturday: 9:00 AM – 6:00 PM PKT",
  },
];

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Retrofitting",
  "Architectural Planning & BIM",
  "Turnkey Project Management",
  "Interior & Exterior Finishing",
];

const budgets = [
  "Under PKR 10 million",
  "PKR 10 – 25 million",
  "PKR 25 – 50 million",
  "PKR 50 – 100 million",
  "Above PKR 100 million",
];

const amenities = [
  { icon: FaParking, text: "Valet & Client Parking" },
  { icon: FiCompass, text: "5 Min from MM Alam" },
  { icon: FiBriefcase, text: "Floor 2 Executive Suites" },
  { icon: FaWheelchair, text: "Full ADA Accessibility" },
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  details: "",
};

/* ---------- Shared classes ---------- */
const monoLabel = "font-mono text-[11px] uppercase tracking-widest text-neutral-500";
const fieldLabel = "mb-2 block text-sm font-semibold text-[#123524]";
const field =
  "w-full rounded-lg bg-[#f4f4f2] px-4 py-3.5 text-[15px] outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-[#123524]/30";
const photoFade =
  "bg-[linear-gradient(to_top,rgba(18,53,36,0.75),transparent)]";

/* ---------- Page ---------- */
export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  // one handler for every input, select and textarea (uses the "name" attribute)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your API route or email service here
    console.log(form);
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#141a17]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14">
        <p className={`${monoLabel} mb-3`}>{"// Contact Us"}</p>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#123524] md:text-7xl">
          Let&apos;s Build Something Great Together.
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Tell us about your project and our team will get back to you promptly.
        </p>
      </section>

      {/* DIRECT CONTACT + FORM */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-24 lg:grid-cols-[1fr_1.4fr]">
        {/* Left: contact details */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#123524] md:text-4xl">
            Get in Touch Directly
          </h2>
          <p className="mt-3 max-w-sm text-neutral-600">
            Reach out to our project team directly via phone, WhatsApp, or email.
          </p>

          <div className="mt-8 space-y-3">
            {contactCards.map((item, index) => {
              const Tag = item.href ? "a" : "div";
              return (
                <div key={item.label}>
                  <Tag
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl ${
                        item.dark
                          ? "bg-[#123524] text-white"
                          : "bg-[#efeeea] text-[#123524]"
                      }`}
                    >
                      <item.icon />
                    </span>
                    <span>
                      <span className="block text-sm text-neutral-500">{item.label}</span>
                      <span
                        className={`block ${
                          item.big ? "text-xl font-bold" : "font-medium"
                        } text-[#123524]`}
                      >
                        {item.value}
                      </span>
                    </span>
                  </Tag>

                  {/* WhatsApp card sits right after the phone card */}
                  {index === 0 && (
                    <a
                      href="https://wa.me/923007283492"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-between gap-4 rounded-2xl bg-[#123524] p-4 text-white hover:bg-[#1b4d36]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#b9ead0] text-xl text-[#123524]">
                          <FiMessageSquare />
                        </span>
                        <span>
                          <span className="block text-lg font-bold">Instant WhatsApp</span>
                          <span className="block text-sm text-white/70">+92 300 7283492</span>
                        </span>
                      </span>
                      <FiArrowRight className="text-xl" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: inquiry form */}
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-[#123524]">Send an Inquiry</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Fill out the brief details below and we will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={fieldLabel}>Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className={fieldLabel}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="phone" className={fieldLabel}>Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="projectType" className={fieldLabel}>Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={field}
                >
                  <option value="" disabled>Select project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className={fieldLabel}>Estimated Budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={field}
              >
                <option value="" disabled>Select budget range...</option>
                {budgets.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="details" className={fieldLabel}>Project Details</label>
              <textarea
                id="details"
                name="details"
                rows={5}
                value={form.details}
                onChange={handleChange}
                placeholder="Brief description of your project, location, and requirements..."
                className={`${field} resize-none`}
              />
            </div>

            <div className="flex flex-col items-end gap-3 pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-[#123524] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1b4d36]"
              >
                Send Enquiry <FiArrowRight />
              </button>
              {sent && (
                <p role="status" className="text-sm text-[#123524]">
                  Thank you. Your enquiry has been received and our team will be in touch.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* HEADQUARTERS */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <p className={`${monoLabel} mb-3`}>
          {"// Site Geolocation: 31.5204° N, 74.3587° E"}
        </p>
        <h2 className="text-5xl font-bold tracking-tight text-[#123524] md:text-7xl">
          Visit Our Headquarters
        </h2>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <p className="max-w-xl text-lg text-neutral-600">
            Situated at the geographic intersection of Main Boulevard Gulberg
            and MM Alam Road, our client studios offer private consultation
            suites, structural scale models, and acoustic meeting rooms.
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=31.5204,74.3587"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 self-start rounded-xl bg-[#ebeae6] px-5 py-3 text-sm font-semibold text-[#123524] hover:bg-[#e0dfda] md:self-auto"
          >
            <FiNavigation /> Get Directions
          </a>
        </div>

        {/* Map with overlays */}
        <div className="relative mt-8 h-[440px] overflow-hidden rounded-2xl shadow-sm md:h-[540px]">
          <iframe
            title="BuildCore Corporate HQ on Google Maps"
            src="https://maps.google.com/maps?q=31.5204,74.3587&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          {/* soft green fade at the bottom of the map */}
          <div className={`pointer-events-none absolute inset-0 ${photoFade}`} />

          <span className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-[#123524] shadow-sm md:right-6 md:top-6 md:text-[10px]">
            <FiCompass /> Access via Lahore Canal & Main Blvd Gulberg
          </span>

          <div className="absolute bottom-4 left-4 z-10 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-5 shadow-lg md:bottom-6 md:left-6">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#123524] text-xl text-white">
                <FiBox />
              </span>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#123524]">
                  BuildCore Corporate HQ
                  <span className="h-2 w-2 rounded-full bg-[#123524]" />
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Plaza 42, Main Boulevard, Gulberg III, Lahore, Pakistan
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 rounded-xl bg-[#f4f4f2] p-3 text-xs text-[#123524]">
              {amenities.map((a) => (
                <span key={a.text} className="flex items-center gap-2">
                  <a.icon className="shrink-0" /> {a.text}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=31.5204,74.3587"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-semibold text-[#123524] hover:underline"
              >
                Open in Google Maps <FiArrowUpRight />
              </a>
              <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                Lat 31.5204 // Long 74.3587
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}