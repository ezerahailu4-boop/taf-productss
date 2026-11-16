"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const REGIONS = [
  "Addis Ababa (Central Depot)",
  "Oromia — Adama / Modjo",
  "Sidama — Hawassa",
  "Amhara — Bahir Dar / Gondar",
  "Dire Dawa / Harar",
  "Tigray — Mekelle",
  "Southern Nations — Wolaita Sodo",
  "Other Ethiopian Region",
];

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: REGIONS[0],
    inquiryType: "Wholesale Pallet / Carton Orders",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello TAF Energies PLC,\n\nName: ${formData.name || "Customer"}\nPhone: ${formData.phone || "Not provided"}\nRegion: ${formData.region}\nInquiry: ${formData.inquiryType}\nNotes: ${formData.notes || "Inquiring about Master Optima 20W-50 SM"}`
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 md:py-36 border-t border-paper/10 scroll-mt-12"
    >
      <div id="find" className="absolute -top-12" />
      <div className="gradient-flame clip-diagonal absolute inset-x-0 top-0 h-full opacity-[0.06] pointer-events-none" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-flame-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-pulse" />
            DIRECT SALES &amp; DEALER NETWORK
          </span>
          <h2 className="font-display text-[12vw] leading-[0.88] text-paper md:text-[5vw]">
            CONNECT WITH <span className="gradient-flame-text">TAF ENERGIES</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed">
            Ready to stock Master Optima 20W-50 SM in your region, order wholesale cartons, or locate your nearest verified dealer in Ethiopia? Get in touch directly with our commercial team.
          </p>
        </div>

        {/* 3 Main Action Channels: WhatsApp, Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* WhatsApp Direct */}
          <div className="card-glass rounded-2xl p-6 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-500/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>
              <h3 className="font-display text-xl text-paper">Instant WhatsApp</h3>
              <p className="mt-1 text-xs text-cream/70 leading-relaxed">
                Connect directly with our sales representative on WhatsApp for immediate pricing, batch availability, and delivery options.
              </p>
            </div>
            <a
              href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50%20engine%20oil."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-ink hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Chat on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Direct Phone Lines */}
          <div className="card-glass rounded-2xl p-6 border border-flame-500/30 flex flex-col justify-between hover:border-flame-500/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-flame-500/20 text-flame-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="rounded-full bg-flame-500/10 px-2.5 py-1 text-[10px] font-bold text-flame-400 uppercase tracking-wider">
                  Addis Ababa HQ
                </span>
              </div>
              <h3 className="font-display text-xl text-paper">Direct Phone Calls</h3>
              <p className="mt-1 text-xs text-cream/70 leading-relaxed">
                Speak directly with TAF Energies PLC commercial lubrication division:
              </p>
              <div className="mt-2 space-y-1 text-xs font-medium text-paper">
                <p>Office: <span className="text-flame-400 font-bold">+251 11 662 0000</span></p>
                <p>Mobile: <span className="text-flame-400 font-bold">+251 91 123 4567</span></p>
              </div>
            </div>
            <a
              href="tel:+251116620000"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-flame-500/60 bg-flame-500/10 py-3 text-xs font-bold text-flame-400 hover:bg-flame-500 hover:text-ink transition-colors"
            >
              <span>Call Head Office</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Email & Formal Inquiries */}
          <div className="card-glass rounded-2xl p-6 border border-paper/15 flex flex-col justify-between hover:border-paper/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper/10 text-paper">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="rounded-full bg-paper/10 px-2.5 py-1 text-[10px] font-bold text-smoke uppercase tracking-wider">
                  Formal RFQs
                </span>
              </div>
              <h3 className="font-display text-xl text-paper">Email Inquiries</h3>
              <p className="mt-1 text-xs text-cream/70 leading-relaxed">
                For corporate fleet procurement, government tenders, or dealership agreements:
              </p>
              <div className="mt-2 space-y-1 text-xs font-medium text-paper">
                <p className="text-smoke">sales@tafenergies.com</p>
                <p className="text-smoke">info@tafenergies.com</p>
              </div>
            </div>
            <a
              href="mailto:sales@tafenergies.com?subject=Inquiry%20regarding%20Master%20Optima%2020W-50%20SM"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-paper/20 bg-ink-soft py-3 text-xs font-bold text-paper hover:border-flame-500 hover:text-flame-400 transition-colors"
            >
              <span>Send Email</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Interactive Dealer / Wholesale Inquiry Form + Physical Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 card-glass rounded-3xl p-8 border border-paper/15 shadow-2xl">
            <div className="mb-6 border-b border-paper/10 pb-5">
              <h3 className="font-display text-2xl md:text-3xl text-paper">
                WHOLESALE &amp; DEALER <span className="text-flame-400">INQUIRY</span>
              </h3>
              <p className="mt-1 text-xs md:text-sm text-cream/70">
                Submit your contact details and region to receive local dealer contact information or wholesale carton pricing.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-xl text-paper">Thank You, {formData.name || "Customer"}!</h4>
                <p className="mt-2 text-xs md:text-sm text-cream/80 max-w-md mx-auto">
                  Your inquiry for <strong className="text-flame-400">{formData.region}</strong> has been logged. Our commercial sales desk will call or WhatsApp you within 2 business hours.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/251911234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-ink hover:bg-emerald-400 transition-colors"
                  >
                    Open Direct in WhatsApp Now &rarr;
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl border border-paper/20 px-4 py-2.5 text-xs font-medium text-cream/70 hover:text-paper"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-smoke mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abebe Bikila"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper placeholder-smoke/60 focus:border-flame-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-smoke mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +251 91 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper placeholder-smoke/60 focus:border-flame-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-smoke mb-1.5">
                      Target Region / Town *
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                    >
                      {REGIONS.map((r) => (
                        <option key={r} value={r} className="bg-ink text-paper">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-smoke mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper focus:border-flame-500 focus:outline-none"
                    >
                      <option className="bg-ink text-paper" value="Wholesale Pallet / Carton Orders">
                        Wholesale Orders (Cartons / Pallets)
                      </option>
                      <option className="bg-ink text-paper" value="Spare Parts Retail Stockist">
                        Retail Shop / Spare Parts Stockist
                      </option>
                      <option className="bg-ink text-paper" value="Fleet / Workshop Maintenance">
                        Fleet Operator / Commercial Garage
                      </option>
                      <option className="bg-ink text-paper" value="Individual Vehicle Owner">
                        Individual Vehicle Owner (Retail Canister)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-smoke mb-1.5">
                    Estimated Quantity or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking for 20 cartons of 4L bottles in Adama, or need dealer location in Gotera..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-paper/15 bg-ink-soft px-4 py-3 text-sm text-paper placeholder-smoke/60 focus:border-flame-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn-flame w-full sm:w-auto rounded-xl px-8 py-4 font-display text-sm tracking-wider uppercase text-ink shadow-[0_6px_25px_rgba(255,122,0,0.4)] cursor-pointer"
                  >
                    Submit Request
                  </button>
                  <a
                    href={`https://wa.me/251911234567?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <span>Prefer WhatsApp? Send directly</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right: Head Office Location & Legal Trust Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Card */}
            <div className="card-glass rounded-3xl p-6 md:p-8 border border-paper/15">
              <span className="inline-block rounded border border-flame-500/40 bg-flame-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-flame-400 mb-3">
                HEADQUARTERS &amp; LOGISTICS
              </span>
              <h4 className="font-display text-2xl text-paper">TAF ENERGIES PLC</h4>
              <p className="mt-2 text-xs md:text-sm text-cream/80 leading-relaxed">
                Debre Zeit Road / Gotera Industrial Zone, TAF Business Complex, P.O. Box 2541, Addis Ababa, Ethiopia.
              </p>

              <div className="mt-5 space-y-2 border-t border-paper/10 pt-4 text-xs text-cream/70">
                <div className="flex items-center justify-between">
                  <span className="text-smoke">Commercial Registration:</span>
                  <span className="font-mono text-paper">TAF-ET-LUB-0941</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-smoke">Product Origin:</span>
                  <span className="font-medium text-emerald-400">United Arab Emirates (UAE)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-smoke">Standard Compliance:</span>
                  <span className="font-medium text-paper">API SM / CF &amp; ESA Standards</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-smoke">Business Hours:</span>
                  <span className="font-medium text-paper">Mon – Sat (8:00 AM – 5:30 PM EAT)</span>
                </div>
              </div>

              {/* Fast links */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/distributors"
                  className="rounded-xl border border-paper/20 bg-ink-soft py-2.5 text-center text-xs font-semibold text-paper hover:border-flame-500 hover:text-flame-400 transition-colors"
                >
                  Regional Depots &rarr;
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-paper/20 bg-ink-soft py-2.5 text-center text-xs font-semibold text-paper hover:border-flame-500 hover:text-flame-400 transition-colors"
                >
                  About TAF PLC &rarr;
                </Link>
              </div>
            </div>

            {/* Compliance Badge & Download SDS */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Official UAE Batch Certificate of Analysis
                  </h5>
                  <p className="mt-1 text-[11px] text-cream/70 leading-relaxed">
                    Every shipment is accompanied by laboratory batch analysis certificates ensuring exact SAE 20W-50 viscosity and API SM additive chemistry.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <Link
                      href="/technical-data-sheet"
                      className="text-[11px] font-bold text-flame-400 hover:underline"
                    >
                      Technical Data Sheet (TDS)
                    </Link>
                    <span className="text-smoke">&bull;</span>
                    <Link
                      href="/technical-data-sheet#sds"
                      className="text-[11px] font-bold text-flame-400 hover:underline"
                    >
                      Safety Data Sheet (SDS)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
