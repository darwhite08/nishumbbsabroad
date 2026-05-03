# NishU MBBS Abroad — Project Context for Claude

## What This Project Is
A static marketing website for an MBBS abroad consultancy led by **doctors who studied abroad themselves**. The primary differentiator is doctor-led counseling — no non-medical agents. All inquiries go to WhatsApp or Instagram. No backend, no auth, no database.

## Requirements Source
Full requirements are in `docs/requirements.md`. Always read that file before making architectural decisions. Key points summarized below.

## Tech Stack
- **Framework:** Next.js 14+ App Router
- **Styling:** Tailwind CSS v3
- **Components:** shadcn/ui + Lucide React icons
- **Animations:** Framer Motion (subtle, mobile-friendly)
- **Fonts:** Inter via next/font
- **Hosting:** Vercel

## Project Rules (Non-Negotiable)
1. **No backend** — zero server logic, no forms, no database
2. **All CTAs → WhatsApp or Instagram** (pre-filled messages)
3. **All content in `/data/*.ts`** — static TypeScript files, no CMS
4. **Full SSG** — use `generateStaticParams()` on all dynamic routes
5. **Mobile-first** — majority of users are on mobile in India
6. **Placeholder values** for client-specific data (WhatsApp number, Instagram handle, team photos, company name) — use `NEXT_PUBLIC_*` env vars from `.env.local`

## Placeholder Values (Until Client Provides)
- WhatsApp: `919999999999`
- Instagram: `nishumbbsabroad`
- Company name: `NishU MBBS Abroad`
- Office: `New Delhi, India`

## Design System
- Primary: `#1B4F8A` (deep blue)
- Accent: `#E8A020` (gold/amber)
- Success/WhatsApp: `#22C55E`
- Background alt: `#F4F7FC`
- Text: `#1A1A2E`
- Muted text: `#64748B`
- Card radius: `rounded-2xl`
- Primary CTA button: `rounded-full`

## WhatsApp Link Format
```
https://wa.me/919999999999?text=Hi%2C+I%27m+interested+in+MBBS+abroad.+Can+you+guide+me%3F
```
All WhatsApp links use `wa.me` format with pre-filled context-aware messages.

## Site Map
- `/` — Homepage (long scroll)
- `/about` — About + Team
- `/countries` — Countries listing
- `/countries/[slug]` — Individual country page (8 countries)
- `/universities` — Universities listing
- `/universities/[slug]` — Individual university page
- `/process` — Admission process
- `/eligibility` — Eligibility criteria
- `/blog` — Blog listing
- `/blog/[slug]` — Blog post
- `/faq` — FAQ (30+ questions, categorized)
- `/contact` — Contact page

## Progress Tracking
See `PROGRESS.md` for current build status. Update it after completing each major section.

## Open Questions (Blocked on Client)
See Section 16 of `docs/requirements.md`. All blocked items use placeholder values until client provides them.
