"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PILLARS = [
  {
    n: "01",
    title: "WHY API SM OVER SP FOR OLDER ENGINES",
    desc: "Modern API SN and SP oils severely restrict Zinc & Phosphorus (ZDDP) to protect advanced multi-catalytic converters on new turbo engines. However, pre-2010 engines and flat-tappet valvetrains require high ZDDP reserves (1,150+ PPM) to prevent catastrophic camshaft and lifter wear. Master Optima provides this exact legacy protection.",
    specBadge: "HIGH-ZDDP FORMULATION",
    stat: "1,200 PPM",
    statLabel: "Zinc ZDDP Reserve",
    icon: (
      <svg className="h-6 w-6 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "HEAVY-BODY 20W-50 FOR REGIONAL HEAT",
    desc: "Operating in East Africa means prolonged stop-and-go traffic in highland and lowland heat. While 0W/5W oils thin rapidly under prolonged idling, Master Optima's SAE 20W-50 multi-grade body maintains a robust hydrodynamic cushion that seals wider mechanical tolerances and preserves oil pressure.",
    specBadge: "SHEAR-STABLE VISCOSITY",
    stat: "19.1 cSt",
    statLabel: "Kinematic Viscosity @ 100°C",
    icon: (
      <svg className="h-6 w-6 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a7.975 7.975 0 010 11.314z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "HIGH-RESERVE TBN ACID NEUTRALIZATION",
    desc: "Varying fuel standards and sulfur content create acidic combustion blow-by gases that corrode bearings and oxidize oil. Master Optima's 9.2 mg KOH/g Total Base Number (TBN) neutralizes acids on contact, keeping piston ring lands clean and extending drain intervals up to 5,000+ KM.",
    specBadge: "ASTM D2896 TESTED",
    stat: "9.2 TBN",
    statLabel: "Base Number (mg KOH/g)",
    icon: (
      <svg className="h-6 w-6 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "CERTIFIED UAE BLENDING & DIRECT ETHIOPIAN IMPORT",
    desc: "Formulated and batch-tested in UAE blending facilities certified to ISO 9001:2015 and ISO 14001 standards. Each 4-litre canister features an airtight induction foil seal and is imported under certified customs compliance directly by TAF Energies PLC.",
    specBadge: "ISO 9001:2015 BATCH CERTIFIED",
    stat: "100%",
    statLabel: "Origin & Seal Verified",
    icon: (
      <svg className="h-6 w-6 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-ink py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-flame-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400 mb-4">
              FORMULATION RATIONALE
            </span>
            <h2 className="font-display text-[11vw] leading-[0.85] text-paper md:text-[4.2vw]">
              PURPOSE-BUILT <span className="gradient-flame-text">ENGINEERING</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-cream/70 leading-relaxed">
            Why Master Optima 20W-50 API SM is deliberately engineered for the specific vehicle demographics, climate, and mechanical requirements of the Ethiopian market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PILLARS.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="card-glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:border-flame-500/50 hover:bg-flame-500/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              <span className="font-display absolute right-4 top-2 text-[7rem] text-paper/[0.03] transition-colors group-hover:text-flame-500/10 md:text-[8rem] pointer-events-none select-none">
                {item.n}
              </span>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-flame-500/30 bg-flame-500/10 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl md:text-3xl text-flame-400 block leading-tight">
                        {item.stat}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-smoke block">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block rounded border border-flame-500/30 bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-flame-400 mb-3">
                    {item.specBadge}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl text-paper">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-paper/10 flex items-center justify-between text-xs text-smoke">
                  <span className="group-hover:text-flame-400 transition-colors font-medium">SAE 20W-50 • API SM / CF</span>
                  <Link href="/technical-data-sheet" className="text-flame-400 hover:underline flex items-center gap-1 font-semibold">
                    <span>View TDS Data</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
