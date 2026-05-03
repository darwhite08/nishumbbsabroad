# MBBS Abroad Consultancy — Website Requirements Document

**Project Type:** Static Marketing Website (No Backend, No Auth)
**Tech Stack:** Next.js 14+ (App Router) · React 18+ · Tailwind CSS · shadcn/ui
**Contact Strategy:** WhatsApp + Instagram (no forms, no login, no database)
**Target Audience:** Indian students (17–25) + their parents seeking MBBS admission abroad
**Document Version:** 1.0
**Last Updated:** May 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Market Research & Competitive Analysis](#2-market-research--competitive-analysis)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Tech Stack & Architecture](#4-tech-stack--architecture)
5. [Site Map & Page Inventory](#5-site-map--page-inventory)
6. [Page-by-Page Requirements](#6-page-by-page-requirements)
7. [Shared Components](#7-shared-components)
8. [Design System](#8-design-system)
9. [Content Requirements](#9-content-requirements)
10. [SEO Requirements](#10-seo-requirements)
11. [Performance Requirements](#11-performance-requirements)
12. [Accessibility Requirements](#12-accessibility-requirements)
13. [Analytics & Tracking](#13-analytics--tracking)
14. [Deployment Requirements](#14-deployment-requirements)
15. [Out of Scope](#15-out-of-scope)
16. [Open Questions](#16-open-questions)

---

## 1. Project Overview

### 1.1 What We're Building

A professional, trust-first marketing website for an MBBS abroad consultancy led by a **team of doctors** who have themselves studied or practiced medicine internationally. The site positions the team's medical credentials as the primary differentiator — real doctors guiding students, not just agents.

The site has zero backend complexity. All student inquiries are routed directly to WhatsApp or Instagram. No login, no dashboards, no form submissions to a database.

### 1.2 The Unique Selling Proposition

> "We are doctors who help future doctors. We've been where you are. We know which universities are worth it — because we studied in them."

Most competing consultancies are staffed by non-medical business/sales professionals. This team's doctor-led model is a genuine differentiator that must be front and center in the design.

### 1.3 Primary Business Goal

Generate qualified WhatsApp/Instagram leads from:
- NEET-qualified students who couldn't secure a government seat
- Students with mid-range NEET scores looking for affordable alternatives
- Parents doing early research (before results are out)

---

## 2. Market Research & Competitive Analysis

### 2.1 Market Context

India produces approximately **20 lakh NEET candidates** annually but has fewer than 1.15 lakh MBBS seats total (only ~52,000 government seats). This enormous demand-supply gap drives students overseas. Top destinations for Indian students include **Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, and the Philippines**.

Key facts every page must acknowledge:
- NEET qualification is **mandatory** for Indian students at all foreign medical universities (NMC regulation)
- Only **NMC-approved + WDOMS-listed** universities count for Indian practice rights
- After returning, students must clear **FMGE / NExT** to practice in India
- Total cost abroad is typically ₹30–₹95 lakhs over 5.5–6 years — significantly cheaper than Indian private colleges (₹60 lakh–₹1 crore+)
- Tuition fees abroad range from ~₹4–14 lakhs per year depending on country

### 2.2 Competitor Analysis

| Consultancy | Strengths | Weaknesses |
|---|---|---|
| **Mediplor** (mediplor.com) | 22+ years, 15K+ students, strong FMGE coaching integration | Non-doctor staff, generic UI, slow site |
| **RMC Education** (rmcedu.com) | 26 years, multi-vertical (aviation too), good SEO | Cluttered homepage, information overload |
| **Pacific Educational** (pacificeducation.in) | 20+ branches, strong alumni testimonials | Outdated design, poor mobile UX |
| **MBBSDirect** (mbbsdirect.com) | Transparent refund policy, full money-back guarantee | Limited countries (Russia-focused) |
| **EOCL India** (eoclindia.com) | 7000+ students, 100+ universities, 24/7 support | Repetitive copy, no doctor credibility |
| **MOKSH** | Only consultancy bundling FMGE coaching from Year 1 | Limited abroad destinations |
| **AV Global Overseas** (avglobaloverseas.com) | Strong NMC compliance messaging, WDOMS checklist | New entrant, smaller trust base |
| **Medipedia** (medipediaoverseas.com) | "Family feel," counselors travel with students | Regional presence only |
| **futureMBBS** (future-mbbs.com) | Strong Europe focus (Poland, Hungary, Lithuania) | Niche — not all budgets |
| **Atmia Education** (atmiaeducation.com) | Forbes/Times of India awards, Philippines specialist | Heavy Gujarat bias, limited reach |

### 2.3 Competitive Gaps We're Filling

The following are present across nearly all competitors but done poorly — our site must do them better:

1. **Doctor credibility front-and-center** — No competitor leads with "our counselors hold MBBS degrees." Most bury this or don't have it at all.
2. **Mobile-first WhatsApp CTA** — Most competitors have clunky inquiry forms. We skip forms entirely and go straight to WhatsApp.
3. **Honest, minimal copy** — The industry is full of superlatives ("India's #1," "most trusted"). Clear, calm, factual copy builds more trust.
4. **FMGE/NExT awareness** — Most sites mention it in fine print. We address it prominently.
5. **NMC/WDOMS compliance transparency** — Students are increasingly aware of fraudulent admissions. We lead with compliance.
6. **Fast, modern design** — The average competitor site is a WordPress blog with stock photos. A Next.js site with shadcn/ui will visually stand out significantly.

### 2.4 Common Sections Across All Competitor Websites

Based on research, every top consultancy website includes these sections (we must match or beat all of them):

- Hero with CTA
- Why study MBBS abroad (stats-driven)
- Countries/destinations grid
- University listings (filterable)
- Step-by-step admission process
- Eligibility criteria
- Fee comparison table (abroad vs India)
- Team / about section
- Student testimonials
- Blog / resources / FAQs
- Sticky WhatsApp button
- Footer with contact info

---

## 3. Goals & Success Metrics

### 3.1 Primary Goals

| Goal | How Measured |
|---|---|
| Drive WhatsApp inquiries | WhatsApp link click events (GA4) |
| Drive Instagram follows/DMs | Instagram link click events (GA4) |
| Build trust & authority | Time on page, scroll depth |
| Rank for MBBS abroad keywords | Google Search Console impressions |

### 3.2 Target KPIs (First 6 Months)

- WhatsApp button click-through rate: **> 5%** of unique visitors
- Average session duration: **> 2 minutes**
- Bounce rate: **< 55%**
- Page speed (Lighthouse): **> 90** on mobile
- Core Web Vitals: All green

---

## 4. Tech Stack & Architecture

### 4.1 Frontend

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSG/ISR for SEO, file-based routing, image optimization |
| UI Library | **React 18+** | Component model, hooks |
| Styling | **Tailwind CSS v3** | Utility-first, fast iteration |
| Component Library | **shadcn/ui** | Accessible, unstyled-by-default, fully customizable |
| Icons | **Lucide React** | Ships with shadcn, consistent set |
| Animations | **Framer Motion** | Scroll animations, entrance effects |
| Fonts | **Google Fonts** (Inter + optional serif accent) | Free, fast via Next.js font optimization |

### 4.2 No Backend Required

There is no server-side application logic. All CTAs redirect to:
- **WhatsApp:** `https://wa.me/91XXXXXXXXXX?text=Hi%2C+I'm+interested+in+MBBS+abroad`
- **Instagram:** `https://instagram.com/[handle]`

Pre-filled WhatsApp message templates must be context-aware (e.g., clicking "Russia inquiries" pre-fills a Russia-specific message).

### 4.3 Data Management

All content (countries, universities, team profiles, FAQs, testimonials) is managed as **static TypeScript data files** (`/data/*.ts`) — no CMS, no database. Content changes require a developer edit and redeploy. This is intentional for simplicity; a CMS can be added later.

### 4.4 Hosting

Deploy to **Vercel** (recommended) or Netlify. Both support Next.js first-class with zero config.

### 4.5 Repository Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── countries/
│   │   ├── page.tsx        # Countries listing
│   │   └── [slug]/page.tsx # Individual country page
│   ├── universities/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── process/page.tsx
│   ├── eligibility/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── faq/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, etc.
│   └── sections/           # Page-level section components
├── data/
│   ├── countries.ts
│   ├── universities.ts
│   ├── team.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
└── tailwind.config.ts
```

---

## 5. Site Map & Page Inventory

```
Homepage (/)
├── About Us (/about)
│   └── Team page included inline or as tab
├── Countries (/countries)
│   ├── Russia (/countries/russia)
│   ├── Georgia (/countries/georgia)
│   ├── Kazakhstan (/countries/kazakhstan)
│   ├── Uzbekistan (/countries/uzbekistan)
│   ├── Kyrgyzstan (/countries/kyrgyzstan)
│   ├── Bangladesh (/countries/bangladesh)
│   ├── Nepal (/countries/nepal)
│   └── Philippines (/countries/philippines)
├── Universities (/universities)
│   └── [university-name] (/universities/[slug])
├── Admission Process (/process)
├── Eligibility (/eligibility)
├── Blog (/blog)
│   └── [article-slug] (/blog/[slug])
├── FAQ (/faq)
└── Contact (/contact)
```

**Total pages at launch:** ~25–30 (8 country pages + 10–15 university pages + static pages)

---

## 6. Page-by-Page Requirements

---

### 6.1 Homepage (`/`)

The homepage is a long-scroll landing page. It must communicate trust, expertise, and a clear CTA within the first viewport.

#### Hero Section
- **Headline:** Large, confident headline emphasizing doctor-led guidance
  - Example: *"Future Doctors, Guided by Doctors"* or *"Your MBBS Abroad Journey, Led by Those Who've Done It"*
- **Sub-headline:** One sentence on what they do (e.g., "We help Indian students secure MBBS seats at NMC-approved universities across 8 countries")
- **Primary CTA Button:** "Talk to Us on WhatsApp" → opens WhatsApp with pre-filled message
- **Secondary CTA:** "Explore Destinations" → scrolls to Countries section
- **Trust badges row:** WHO Approved · NMC Recognized · 500+ Students Placed · Doctor-Led Team
- **Background:** High-quality image or subtle medical/world-map illustration (no cliché stock photos of students)

#### Why MBBS Abroad — Stats Section
- Visual stats cards:
  - 20 Lakh+ NEET candidates every year
  - Only 52,000 government seats available
  - 60–95% cheaper than Indian private colleges
  - Degrees recognized in 100+ countries
- Brief paragraph explaining the opportunity

#### Why Choose Us (Differentiators)
- 3–4 cards highlighting unique value propositions:
  1. **Doctor-Led Counseling** — Our counselors hold MBBS degrees from the same universities
  2. **NMC/WDOMS Compliance** — We only work with fully compliant universities
  3. **End-to-End Support** — University selection → visa → airport pickup → settlement
  4. **FMGE/NExT Awareness** — We prepare you for the licensing exam from Day 1
- Each card: Icon + Heading + 2-line description

#### Countries / Destinations Grid
- 8 country cards in a responsive grid (2 cols mobile → 4 cols desktop)
- Each card: Country flag + name + key stat (e.g., "From ₹4L/year · NMC Approved") + "Learn More" link
- Countries: Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, Philippines

#### How It Works — Admission Process (Overview)
- 4–6 step horizontal timeline or numbered cards
  1. Free Counseling → 2. University Shortlisting → 3. Application & Offer Letter → 4. Visa Processing → 5. Travel & Arrival → 6. Ongoing Support
- "View Detailed Process" link to `/process`

#### Meet the Team (Preview)
- 3–4 doctor cards showing: Photo · Name · Qualification · Country of study/practice
- "Meet the Full Team" link to `/about`

#### Student Testimonials
- Card carousel or grid (3 per row on desktop)
- Each card: Student photo (optional) · Name · University · Country · Star rating · Quote (2–3 sentences)
- Minimum 6 testimonials at launch; ideally 12+
- Real student photos increase trust significantly — prioritize

#### Fee Comparison Section
- Simple table or card comparison:
  | | Indian Private College | MBBS Abroad |
  |---|---|---|
  | Total Fee | ₹60L – ₹1 Cr+ | ₹25L – ₹55L |
  | Capitation/Donation | Yes (₹20–50L hidden) | None |
  | NMC Recognition | Yes | Yes (NMC-approved unis) |
  | Medium of Instruction | English | English |

#### FAQ Preview
- 5 most common questions using shadcn `Accordion` component
- "View All FAQs" link to `/faq`

#### Final CTA Section
- Bold section with background color
- Headline: "Ready to Start Your Medical Journey?"
- Two buttons: "WhatsApp Us" + "Find Us on Instagram"
- Note: "Free counseling · No obligation · Doctor-led guidance"

---

### 6.2 About Us (`/about`)

#### Hero
- Page title + tagline
- Brief 2-paragraph story of why doctors started this consultancy

#### Our Story
- Narrative about the founding team's own experience studying MBBS abroad
- The gap they saw: students being misled by non-medical agents
- Why they decided to help

#### Team Section (Full)
- Grid of all team members
- Each card: Photo · Full Name · MBBS from [University, Country] · Current role · Brief bio (3–5 lines)
- Emphasize: every counselor is a qualified doctor
- Optional: LinkedIn profile link for each member

#### Our Values / Principles
- 3–4 values: Transparency · Student-First · Medical Integrity · Long-Term Relationship
- Brief description under each

#### Accreditations / Partnerships
- Logos or badges: NMC · WHO · partner universities
- "We are authorized representatives of [X] universities in [Y] countries"

#### CTA
- WhatsApp CTA

---

### 6.3 Countries Listing Page (`/countries`)

#### Purpose
Helps students explore and compare destinations.

#### Layout
- Page header: "Choose Your Destination"
- Brief intro paragraph (why destination matters)
- Filter row (optional but recommended): Budget range · Duration · Recognition type
- Country cards grid: 2 per row (mobile) → 4 per row (desktop)

#### Country Card (Compact)
- Flag icon / country image
- Country name
- Duration (e.g., "5.5 years")
- Fee range (e.g., "₹4L – ₹7L/year")
- NMC badge
- "Explore" button → `/countries/[slug]`

---

### 6.4 Individual Country Page (`/countries/[slug]`)

This is one of the highest-SEO-value pages. Must be comprehensive.

#### Sections Required

**Hero**
- Country name + flag
- Tagline (e.g., "Russia — Affordable, NMC-Approved, Time-Tested")
- Quick stats: Duration · Fee Range · Language · Climate · NMC Status
- Primary CTA: "Talk to Us About [Country]" → WhatsApp with country pre-filled

**Why [Country] for MBBS**
- 4–5 bullet points with icons
- Unique advantages of this country

**Eligibility Criteria**
- Table: Criteria (NEET, Age, PCB marks, etc.) with values specific to that country

**Top Universities in [Country]**
- University cards (3–6 universities)
- Each: Name · Established · Annual Fee · FMGE Pass Rate (if available) · Link to university page
- "View All Universities in [Country]" link

**Fee Structure**
- Detailed table: Year · Tuition · Hostel · Misc · Total
- Total cost over 6 years
- Comparison note vs. Indian private colleges

**Admission Process for [Country]**
- Country-specific steps (visa procedure differs country to country)
- Timeline (typically March – October for most countries)

**Life in [Country]**
- Climate · Food (Indian mess availability) · Safety · Transport · Currency
- Short paragraph written in a reassuring tone for parents

**FMGE/NExT Preparation**
- Note about FMGE pass rates from this country
- How the team supports students

**Student Testimonials from [Country]**
- Filter testimonials to show only students from this country

**FAQ for [Country]**
- 5–8 country-specific questions using Accordion

**Bottom CTA**
- WhatsApp CTA with country-pre-filled message

**Structured Data (JSON-LD)**
- FAQPage schema for all country page FAQs

---

### 6.5 Universities Listing Page (`/universities`)

#### Layout
- Search input (client-side filter — no API)
- Filter chips: Country · Fee Range · NMC Status
- University card grid

#### University Card (Compact)
- University name
- Country flag + city
- Annual fee
- Established year
- NMC badge
- "View Details" link

---

### 6.6 Individual University Page (`/universities/[slug]`)

#### Sections

- University name + logo (if available) + country
- Overview: established, location, ranking, medium of instruction
- Fee structure table (year-by-year)
- Eligibility and NEET requirements
- Hostel & accommodation info
- Clinical exposure and hospital tie-ups
- FMGE pass rate (if data available)
- Student reviews from this university
- CTA: "Apply Through Us" → WhatsApp

---

### 6.7 Admission Process (`/process`)

A detailed visual walkthrough of the full admission journey.

#### Sections

**Introduction**
- Brief: "The process is simpler than you think. Here's exactly what happens."

**Step-by-Step Process**
Each step as a prominent card with step number, icon, title, and 3–5 bullet details:

1. **Free Counseling** — NEET score, budget, country preference, career goals discussion
2. **University Shortlisting** — 2–3 personalized recommendations with reasoning
3. **Application & Offer Letter** — Document submission, application filing, offer letter receipt
4. **NMC Eligibility Certificate** — What it is, how to get it (mandatory step)
5. **Visa Application** — Country-specific visa requirements, documentation, embassy appointment
6. **Pre-Departure Briefing** — Currency, packing, contacts, emergency numbers
7. **Arrival & Settling In** — Airport pickup, hostel check-in, university orientation
8. **Ongoing Support** — Academic support, FMGE coaching guidance, regular check-ins

**Timeline Graphic**
- Visual: March → October admission window
- Show when each step typically happens

**Documents Required**
- Checklist component with all required documents:
  - Class 10 & 12 Marksheets
  - NEET Scorecard
  - Passport (valid 5+ years)
  - Passport-size photos
  - Birth Certificate
  - Medical Certificate
  - Police Clearance Certificate (for some countries)
  - NMC Eligibility Certificate

**CTA**
- "Start Your Process Today" → WhatsApp

---

### 6.8 Eligibility Page (`/eligibility`)

#### Sections

**General Eligibility (All Countries)**
- Age: Minimum 17 years as of December 31 of admission year
- Class 12: PCB + English, minimum 50% (40% for SC/ST/OBC)
- NEET: Qualified (mandatory since 2018 NMC regulation)
- No upper NEET score requirement — just qualification

**Country-Wise Eligibility Table**
- Table with columns: Country · Min PCB % · NEET Required · IELTS/TOEFL · Additional Requirements
- Rows: All 8 countries

**NEET Score vs. Country Recommendation**
- Guidance table:
  - NEET 400–600: Russia, Kazakhstan, Uzbekistan
  - NEET 300–400: Nepal, Bangladesh, Kyrgyzstan
  - NEET 200–300: Consult us for best fit
- Note: NEET score alone doesn't determine; budget and career goals matter too

**FAQ**
- "Do I need IELTS?" · "Is there an upper age limit?" · "My NEET score is low, can I still apply?" etc.

**CTA**
- "Check Your Eligibility — Talk to Our Doctors" → WhatsApp

---

### 6.9 Blog (`/blog`)

#### Purpose
SEO content hub. Long-tail keywords like "MBBS in Russia fees 2025," "FMGE pass rate Georgia," "NMC approved universities Kazakhstan."

#### Blog Listing Page
- Card grid: 3 per row on desktop
- Each card: Cover image · Category tag · Title · 1-line excerpt · Read time · Date · "Read More" link

#### Blog Post Page (`/blog/[slug]`)
- Full-width article with proper typography (Tailwind prose class)
- Author byline: team doctor who wrote/reviewed it
- Table of contents (floating on desktop)
- Related articles (3 cards at bottom)
- CTA block mid-article and at end → WhatsApp

#### Initial Blog Content Required (10 posts minimum at launch)

| Title | Target Keyword |
|---|---|
| MBBS Abroad vs Private Medical College India 2026 | mbbs abroad vs india |
| Top 10 NMC-Approved Universities in Russia | nmc approved russia |
| FMGE Exam: What It Is and How to Prepare | fmge exam preparation |
| MBBS in Georgia: Complete Guide 2026 | mbbs in georgia |
| MBBS in Kazakhstan: Fees, Universities, Eligibility | mbbs kazakhstan |
| How to Get NMC Eligibility Certificate for MBBS Abroad | nmc eligibility certificate |
| Life as an Indian Student in Russia | indian student russia |
| NEET Score Required for MBBS Abroad | neet score mbbs abroad |
| Complete MBBS Abroad Document Checklist | mbbs abroad documents |
| Why FMGE Pass Rate Matters When Choosing a University | fmge pass rate university |

---

### 6.10 FAQ (`/faq`)

#### Layout
- Categorized accordions using shadcn `Accordion`
- Categories: General · Eligibility · Admission Process · Fees · Visa · Life Abroad · Post-MBBS

#### Required Questions (Minimum 30)

**General**
- What is MBBS abroad?
- Is MBBS from abroad valid in India?
- Which countries are best for MBBS abroad?
- Is the degree globally recognized?

**Eligibility**
- Is NEET mandatory for MBBS abroad?
- What is the minimum NEET score needed?
- What PCB percentage do I need?
- Is there an age limit for MBBS abroad?
- Can I apply if I'm from the arts/commerce stream?

**Admission Process**
- When does the MBBS admission process start?
- How long does it take to get an admission letter?
- What documents do I need?
- What is the NMC Eligibility Certificate?

**Fees**
- How much does MBBS abroad cost?
- Are there any hidden fees or donations?
- Can I get an education loan for MBBS abroad?
- When do I pay university fees?

**Visa**
- How long does the student visa process take?
- Is the visa easy to get?
- Can I work part-time on a student visa?

**Life Abroad**
- Is it safe for Indian students?
- Is Indian food available?
- Will I face a language barrier?
- Can I visit India during holidays?

**Post-MBBS**
- What is FMGE/NExT?
- What is the FMGE pass rate?
- Can I do PG in India after MBBS abroad?
- Can I practice abroad after my degree?

**JSON-LD:** Implement FAQPage structured data for all questions.

---

### 6.11 Contact Page (`/contact`)

Since there's no backend, this page is simple and direct.

#### Layout
- Page title: "Let's Talk"
- Sub-heading: "Have questions? Our doctors are available to answer them."
- Two large action cards:

**Card 1 — WhatsApp**
- WhatsApp icon (green)
- "Chat on WhatsApp"
- "Get a response within hours. Free, no obligation counseling."
- Button: "Open WhatsApp" → `wa.me` link

**Card 2 — Instagram**
- Instagram icon (gradient)
- "Message on Instagram"
- "DM us for quick answers and to see student stories."
- Button: "Open Instagram" → Instagram profile link

#### Additional Info
- Working hours (e.g., Mon–Sat, 9 AM – 8 PM IST)
- City/state of office (for trust)
- Note: "We do not share your information with any third parties"

#### Map (Optional)
- Embed a Google Maps iframe if there's a physical office

---

## 7. Shared Components

### 7.1 Navbar

- Logo (left)
- Navigation links (center on desktop, hamburger on mobile):
  - Home · Countries · Universities · Process · Eligibility · Blog · FAQ · Contact
- "WhatsApp Us" CTA button (right, always visible)
- Sticky on scroll
- Transparent on hero → white/solid after scroll

**shadcn components used:** `NavigationMenu`, `Sheet` (mobile drawer)

### 7.2 Footer

**Column 1:** Logo + tagline + brief description (2 lines)
**Column 2:** Countries (list of 8 with links)
**Column 3:** Quick Links (Process, Eligibility, Blog, FAQ, About, Contact)
**Column 4:** Contact (WhatsApp number, Instagram handle, office hours, city)

**Bottom bar:** © 2026 [Company Name]. All rights reserved. | Privacy Policy | Disclaimer

**Disclaimer text:** "All university information is provided for guidance only. Students are advised to verify NMC/WDOMS listings independently before making any payments."

### 7.3 Sticky WhatsApp Button

- Fixed bottom-right floating button
- WhatsApp logo in green circle
- Pulse animation to draw attention
- On mobile: always visible
- On desktop: visible after scrolling past hero
- Links to pre-filled WhatsApp message

### 7.4 CTA Banner Component

Reusable section component used across multiple pages:
- Background: brand color or gradient
- Headline (slot)
- Sub-text (slot)
- Primary button: WhatsApp
- Secondary button: Instagram

### 7.5 Country Card Component

Props: `flag`, `name`, `duration`, `feeRange`, `nmcApproved`, `slug`

### 7.6 University Card Component

Props: `name`, `country`, `city`, `annualFee`, `established`, `nmcApproved`, `slug`

### 7.7 Testimonial Card Component

Props: `studentName`, `university`, `country`, `quote`, `rating`, `photo?`

### 7.8 Team Member Card Component

Props: `name`, `photo`, `qualification`, `university`, `country`, `role`, `bio`

### 7.9 Stats Counter Component

Animated number count-up on scroll using Intersection Observer.
Stats: Students Placed · Partner Universities · Countries · Years of Experience

### 7.10 Breadcrumb Component

Show on all inner pages. Example: `Home > Countries > Russia`
Implement with JSON-LD BreadcrumbList schema.

---

## 8. Design System

### 8.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| `primary` | `#1B4F8A` (deep blue) | Headings, primary buttons, links |
| `primary-light` | `#2E6DB4` | Hover states |
| `accent` | `#E8A020` (gold/amber) | CTA highlights, badge borders |
| `success` | `#22C55E` | NMC approved badges, WhatsApp |
| `bg-light` | `#F4F7FC` | Alternate section backgrounds |
| `text-main` | `#1A1A2E` | Body text |
| `text-muted` | `#64748B` | Secondary text, captions |
| `white` | `#FFFFFF` | Card backgrounds, hero |

Medical/trust color palette — deep blue is universally associated with medicine, professionalism, and trust.

### 8.2 Typography

| Element | Font | Size | Weight |
|---|---|---|---|
| H1 | Inter | 48px / 3rem | 800 |
| H2 | Inter | 36px / 2.25rem | 700 |
| H3 | Inter | 24px / 1.5rem | 600 |
| Body | Inter | 16px / 1rem | 400 |
| Caption/Label | Inter | 14px / 0.875rem | 500 |
| Button | Inter | 15px / 0.9375rem | 600 |

Use `next/font` with `Inter` as the primary font. No external font requests at runtime.

### 8.3 Spacing

Follow Tailwind's default spacing scale. Key sections use `py-16 md:py-24`. Cards use `p-6`.

### 8.4 Border Radius

- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-full` for primary CTAs, `rounded-lg` for secondary
- Badges: `rounded-full`

### 8.5 Shadows

- Cards: `shadow-md` default, `shadow-lg` on hover
- Navbar: `shadow-sm` on scroll

### 8.6 Animations & Transitions

- Entrance animations: fade-up using Framer Motion with `viewport: { once: true }`
- Hover: `transition-all duration-200`
- Stats counter: animate on scroll into view
- Keep animations subtle and fast — parents using this site may be on slower devices

### 8.7 Button Hierarchy

- **Primary:** Solid brand blue, white text, full-radius — "Talk to Us on WhatsApp"
- **Secondary:** Outlined brand blue — "Learn More"
- **WhatsApp CTA:** Green background with WhatsApp icon — used in hero and CTAs
- **Ghost:** Transparent, text-only — for navigation-style links within content

---

## 9. Content Requirements

### 9.1 Tone of Voice

- **Professional but warm** — not corporate cold, not salesy
- **Honest** — acknowledge FMGE requirement upfront; don't hide challenges
- **Doctor-first** — use medical credibility naturally, not boastfully
- **Parent-reassuring** — always acknowledge parent concerns (safety, food, money)
- **Action-oriented** — every section ends with a next step

### 9.2 Content That Must Be Factually Accurate

The following content must be verified before publishing and updated regularly:

- NMC-approved university lists (NMC updates this list; link to official NMC website)
- FMGE/NExT pass rates by country (publicly available data)
- Visa processing times (changes per embassy)
- Fee structures (request directly from partner universities)
- NEET eligibility requirements (per NMC regulations)

**Important disclaimer:** Add a "Last Updated: [Month Year]" note on all fee and eligibility pages.

### 9.3 Images Required

- Hero background: Professional, aspirational (medical education, not stock clichés)
- Country images: 1 hero image per country (landmark or university campus)
- Team photos: Professional headshots of every team member (mandatory)
- Student testimonial photos: Optional but strongly recommended
- University images: Campus photos (sourced from official university websites with attribution)
- Blog cover images: Custom or licensed (Unsplash/Pexels for non-commercial)

### 9.4 Legal Content Required

- **Privacy Policy page** (or section in footer) — covers WhatsApp/Instagram contact data
- **Disclaimer** — university information accuracy, not liable for university decisions
- **No refund commitment implied** — clearly state consultation is free, any fees are to universities directly

---

## 10. SEO Requirements

### 10.1 On-Page SEO

- Every page has unique `<title>` and `<meta description>` via Next.js `generateMetadata()`
- H1 present on every page, only one per page
- Images: `alt` text on every image, descriptive and keyword-rich
- Internal linking: Country pages → university pages → blog posts → back
- URL structure: `/countries/russia` not `/countries/c1` (descriptive slugs)

### 10.2 Target Keywords (Primary)

| Page | Target Keyword |
|---|---|
| Homepage | mbbs abroad for indian students |
| Countries index | best countries for mbbs abroad |
| Russia page | mbbs in russia for indian students |
| Georgia page | mbbs in georgia |
| Kazakhstan page | mbbs in kazakhstan |
| Eligibility | mbbs abroad eligibility criteria |
| Process | mbbs abroad admission process |
| FAQ | mbbs abroad frequently asked questions |

### 10.3 Structured Data (JSON-LD)

| Page Type | Schema |
|---|---|
| Homepage | `Organization`, `WebSite` |
| Country pages | `FAQPage`, `BreadcrumbList` |
| University pages | `EducationalOrganization`, `BreadcrumbList` |
| Blog posts | `Article`, `BreadcrumbList`, `Author` |
| FAQ page | `FAQPage` |
| Contact page | `LocalBusiness` |

### 10.4 Sitemap & Robots

- Auto-generated `sitemap.xml` via Next.js (or `next-sitemap` package)
- `robots.txt` allowing all pages
- Submit sitemap to Google Search Console at launch

### 10.5 Canonical URLs

All pages must have a canonical URL. Handle trailing slash consistency (pick one, stay consistent).

---

## 11. Performance Requirements

### 11.1 Core Web Vitals Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5 seconds |
| FID / INP | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTFB | < 800ms |

### 11.2 Implementation Rules

- All images: Use `next/image` with `width`, `height`, and `priority` on above-fold images
- Fonts: Use `next/font` — no layout shift, no external request
- Country/university pages: Use `generateStaticParams()` for full static generation
- No layout-shifting animations — use CSS transforms, not width/height changes
- Heavy components (map embeds, carousels) must be lazy-loaded with `next/dynamic`
- Minimize third-party scripts — only GA4 if analytics needed (load with `strategy="afterInteractive"`)

### 11.3 Mobile Performance

The majority of users will be on mobile (Indian students skew heavily mobile). Test on:
- iPhone SE (small screen)
- Android mid-range device
- 3G/4G connection simulation in Chrome DevTools

---

## 12. Accessibility Requirements

- All interactive elements keyboard-navigable
- Focus rings visible (don't remove `outline`)
- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large headings
- All images have `alt` text
- `aria-label` on icon-only buttons (WhatsApp floating button, close buttons)
- shadcn/ui components ship with Radix UI which handles ARIA roles — use them as intended
- Skip-to-main-content link at top of page

---

## 13. Analytics & Tracking

### 13.1 Google Analytics 4

- Install via `@next/third-parties/google` (recommended Next.js approach)
- Track as custom events:
  - `whatsapp_click` — every WhatsApp link click, with `{source: 'hero' | 'country_page' | 'footer' | ...}`
  - `instagram_click`
  - `country_view` — when user views a country page
  - `university_view`

### 13.2 Meta Pixel (Optional)

If the team plans to run Instagram/Facebook ads in future, install Meta Pixel at launch. It's much easier to install early than retrofit later.

### 13.3 No Heatmap Tools Required at Launch

Hotjar or similar can be added post-launch if scroll/click data is needed. Keep the initial script load minimal.

---

## 14. Deployment Requirements

### 14.1 Recommended: Vercel

- Connect GitHub repo to Vercel
- Auto-deploy on `main` branch push
- Preview deployments on pull requests

### 14.2 Domain Setup

- Primary domain: Register via preferred registrar (GoDaddy, Namecheap, etc.)
- HTTPS: Enforced automatically by Vercel
- `www` redirect to non-www (or vice versa) — must be consistent

### 14.3 Environment Variables

No sensitive environment variables needed (no API keys, no DB URLs). The only potential env var would be the WhatsApp number and Instagram handle if parameterized.

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_INSTAGRAM_HANDLE=yourhandle
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX
```

---

## 15. Out of Scope

The following are explicitly NOT part of v1 and should not be built:

- User login / registration / student dashboard
- Application tracking system
- Payment gateway / fee collection
- CMS (Contentful, Sanity, etc.) — all content is in static `.ts` files
- Live chat widget (WhatsApp replaces this)
- Email form submissions
- University comparison tool (can be v2)
- Scholarship calculator
- NEET score predictor
- Multi-language support (Hindi version can be v2)
- Mobile app

---

## 16. Open Questions

The following must be answered by the client before development begins:

| # | Question | Who Answers |
|---|---|---|
| 1 | What is the official company/brand name? | Client |
| 2 | WhatsApp number(s) to direct inquiries to? | Client |
| 3 | Instagram handle? | Client |
| 4 | Office city/location? | Client |
| 5 | Exact list of partner universities (with fees)? | Client |
| 6 | Team member photos and bios? | Client |
| 7 | Student testimonials (with permission to publish)? | Client |
| 8 | Preferred color/brand if already established? | Client |
| 9 | Are there 8 countries or a subset to launch with? | Client |
| 10 | Do we have official representative agreements with any universities? | Client |
| 11 | Is FMGE coaching a service the team offers directly? | Client |
| 12 | What is the expected launch date? | Client |

---

## Appendix A — WhatsApp Deep Link Formats

```
# Generic inquiry
https://wa.me/91XXXXXXXXXX?text=Hi%2C+I%27m+interested+in+MBBS+abroad.+Can+you+guide+me%3F

# Country-specific (Russia example)
https://wa.me/91XXXXXXXXXX?text=Hi%2C+I%27m+interested+in+MBBS+in+Russia.+Please+guide+me.

# University-specific
https://wa.me/91XXXXXXXXXX?text=Hi%2C+I+want+to+know+more+about+[University+Name].
```

All WhatsApp links must use `wa.me` format (works on both mobile and desktop).

---

## Appendix B — Country Quick Reference Data

| Country | Duration | Approx. Total Cost | Language | NMC Approved | Notes |
|---|---|---|---|---|---|
| Russia | 6 years | ₹25L – ₹45L | English | Yes | Largest Indian student community abroad |
| Georgia | 6 years | ₹30L – ₹50L | English | Yes | European-style education, safe |
| Kazakhstan | 5 years | ₹20L – ₹40L | English | Yes | Growing popularity, affordable |
| Uzbekistan | 5–6 years | ₹18L – ₹35L | English | Yes | Low cost, easy admission |
| Kyrgyzstan | 5–6 years | ₹15L – ₹30L | English | Yes | Lowest fees; check FMGE rates carefully |
| Bangladesh | 5 years | ₹25L – ₹40L | English | Yes | Closest culturally, easy travel |
| Nepal | 5.5 years | ₹30L – ₹55L | English | Yes | Near India, popular with South Indians |
| Philippines | 5.5–6 years | ₹25L – ₹45L | English | Yes | US-style curriculum, strong for USMLE aspirants |

*All fee data is approximate and must be verified with partner universities before publishing.*

---

*End of Requirements Document*

*Prepared for internal development use. Subject to revision based on client input.*
