# Section Permissions

This file is the authoritative lock registry for all UI sections on this site.

**Rule:** Before touching ANY section during a redesign, refactor, or style change — check the STATUS column below. If a section is `LOCKED`, skip it entirely. Do not modify it. Do not "improve" it. Do not touch it. Only act on it if the user's message contains an explicit instruction such as:
- "fix the hero section"
- "update the hero"
- "change the hero"
- "touch the hero"
- "modify the [section name]"

A general instruction like "redesign the site", "make it look better", "update the design", or "fix the UI" does NOT unlock any LOCKED section.

---

## Homepage (`app/page.tsx`)

| Section | Component / Location | STATUS | Locked Since | Notes |
|---------|---------------------|--------|--------------|-------|
| Hero | `app/page.tsx` — Section 1 | **🔒 LOCKED** | 2026-05-04 | Two-line headline, full-bleed photo, floating stat card, stats bar. User-approved final state. |
| Marquee Strip | `app/page.tsx` — Section 2 | **🔒 LOCKED** | 2026-05-04 | Animated CSS ticker, deep navy #003366, teal dot separators, Space Mono uppercase. User-approved final state. |
| Why Worldwise | `app/page.tsx` — Section 3 | **🔒 LOCKED** | 2026-05-04 | White bg, teal gradient top accent, faded "01" ghost number, 2-col header (heading left / copy right), 4 feature rows (64px index col + 1fr content), proof stats strip + CTA. User-approved final state. |
| Countries | `app/page.tsx` — Section 4 | ✅ OPEN | — | Photo cards grid |
| Split Feature | `app/page.tsx` — Section 5 | ✅ OPEN | — | Teal / white split |
| Team | `app/page.tsx` — Section 6 | ✅ OPEN | — | Charcoal bg, grayscale photos |
| Fee Comparison | `app/page.tsx` — Section 7 | ✅ OPEN | — | Cream, comparison card |
| Testimonials | `app/page.tsx` — Section 8 | ✅ OPEN | — | Navy bg, serif quotes |
| FAQ | `app/page.tsx` — Section 9 | ✅ OPEN | — | White, sticky sidebar |
| Final CTA | `app/page.tsx` — Section 10 | ✅ OPEN | — | Charcoal / teal split |

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

To **lock** a section: change its STATUS to `🔒 LOCKED`, add a date, and write a note describing the approved final state.

To **unlock** a section: change STATUS back to `✅ OPEN` and clear the lock date.

The user is the only one who can authorize a lock or unlock.
