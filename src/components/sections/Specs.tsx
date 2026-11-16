"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ASTM_SPECS = [
  { property: "SAE Viscosity Grade", method: "SAE J300", value: "20W-50" },
  { property: "API Performance Classification", method: "API Engine Service", value: "SM / CF" },
  { property: "Kinematic Viscosity @ 100°C", method: "ASTM D445", value: "19.1 mm²/s (cSt)" },
  { property: "Kinematic Viscosity @ 40°C", method: "ASTM D445", value: "168.5 mm²/s (cSt)" },
  { property: "Viscosity Index (VI)", method: "ASTM D2270", value: "128" },
  { property: "Flash Point (Cleveland Open Cup)", method: "ASTM D92", value: "238°C" },
  { property: "Pour Point", method: "ASTM D97", value: "-24°C" },
  { property: "Total Base Number (TBN)", method: "ASTM D2896", value: "9.2 mg KOH/g" },
  { property: "NOACK Volatility (1h @ 250°C)", method: "ASTM D5800", value: "< 11.5% mass loss" },
  { property: "Zinc Content (ZDDP)", method: "ASTM D5185 (ICP)", value: "~1,200 PPM" },
  { property: "Net Volume per Canister", method: "Certified Metric", value: "4.0 Litres (1.05 US Gal)" },
  { property: "Country of Manufacture", method: "Certificate of Origin", value: "United Arab Emirates (UAE)" },
];

const COMPARISON_ROWS = [
  {
    feature: "Zinc (ZDDP) Anti-Wear Chemistry",
    apiSM: "1,150 – 1,250 PPM (High sacrificial boundary film)",
    apiSP: "Capped < 800 PPM (Restricted for modern emissions)",
    impact: "Crucial for pre-2010 flat-tappet camshafts and older pushrods",
  },
  {
    feature: "High-Temperature Film Thickness",
    apiSM: "High HTHS Viscosity (> 4.5 mPa·s @ 150°C)",
    apiSP: "Often formulated for 0W/5W low-HTHS fuel economy",
    impact: "Prevents oil thinning and bearing scuffing in high ambient African heat",
  },
  {
    feature: "Engine Clearance Compatibility",
    apiSM: "Optimized for wider legacy mechanical clearances",
    apiSP: "Engineered for tight micron tolerances in modern turbo GDI",
    impact: "Cushions bearing clearances and minimizes blue oil-burn smoke",
  },
  {
    feature: "Seal Swell & Elastomer Reconditioning",
    apiSM: "Includes elastomeric conditioners for aged seals",
    apiSP: "Calibrated for modern fluoropolymer gaskets",
    impact: "Revitalizes hardened nitrile valve stem seals to prevent leaks",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Specs() {
  return (
    <section id="specs" className="relative bg-ink py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="mb-14 flex flex-col items-start gap-4"
        >
          <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400">
            ASTM CERTIFIED SPECIFICATIONS
          </span>
          <h2 className="font-display text-[13vw] leading-[0.85] text-paper md:text-[5.5vw]">
            TECHNICAL <span className="gradient-flame-text">DATA & RATIONALE</span>
          </h2>
          <p className="max-w-2xl text-base text-cream/75 leading-relaxed">
            Every batch of Master Optima 20W-50 SM is blended in the UAE according to rigorous ASTM standards. Review verified lab properties and understand why API SM is intentionally selected over newer specs for high-mileage engines.
          </p>
        </motion.div>

        {/* ASTM Specs Table */}
        <div className="overflow-hidden rounded-3xl border border-paper/10 bg-paper/5 backdrop-blur-xl shadow-2xl">
          <div className="border-b border-paper/10 bg-ink-soft/90 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-flame-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-paper">
                Master Optima 20W-50 SM — Verified Laboratory Values
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/technical-data-sheet"
                className="text-xs font-semibold text-flame-400 hover:text-flame-300 transition-colors"
              >
                View Full Technical Data Sheet (TDS) &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-px bg-paper/10">
            {ASTM_SPECS.map((spec, i) => (
              <motion.div
                key={spec.property}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                variants={fadeUp}
                className="flex items-center justify-between gap-4 bg-ink px-6 py-5 hover:bg-flame-500/[0.04] transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-paper">{spec.property}</p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-smoke">{spec.method}</p>
                </div>
                <p className="font-display text-lg md:text-xl text-flame-400 text-right">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* API SM vs SP Engineering Explanation Box */}
        <div className="mt-14 rounded-3xl border border-flame-500/30 bg-gradient-to-br from-flame-500/[0.08] via-ink-soft to-ink p-8 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-paper/10 pb-6">
            <div>
              <span className="rounded-full border border-flame-500/50 bg-flame-500/20 px-3 py-1 text-[11px] font-bold tracking-widest text-flame-400 uppercase">
                ENGINEERING TRANSPARENCY
              </span>
              <h3 className="font-display mt-3 text-2xl md:text-3xl text-paper">
                WHY WE FORMULATE TO <span className="text-flame-400">API SM</span> INSTEAD OF API SP
              </h3>
            </div>
            <p className="max-w-md text-xs md:text-sm text-cream/75 leading-relaxed">
              API SM was introduced for 2010 and older vehicles. While modern standards (API SN, SP) suit modern turbo GDI engines with tight emissions catalysts, they compromise flat-tappet wear protection.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-paper/10 text-smoke uppercase text-[10px] tracking-wider">
                  <th className="py-3 pr-4 font-semibold">Technical Characteristic</th>
                  <th className="py-3 px-4 font-semibold text-flame-400">API SM (Master Optima)</th>
                  <th className="py-3 px-4 font-semibold text-cream/70">API SP (Modern Standard)</th>
                  <th className="py-3 pl-4 font-semibold text-paper">Legacy Engine Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-paper/[0.02]">
                    <td className="py-4 pr-4 font-semibold text-paper">{row.feature}</td>
                    <td className="py-4 px-4 font-medium text-flame-400 bg-flame-500/[0.03]">{row.apiSM}</td>
                    <td className="py-4 px-4 text-cream/60">{row.apiSP}</td>
                    <td className="py-4 pl-4 text-xs text-cream/80">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust & Compliance Links */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-smoke">Documentation:</span>
            <Link
              href="/technical-data-sheet"
              className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-ink-soft px-4 py-2 text-xs font-semibold text-paper hover:border-flame-500 hover:text-flame-400 transition-colors"
            >
              <span>Technical Data Sheet (TDS)</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/technical-data-sheet#sds"
              className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-ink-soft px-4 py-2 text-xs font-semibold text-paper hover:border-flame-500 hover:text-flame-400 transition-colors"
            >
              <span>Safety Data Sheet (SDS / MSDS)</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="text-xs text-smoke">
            Batch Tested &amp; Certified under ISO 9001:2015 Quality Management
          </div>
        </div>
      </div>
    </section>
  );
}
