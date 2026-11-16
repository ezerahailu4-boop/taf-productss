import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Data Sheet (TDS) & SDS | TAF Master Optima 20W-50 SM",
  description:
    "Official Technical Data Sheet (TDS) and Safety Data Sheet (SDS) for TAF Master Optima SAE 20W-50 API SM / CF engine oil. Verified ASTM laboratory properties and legacy engine formulation rationale.",
};

export default function TechnicalDataSheetPage() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="border-b border-paper/10 pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flame-400">
                OFFICIAL TECHNICAL DOCUMENTATION
              </span>
              <span className="rounded-full border border-paper/15 px-3 py-1 text-xs text-smoke">
                Document Ref: TAF-TDS-20W50-SM-REV4
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-paper">
              TECHNICAL DATA SHEET &amp; <span className="gradient-flame-text">SAFETY (SDS)</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-cream/80 max-w-2xl leading-relaxed">
              Laboratory specification and material safety sheet for <strong>Master Optima SAE 20W-50 API SM / CF</strong>, blended in UAE and distributed in Ethiopia by TAF Energies PLC.
            </p>
          </div>

          {/* Product Overview Summary */}
          <div className="card-glass rounded-2xl p-6 md:p-8 mb-10 border border-paper/15 space-y-4">
            <h2 className="font-display text-2xl text-paper">1. PRODUCT IDENTIFICATION &amp; DESCRIPTION</h2>
            <p className="text-sm text-cream/80 leading-relaxed">
              <strong>Master Optima 20W-50 SM</strong> is a high-performance, multi-grade gasoline engine oil formulated from premium high-viscosity-index mineral base stocks fortified with advanced shear-stable viscosity improvers, over-based detergent additives, and high-potency Zinc Dialkyldithiophosphate (ZDDP) anti-wear inhibitors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-paper/10 bg-ink-soft p-3">
                <span className="text-[10px] uppercase font-bold text-smoke block">Viscosity Grade</span>
                <span className="font-display text-lg text-flame-400">SAE 20W-50</span>
              </div>
              <div className="rounded-xl border border-paper/10 bg-ink-soft p-3">
                <span className="text-[10px] uppercase font-bold text-smoke block">Service Category</span>
                <span className="font-display text-lg text-paper">API SM / CF</span>
              </div>
              <div className="rounded-xl border border-paper/10 bg-ink-soft p-3">
                <span className="text-[10px] uppercase font-bold text-smoke block">Packaging Size</span>
                <span className="font-display text-lg text-paper">4 Litres Net</span>
              </div>
            </div>
          </div>

          {/* ASTM Physical & Chemical Properties Table */}
          <div className="card-glass rounded-2xl p-6 md:p-8 mb-10 border border-paper/15">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl text-paper">2. TYPICAL PHYSICAL &amp; CHEMICAL PROPERTIES</h2>
              <span className="text-xs text-smoke">Laboratory Values &bull; UAE Blending QA</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-paper/15 text-smoke uppercase text-[10px] tracking-wider">
                    <th className="py-3 pr-4 font-semibold">Test Parameter</th>
                    <th className="py-3 px-4 font-semibold">Standard Method</th>
                    <th className="py-3 px-4 font-semibold text-flame-400">Typical Value</th>
                    <th className="py-3 pl-4 font-semibold text-paper">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-paper/10">
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Appearance &amp; Visual Color</td>
                    <td className="py-3.5 px-4 text-smoke">Visual Inspection</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">Clear &amp; Bright Amber</td>
                    <td className="py-3.5 pl-4 text-cream/70">—</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Density @ 15°C</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D4052</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">0.887</td>
                    <td className="py-3.5 pl-4 text-cream/70">kg/L</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Kinematic Viscosity @ 40°C</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D445</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">168.5</td>
                    <td className="py-3.5 pl-4 text-cream/70">mm²/s (cSt)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Kinematic Viscosity @ 100°C</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D445</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">19.1</td>
                    <td className="py-3.5 pl-4 text-cream/70">mm²/s (cSt)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Viscosity Index (VI)</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D2270</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">128</td>
                    <td className="py-3.5 pl-4 text-cream/70">—</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Flash Point (Cleveland Open Cup)</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D92</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">238</td>
                    <td className="py-3.5 pl-4 text-cream/70">°C</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Pour Point</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D97</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">-24</td>
                    <td className="py-3.5 pl-4 text-cream/70">°C</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Total Base Number (TBN)</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D2896</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">9.2</td>
                    <td className="py-3.5 pl-4 text-cream/70">mg KOH/g</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">NOACK Evaporation Loss (1h @ 250°C)</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D5800</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">&lt; 11.5</td>
                    <td className="py-3.5 pl-4 text-cream/70">% mass</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Zinc Content (ZDDP Level)</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D5185</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">1,200</td>
                    <td className="py-3.5 pl-4 text-cream/70">PPM (mg/kg)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-medium text-paper">Phosphorus Content</td>
                    <td className="py-3.5 px-4 text-smoke">ASTM D5185</td>
                    <td className="py-3.5 px-4 font-medium text-flame-400">1,080</td>
                    <td className="py-3.5 pl-4 text-cream/70">PPM (mg/kg)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rationale Section: Why API SM for older engines */}
          <div className="card-glass rounded-2xl p-6 md:p-8 mb-10 border border-flame-500/30 space-y-4">
            <h2 className="font-display text-2xl text-paper">
              3. TECHNICAL RATIONALE: WHY API SM FOR HIGH-MILEAGE VEHICLES
            </h2>
            <div className="space-y-3 text-sm text-cream/80 leading-relaxed">
              <p>
                API SM was introduced in 2004 for pre-2010 automotive gasoline engines. In subsequent specifications (API SN in 2010, SN PLUS in 2018, and SP in 2020), the American Petroleum Institute strictly restricted phosphorus and zinc levels below 800 PPM to prevent catalyst poisoning in sophisticated multi-stage exhaust emission systems.
              </p>
              <p>
                However, for older overhead-valve (OHV) pushrod engines, classic flat-tappet camshaft designs, and high-clearance engines common across East Africa, restricted zinc levels can lead to severe boundary scuffing and accelerated camshaft lobe wear.
              </p>
              <p className="text-flame-400 font-semibold">
                Master Optima 20W-50 intentionally retains 1,200 PPM of active ZDDP to maintain a protective sacrificial boundary layer under high mechanical pressure, coupled with a heavy SAE 50 hot-viscosity rating that resists thermal thinning in high ambient heat.
              </p>
            </div>
          </div>

          {/* Safety Data Sheet (SDS) Section */}
          <div id="sds" className="card-glass rounded-2xl p-6 md:p-8 mb-10 border border-paper/15 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-paper">4. SAFETY DATA SHEET (SDS / MSDS) SUMMARY</h2>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase">
                GHS Compliant
              </span>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-cream/80 leading-relaxed">
              <div>
                <strong className="text-paper block mb-1">Handling &amp; Hygiene:</strong>
                Avoid prolonged or repeated skin contact with used engine oils. Used motor oil contains potentially harmful contaminants accumulated during engine operation. Wash thoroughly with soap and water after handling.
              </div>

              <div>
                <strong className="text-paper block mb-1">Fire &amp; Explosion Hazards:</strong>
                Flash point exceeds 238°C (ASTM D92). Not classified as flammable under normal ambient temperatures, but combustible at high temperatures. In case of fire, use CO2, dry chemical powder, or foam extinguishers. Do NOT spray water directly into burning oil.
              </div>

              <div>
                <strong className="text-paper block mb-1">Spill &amp; Environmental Protection:</strong>
                Prevent entry into drains, sewers, and waterways. Soak up with inert absorbent material (sand, earth, sawdust). Dispose of collected waste in accordance with regional environmental protection regulations.
              </div>

              <div>
                <strong className="text-paper block mb-1">Storage Conditions:</strong>
                Store in original sealed containers between 0°C and 45°C in a dry, well-ventilated area away from direct sunlight and strong oxidizing agents.
              </div>
            </div>
          </div>

          {/* Actions & Inquiries */}
          <div className="rounded-2xl border border-paper/20 bg-ink-soft p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg text-paper">Need Batch-Specific Certificate of Analysis (CoA)?</h3>
              <p className="text-xs text-smoke mt-0.5">Contact our technical department for official batch quality certificates for tender and wholesale supply.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-flame rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink"
              >
                Request Batch CoA
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-paper/20 px-4 py-2.5 text-xs font-medium text-cream/70 hover:text-paper"
              >
                Back to Product
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

