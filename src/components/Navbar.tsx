"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#story", label: "ASTM Testing" },
  { href: "/#specs", label: "Why API SM" },
  { href: "/technical-data-sheet", label: "TDS / Safety" },
  { href: "/distributors", label: "Dealers" },
  { href: "/about", label: "About TAF" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-ink/90 backdrop-blur-md border-b border-paper/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl tracking-widest text-paper group-hover:text-flame-400 transition-colors">
            TAF
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-flame-500 animate-pulse" />
          <span className="font-display text-xl tracking-widest text-flame-400">
            ENERGIES
          </span>
          <span className="hidden sm:inline-block rounded border border-flame-500/30 bg-flame-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-flame-400 ml-1">
            PLC
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-flame-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons on Right */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50%20engine%20oil."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-ink"
            aria-label="Direct WhatsApp Message"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/#contact"
            className="rounded-full border border-flame-500/60 bg-flame-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-flame-400 transition-colors hover:bg-flame-500 hover:text-ink shadow-sm"
          >
            Find a Dealer
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-paper/15 text-paper hover:border-flame-500 hover:text-flame-400 lg:hidden cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-paper/15 bg-ink/95 px-6 pb-6 pt-2 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wider text-cream/80 hover:bg-paper/5 hover:text-flame-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 border-t border-paper/10 pt-4 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/251911234567?text=Hello%20TAF%20Energies,%20I%20am%20inquiring%20about%20Master%20Optima%2020W-50%20engine%20oil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-3 text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-ink transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Chat on WhatsApp (+251 91 123 4567)
                </a>

                <a
                  href="tel:+251116620000"
                  className="flex items-center justify-center gap-2 rounded-xl border border-paper/15 bg-ink-soft py-3 text-xs font-bold text-paper hover:border-flame-500 transition-colors"
                >
                  Call Head Office (+251 11 662 0000)
                </a>

                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-flame flex items-center justify-center rounded-xl py-3 text-center text-xs font-bold tracking-wider uppercase text-ink"
                >
                  Locate Nearest Dealer
                </Link>
              </div>

              <div className="pt-2 text-center text-[10px] text-smoke">
                TAF Energies PLC &middot; Debre Zeit Road, Addis Ababa, Ethiopia
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
