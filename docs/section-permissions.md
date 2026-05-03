# Section Permissions

This file is the authoritative lock registry for all UI sections on this site.

**Rule:** Before touching ANY section during a redesign, refactor, or style change — check the STATUS column below. If a section is `LOCKED`, skip it entirely. Do not modify it. Do not "improve" it. Do not touch it. Only act on it if the user's message contains an explicit instruction such as:
- "fix the hero section"
- "update the hero"
- "change the [section name]"
- "touch the [section name]"
- "modify the [section name]"

A general instruction like "redesign the site", "make it look better", "update the design", "fix the UI", or "make it world class" does **NOT** unlock any LOCKED section.

---

## Homepage (`app/page.tsx`) — FULLY LOCKED

**The entire landing page (`app/page.tsx`) is locked as of 2026-05-04. No section may be modified without explicit user instruction naming that specific section.**

| Section | Component / Location | STATUS | Locked Since | Notes |
|---------|---------------------|--------|--------------|-------|
| Hero | `app/page.tsx` — Section 1 | **🔒 LOCKED** | 2026-05-04 | Two-line serif headline, full-bleed photo, floating stat card, stats bar. |
| Marquee Strip | `app/page.tsx` — Section 2 | **🔒 LOCKED** | 2026-05-04 | Animated CSS ticker, deep navy, teal dot separators, Space Mono uppercase. |
| Why Worldwise | `app/page.tsx` — Section 3 | **🔒 LOCKED** | 2026-05-04 | White bg, teal gradient top accent, ghost "01", 2-col header, 4 feature rows, proof stats strip. |
| Countries | `app/page.tsx` — Section 4 | **🔒 LOCKED** | 2026-05-04 | Filter bar (budget/duration/internship) + grid/list toggle + 260px photo cards. CountriesFilter.tsx. |
| Our Difference | `app/page.tsx` — Section 5 | **🔒 LOCKED** | 2026-05-04 | White bg, 3D wireframe cubes, mouse parallax, cursor glow, Framer Motion. OurDifference.tsx. |
| Team | `app/page.tsx` — Section 6 | **🔒 LOCKED** | 2026-05-04 | Charcoal #1A1A1A, 3-col grid, 360px photos top-center, grayscale→colour hover. |
| The Numbers | `app/page.tsx` — Section 7 | **🔒 LOCKED** | 2026-05-04 | White bg, teal top accent, 4 stat callouts, comparison table. |
| Testimonials | `app/page.tsx` — Section 8 | **🔒 LOCKED** | 2026-05-04 | Charcoal #0D0D0D, featured card with photo left + quote right, 5 grid cards with circular headshots, tags (Student/Parent/FMGE Graduate). |
| YouTube | `app/page.tsx` — Section 8.5 | **🔒 LOCKED** | 2026-05-04 | White bg, 2-col layout, YouTube iframe embed. Swap video ID to go live. |
| FAQ | `app/page.tsx` — Section 9 | **🔒 LOCKED** | 2026-05-04 | Off-white #F5F5F5, sticky sidebar, white accordion cards. |
| Final CTA | `app/page.tsx` — Section 10 | **🔒 LOCKED** | 2026-05-04 | Charcoal #0D0D0D, grid-line texture, teal glow, "Ready?" headline, proof stats, teal WhatsApp + outlined Instagram CTAs. |

---

## Shared Components

| Component | File | STATUS | Notes |
|-----------|------|--------|-------|
| Navbar | `components/layout/Navbar.tsx` | ✅ OPEN | — |
| Footer | `components/layout/Footer.tsx` | ✅ OPEN | — |
| WhatsApp Button | `components/layout/WhatsAppButton.tsx` | ✅ OPEN | — |

---

## Inner Pages

| Page | STATUS | Notes |
|------|--------|-------|
| `/about` | ✅ OPEN | — |
| `/countries` | ✅ OPEN | — |
| `/countries/[slug]` | ✅ OPEN | — |
| `/universities` | ✅ OPEN | — |
| `/universities/[slug]` | ✅ OPEN | — |
| `/process` | ✅ OPEN | — |
| `/eligibility` | ✅ OPEN | — |
| `/faq` | ✅ OPEN | — |
| `/blog` | ✅ OPEN | — |
| `/blog/[slug]` | ✅ OPEN | — |
| `/contact` | ✅ OPEN | — |

---

## How to Lock / Unlock a Section

To **lock** a section: change STATUS to `🔒 LOCKED`, add a date and description.

To **unlock** a section: change STATUS back to `✅ OPEN`. Only the user can authorize this.
