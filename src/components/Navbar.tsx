"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#story", label: "Protection" },
  { href: "#product", label: "The Bottle" },
  { href: "#specs", label: "Specs" },
  { href: "#find", label: "Buy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-paper/10" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-lg tracking-widest text-paper">
            TAF
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
          <span className="font-display text-lg tracking-widest text-flame-400">
            ENERGIES
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-flame-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#find"
          className="rounded-full border border-flame-500/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-400 transition-colors hover:bg-flame-500 hover:text-ink"
        >
          Find a Dealer
        </a>
      </nav>
    </motion.header>
  );
}
