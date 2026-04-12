# IROHA — 一般社団法人IROHA 公式サイト

> Nurture Words and Ears. Open your stories.

Static company website for [一般社団法人IROHA](https://iroha.example.com), built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Overview

IROHA is an organization dedicated to nurturing language and listening through three pillars:

- **言語教育** — Japanese language learning via the [Shirimono](https://shirimono.fun) app
- **記憶の継承** — Life story and family history preservation via *Your History*
- **語りの場づくり** — Creating spaces for meaningful dialogue and encounter

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Output | Static export (`out/`) |
| Fonts | Noto Sans JP, Inter |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design tokens & blob animations
│   └── news/[slug]/        # Static news post pages
├── components/
│   ├── Header.tsx          # Fixed nav with mobile hamburger
│   ├── Hero.tsx            # Full-screen hero with floating blobs
│   ├── About.tsx           # Organization introduction
│   ├── ServicesSection.tsx # Services overview
│   ├── ServiceCard.tsx     # Individual service card
│   ├── ImageCarousel.tsx   # Image carousel for Shirimono
│   ├── NewsSection.tsx     # News grid
│   ├── CEOMessage.tsx      # Representative's message
│   ├── Footer.tsx          # Footer with nav & social links
│   └── Blob.tsx            # Reusable organic blob shape
└── data/
    ├── services.ts         # Service definitions
    └── news.ts             # News post data
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Export

```bash
npm run build
```

Produces a fully static site in the `out/` directory, ready to deploy on any static host (Netlify, GitHub Pages, S3, etc.).

## Adding Content

**New service:** edit `src/data/services.ts`

**New news post:** add an entry to `src/data/news.ts` — the page at `/news/[slug]` is generated automatically at build time.

**Highlight text in green:** wrap words with `**double asterisks**` in the `description` field.
