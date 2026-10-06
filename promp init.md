# Senior Software Engineer Portfolio — Frontend Project

Act as a **Senior Frontend Engineer and UI/UX Engineer**. Build a production-quality personal portfolio website for a Software Engineer.

The website should feel like a real product created by an experienced engineer — **not a generic developer portfolio template**.

## 1. Project Goal

Create a modern, professional, responsive portfolio that demonstrates:

* Strong frontend engineering skills
* Clean and scalable architecture
* TypeScript expertise
* Modern React development
* Component-driven development
* Responsive design
* Accessibility
* Performance optimization
* Good UX/UI decisions
* Experience working on enterprise and financial technology projects
* Ability to present technical work clearly to recruiters and engineering managers

The portfolio itself should be treated as a **showcase project**.

There is **NO backend**.

All data should be local/static or mocked through local TypeScript/JSON files.

---

# 2. Recommended Tech Stack

Use:

* **Next.js** with App Router
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion** for subtle animations
* **Lucide React** for icons

Optional:

* React Hook Form for the contact form
* Zod for frontend validation
* Vitest + React Testing Library for unit/component tests

Do not introduce unnecessary libraries.

The application should be easy to deploy to Vercel or another static hosting platform.

---

# 3. Design Direction

Create a premium, minimal engineering-focused visual style.

Avoid:

* Generic template layouts
* Excessive gradients
* Excessive animations
* Overly colorful interfaces
* Huge animated backgrounds
* Skill percentage bars
* Fake GitHub contribution graphs
* Fake statistics
* Excessive glassmorphism
* "10x developer" style marketing

The design should communicate:

> Professional. Technical. Reliable. Modern. Experienced.

Use a primarily neutral color palette with one subtle accent color.

Typography should be clean and highly readable.

The website must work beautifully on:

* Desktop
* Laptop
* Tablet
* Mobile

---

# 4. Website Structure

Create the following sections/pages:

## Home

Hero section containing:

* Name
* Job title
* Short professional introduction
* Primary CTA: "View Projects"
* Secondary CTA: "Download Resume"
* GitHub link
* LinkedIn link

Example positioning:

> Software Engineer
> Building reliable and scalable web applications with React, Angular, TypeScript, and modern frontend architecture.

Include a subtle visual element representing software engineering, but keep it professional.

---

# 5. About Section

Create a concise professional introduction.

Include:

* Years of experience
* Main technical focus
* Engineering philosophy
* Types of applications worked on
* Enterprise experience
* Financial technology experience

Example:

> Software Engineer focused on building reliable and maintainable web and mobile applications. Experienced in React, Angular, TypeScript, and Flutter, with experience contributing to enterprise and financial technology projects.

Do not exaggerate experience or invent companies/projects.

---

# 6. Experience Section

Create a professional timeline.

Each experience item should contain:

* Company
* Position
* Employment period
* Location
* Short description
* Responsibilities
* Technologies used

Example structure:

```text
Software Engineer
PT Example Technology
2024 — Present
Jakarta, Indonesia

• Developed enterprise web applications using React and TypeScript.
• Implemented reusable UI components and frontend architecture.
• Collaborated with backend engineers, QA engineers, and product teams.
• Improved application usability and maintainability.

Tech:
React · TypeScript · Next.js · Tailwind CSS
```

The UI should support multiple experiences.

---

# 7. Projects Section

This should be one of the most important sections.

Create a project grid with project cards.

Each project should contain:

* Project name
* Short description
* Role
* Technology stack
* Project type
* Key contribution
* Screenshot/mockup
* GitHub link if available
* Live demo if available

Project categories:

* Enterprise
* Financial Technology
* Web Application
* Mobile Application
* Personal Project

Add filtering:

```text
All
Web
Mobile
Enterprise
Financial
Personal
```

Filtering should happen entirely on the frontend.

Use local project data.

---

# 8. Project Detail Modal / Page

Clicking a project should open a detailed project view.

Include:

### Overview

What the project does.

### My Role

Explain what the engineer personally contributed.

### Technical Challenges

Describe realistic technical problems.

For example:

* Complex form state
* Large datasets
* Permission-based UI
* Reusable components
* API integration
* Performance issues
* Responsive design
* Legacy code migration

### Solution

Explain how the problems were approached.

### Tech Stack

Display technologies as badges.

### Architecture

Show a simple frontend architecture diagram or visual representation.

Example:

```text
Pages
  ↓
Feature Components
  ↓
Shared Components
  ↓
Hooks / State
  ↓
API Layer
```

Since there is no backend, the API layer should be represented as a mocked abstraction.

---

# 9. Technical Skills

Do NOT use percentage bars such as:

React 95%
JavaScript 90%

Instead, organize skills into categories.

### Frontend

* React
* Angular
* Next.js
* TypeScript
* JavaScript
* HTML
* CSS
* Tailwind CSS

### Mobile

* Flutter
* Dart

### Engineering

* Component Architecture
* State Management
* REST API Integration
* Responsive Design
* Accessibility
* Performance Optimization
* Testing
* Git

### Tools

* Git
* GitHub
* VS Code
* Figma
* CI/CD

Only include technologies that are actually relevant to the developer.

---

# 10. Engineering Approach

Add a section called:

## How I Build Software

Show 4–5 engineering principles.

Example:

### Maintainability

Build reusable components and keep business logic separated from presentation.

### Type Safety

Use TypeScript to reduce runtime errors and make large codebases easier to maintain.

### Accessibility

Build interfaces that are usable with keyboards, screen readers, and different accessibility needs.

### Performance

Optimize rendering, images, bundle size, and unnecessary network requests.

### User Experience

Prioritize clear interactions, responsive layouts, and predictable behavior.

This section should make the portfolio feel like it belongs to an experienced engineer.

---

# 11. Interactive Engineering Demo

Add a small interactive section demonstrating frontend engineering ability.

For example:

## Component Playground

Allow users to interact with several components:

* Button
* Input
* Select
* Modal
* Toast
* Tabs
* Data table
* Dropdown

Show different states:

```text
Default
Hover
Focus
Disabled
Loading
Error
Success
```

This demonstrates that the portfolio itself is an engineering project.

---

# 12. Mock Dashboard

Add an optional section:

## Mini Engineering Dashboard

Create a small frontend-only dashboard demonstrating:

* Data table
* Search
* Filtering
* Sorting
* Pagination
* Status badges
* Modal
* Responsive layout

Use mocked local data.

Example:

```text
Project
Status
Technology
Last Updated
```

Example records:

```text
Payment Dashboard
Active
React / TypeScript
Today

Customer Portal
Completed
Angular / TypeScript
2 days ago

Mobile Banking UI
In Progress
Flutter
1 week ago
```

This should demonstrate practical frontend application development rather than simply displaying static content.

---

# 13. Resume Section

Create a dedicated resume section.

Display:

* Professional summary
* Experience
* Skills
* Education
* Certifications
* Selected projects

Provide:

**Download Resume**

The resume can be a static PDF stored inside the frontend project.

Do not create a backend endpoint for downloading it.

---

# 14. Contact Section

Create a professional contact section.

Fields:

```text
Name
Email
Message
```

Since there is no backend:

* Perform frontend validation
* Show validation errors
* Show loading state
* Show success state
* Do not actually send the message

Alternatively, provide:

* Email
* LinkedIn
* GitHub

as direct contact methods.

Clearly avoid pretending that a message was actually sent.

---

# 15. Navigation

Create a sticky responsive navbar.

Desktop:

```text
Logo / Name

About
Experience
Projects
Skills
Resume
Contact

[GitHub]
```

Mobile:

Use a hamburger menu.

The navbar should:

* Highlight the active section
* Smooth-scroll to sections
* Close the mobile menu after navigation
* Remain accessible by keyboard

---

# 16. Dark / Light Mode

Implement both:

* Light mode
* Dark mode

Persist the user's preference using localStorage.

Respect:

```text
prefers-color-scheme
```

Use accessible contrast ratios in both themes.

---

# 17. Animations

Use Framer Motion sparingly.

Recommended animations:

* Section reveal
* Project card hover
* Modal entrance
* Navbar transitions
* Button interactions

Avoid excessive motion.

Respect:

```text
prefers-reduced-motion
```

---

# 18. Accessibility

The project must follow good accessibility practices.

Requirements:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* ARIA labels where necessary
* Accessible modals
* Accessible navigation
* Accessible forms
* Sufficient color contrast
* Reduced-motion support
* Images must have meaningful alt text

Do not use ARIA unnecessarily when native HTML is sufficient.

---

# 19. Performance

Optimize the application for production.

Consider:

* Next.js image optimization
* Lazy loading
* Dynamic imports where appropriate
* Avoid unnecessary client components
* Avoid unnecessary re-renders
* Proper component boundaries
* Optimized fonts
* Minimal JavaScript
* Proper metadata

The portfolio should achieve excellent Lighthouse scores.

Target:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Do not artificially manipulate Lighthouse results.

---

# 20. SEO

Implement:

* Page title
* Meta description
* Open Graph metadata
* Twitter/X metadata
* Semantic HTML
* Proper headings
* robots.txt
* sitemap

Example title:

> Software Engineer | React · Angular · TypeScript

Example description:

> Software Engineer specializing in React, Angular, TypeScript, and modern frontend application development.

---

# 21. Architecture

Use a clean feature-oriented structure.

Example:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   └── resume/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── projects/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
│
├── hooks/
│
├── lib/
│
├── types/
│
└── styles/
```

Keep content/data separate from UI components.

Avoid putting large amounts of hardcoded portfolio data directly inside JSX.

---

# 22. TypeScript Requirements

Use strict TypeScript.

Avoid:

```typescript
any
```

unless there is a legitimate reason.

Create proper interfaces/types for:

```typescript
Project
Experience
Skill
Technology
Education
```

Use discriminated unions where appropriate.

Keep reusable types centralized.

---

# 23. Component Requirements

Create reusable components such as:

```text
Button
Badge
Card
Modal
Input
SectionHeading
Container
Navbar
Footer
ProjectCard
ProjectFilter
ExperienceTimeline
SkillGroup
ThemeToggle
```

Components should have clear responsibilities.

Avoid creating a giant page component containing everything.

---

# 24. Testing

Add tests for important interactive functionality.

At minimum test:

* Project filtering
* Modal opening/closing
* Form validation
* Theme switching
* Navigation behavior
* Component states

Use:

* Vitest
* React Testing Library

Tests should focus on user behavior rather than implementation details.

---

# 25. Code Quality

Follow these principles:

* SOLID where applicable
* DRY
* KISS
* Composition over unnecessary inheritance
* Clear naming
* Small reusable components
* Avoid premature abstraction
* Avoid over-engineering
* Keep business/data logic separate from UI
* Prefer readable code over clever code

Add ESLint and formatting configuration.

The project should be easy for another engineer to understand.

---

# 26. Responsive Design

Design mobile-first.

Breakpoints should support:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Pay particular attention to:

* Project cards
* Timeline
* Navigation
* Tables
* Modals
* Typography
* Spacing

Do not simply shrink the desktop layout for mobile.

Change the layout where necessary.

---

# 27. Content

Use realistic but clearly fictional/sample information where personal information is unavailable.

Do not invent:

* Companies the engineer never worked for
* Fake certifications
* Fake awards
* Fake statistics
* Fake clients
* Fake project results

Make content easy to replace through data files.

---

# 28. Final UX

The final website should communicate within the first 10 seconds:

1. Who the engineer is
2. What technologies they specialize in
3. What kind of software they build
4. What projects they have worked on
5. How to contact them

A recruiter should be able to understand the engineer's profile quickly.

An engineering manager should be able to inspect the project and see evidence of:

* Architecture
* TypeScript
* React
* UI engineering
* State management
* Testing
* Accessibility
* Performance
* Engineering judgment

---

# 29. Important Constraint

This is a **frontend-only portfolio project**.

Do NOT create:

* Backend server
* Database
* Authentication server
* REST API backend
* GraphQL backend
* Server-side contact form
* CMS

Use:

* Static data
* Local JSON/TypeScript data
* Mock API functions where necessary
* Browser APIs
* localStorage where appropriate

The application must work entirely from the frontend.

---

# 30. Expected Deliverable

Generate a complete, production-quality project including:

* Full Next.js application
* TypeScript
* Tailwind CSS
* Responsive UI
* Dark/light mode
* Animations
* Project filtering
* Project details
* Interactive component playground
* Mock dashboard
* Resume section
* Contact form validation
* Accessibility
* SEO
* Testing
* ESLint
* Clean architecture
* README

The README should explain:

1. Project overview
2. Tech stack
3. Architecture
4. Installation
5. Development
6. Testing
7. Production build
8. Deployment
9. Design decisions
10. Frontend architecture decisions

Build the project as if it will be reviewed by a **Senior Frontend Engineer during a technical interview**.

Prioritize **quality, maintainability, accessibility, performance, and realistic engineering decisions** over adding unnecessary features.
