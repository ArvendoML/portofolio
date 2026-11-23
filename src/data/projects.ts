import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "kopra-mandiri",
    name: "Bank Mandiri – KOPRA",
    shortDescription:
      "Large-scale enterprise web platform built with reusable Angular components, complex data tables, and Tailwind CSS.",
    role: "Frontend Developer",
    status: "Production",
    technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    type: "Web Application",
    images: [],
    keyContribution:
      "Built modular UI components, streamlined shared styles with Tailwind CSS, and refactored feature modules to improve rendering performance and long-term maintainability across multi-step enterprise workflows.",
    overview:
      "KOPRA is Bank Mandiri's wholesale digital platform serving corporate and enterprise clients with cash management, trade finance, and multi-account operations.",
    challenges: [
      "Navigating a large-scale enterprise Angular codebase with strict domain rules and multi-team conventions.",
      "Maintaining consistent UI/UX behavior across dense corporate forms, approval workflows, and tabular views.",
      "Optimizing component change detection and bundle structure to keep complex screens responsive.",
    ],
    solution:
      "Extracted reusable, strictly typed Angular UI components styled with Tailwind CSS, separated presentation logic from feature state, and cleaned up template bindings to reduce unnecessary re-evaluation.",
    architecture:
      "Feature-sliced Angular modules backed by typed domain services and a shared component library.",
    architectureLayers: [
      {
        layer: "Feature Views",
        tech: "Angular Modules & Routing",
        detail: "Multi-step workflows, approval screens, and complex forms",
      },
      {
        layer: "UI Primitives",
        tech: "Angular Components + Tailwind CSS",
        detail: "Reusable tables, badges, form controls, and layout shells",
      },
      {
        layer: "State & Services",
        tech: "TypeScript + RxJS Services",
        detail: "Typed request/response mapping and reactive state handling",
      },
      {
        layer: "Enterprise APIs",
        tech: "REST Endpoints",
        detail: "Authenticated enterprise and transaction services",
      },
    ],
  },
  {
    id: "ccu-pmb",
    name: "CCU Bank – Premier Mobile Banking",
    shortDescription:
      "Consumer mobile application engineered with Flutter for responsive multi-step flows, payments, and account management.",
    role: "Frontend / Mobile Developer",
    status: "Production",
    technologies: ["Flutter", "Dart"],
    type: "Mobile Application",
    images: [
      "/projects/ccu_pmb/CCU-premier-banner.png",
      "/projects/ccu_pmb/1.png",
      "/projects/ccu_pmb/2.png",
      "/projects/ccu_pmb/3.png",
      "/projects/ccu_pmb/4.png",
      "/projects/ccu_pmb/5.png",
    ],
    keyContribution:
      "Developed new consumer mobile modules in Flutter, integrated authenticated REST APIs, and optimized widget tree structure for smooth scrolling and transitions across devices.",
    overview:
      "Premier Mobile Banking (PMB) is CCU Bank's consumer-facing mobile application designed for everyday account oversight, fund transfers, and bill payments.",
    challenges: [
      "Delivering fluid 60fps list scrolling and transitions across varied Android and iOS hardware tiers.",
      "Handling asynchronous API states—loading, timeouts, validation errors, and confirmation receipts—reliably.",
      "Keeping feature modules decoupled as new services were added alongside existing screens.",
    ],
    solution:
      "Structured screens around composable Flutter widgets, minimized unnecessary widget rebuilds, standardized API error handling, and refactored shared UI patterns for cleaner maintenance.",
    architecture:
      "Layered Flutter architecture separating widget presentation, state management, and API repositories.",
    architectureLayers: [
      {
        layer: "Presentation Layer",
        tech: "Flutter Widgets (Dart)",
        detail: "Transaction flows, account dashboards, and confirmation views",
      },
      {
        layer: "State Management",
        tech: "Reactive State Controllers",
        detail: "Predictable loading, error, and confirmation state transitions",
      },
      {
        layer: "Repository Layer",
        tech: "Typed Dart Models",
        detail: "Request serialization, response parsing, and error mapping",
      },
      {
        layer: "Backend Services",
        tech: "REST APIs",
        detail: "Account inquiry, transfer, and payment endpoints",
      },
    ],
  },
  {
    id: "ccu-cib",
    name: "CCU Bank – Corporate Internet Banking",
    shortDescription:
      "Enterprise corporate portal features, REST API integrations, and legacy AngularJS architecture modernization.",
    role: "Frontend Developer",
    status: "Production",
    technologies: ["AngularJS", "JavaScript", "REST API"],
    type: "Web Application",
    images: [],
    keyContribution:
      "Implemented new corporate portal features, integrated external REST APIs, and incrementally modernized legacy AngularJS controllers and services for clearer maintainability.",
    overview:
      "Corporate Internet Banking (CIB) enables business and corporate customers to manage company accounts, batch operations, and multi-user workflows securely via the browser.",
    challenges: [
      "Extending a mature AngularJS codebase without introducing regressions across tightly coupled controllers.",
      "Managing digest-cycle performance on data-heavy enterprise transaction screens.",
      "Ensuring reliable API integration with clear feedback for multi-step corporate workflows.",
    ],
    solution:
      "Isolated new business logic into dedicated AngularJS services, cleaned up watcher-heavy bindings to improve UI responsiveness, and standardized API integration patterns.",
    architecture:
      "Modularized AngularJS views and controllers backed by encapsulated service factories.",
    architectureLayers: [
      {
        layer: "Corporate Views",
        tech: "AngularJS Templates & Directives",
        detail: "Account summaries, multi-step forms, and status views",
      },
      {
        layer: "Controller & Scope Layer",
        tech: "AngularJS Controllers",
        detail: "Lean view-model orchestration with minimized watcher overhead",
      },
      {
        layer: "Service Layer",
        tech: "AngularJS Factories & $http",
        detail: "Centralized REST API calls and payload normalization",
      },
    ],
  },
  {
    id: "primecashx",
    name: "PrimecashX",
    shortDescription:
      "Internal React & TypeScript application suite supporting rapid product prototyping and modular workflows.",
    role: "Frontend Developer",
    status: "Internal",
    technologies: ["React.js", "TypeScript"],
    type: "Web Application",
    images: [],
    keyContribution:
      "Built new product modules from scratch in React.js and TypeScript, collaborated directly with product stakeholders on rapid prototypes, and resolved rendering bottlenecks.",
    overview:
      "PrimecashX is an internal web application suite used by the product team to prototype, validate, and iterate on new financial product workflows before broader rollout.",
    challenges: [
      "Balancing rapid prototyping speed with clean TypeScript interfaces that wouldn't become throwaway tech debt.",
      "Preventing sluggish interactions when composing interactive prototype flows with frequent state updates.",
    ],
    solution:
      "Built composable, strongly typed React components with isolated state boundaries, allowing fast iteration on product flows while keeping rendering performance crisp.",
    architecture:
      "Component-driven React & TypeScript architecture optimized for fast module composition.",
    architectureLayers: [
      {
        layer: "Prototype Pages",
        tech: "React Feature Modules",
        detail: "Interactive workflow screens built for stakeholder validation",
      },
      {
        layer: "Shared UI Kit",
        tech: "React + TypeScript",
        detail: "Reusable typed inputs, cards, and layout primitives",
      },
      {
        layer: "Hooks & State",
        tech: "Custom React Hooks",
        detail: "Encapsulated state transitions and mock/API adapters",
      },
    ],
  },
  {
    id: "developer-portfolio",
    name: "Personal Portfolio Website",
    shortDescription:
      "Personal portfolio built with Next.js App Router, Server Components, TypeScript, and Vitest.",
    role: "Frontend Engineer",
    status: "Open Source",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    type: "Personal Project",
    githubUrl: "https://github.com/ArvendoML/portofolio",
    images: [],
    keyContribution:
      "Built a static Next.js 16 portfolio with Server Component sections, pure TypeScript data modules, dynamic SEO routes, accessible interactive controls, and unit/component tests.",
    overview:
      "An open-source frontend portfolio structured around Server Components for static content and metadata, focused Client Components for interactive controls, and centralized TypeScript data helpers verified with Vitest.",
    challenges: [
      "Directing and reviewing AI-assisted iterations to eliminate generic UI boilerplate, duplicated copy, and unnecessary client-side state.",
      "Eliminating dark/light theme FOUC and SSR-to-client hydration mismatches on interactive carousel controls.",
      "Keeping static sections as Server Components while supporting smooth scroll animations, keyboard navigation, and stationary pagination controls.",
    ],
    solution:
      "Added a pre-hydration theme script paired with useSyncExternalStore, extracted a lightweight <Reveal> wrapper so sections stay Server Components, derived carousel button states deterministically from slide index, and verified interactive flows with Vitest and React Testing Library.",
    architecture:
      "Next.js App Router separating Server Component pages and sections from isolated Client Component islands, backed by pure TypeScript data and helper modules.",
    architectureLayers: [
      {
        layer: "App Router & SEO",
        tech: "Next.js 16 Server Components",
        detail: "Static params, generateMetadata, OG image, sitemap.ts, robots.ts",
      },
      {
        layer: "Interactive Islands",
        tech: "React 19 + Embla + Tailwind v4",
        detail: "Scroll-spy navbar, 2×2 project carousel, search catalog, lightbox",
      },
      {
        layer: "Data & Helpers",
        tech: "Pure TypeScript Modules",
        detail: "Decoupled datasets in src/data/ and selectors in src/lib/",
      },
      {
        layer: "Verification",
        tech: "Vitest + React Testing Library",
        detail: "Component and selector tests covering filtering, theme, and contact UI",
      },
    ],
  },
];
