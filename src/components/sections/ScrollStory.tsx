"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Stage {
  tag: string;
  stageNum: string;
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
}

const STAGES: Stage[] = [
  {
    tag: "01 — WEAR PROTECTION",
    stageNum: "01",
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
  },
  {
    tag: "02 — DEPOSIT CONTROL",
    stageNum: "02",
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
  },
  {
    tag: "03 — THERMAL STRESS",
    stageNum: "03",
    title: "HOLDS UP\nUNDER\nTHERMAL STRESS",
    copy: "Engineered SAE 20W-50 viscosity stability resists thermal breakdown in relentless stop-and-go desert traffic and sustained high-RPM hauls under extreme Ethiopian ambient heat.",
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
  },
  {
    tag: "04 — HIGH-MILEAGE READY",
    stageNum: "04",
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
  },
];

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const panels = gsap.utils.toArray<HTMLElement>(".story-panel", track);

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(track, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
        },
      });

      panels.forEach((panel) => {
        const num = panel.querySelector(".panel-num");
        const title = panel.querySelector(".panel-title");
        const copy = panel.querySelector(".panel-copy");
        const bullets = panel.querySelector(".panel-bullets");
        const visual = panel.querySelector(".panel-visual");

        gsap.fromTo(
          [num, title, copy, bullets],
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        if (visual) {
          gsap.fromTo(
            visual,
            { opacity: 0, scale: 0.92, y: 40 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative overflow-hidden bg-ink"
    >
      <div
        ref={trackRef}
        className="flex h-screen w-max"
      >
        {STAGES.map((s, i) => (
          <div
            key={s.tag}
            className="story-panel relative flex h-screen w-screen shrink-0 items-center overflow-hidden px-6 md:px-12 lg:px-20"
          >
            {/* Ambient Background Aura */}
            <div
              className={`pointer-events-none absolute right-1/4 top-1/2 h-[70vmin] w-[70vmin] -translate-y-1/2 rounded-full bg-gradient-to-br ${s.accent} opacity-25 blur-[130px]`}
            />
            {/* Watermark Number */}
            <span className="font-display pointer-events-none absolute right-4 top-4 select-none text-[26vw] leading-none text-outline-cream opacity-[0.05] md:text-[15vw]">
              {s.stageNum}
            </span>

            {/* Main Stage Grid - 12 Columns */}
            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
              {/* Left Column: Story Copy & Specifications (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {/* Stage Pill */}
                <div className="panel-num mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-flame-500/50 bg-flame-500/15 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-flame-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-flame-400 animate-pulse" />
                    {s.tag}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">
                    Stage {i + 1} of 4
                  </span>
                </div>

                {/* Title */}
                <h3 className="panel-title font-display whitespace-pre-line text-[9vw] leading-[0.88] text-paper md:text-[3.8vw]">
                  {s.title}
                </h3>

                {/* Copy */}
                <p className="panel-copy mt-5 text-base md:text-lg leading-relaxed text-cream/80">
                  {s.copy}
                </p>

                {/* Feature Bullet Points */}
                <div className="panel-bullets mt-6 space-y-2.5 border-t border-paper/10 pt-5">
                  {s.bulletPoints.map((bp, bidx) => (
                    <div key={bidx} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame-500/20 text-flame-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-cream/90">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Stage Progress Bar */}
                <div className="mt-8 flex items-center gap-2">
                  {STAGES.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === i
                          ? "w-10 bg-flame-500 shadow-[0_0_12px_rgba(255,122,0,0.8)]"
                          : "w-2.5 bg-paper/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Middle & Right Column: Ultra-Modern Telemetry Console (7 Cols) */}
              <div className="panel-visual lg:col-span-7">
                <div className="card-glass relative overflow-hidden rounded-3xl border border-paper/15 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                  {/* Subtle Top Lighting Gradient */}
                  <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${s.accent} opacity-30 blur-[60px] pointer-events-none`} />

                  {/* Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-flame-400 animate-ping" />
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-paper">
                        {s.telemetryTitle}
                      </span>
                    </div>
                    <span className="rounded-md border border-flame-500/30 bg-ink-soft/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-flame-400 uppercase">
                      {s.badge}
                    </span>
                  </div>

                  {/* Center Hero Telemetry: Big Stat + Visual Diagram */}
                  <div className="my-6 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                    {/* Primary Hero Metric Dial */}
                    <div className="md:col-span-5 flex flex-col justify-center rounded-2xl border border-flame-500/30 bg-gradient-to-br from-flame-500/15 via-ink-soft to-ink p-5 text-center shadow-inner">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-smoke">
                        Verified Metric
                      </span>
                      <span className="font-display my-1 text-5xl md:text-6xl text-flame-400">
                        {s.statValue}
                      </span>
                      <span className="text-xs font-semibold text-paper/90">
                        {s.statLabel}
                      </span>
                      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Laboratory Benchmark PASS</span>
                      </div>
                    </div>

                    {/* Interactive Engineering Diagram / Bottle Display */}
                    <div className="md:col-span-7 relative flex min-h-[160px] items-center justify-between rounded-2xl border border-paper/10 bg-ink-soft/90 p-4">
                      {/* Technical Diagram Overlay */}
                      <div className="flex-1 space-y-2 pr-3">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-smoke">Oil Film Integrity</span>
                          <span className="font-bold text-flame-400">99.8%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-flame-400 to-flame-600 transition-all duration-1000"
                            style={{ width: i === 0 ? "99%" : i === 1 ? "100%" : i === 2 ? "98%" : "96%" }}
                          />
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px]">
                          <span className="font-semibold text-smoke">Thermal Dissipation</span>
                          <span className="font-bold text-flame-400">Stable</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-flame-500"
                            style={{ width: "94%" }}
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
                    {s.metrics.map((m, midx) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
