import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TAF Energies PLC | Quality Lubricants in Ethiopia",
  description:
    "Learn about TAF Energies PLC, our partnership with state-of-the-art UAE lubricant blending facilities, and our mission to deliver verified automotive lubricants across Ethiopia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="border-b border-paper/10 pb-8 mb-10">
            <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flame-400">
              COMPANY OVERVIEW &amp; ORIGIN
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-paper mt-3">
              ABOUT <span className="gradient-flame-text">TAF ENERGIES PLC</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-cream/80 max-w-2xl leading-relaxed">
              Pioneering dependable, high-shear lubrication solutions for East Africa’s demanding fleet and automotive operating conditions.
            </p>
          </div>

          {/* Company Story */}
          <div className="space-y-10 mb-16">
            <div className="card-glass rounded-2xl p-6 md:p-8 border border-paper/15 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl text-paper">WHO WE ARE</h2>
              <p className="text-sm md:text-base text-cream/80 leading-relaxed">
                <strong>TAF Energies PLC</strong> is an Ethiopian energy and automotive lubricants enterprise headquartered in Addis Ababa. We specialize in the commercial importation, quality verification, and nationwide distribution of heavy-duty engine oils, transmission fluids, and industrial lubricants engineered to withstand prolonged heat and tough terrain.
              </p>
              <p className="text-sm md:text-base text-cream/80 leading-relaxed">
                Recognizing the unique mechanical requirements of the Ethiopian automotive demographic — which predominantly features older, pre-2010 Japanese, European, and American models operating at high altitudes and ambient temperatures — TAF Energies introduced <strong>Master Optima 20W-50 SM</strong> as a purpose-engineered solution.
              </p>
            </div>

            {/* UAE Manufacturing Partnership */}
            <div className="card-glass rounded-2xl p-6 md:p-8 border border-flame-500/30 space-y-4">
              <span className="rounded border border-flame-500/40 bg-flame-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-flame-400">
                STATE-OF-THE-ART PRODUCTION
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-paper">OUR UAE BLENDING PARTNERSHIP</h2>
              <p className="text-sm md:text-base text-cream/80 leading-relaxed">
                Every bottle of Master Optima is precision-blended and packaged in state-of-the-art lubricant blending facilities in the <strong>United Arab Emirates (UAE)</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-xl border border-paper/10 bg-ink-soft p-4">
                  <span className="font-display text-xl text-flame-400 block">ISO 9001:2015</span>
                  <span className="text-xs text-smoke mt-1 block">Certified Quality Management in all blending &amp; packaging stages</span>
                </div>
                <div className="rounded-xl border border-paper/10 bg-ink-soft p-4">
                  <span className="font-display text-xl text-flame-400 block">Automated Canning</span>
                  <span className="text-xs text-smoke mt-1 block">Airtight induction foil sealing directly from the packaging line</span>
                </div>
                <div className="rounded-xl border border-paper/10 bg-ink-soft p-4">
                  <span className="font-display text-xl text-flame-400 block">Batch ICP Testing</span>
                  <span className="text-xs text-smoke mt-1 block">Inductively Coupled Plasma spectroscopy on every blending batch</span>
                </div>
              </div>
            </div>

            {/* Quality Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-glass rounded-2xl p-6 border border-paper/15 space-y-2">
                <h3 className="font-display text-xl text-paper">Direct Importer Integrity</h3>
                <p className="text-xs md:text-sm text-cream/70 leading-relaxed">
                  We eliminate unauthorized intermediaries. Every container of Master Optima is sealed at origin, imported directly through Ethiopian customs, and verified at our central Gotera depot.
                </p>
              </div>

              <div className="card-glass rounded-2xl p-6 border border-paper/15 space-y-2">
                <h3 className="font-display text-xl text-paper">Formulated for the Market</h3>
                <p className="text-xs md:text-sm text-cream/70 leading-relaxed">
                  We don’t believe in one-size-fits-all oils. We formulate specifically for high-mileage tolerances, heavy stop-and-go driving, and high ambient temperatures.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="rounded-2xl border border-paper/20 bg-ink-soft p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg text-paper">Have questions about our corporate history or tenders?</h3>
              <p className="text-xs text-smoke mt-0.5">Our Addis Ababa corporate communications office is available to assist.</p>
            </div>
            <Link
              href="/contact"
              className="btn-flame rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ink"
            >
              Contact Corporate Desk
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

