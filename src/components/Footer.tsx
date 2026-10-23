export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm tracking-widest text-paper">
            TAF
          </span>
          <span className="h-1 w-1 rounded-full bg-flame-500" />
          <span className="font-display text-sm tracking-widest text-flame-400">
            ENERGIES PLC
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-smoke">
          Master Optima 20W-50 SM &middot; Made in UAE &middot; &copy; 2026
        </p>
      </div>
    </footer>
  );
}
