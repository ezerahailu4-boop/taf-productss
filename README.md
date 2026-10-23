# Master Optima 20W-50 — Awwwards-style Product Landing Page

Premium, scroll-driven e-commerce landing page for TAF Energies' Master Optima
20W-50 SM gasoline engine oil. Built with Next.js, Tailwind CSS, React Three
Fiber, GSAP/ScrollTrigger, Framer Motion, and Lenis smooth scroll.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- React Three Fiber + drei (ambient 3D oil-droplet background)
- GSAP + ScrollTrigger (pinned horizontal scroll story, parallax)
- Framer Motion (entrance choreography, tilt-on-hover product shot)
- Lenis (inertial smooth scrolling)

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Notes
- `public/images/bottle-cutout.png` — background-removed product photo used
  across the hero, product showcase, and CTA sections.
- `public/images/bottle-original.webp` — original uploaded photo, kept as a
  reference asset.
- Fonts (Anton + Inter) are self-hosted via `@fontsource` so the build has no
  external network dependency.
