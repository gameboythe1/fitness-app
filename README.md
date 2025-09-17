# Fitness App (Next.js, TypeScript, Tailwind, Turbopack)

Mobile-first fitness app for portfolio: dashboard, activity tracking, and workouts.

## Tech
- Next.js App Router, TypeScript, Tailwind CSS, ESLint
- Dev server uses Turbopack

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — start production server
- `npm run lint` — run ESLint

## Getting Started
1. Install deps: `npm install`
2. Run dev: `npm run dev`
3. Open `http://localhost:3000`

## Features
- Dashboard: summary cards and recent activity
- Activity: seeded 7-day steps/calories history (localStorage) + charts
- Workouts: simple plans; click Log to mark complete (persisted)

## Structure
- `app/` — routes: `/`, `/activity`, `/workouts`
- `app/layout.tsx` — mobile nav and base layout
- `app/globals.css` — Tailwind base styles

## Notes
- Data persists in browser `localStorage` for demo purposes
- Future: auth (NextAuth), server actions, charts, PWA assets
