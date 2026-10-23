"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const HeroScene = dynamic(() => import("@/components/scene/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-noise-dark bg-grid"
    >
      {/* Background 3D scene */}
      <div className="absolute inset-0 opacity-80">
        <HeroScene />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_85%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-12 md:flex-row md:gap-10 md:pt-16">
        {/* Copy */}
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-pulse" />
            MADE IN UAE &middot; 4 LITRE &middot; SM GRADE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[15vw] leading-[0.82] text-paper md:text-[6.2vw]"
          >
            MASTER
            <br />
            <span className="gradient-flame-text">OPTIMA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 flex items-baseline gap-3"
          >
            <span className="font-display text-3xl text-flame-500 md:text-4xl">
              20W-50
            </span>
            <span className="h-2 w-2 rounded-full bg-flame-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-smoke">
              Gasoline Engine Oil
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-md text-balance text-lg leading-relaxed text-cream/80"
          >
            Premium multi-grade protection engineered for older and
            high-mileage gasoline engines. Built to fight wear, deposits, and
            thermal breakdown — mile after relentless mile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#specs"
              className="btn-flame group relative rounded-full px-8 py-4 font-display text-sm tracking-wider text-ink shadow-[0_8px_30px_rgba(255,122,0,0.35)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              EXPLORE THE OIL
            </a>
            <a
              href="#find"
              className="rounded-full border border-paper/25 px-8 py-4 font-display text-sm tracking-wider text-paper transition-colors hover:border-flame-400 hover:text-flame-300"
            >
              WHERE TO BUY
            </a>
          </motion.div>

          {/* Quick Credential Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-smoke"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              100% Genuine UAE Import
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-400" />
              API SM / CF Gasoline Spec
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-400" />
              4 Litre Sump Volume
            </span>
          </motion.div>
        </div>

        {/* Product photo — real, tilt-interactive with floating badges */}
        <motion.div
          ref={wrapRef}
          onMouseMove={handleMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="order-1 relative flex w-full items-center justify-center md:order-2 md:w-1/2"
        >
          {/* Ambient Glow */}
          <div className="absolute h-[75%] w-[75%] rounded-full bg-flame-500/25 blur-[95px]" />
          
          {/* Floating Top Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="card-glass absolute top-8 -right-2 z-20 hidden md:flex items-center gap-2 rounded-xl px-4 py-2 shadow-xl border border-flame-500/30"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-paper uppercase">4 Litres Net</span>
          </motion.div>

          {/* Floating Bottom Badge */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="card-glass absolute bottom-8 -left-2 z-20 hidden md:flex items-center gap-2 rounded-xl px-4 py-2 shadow-xl border border-flame-500/30"
          >
            <span className="text-base">🇦🇪</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-flame-400 uppercase tracking-wider">Engineered in UAE</span>
              <span className="text-[11px] font-semibold text-paper">Certified Origin</span>
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX: rx, rotateY: ry }}
            className="relative z-10 aspect-square w-[72vw] max-w-[480px] md:w-[34vw]"
          >
            <Image
              src="/images/bottle-cutout.png"
              alt="TAF Energies Master Optima 20W-50 SM gasoline engine oil, 4 litre bottle"
              fill
              priority
              sizes="(max-width: 768px) 72vw, 34vw"
              className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-10 w-6 rounded-full border border-paper/30 p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-full rounded-full bg-flame-400"
          />
        </div>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-smoke">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
