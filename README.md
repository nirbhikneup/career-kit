# CareerKit

CareerKit is a lightweight internship tracker built to practice real SWE-intern fundamentals while shipping a clean, deployable product.

**Core idea:** build the same patterns you’ll use in internships (auth, validation, CRUD, security, UI states) without overengineering.

---

## Demo
- Deployed: (coming soon)
- Screenshots: (coming soon)

---

## Features (MVP)
- Email/password authentication (Supabase Auth)
- Protected app area (redirects if not logged in)
- Environment + wiring smoke check (`/debug-env` in dev only)

### Planned (next)
- Internship applications CRUD (create, list, edit, delete)
- Status filters + search
- Supabase Row Level Security (owner-only)
- Resume versions
- **One AI feature only:** “AI Bullet Booster” (generate 3 impact bullets from project + target role/JD)

---

## Tech Stack
- Next.js (App Router)
- Supabase (Auth + Postgres + RLS)
- Tailwind CSS
- (soon) Zod for validation
- (soon) GitHub Actions CI (lint + build)

---

## Project Structure

