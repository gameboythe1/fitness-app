# Fitness App (Next.js, TypeScript, Tailwind)

[![Deploy](https://img.shields.io/badge/Live-Vercel-black?logo=vercel)](https://fitness-app-inky-three.vercel.app/)

Mobile-first fitness app: dashboard, activity tracking (with charts), and workouts.

## Tech
- Next.js App Router, TypeScript, Tailwind CSS, ESLint
- Charts: `react-chartjs-2` + `chart.js`

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — start production server
- `npm run lint` — run ESLint
- `npm run icons` — generate PWA icons from `public/logo.svg`

## Getting Started
1) Install deps: `npm install`
2) Run dev: `npm run dev`
3) Open `http://localhost:3000`

## Features
- Dashboard: icon stat cards and recent activity
- Activity: 7-day steps/calories with chart (localStorage seed)
- Workouts: simple plans; tap Log to mark complete (persisted)

## PWA (Installable App)
- Manifest: `public/manifest.json`
- Service Worker: `public/sw.js` (basic cache-first)
- Icons: generated into `public/icons/`

Install on mobile:
- Chrome (Android): open the site → menu → Add to Home screen
- iOS (Safari): Share → Add to Home Screen

Generate icons (optional, regenerates and updates manifest):
```bash
npm run icons
```

## Structure
- `app/` — routes: `/`, `/activity`, `/workouts`
- `app/layout.tsx` — mobile nav and base layout
- `app/globals.css` — Tailwind base styles

## Notes
- Data persists in browser `localStorage` for demo purposes
- Future: auth (NextAuth), server actions, richer charts, CI
