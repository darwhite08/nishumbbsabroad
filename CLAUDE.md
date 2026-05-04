# Worldwise Education — Project Context for Claude

---

## ⛔ RULE ZERO — READ BEFORE TOUCHING ANY UI

**Before modifying any section, component, or page — read `docs/section-permissions.md`.**

- If a section is marked `🔒 LOCKED` → **do not touch it under any circumstances.**
- A general prompt like "redesign the site", "make it look better", "fix the UI", "world-class design", or "update the layout" does **NOT** grant permission to touch locked sections.
- Only act on a locked section when the user's message **explicitly names it**: e.g. "fix the hero", "update the hero section", "change the hero".
- When in doubt, skip the section and note what you skipped.

**🔒 ENTIRE LANDING PAGE LOCKED** — `app/page.tsx` is fully locked. All 11 sections are locked as of 2026-05-04. Do not touch any section without an explicit user instruction naming that section.

---

## What This Project Is
A static marketing website for an MBBS abroad consultancy called **Worldwise Education**, led by doctors who studied abroad themselves. All inquiries go to WhatsApp or Instagram. No backend, no auth, no database.

## Requirements Source
Full requirements are in `docs/requirements.md`. Read before making architectural decisions.

## Section Permissions
All section lock/unlock status is tracked in `docs/section-permissions.md`. Always check it before any UI work.

## Tech Stack
- **Framework:** Next.js 14 App Router (SSG)
- **Styling:** Tailwind CSS v3 + custom CSS classes in `globals.css`
- **Fonts:** Inter (`--font-inter`), DM Serif Display (`--font-display`), Space Mono (`--font-mono`)
- **Icons:** Lucide React
- **Hosting:** Vercel (auto-deploys from `main` branch)

## Design System — Modern Medical Brutalism
- Surgical Blue: `#003366`
- Vibrant Teal: `#00C5A3`
- Charcoal: `#0D0D0D`
- Hospital White: `#FFFFFF`
- Warm Cream: `#FAF8F4`
- Deep Navy: `#003366`
- Grid lines: `#E2E4E8` (1px)
- Sharp corners throughout (no border-radius)
- DM Serif Display for all headings
- Space Mono for fees, stats, badges, labels, nav
- Brutalist buttons: monospace uppercase, 3px offset hover shadow

## Project Rules (Non-Negotiable)
1. **No backend** — zero server logic, no forms, no database
2. **All CTAs → WhatsApp or Instagram** (pre-filled messages via `lib/utils.ts`)
3. **All content in `/data/*.ts`** — static TypeScript files, no CMS
4. **Full SSG** — `generateStaticParams()` on all dynamic routes
5. **Mobile-first** — majority of users are on mobile in India
6. **Check section permissions** before any UI change (`docs/section-permissions.md`)

## Placeholder Values (Until Client Provides)
- WhatsApp: `917011079984`
- Instagram: `world.wiseeducation`
- Company name: `Worldwise Education`
- Office: `New Delhi, India`

## WhatsApp Link Format
```
https://wa.me/917011079984?text=Hi%2C+I%27m+interested+in+MBBS+abroad.+Can+you+guide+me%3F
```

## Site Map
- `/` — Homepage (long scroll, 10 sections)
- `/about` — About + Team
- `/countries` — Countries listing
- `/countries/[slug]` — 8 country pages
- `/universities` — Universities listing
- `/universities/[slug]` — 12 university pages
- `/process` — Admission process
- `/eligibility` — Eligibility criteria
- `/blog` — Blog listing
- `/blog/[slug]` — 10 blog posts
- `/faq` — 30+ FAQs
- `/contact` — Contact page

## Progress Tracking
See `PROGRESS.md` for build status.

## Open Questions (Blocked on Client)
See Section 16 of `docs/requirements.md`. All blocked items use placeholder values.
