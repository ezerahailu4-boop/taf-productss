"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HOTSPOTS = [
  {
    id: "seal",
    title: "Induction Foil Security Seal",
    desc: "A tamper-evident airtight foil seal locks in 100% factory purity directly from the UAE production line.",
    top: "16%",
    left: "72%",
    tag: "PURITY GUARANTEE",
  },
  {
    id: "handle",
    title: "Ergonomic Anti-Spill Handle",
    desc: "Balanced center-of-gravity handle engineered for steady, controlled, non-splash oil pouring into engine sumps.",
    top: "35%",
    left: "22%",
    tag: "PRECISION POUR",
  },
  {
    id: "label",
    title: "API SM / CF Certified Label",
    desc: "Rigorous laboratory batch certification for high-load older and high-mileage gasoline passenger cars.",
    top: "56%",
    left: "78%",
    tag: "STANDARDS",
  },
  {
    id: "volume",
    title: "4 Litre Heavy-Duty Sump Fill",
    desc: "Sufficient capacity for complete engine oil changes without purchasing separate top-up bottles.",
    top: "78%",
    left: "24%",
    tag: "CAPACITY",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string>("seal");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { rotate: -6, y: 60, scale: 0.94 },
        {
          rotate: 4,
          y: -40,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const currentHotspot = HOTSPOTS.find((h) => h.id === activeHotspot) || HOTSPOTS[0];

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative overflow-hidden bg-char py-24 md:py-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      
      {/* Ambient Radial Illumination */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-flame-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Product Information (5 Cols) */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-pulse" />
              THE 4-LITRE CANISTER
            </span>

            <h2 className="font-display mt-6 text-[12vw] leading-[0.86] text-paper md:text-[4.8vw]">
              CRAFTED
              <br />
              FOR THE
              <br />
              <span className="gradient-flame-text">LONG HAUL</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-cream/75">
              Every 4-litre bottle of Master Optima is precision-molded, sealed, and batch-tested in the UAE. Formulated with high-shear-resistance viscosity polymers to deliver dependable engine protection from morning cold start to late-night highway cruise.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-paper/10 py-6">
              <div>
                <p className="font-display text-3xl md:text-4xl text-flame-400">4L</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">Full Volume</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-flame-400">SM</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">API Grade</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-flame-400">UAE</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">Made in UAE</p>
              </div>
            </div>

            {/* Interactive Feature Callout Preview */}
            <div className="mt-6 rounded-2xl border border-flame-500/30 bg-ink/70 p-5 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase text-flame-400">
                  {currentHotspot.tag}
                </span>
                <span className="text-[10px] text-smoke">Click dots on bottle to explore</span>
              </div>
              <h4 className="mt-1.5 font-display text-lg text-paper">{currentHotspot.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-cream/70">{currentHotspot.desc}</p>
            </div>
          </div>

          {/* Right: Interactive Product Stage (7 Cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Pulsing Aura Rings */}
            <div className="absolute h-[85%] w-[85%] rounded-full bg-gradient-to-br from-flame-500/25 via-flame-600/10 to-transparent blur-[110px]" />
            <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full border border-flame-500/20 opacity-40 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="pointer-events-none absolute h-[520px] w-[520px] rounded-full border border-paper/10 opacity-30" />

            {/* Bottle Image with 3D Tilt & Shadows */}
            <div
              ref={imgRef}
              className="relative aspect-[3/4] w-[75vw] max-w-[440px] will-change-transform flex items-center justify-center"
            >
              <Image
                src="/images/bottle-cutout.png"
                alt="Master Optima 20W-50 SM 4L Canister"
                fill
                priority
                sizes="(max-width: 768px) 75vw, 440px"
                className="object-contain drop-shadow-[0_45px_75px_rgba(0,0,0,0.7)]"
              />

              {/* Interactive Hotspot Buttons */}
              {HOTSPOTS.map((hotspot) => {
                const isSelected = activeHotspot === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot.id)}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-full p-1.5 transition-all duration-300 ${
                      isSelected
                        ? "bg-flame-500 text-ink shadow-[0_0_25px_rgba(255,122,0,0.9)] scale-110"
                        : "bg-ink/90 border border-paper/30 text-paper hover:border-flame-400 hover:scale-105"
                    }`}
                    title={hotspot.title}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-current/20 text-xs font-bold">
                      {isSelected ? "✓" : "+"}
                    </span>
                    <span className={`text-[11px] font-bold tracking-wider uppercase px-2 hidden sm:inline-block ${isSelected ? "text-ink" : "text-paper"}`}>
                      {hotspot.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
