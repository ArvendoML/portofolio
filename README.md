# Arvendo Manuel Lextian — Portfolio

Personal portfolio website built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

Live site: [arvendomlextian.vercel.app](https://arvendomlextian.vercel.app)

## What's Inside

- **Home page:** Intro, work experience timeline, selected projects (2×2 paged carousel with category filters), education, technical skills, engineering approach, and direct contact links.
- **Projects archive (`/projects`):** Searchable and filterable list of all projects.
- **Project case studies (`/projects/[id]`):** Project details, image slideshow with fullscreen lightbox (`next/image`), architecture breakdown for projects without public screenshots, and previous/next navigation.
- **Theme & SEO:** Dark/light theme toggle backed by `localStorage` with no initial flash, dynamic `generateMetadata`, Open Graph image generation, `sitemap.xml`, `robots.txt`, and a custom 404 page.

## Stack

- Next.js 16 (App Router) & React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion & Embla Carousel
- Lucide React
- Vitest & React Testing Library

## Folder Structure

```text
src/
├── __tests__/      # Component and helper tests
├── app/            # Routes, layout, metadata, sitemap, robots, OG image
├── components/
│   ├── layout/     # Navbar and Footer
│   ├── projects/   # ProjectCard, ProjectsCatalog, ProjectSlideshow, ArchitectureDiagram
│   ├── providers/  # Framer Motion reduced-motion provider
│   ├── sections/   # Home page sections
│   └── ui/         # Shared UI primitives
├── data/           # Static content (personal, about, experience, education, skills, projects)
├── hooks/          # Theme hook
├── lib/            # Project filtering and lookup helpers
└── types/          # Shared TypeScript types
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm test            # Run Vitest suite
npm run test:watch  # Run tests in watch mode
npx tsc --noEmit    # Type-check
npm run lint        # Run ESLint
npm run build       # Production build
npm run start       # Start production server
```

## Notes

- Static sections (`Hero`, `Experience`, `Education`, `Skills`, `Approach`, `Footer`) stay as Server Components; scroll animations are wrapped in a small `<Reveal>` client component.
- `src/data/` and `src/types/` hold plain data only, keeping UI icons and components separated in `src/components/`.
- No backend is used. Contact actions open Gmail/Outlook compose tabs, `mailto:`, or copy the email address directly.

## Environment Variable

When deploying, set `NEXT_PUBLIC_SITE_URL` so sitemap, robots, and Open Graph URLs point to the right domain:

```bash
NEXT_PUBLIC_SITE_URL=https://arvendomlextian.vercel.app
```
