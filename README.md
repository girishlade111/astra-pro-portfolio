# Astra Pro Portfolio

A modern, high-impact web showcase and portfolio site built with **Astro** + **Tailwind CSS** — designed to highlight digital products, creative portfolios, and modern web experiences with premium visuals and fast performance.

## ✨ Features

- 🎨 **Modern & aesthetic visuals** — premium hero designs and structured, conversion-focused layouts
- 📱 **Fully responsive** — layouts and assets optimized across desktop, tablet, and mobile
- ⚡ **Static & fast** — Astro static output (`output: 'static'`), zero-JS-by-default islands
- 🧩 **Modular components** — Hero, Header, Footer, FeatureShowcase, ProductsMatrix, MetricsRibbon, EcosystemDual, PhilosophyStage
- 🖼️ **Design assets included** — high-resolution hero banners and mockup screenshots (desktop + mobile)

## 🛠️ Tech Stack

- [Astro](https://astro.build/) 5.x (static site output)
- [Tailwind CSS](https://tailwindcss.com/) 3.4 + `@astrojs/tailwind` integration
- `@tailwindcss/typography` for rich-text content styling
- TypeScript via Astro client types (`astro/client` types reference in components)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm (comes with Node.js)

### Install & run

```bash
git clone https://github.com/girishlade111/astra-pro-portfolio.git
cd astra-pro-portfolio
npm install
npm run dev        # dev server with HMR
```

### Build for production

```bash
npm run build      # static output -> ./dist/
npm run preview    # preview the production build locally
```

## 📁 Project Structure

```text
astra-pro-portfolio/
├── public/                     # static assets (served as-is)
├── src/
│   ├── components/             # Astro UI components
│   │   ├── Header.astro        # site navigation
│   │   ├── Hero.astro          # hero section
│   │   ├── FeatureShowcase.astro
│   │   ├── ProductsMatrix.astro
│   │   ├── MetricsRibbon.astro
│   │   ├── EcosystemDual.astro
│   │   ├── PhilosophyStage.astro
│   │   └── Footer.astro
│   ├── layouts/Layout.astro    # base page layout (head, meta, slots)
│   ├── pages/index.astro       # home page
│   └── styles/global.css       # Tailwind + global styles
├── astro.config.mjs            # Astro config (static output)
├── tailwind.config.mjs         # Tailwind config
└── implementation_plan.md      # original build plan notes
```

## 🌐 Deploy

This is a fully static site — it deploys anywhere static hosting works:

- **GitHub Pages**: the built `./dist/` output is published on the `gh-pages` branch
- **Cloudflare Pages / Netlify / Vercel**: point the publish directory to `dist/` (build command: `npm run build`)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built by [Girish Lade](https://ladestack.in) — part of the [LadeStack](https://ladestack.in) open-source family.
