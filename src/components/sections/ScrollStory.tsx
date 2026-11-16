"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  tag: string;
  stageNum: string;
  tabLabel: string;
  title: string;
  copy: string;
  accent: string;
  glowColor: string;
  badge: string;
  telemetryTitle: string;
  statValue: string;
  statLabel: string;
  metrics: { label: string; value: string; status: string }[];
  bulletPoints: string[];
  testBenchmark: string;
  astmStandard: string;
}

const STAGES: Stage[] = [
  {
    tag: "01 — VALVETRAIN & CAM WEAR DEFENSE",
    stageNum: "01",
    tabLabel: "Valvetrain Wear",
    title: "HIGH-ZDDP\nBOUNDARY LAYER\nPROTECTION",
    copy: "Formulated with 1,150–1,250 PPM Zinc Dialkyldithiophosphate (ZDDP), creating a sacrificial chemical barrier over flat-tappet camshaft lobes and crankshaft journals where extreme mechanical pressure shears thinner modern oils.",
    accent: "from-flame-400 to-flame-600",
    glowColor: "rgba(255, 122, 0, 0.4)",
    badge: "API SM SPECIFICATION STANDARD",
    telemetryTitle: "ASTM SEQUENCE IVA CAM WEAR AUDIT",
    statValue: "< 90 µm",
    statLabel: "ASTM Sequence IVA Cam Wear Limit (PASSED)",
    metrics: [
      { label: "Active ZDDP Level", value: "1,200 PPM", status: "Optimal" },
      { label: "4-Ball Wear Scar (ASTM D4172)", value: "0.42 mm", status: "Protected" },
      { label: "High-Load Shear Loss", value: "< 0.4%", status: "Stable" },
    ],
    bulletPoints: [
      "Provides critical boundary lubrication for older flat-tappet camshafts",
      "Complies with API SM maximum allowable valvetrain wear thresholds",
      "Forms an immediate anti-friction barrier during cold morning ignition",
    ],
    testBenchmark: "ASTM Sequence IVA / ASTM D4172",
    astmStandard: "API SM / CF Gasoline Engine Standard",
  },
  {
    tag: "02 — DEPOSIT & ACID CONTROL",
    stageNum: "02",
    tabLabel: "Deposit Control",
    title: "ACTIVE DETERGENT\n& DISPERSANT\nMATRIX",
    copy: "Over-based calcium detergents and ashless succinimide dispersants actively break down combustion blow-by soot, holding microscopic particles in suspension so they do not settle into thick crankcase sludge or stick piston rings.",
    accent: "from-amber-400 to-flame-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badge: "ASTM SEQUENCE VG VERIFIED",
    telemetryTitle: "CRANKCASE CLEANLINESS & ACID BENCH",
    statValue: "9.2 TBN",
    statLabel: "Total Base Number (ASTM D2896 mg KOH/g)",
    metrics: [
      { label: "Sludge Rating (Seq VG)", value: "Pass", status: "Clean" },
      { label: "Acid Neutralization (TBN)", value: "9.2 mg KOH/g", status: "High Reserve" },
      { label: "Piston Ring Land Carbon", value: "Controlled", status: "Optimal" },
    ],
    bulletPoints: [
      "Neutralizes corrosive combustion acids from varying fuel quality",
      "Keeps piston ring grooves free to prevent compression loss",
      "Prevents abrasive carbon settling inside narrow oil feed galleries",
    ],
    testBenchmark: "ASTM Sequence VG & ASTM D2896",
    astmStandard: "Sludge & Varnish Resistance Verified",
  },
  {
    tag: "03 — THERMAL STRESS & VOLATILITY",
    stageNum: "03",
    tabLabel: "Thermal Endurance",
    title: "SHEAR-STABLE\nSAE 20W-50\nHIGH-HEAT BODY",
    copy: "Heavy-body mineral base stocks with shear-stable viscosity index improvers prevent oil thinning in blistering regional heat, heavy cargo loads, and prolonged urban idling where modern 0W/5W oils experience rapid viscosity shear.",
    accent: "from-flame-500 to-red-600",
    glowColor: "rgba(239, 68, 68, 0.4)",
    badge: "ASTM D92 & D5800 CERTIFIED",
    telemetryTitle: "HIGH-TEMPERATURE SHEAR & FLASH POINT",
    statValue: "238°C",
    statLabel: "Open-Cup Flash Point (ASTM D92)",
    metrics: [
      { label: "Viscosity @ 100°C (ASTM D445)", value: "19.1 cSt", status: "Heavy 50" },
      { label: "NOACK Volatility (ASTM D5800)", value: "< 11.5%", status: "Low Burn" },
      { label: "Viscosity Index (ASTM D2270)", value: "128", status: "Stable" },
    ],
    bulletPoints: [
      "Maintains stable oil pressure across long highway climbs in hot climates",
      "Resists boil-off and thermal vapor degradation under severe load",
      "Thick hydrodynamic wedge prevents metal scuffing on rod bearings",
    ],
    testBenchmark: "ASTM D92 / ASTM D445 / ASTM D5800",
    astmStandard: "High-Temperature High-Shear (HTHS) Tested",
  },
  {
    tag: "04 — LEGACY & HIGH-MILEAGE ENGINES",
    stageNum: "04",
    tabLabel: "High-Mileage Fit",
    title: "ENGINEERED FOR\nOLDER TOLERANCES\n& WORN SEALS",
    copy: "Modern API SP oils restrict anti-wear additives for catalytic compliance, which can accelerate wear in pre-2010 pushrod engines. Master Optima provides the exact heavier viscosity and elastomeric conditioners required to revive hardened seals and cushion wider engine clearances.",
    accent: "from-flame-400 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    badge: "SEAL RECONDITIONING FORMULA",
    telemetryTitle: "CLEARANCE CUSHIONING & SEAL INTEGRITY",
    statValue: "168 cSt",
    statLabel: "Kinematic Viscosity @ 40°C (Heavy Cushioning)",
    metrics: [
      { label: "Target Engine Design", value: "Pre-2010 / High-KM", status: "Ideal Fit" },
      { label: "Seal Swell Conditioner", value: "Active", status: "Anti-Leak" },
      { label: "Pour Point (ASTM D97)", value: "-24°C", status: "Fluid" },
    ],
    bulletPoints: [
      "Re-conditions hardened valve stem seals to reduce oil weepage",
      "Fills wider piston-to-cylinder clearance gaps to suppress blow-by smoke",
      "Dampens mechanical valve noise in older pushrod and OHC valvetrains",
    ],
    testBenchmark: "ASTM D97 / Seal Compatibility Test",
    astmStandard: "Pre-2010 Gasoline Vehicle Specialization",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function ScrollStory() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((newIndex: number) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  }, [current]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? STAGES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === STAGES.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === STAGES.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  const currentStage = STAGES[current];

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-ink py-20 md:py-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${currentStage.accent} opacity-20 blur-[150px] transition-colors duration-700`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Top Header & Stage Navigation Tabs */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-flame-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-pulse" />
              ASTM LABORATORY & DYNAMOMETER DATA
            </div>
            <h2 className="font-display mt-3 text-3xl md:text-5xl text-paper">
              TECHNICAL <span className="gradient-flame-text">PERFORMANCE MATRIX</span>
            </h2>
          </div>

          {/* Tab Strip with Stage Jump Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-paper/10 bg-ink-soft/90 p-1.5 backdrop-blur-xl shadow-xl">
            {STAGES.map((s, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={s.stageNum}
                  onClick={() => goToSlide(idx)}
                  className={`group relative overflow-hidden flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-flame-500 text-ink shadow-[0_0_20px_rgba(255,122,0,0.4)]"
                      : "text-cream/70 hover:bg-paper/5 hover:text-paper"
                  }`}
                  aria-label={`Jump to stage ${s.stageNum}: ${s.tabLabel}`}
                >
                  <span
                    className={`font-display text-xs ${
                      isActive ? "text-ink" : "text-flame-400 group-hover:text-flame-300"
                    }`}
                  >
                    {s.stageNum}
                  </span>
                  <span className="hidden sm:inline font-medium tracking-wide">
                    {s.tabLabel}
                  </span>

                  {isActive && !isPaused && (
                    <motion.div
                      key={`tab-progress-${current}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[2.5px] bg-ink"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Slide Container */}
        <div className="relative min-h-[580px] w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
            >
              {/* Left Column: Story Copy & Specifications (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/50 bg-flame-500/15 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-flame-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-flame-400" />
                      {currentStage.tag}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">
                      Stage {current + 1} of 4
                    </span>
                  </div>
                </div>

                <h3 className="font-display whitespace-pre-line text-[9vw] leading-[0.88] text-paper md:text-[3.6vw]">
                  {currentStage.title}
                </h3>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-cream/80">
                  {currentStage.copy}
                </p>

                {/* Technical Bullet Points */}
                <div className="mt-6 space-y-3 border-t border-paper/10 pt-5">
                  {currentStage.bulletPoints.map((bp, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame-500/20 text-flame-400 shadow-sm">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-cream/90">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Slide Controls & Stage Indicator */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-ink-soft/90 text-paper transition-all hover:border-flame-500 hover:bg-flame-500 hover:text-ink active:scale-95 shadow-md cursor-pointer"
                      aria-label="Previous Test Metric"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-ink-soft/90 text-paper transition-all hover:border-flame-500 hover:bg-flame-500 hover:text-ink active:scale-95 shadow-md cursor-pointer"
                      aria-label="Next Test Metric"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => setIsPaused((prev) => !prev)}
                      className="ml-2 flex items-center gap-2 rounded-xl border border-paper/15 bg-ink-soft/80 px-3 py-2 text-xs font-semibold text-smoke hover:text-paper hover:border-flame-500/50 transition-all cursor-pointer"
                      title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                    >
                      {!isPaused ? (
                        <>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-500"></span>
                          </span>
                          <span className="text-flame-400 font-bold">CYCLE</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-3 w-3 text-smoke" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span>PAUSED</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {STAGES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => goToSlide(dotIdx)}
                        className="relative h-2 overflow-hidden rounded-full transition-all duration-300 cursor-pointer"
                        style={{
                          width: dotIdx === current ? "44px" : "12px",
                          backgroundColor: "rgba(244, 237, 226, 0.15)",
                        }}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      >
                        {dotIdx === current && (
                          <motion.div
                            key={`dot-progress-${current}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: isPaused ? 0 : AUTOPLAY_DELAY / 1000, ease: "linear" }}
                            className="h-full bg-flame-500 shadow-[0_0_10px_rgba(255,122,0,0.8)]"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: ASTM Testing Dashboard (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="card-glass relative overflow-hidden rounded-3xl border border-paper/15 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                  <div
                    className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${currentStage.accent} opacity-30 blur-[60px] pointer-events-none`}
                  />

                  {/* Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-flame-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-[0.18em] uppercase text-paper">
                        {currentStage.telemetryTitle}
                      </span>
                    </div>
                    <span className="rounded-md border border-flame-500/30 bg-ink-soft/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-flame-400 uppercase">
                      {currentStage.badge}
                    </span>
                  </div>

                  {/* Center Metric Display */}
                  <div className="my-6 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                    <div className="md:col-span-5 flex flex-col justify-center rounded-2xl border border-flame-500/30 bg-gradient-to-br from-flame-500/15 via-ink-soft to-ink p-5 text-center shadow-inner">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-smoke">
                        Verified ASTM Standard
                      </span>
                      <span className="font-display my-1 text-4xl md:text-5xl text-flame-400 drop-shadow-[0_4px_12px_rgba(255,122,0,0.4)]">
                        {currentStage.statValue}
                      </span>
                      <span className="text-xs font-semibold text-paper/90">
                        {currentStage.statLabel}
                      </span>
                      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Certified Formulation Result</span>
                      </div>
                    </div>

                    <div className="md:col-span-7 relative flex min-h-[160px] items-center justify-between rounded-2xl border border-paper/10 bg-ink-soft/90 p-4">
                      <div className="flex-1 space-y-3 pr-3">
                        <div>
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-semibold text-smoke">Test Protocol</span>
                            <span className="font-bold text-flame-400">{currentStage.testBenchmark}</span>
                          </div>
                          <div className="text-[11px] text-cream/70">
                            Evaluated in independent lubricant testing laboratories according to international ASTM engine testing procedures.
                          </div>
                        </div>

                        <div className="border-t border-paper/10 pt-2.5">
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-semibold text-smoke">Compliance Scope</span>
                            <span className="font-bold text-cream/90">{currentStage.astmStandard}</span>
                          </div>
                        </div>

                        <div className="pt-1">
                          <Link
                            href="/technical-data-sheet"
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-flame-400 hover:text-flame-300"
                          >
                            <span>Download Full Laboratory TDS (PDF)</span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-ink/60 border border-flame-500/20 p-1 flex items-center justify-center">
                        <Image
                          src="/images/bottle-cutout.png"
                          alt="Master Optima 20W-50 Canister"
                          width={75}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Laboratory Metrics Strip */}
                  <div className="grid grid-cols-1 gap-3 border-t border-paper/10 pt-4 sm:grid-cols-3">
                    {currentStage.metrics.map((m, midx) => (
                      <div
                        key={midx}
                        className="rounded-xl border border-paper/10 bg-ink/60 p-3 transition-colors hover:border-flame-500/40"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-smoke">
                          {m.label}
                        </p>
                        <div className="mt-1 flex items-baseline justify-between">
                          <span className="font-display text-base text-paper">
                            {m.value}
                          </span>
                          <span className="rounded bg-flame-500/10 px-1.5 py-0.5 text-[9px] font-bold text-flame-400">
                            {m.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] text-smoke">
                    <span>Manufacturing & Testing: ISO 9001:2015 Certified Blending Facility (UAE)</span>
                    <span className="text-flame-400 font-semibold">Official TAF Energies PLC Import</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
