# Arvendo Manuel Lextian — Software Engineer Portfolio

Personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Designed as a frontend engineering showcase highlighting enterprise web applications, consumer mobile apps, and fullstack growth.

## Overview

- **Role & Positioning:** Software Engineer (Frontend-first across web and mobile, expanding into Node.js, Express.js, and PostgreSQL).
- **Architecture:** Strictly frontend-only static/SSG Next.js application with decoupled TypeScript datasets (`src/data/`) and pure selector/filter helpers (`src/lib/`).
- **Key Features:**
  - Responsive layout with zero-flash Dark/Light theme persistence (`useSyncExternalStore` + pre-hydration script).
  - Scroll-spy sticky navigation (`IntersectionObserver`) and global Server Component footer.
  - Paginated 2×2 project carousel (max 4 cards per slide) with category filtering on Home and full-text + category search on `/projects`.
  - Project case study pages (`/projects/[id]`) with `next/image` slideshow, keyboard-accessible fullscreen lightbox, structured frontend architecture diagrams, and Previous/Next navigation.
  - Direct contact channels with Gmail / Outlook Web quick-compose menu and one-click email copy.
  - SEO-ready with dynamic `generateMetadata`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, and a custom `not-found.tsx`.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.3.8 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI & Styling | React 19, Tailwind CSS v4, Lucide Icons |
| Motion | Framer Motion (`reducedMotion="user"`) |
| Carousel | Embla Carousel (`embla-carousel-react`, `embla-carousel-autoplay`) |
| Testing | Vitest, React Testing Library, Jest DOM, jsdom |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project Structure

```text
src/
├── __tests__/           # Vitest + React Testing Library test suite
├── app/                 # App Router routes, layout, metadata, OG image, sitemap, robots, 404
├── components/
│   ├── layout/          # Sticky scroll-spy Navbar and Server Component Footer
│   ├── projects/        # ProjectCard, ProjectsCatalog, ProjectSlideshow, ArchitectureDiagram
│   ├── providers/       # MotionProvider (prefers-reduced-motion)
│   ├── sections/        # Landing page sections (Hero, Experience, Projects, Education, Skills, Approach, Contact)
│   └── ui/              # Reusable primitives (Section, SectionHeader, Reveal, Badge, Timeline, StatsGrid)
├── data/                # Pure TypeScript datasets (personal, about, experience, education, skills, projects)
├── hooks/               # Hydration-safe theme persistence hook
├── lib/                 # Pure project selectors, filtering, and adjacency helpers
└── types/               # Centralized TypeScript domain interfaces
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts & Verification

```bash
# Run unit and component tests
npm test

# Watch mode during development
npm run test:watch

# Type-check with TypeScript
npx tsc --noEmit

# Lint with ESLint
npm run lint

# Build for production (generates static/SSG routes)
npm run build

# Serve production build locally
npm run start
```

## Engineering & Design Decisions

- **Server Components by Default:** `HeroSection`, `ExperienceSection`, `EducationSection`, `SkillsSection`, `ApproachSection`, `StatsGrid`, and `Footer` render on the server; animations are isolated inside a small `<Reveal>` client wrapper so client JavaScript stays minimal.
- **Pure Data Layer:** `src/data/` and `src/types/` contain no React or icon-library imports—icons and presentation mappings live strictly inside UI components.
- **Hydration & Motion Safety:** Dark/light theme state initializes synchronously before first paint and syncs via `useSyncExternalStore`, while `MotionConfig reducedMotion="user"` respects OS reduced-motion preferences.
- **No Fake Backend:** Contact actions route cleanly to Gmail/Outlook compose tabs, `mailto:`, or clipboard copy without simulating server form submissions.

## Deployment

Designed for static/SSG deployment on Vercel or any Node/Next.js host. Set `NEXT_PUBLIC_SITE_URL` in your environment variables to match your production domain for `sitemap.xml`, `robots.txt`, and Open Graph canonical URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
