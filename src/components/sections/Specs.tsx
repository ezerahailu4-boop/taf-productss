"use client";

import { motion, type Variants } from "framer-motion";

const SPEC_ROWS = [
  { label: "Viscosity Grade", value: "20W-50" },
  { label: "API Classification", value: "SM" },
  { label: "Base Oil", value: "Mineral, Multi-Grade" },
  { label: "Volume", value: "4 Litre" },
  { label: "Engine Type", value: "Gasoline" },
  { label: "Best For", value: "Older & High-Mileage Vehicles" },
  { label: "Manufactured", value: "Made in UAE" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Specs() {
  return (
    <section id="specs" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="mb-16 flex flex-col items-start gap-4 md:mb-24"
        >
          <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400">
            TECHNICAL SPECIFICATION
          </span>
          <h2 className="font-display text-[13vw] leading-[0.85] text-paper md:text-[6vw]">
            ENGINEERED
            <br />
            <span className="text-stroke">TO PERFORM</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 md:grid-cols-2">
          {SPEC_ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              variants={fadeUp}
              className="group flex items-center justify-between gap-6 bg-ink px-8 py-8 transition-colors hover:bg-flame-500/[0.06] md:px-12 md:py-10"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-smoke">
                {row.label}
              </span>
              <span className="font-display text-right text-2xl text-paper transition-colors group-hover:text-flame-400 md:text-3xl">
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={fadeUp}
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {[
            ["Wear", "Protection"],
            ["Deposit", "Control"],
            ["Thermal", "Stability"],
            ["Engine", "Longevity"],
          ].map(([a, b]) => (
            <div
              key={a}
              className="card-glass rounded-2xl px-5 py-8 text-center"
            >
              <p className="font-display text-xl text-flame-400 md:text-2xl">
                {a}
              </p>
              <p className="font-display text-xl text-paper md:text-2xl">
                {b}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
