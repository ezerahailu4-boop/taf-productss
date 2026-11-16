import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-soft py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-paper/10">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl tracking-widest text-paper">
                TAF
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
              <span className="font-display text-xl tracking-widest text-flame-400">
                ENERGIES PLC
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-smoke">
              Official Ethiopian importer and master distributor of Master Optima 20W-50 SM heavy-duty gasoline engine oils. Formulated and packaged in ISO 9001 certified blending facilities in the United Arab Emirates.
            </p>
            <div className="pt-2 text-xs text-cream/80 space-y-1">
              <p>📍 Debre Zeit Road, Gotera Industrial Zone, Addis Ababa</p>
              <p>📞 Phone: +251 11 662 0000 / +251 91 123 4567</p>
              <p>✉️ Email: sales@tafenergies.com</p>
            </div>
          </div>

          {/* Quick Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-paper">
              Product &amp; Tech
            </h4>
            <ul className="space-y-2 text-xs text-smoke">
              <li>
                <Link href="/#hero" className="hover:text-flame-400 transition-colors">
                  Master Optima 20W-50
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-flame-400 transition-colors">
                  ASTM Test Standards
                </Link>
              </li>
              <li>
                <Link href="/#specs" className="hover:text-flame-400 transition-colors">
                  Why API SM Specification
                </Link>
              </li>
              <li>
                <Link href="/technical-data-sheet" className="hover:text-flame-400 transition-colors">
                  Technical Data Sheet (TDS)
                </Link>
              </li>
              <li>
                <Link href="/technical-data-sheet#sds" className="hover:text-flame-400 transition-colors">
                  Safety Data Sheet (SDS / MSDS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Distribution & Commercial */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-paper">
              Distributors &amp; Sales
            </h4>
            <ul className="space-y-2 text-xs text-smoke">
              <li>
                <Link href="/distributors" className="hover:text-flame-400 transition-colors">
                  Addis Ababa Central Depot
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-flame-400 transition-colors">
                  Adama &amp; Oromia Logistics
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-flame-400 transition-colors">
                  Hawassa &amp; Southern Hub
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-flame-400 transition-colors">
                  Dire Dawa Eastern Station
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-flame-400 transition-colors">
                  Become a Stockist
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-paper">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-smoke">
              <li>
                <Link href="/about" className="hover:text-flame-400 transition-colors">
                  About TAF Energies PLC
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-flame-400 transition-colors">
                  Contact Commercial Desk
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Direct</span>
                  <span>&rarr;</span>
                </a>
              </li>
              <li>
                <span className="text-[11px] text-smoke">Origin: UAE Blended &amp; Packaged</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-smoke">
          <p>
            &copy; 2026 TAF Energies PLC. All rights reserved. Master Optima is a registered trademark.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded bg-paper/5 px-2 py-0.5 text-[10px] font-bold text-cream/70 uppercase">
              API SM / CF Certified
            </span>
            <span className="rounded bg-paper/5 px-2 py-0.5 text-[10px] font-bold text-cream/70 uppercase">
              ISO 9001:2015 Blending
            </span>
            <span className="rounded bg-paper/5 px-2 py-0.5 text-[10px] font-bold text-cream/70 uppercase">
              4L Heavy-Duty Canister
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
