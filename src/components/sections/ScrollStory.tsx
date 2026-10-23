"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
  filmIntegrity: number;
  thermalStability: string;
}

const STAGES: Stage[] = [
  {
    tag: "01 — WEAR PROTECTION",
    stageNum: "01",
    tabLabel: "Wear Protection",
    title: "FIGHTS\nMETAL-ON-METAL\nWEAR",
    copy: "A tenacious 3.2µm hydrodynamic film clings to cylinder walls, camshaft lobes, and crankshaft bearings under extreme mechanical load, cutting friction before it becomes catastrophic engine failure.",
    accent: "from-flame-400 to-flame-600",
    glowColor: "rgba(255, 122, 0, 0.4)",
    badge: "HYDRODYNAMIC BOUNDARY SHIELD",
    telemetryTitle: "MOLECULAR OIL FILM TELEMETRY",
    statValue: "99.4%",
    statLabel: "Friction & Wear Reduction",
    metrics: [
      { label: "Active Film Thickness", value: "3.2 µm", status: "Optimal" },
      { label: "Zinc ZDDP Barrier", value: "1,250 PPM", status: "Active" },
      { label: "High-Load Shear Loss", value: "< 0.2%", status: "Protected" },
    ],
    bulletPoints: [
      "Eliminates metal-to-metal contact on critical bearings",
      "Guards cylinder liners during heavy acceleration",
      "Instant boundary lubrication on cold morning starts",
    ],
    filmIntegrity: 99.8,
    thermalStability: "Stable",
  },
  {
    tag: "02 — DEPOSIT CONTROL",
    stageNum: "02",
    tabLabel: "Deposit Control",
    title: "CLEANS OUT\nSLUDGE &\nDEPOSITS",
    copy: "High-performance metallic detergents and ashless dispersants actively dissolve carbon bake-on, keeping piston ring lands and oil galleries spotless so combustion power stays at the wheels.",
    accent: "from-amber-400 to-flame-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badge: "DETERGENT & DISPERSANT MATRIX",
    telemetryTitle: "PISTON RING CLEANLINESS HUD",
    statValue: "100%",
    statLabel: "Piston Ring Freedom",
    metrics: [
      { label: "Carbon Sludge Formation", value: "0.0%", status: "Zero Sludge" },
      { label: "TBN Neutralizing Reserve", value: "9.2 mg KOH/g", status: "High Reserve" },
      { label: "High-Temp Varnish Rating", value: "9.9 / 10", status: "Spotless" },
    ],
    bulletPoints: [
      "Suspends microscopic soot to prevent abrasive sludge",
      "Neutralizes corrosive acidic blow-by gases",
      "Keeps hydraulic valve lifters silent and responsive",
    ],
    filmIntegrity: 100,
    thermalStability: "Purified",
  },
  {
    tag: "03 — THERMAL STRESS",
    stageNum: "03",
    tabLabel: "Thermal Stress",
    title: "HOLDS UP\nUNDER\nTHERMAL STRESS",
    copy: "Engineered SAE 20W-50 viscosity stability resists thermal breakdown in relentless stop-and-go desert traffic and sustained high-RPM hauls under extreme ambient heat.",
    accent: "from-flame-500 to-red-600",
    glowColor: "rgba(239, 68, 68, 0.4)",
    badge: "EXTREME THERMAL RESISTANCE",
    telemetryTitle: "HIGH-TEMP VISCOSITY SIMULATOR",
    statValue: "300°C",
    statLabel: "Peak Thermal Endurance Test",
    metrics: [
      { label: "Flash Point (ASTM D92)", value: "245°C", status: "High Flash" },
      { label: "Viscosity Index Retention", value: "98.7%", status: "Shear Stable" },
      { label: "NOACK Evaporation Loss", value: "< 10.5%", status: "Low Burn" },
    ],
    bulletPoints: [
      "Zero oil thinning under brutal high-load traffic idling",
      "Guards turbo & manifold oil passages against coking",
      "Sustains stable oil pressure across full temperature range",
    ],
    filmIntegrity: 98.6,
    thermalStability: "Active Shield",
  },
  {
    tag: "04 — HIGH-MILEAGE READY",
    stageNum: "04",
    tabLabel: "High-Mileage",
    title: "BUILT FOR\nHIGH-MILEAGE\nENGINES",
    copy: "Formulated with active elastomeric seal conditioners and heavy-body mineral base stocks to revive tired valve seals, cushion loose engine tolerances, and put an end to chronic oil burn.",
    accent: "from-flame-400 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    badge: "SEAL CONDITIONING & COMPRESSION",
    telemetryTitle: "ENGINE RESTORATION TELEMETRY",
    statValue: "+18%",
    statLabel: "Compression Recovery",
    metrics: [
      { label: "Engine Target Lifespan", value: "250,000+ KM", status: "Certified" },
      { label: "Oil Consumption Drop", value: "-42%", status: "Tightened" },
      { label: "4-Litre Heavy-Duty Interval", value: "5,000+ KM", status: "Continuous" },
    ],
    bulletPoints: [
      "Softens and reconditions brittle gaskets to halt oil leaks",
      "Fills wider clearance gaps to eliminate piston slap",
      "Reduces blue exhaust smoke and maintains full oil level",
    ],
    filmIntegrity: 96.4,
    thermalStability: "Conditioned",
  },
];

const AUTOPLAY_DELAY = 4500; // 4.5 seconds per slide for a dynamic experience

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

  // Keyboard navigation when user is on the page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Continuous auto-slide timer
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
      {/* Background Ambience */}
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
              ENGINEERING PERFORMANCE LAB
            </div>
            <h2 className="font-display mt-3 text-3xl md:text-5xl text-paper">
              4-STAGE <span className="gradient-flame-text">PROTECTION MATRIX</span>
            </h2>
          </div>

          {/* Tab Strip with Stage Jump Buttons & Animated Progress Fill */}
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-paper/10 bg-ink-soft/90 p-1.5 backdrop-blur-xl shadow-xl">
            {STAGES.map((s, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={s.stageNum}
                  onClick={() => goToSlide(idx)}
                  className={`group relative overflow-hidden flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-flame-500 text-ink shadow-[0_0_20px_rgba(255,122,0,0.4)]"
                      : "text-cream/70 hover:bg-paper/5 hover:text-paper"
                  }`}
                  aria-label={`Jump to stage ${s.stageNum}`}
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

                  {/* Active Slide Timer Line on the Tab */}
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
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
            >
              {/* Left Column: Story Copy & Specifications (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {/* Stage Tag & Number */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/50 bg-flame-500/15 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-flame-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-ping" />
                      {currentStage.tag}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">
                      Stage {current + 1} of 4
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display whitespace-pre-line text-[9vw] leading-[0.88] text-paper md:text-[3.8vw]">
                  {currentStage.title}
                </h3>

                {/* Copy */}
                <p className="mt-5 text-base md:text-lg leading-relaxed text-cream/80">
                  {currentStage.copy}
                </p>

                {/* Feature Bullet Points */}
                <div className="mt-6 space-y-3 border-t border-paper/10 pt-5">
                  {currentStage.bulletPoints.map((bp, bidx) => (
                    <div key={bidx} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame-500/20 text-flame-400 shadow-sm">
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
                  {/* Prev / Next Arrows + Auto-play toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-ink-soft/90 text-paper transition-all hover:border-flame-500 hover:bg-flame-500 hover:text-ink active:scale-95 shadow-md cursor-pointer"
                      aria-label="Previous Stage"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-ink-soft/90 text-paper transition-all hover:border-flame-500 hover:bg-flame-500 hover:text-ink active:scale-95 shadow-md cursor-pointer"
                      aria-label="Next Stage"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Auto-Slide Status & Pause/Resume Toggle */}
                    <button
                      onClick={() => setIsPaused((prev) => !prev)}
                      className="ml-2 flex items-center gap-2 rounded-xl border border-paper/15 bg-ink-soft/80 px-3 py-2 text-xs font-semibold text-smoke hover:text-paper hover:border-flame-500/50 transition-all cursor-pointer"
                      title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
                    >
                      {!isPaused ? (
                        <>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-500"></span>
                          </span>
                          <span className="text-flame-400 font-bold">AUTO</span>
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

                  {/* Progress Line Bars with Filling Animation */}
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

              {/* Right Column: Ultra-Modern Telemetry Console (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="card-glass relative overflow-hidden rounded-3xl border border-paper/15 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                  {/* Subtle Top Lighting Gradient */}
                  <div
                    className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${currentStage.accent} opacity-30 blur-[60px] pointer-events-none`}
                  />

                  {/* Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-flame-400 animate-ping" />
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-paper">
                        {currentStage.telemetryTitle}
                      </span>
                    </div>
                    <span className="rounded-md border border-flame-500/30 bg-ink-soft/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-flame-400 uppercase">
                      {currentStage.badge}
                    </span>
                  </div>

                  {/* Center Hero Telemetry: Big Stat + Visual Diagram */}
                  <div className="my-6 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                    {/* Primary Hero Metric Dial */}
                    <div className="md:col-span-5 flex flex-col justify-center rounded-2xl border border-flame-500/30 bg-gradient-to-br from-flame-500/15 via-ink-soft to-ink p-5 text-center shadow-inner">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-smoke">
                        Verified Metric
                      </span>
                      <span className="font-display my-1 text-5xl md:text-6xl text-flame-400 drop-shadow-[0_4px_12px_rgba(255,122,0,0.4)]">
                        {currentStage.statValue}
                      </span>
                      <span className="text-xs font-semibold text-paper/90">
                        {currentStage.statLabel}
                      </span>
                      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Laboratory Benchmark PASS</span>
                      </div>
                    </div>

                    {/* Interactive Engineering Diagram / Bottle Display */}
                    <div className="md:col-span-7 relative flex min-h-[160px] items-center justify-between rounded-2xl border border-paper/10 bg-ink-soft/90 p-4">
                      {/* Technical Diagram Overlay */}
                      <div className="flex-1 space-y-2.5 pr-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-smoke">Oil Film Integrity</span>
                          <span className="font-bold text-flame-400">{currentStage.filmIntegrity}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${currentStage.filmIntegrity}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-flame-400 to-flame-600"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px]">
                          <span className="font-semibold text-smoke">Thermal Dissipation</span>
                          <span className="font-bold text-flame-400">{currentStage.thermalStability}</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-flame-500"
                          />
                        </div>

                        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-cream/70">
                          <svg className="h-3 w-3 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span>Engineered in UAE • 4L Canister Formula</span>
                        </div>
                      </div>

                      {/* Mini Bottle Highlight */}
                      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-ink/60 border border-flame-500/20 p-1 flex items-center justify-center">
                        <Image
                          src="/images/bottle-cutout.png"
                          alt="Master Optima 20W-50 Canister"
                          width={80}
                          height={110}
                          className="object-contain drop-shadow-[0_8px_16px_rgba(255,122,0,0.3)] transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Telemetry Metrics Strip */}
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
                          <span className="font-display text-lg text-paper">
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
                  <div className="mt-4 flex items-center justify-between text-[10px] text-smoke">
                    <span>Certified Formulation: SAE 20W-50 • API SM</span>
                    <span className="text-flame-400 font-semibold">Continuous Engine Defense</span>
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
