# Implementation Plan: Pixel-Perfect Astro Portfolio for Girish Lade (LadeStack)

Build a 1:1 responsive, ultra-high-end developer portfolio website using **Astro** and **Tailwind CSS** reflecting the Nordic/Japanese minimalist editorial studio aesthetic shown in the reference design.

---

## User Review Required

> [!IMPORTANT]
> - The framework will be **Astro 5** with `output: 'static'` and Tailwind CSS.
> - Hero portrait cutout `/public/assets/girish-hero.png` will be generated from `verticle-hero-image.png` using a background-removal script, placed on an architectural pedestal backdrop matching the reference image.
> - All links (GitHub, LadeStack live platform, CV link `https://ladestack.in`, products, and contact info) will be fully wired up.

---

## Design Tokens & Visual Hierarchy

- **Color System**:
  - Studio Daylight Canvas: `bg-[#E3EBE9]` transitioning to `bg-[#EEF4F2]` (soft sage / daylight tone)
  - Pure Surface: `bg-white` for alternating showcase sections
  - Primary Typography: `text-[#1C2A30]` (deep obsidian slate)
  - Muted Typography: `text-[#52656B]` (slate grey for subtitles & specs)
  - Borders: `border-[#D0DCD9]` and glass stroke `border-white/60`
  - Pill Buttons: `bg-[#1C2A30] text-white hover:bg-[#2C3E46] rounded-full`
  - Badges & Accents: `bg-[#F4F7F6]` and soft mint `bg-[#E8F0EE]`

- **Typography System**:
  - Serif Display: `Playfair Display` & `Instrument Serif` (Google Fonts)
  - Sans Body & UI: `Plus Jakarta Sans` (Google Fonts)
  - Kickers: `tracking-[0.25em] text-xs font-semibold uppercase text-[#52656B]`

---

## Proposed Changes

### Foundation & Project Setup

#### [NEW] `package.json`
- Configure Astro 5, Tailwind CSS, `@astrojs/check`, TypeScript, and Lucide icons.

#### [NEW] `astro.config.mjs`
- Set `output: 'static'` with standard Astro configuration.

#### [NEW] `tailwind.config.mjs` & `src/styles/global.css`
- Custom color tokens (`#1C2A30`, `#E3EBE9`, `#EEF4F2`, `#52656B`, `#D0DCD9`).
- Custom fonts: `font-serif` (Playfair Display / Instrument Serif), `font-sans` (Plus Jakarta Sans).
- Micro-interaction keyframes, glassmorphism utilities, and pedestal shadow tokens.

---

### Assets Preparation

#### [NEW] `public/assets/girish-hero.png`
- Process `verticle-hero-image.png` into a clean transparent PNG cutout with soft edge feathering.

#### [NEW] Studio Architectural Assets & Mockups
- Generate or render studio props matching reference image:
  - Minimalist architectural floor lamp, spherical pedestal, ceramic vessels.
  - Interactive IDE / Terminal mockup on architectural plinth (matching Section 2 designer chair).
  - Client-side privacy 3D ceramic lock / shield asset.

---

### Modular Components (`src/components/`)

#### [NEW] `Header.astro`
- Top dark slate announcement bar: `"Lade Stack Ecosystem is 100% Free & Open-Source · Explore 5+ AI Tools"` with live pulse.
- Sticky glass navbar with editorial logo `"Girish Lade ®"`, navigation menu (`Manifesto`, `Products`, `Architecture`, `Tech Stack`, `Contact`), search trigger modal, GitHub star badge (`★ 8.4k`), and dark pill button `[ Explore Ecosystem ]`.

#### [NEW] `Hero.astro` (Section 1: 1:1 Reference Match)
- Left Stage: Transparent cutout of Girish on an architectural pedestal backdrop with ambient daylight glow and studio decor props.
- Center/Right:
  - Kicker: `MECHANICAL ENGINEER → SOFTWARE FOUNDER`
  - Serif H1: `Build smarter products with AI tools.`
  - Sub-bio: `"Lade Stack unifies code editing, API testing, documentation, and automation into one powerful ecosystem — enterprise-grade, zero cost, built for every developer."`
  - CTAs: Dark pill `[ Launch Workspace ]` and editorial link `[ View CV / Platform → ]` (`https://ladestack.in`).

#### [NEW] `MetricsRibbon.astro` (Section 2)
- Floating glass card with 4-metric grid:
  - `8K+` Active Developers
  - `5` AI Products Live
  - `100+` Countries Reached
  - `$0` Free Forever & Zero Gatekeeping

#### [NEW] `FeatureShowcase.astro` (Section 3: Alternating Showcase 1)
- Crisp white canvas (`bg-white py-24`).
- Left Column: `AI Code Editor & Real-Time Workspace`, multi-language synthesis, in-browser execution, dual CTAs `[ Try Code Editor ]` and `[ Read Specs → ]`.
- Right Column: Elevated device mockup showing interactive code editor, terminal output, and status chips on a soft architectural studio plinth.

#### [NEW] `EcosystemDual.astro` (Section 4: Dual-Column Ecosystem Grid)
- Left Card: Soft mint/lavender box (`bg-[#E8F0EE]`) showcasing `100% Client-Side Privacy: Your code and files never touch external servers` with WASM & local encryption badges.
- Right Card: `LS PDF Toolkit & Next-Gen Image Compressor` (17-in-1 PDF tools, 90% image compression, zero server roundtrip), with `[ Launch Privacy Tools ]` CTA.

#### [NEW] `PhilosophyStage.astro` (Section 5: Studio Philosophy & Manifesto)
- Soft studio daylight backdrop (`bg-[#E3EBE9]`).
- Large centered editorial serif quote:
  `"Democratizing enterprise-grade AI tools so every solo builder has the leverage of a FAANG engineering team — zero cost, zero gatekeeping."`
  — *Girish Lade — Founder & Architect, LadeStack*.
- Interactive tool switcher highlighting LadeStack’s 5 core modules.

#### [NEW] `ProductsMatrix.astro` (Section 6: Products & Tech Stack)
- Detailed cards for all 5 live products:
  1. AI Code Editor
  2. LS PDF Toolkit
  3. LS Image Compressor
  4. Swift Resume (ATS Optimization & Scoring)
  5. Bharat Land Converter
- Tech Stack badge marquee: Astro, Tailwind CSS, TypeScript, React, Next.js, WebAssembly, Browser-native AI, Python, Cloudflare Workers.

#### [NEW] `Footer.astro` (Section 7: Editorial Footer)
- 4 columns matching the reference footer layout:
  - Col 1: LadeStack by Girish Lade + Mechanical to Software Engineer narrative.
  - Col 2: Products directory.
  - Col 3: Open Source & Community links (GitHub `ladestack`, Discord 8K+).
  - Col 4: Direct contact & CV link (`https://ladestack.in`).
- Bottom bar with copyright and live status indicators.

#### [NEW] `src/pages/index.astro`
- Main landing page integrating all sections in chronological order.

---

## Verification Plan

### Automated Build & Lint Verification
1. Run `npm run build` or `npx astro check` to guarantee clean static compilation without errors.
2. Verify all asset paths, responsive classes, and layout structures.

### Visual & Functional Browser Verification
1. Launch local dev server with `npm run dev`.
2. Inspect page rendering with `browser_subagent` across:
   - Desktop view (1440px): 1:1 check against reference layout image.
   - Tablet view (768px): clean stack transitions.
   - Mobile view (375px): responsive menus, legible serif headlines, balanced spacing.
3. Verify interactive components (navigation smooth scrolling, buttons, hover states).
