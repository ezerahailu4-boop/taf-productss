import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regional Distributors & Stockist Network | TAF Energies PLC",
  description:
    "Locate authorized TAF Energies distributors and stockists for Master Optima 20W-50 SM engine oil across Addis Ababa, Adama, Hawassa, Dire Dawa, Bahir Dar, and Mekelle.",
};

const DEPOTS = [
  {
    city: "Addis Ababa — Central Logistics Depot",
    subcity: "Gotera / Debre Zeit Road Industrial Area",
    role: "Central Master Distribution Hub",
    phone: "+251 11 662 0000 / +251 91 123 4567",
    services: "Direct Pallet & Carton Dispatch, Fleet Sales, Technical Desk",
    hours: "Mon – Fri: 8:00 AM – 5:30 PM, Sat: 8:00 AM – 1:00 PM",
    badge: "MAIN HUB",
  },
  {
    city: "Adama / Modjo — Oromia Freight Corridor",
    subcity: "Main Express Highway Logistics Strip",
    role: "Regional Wholesale Distribution",
    phone: "+251 91 123 4568",
    services: "Bulk Carton Distribution to Garages & Fuel Stations",
    hours: "Mon – Sat: 8:00 AM – 5:00 PM",
    badge: "CENTRAL CORRIDOR",
  },
  {
    city: "Hawassa — Southern Regional Depot",
    subcity: "Industrial Park Commercial Zone",
    role: "Southern Nations & Sidama Stockist Depot",
    phone: "+251 91 123 4569",
    services: "Wholesale & Authorized Retail Supply",
    hours: "Mon – Sat: 8:30 AM – 5:00 PM",
    badge: "SOUTHERN HUB",
  },
  {
    city: "Dire Dawa — Eastern Commercial Depot",
    subcity: "Free Trade Zone Logistics Gateway",
    role: "Eastern Region & Harar Distributor",
    phone: "+251 91 123 4570",
    services: "Wholesale Distribution & Transit Depot",
    hours: "Mon – Sat: 8:00 AM – 5:00 PM",
    badge: "EASTERN GATEWAY",
  },
  {
    city: "Bahir Dar — Western Amhara Hub",
    subcity: "Felege Hiwot Commercial Avenue",
    role: "Northwestern Regional Stockist",
    phone: "+251 91 123 4571",
    services: "Fleet Accounts & Garage Network",
    hours: "Mon – Sat: 8:30 AM – 5:00 PM",
    badge: "WESTERN DEPOT",
  },
  {
    city: "Mekelle — Northern Regional Depot",
    subcity: "Industrial Zone Logistics Hub",
    role: "Tigray Regional Distribution Center",
    phone: "+251 91 123 4572",
    services: "Wholesale & Authorized Retail Supply",
    hours: "Mon – Sat: 8:30 AM – 5:00 PM",
    badge: "NORTHERN HUB",
  },
];

export default function DistributorsPage() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="border-b border-paper/10 pb-8 mb-10">
            <span className="rounded-full border border-flame-500/40 bg-flame-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flame-400">
              ETHIOPIA-WIDE COVERAGE
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-paper mt-3">
              AUTHORIZED <span className="gradient-flame-text">DEALER NETWORK</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-cream/80 max-w-2xl leading-relaxed">
              Find authorized TAF Energies PLC depots and certified stockists for Master Optima 20W-50 SM across major economic corridors in Ethiopia.
            </p>
          </div>

          {/* Quick Wholesale Ordering Callout */}
          <div className="card-glass rounded-2xl p-6 md:p-8 mb-12 border border-emerald-500/30 bg-emerald-500/[0.04] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                Direct Wholesale Supply
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-paper mt-2">
                Ordering for a Garage, Fuel Station, or Fleet?
              </h2>
              <p className="text-xs md:text-sm text-cream/75 max-w-xl mt-1 leading-relaxed">
                We supply Master Optima 20W-50 in 4L canisters (packed 6 bottles per carton) and bulk pallets with direct delivery across Ethiopia.
              </p>
            </div>
            <a
              href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20wholesale%20carton%20orders%20for%20Master%20Optima%2020W-50."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame shrink-0 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-lg"
            >
              Request Wholesale Quote via WhatsApp &rarr;
            </a>
          </div>

          {/* Depots List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {DEPOTS.map((depot) => (
              <div
                key={depot.city}
                className="card-glass rounded-2xl p-6 border border-paper/15 hover:border-flame-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded border border-flame-500/40 bg-flame-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-flame-400">
                      {depot.badge}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Depot
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-paper">{depot.city}</h3>
                  <p className="text-xs text-smoke mt-1">{depot.subcity}</p>
                  <p className="text-xs font-semibold text-cream/80 mt-2">{depot.role}</p>

                  <div className="mt-4 space-y-2 border-t border-paper/10 pt-3 text-xs text-cream/70">
                    <div>
                      <span className="text-smoke block text-[10px] uppercase font-bold">Services &amp; Scope:</span>
                      <span>{depot.services}</span>
                    </div>
                    <div>
                      <span className="text-smoke block text-[10px] uppercase font-bold">Contact Lines:</span>
                      <span className="font-semibold text-paper">{depot.phone}</span>
                    </div>
                    <div>
                      <span className="text-smoke block text-[10px] uppercase font-bold">Hours of Operation:</span>
                      <span>{depot.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-paper/10 flex items-center justify-between">
                  <a
                    href={`tel:${depot.phone.split("/")[0].trim()}`}
                    className="text-xs font-bold text-flame-400 hover:underline"
                  >
                    Call Depot Desk &rarr;
                  </a>
                  <a
                    href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20pickup%20at%20your%20depot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Become an Authorized Dealer */}
          <div className="rounded-3xl border border-flame-500/30 bg-ink-soft p-8 md:p-10 text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-flame-500/50 bg-flame-500/10 px-3 py-1 text-xs font-bold text-flame-400 uppercase tracking-widest">
              PARTNERSHIP OPPORTUNITY
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-paper mt-3">
              BECOME AN AUTHORIZED <span className="text-flame-400">STOCKIST</span>
            </h2>
            <p className="text-sm text-cream/75 mt-3 max-w-xl mx-auto leading-relaxed">
              We provide exclusive regional stockist terms, marketing signage, technical training for garage mechanics, and protected territories for qualified distributors in Ethiopia.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-flame rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-ink"
              >
                Apply for Dealership
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-paper/20 px-6 py-3.5 text-xs font-semibold text-paper hover:border-flame-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

