"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="find"
      className="relative overflow-hidden bg-ink py-28 md:py-40"
    >
      <div className="gradient-flame clip-diagonal absolute inset-x-0 top-0 h-full opacity-[0.08]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="relative mb-6 h-28 w-28"
        >
          <Image
            src="/images/bottle-cutout.png"
            alt="Master Optima bottle"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[13vw] leading-[0.85] text-paper md:text-[6vw]"
        >
          KEEP YOUR
          <br />
          <span className="gradient-flame-text">ENGINE ALIVE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-lg text-lg text-cream/75"
        >
          Available through TAF Energies PLC distributors across Ethiopia.
          Reach out to find your nearest stockist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="btn-flame rounded-full px-10 py-5 font-display text-base tracking-wider text-ink shadow-[0_10px_40px_rgba(255,122,0,0.4)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            CONTACT TAF ENERGIES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
