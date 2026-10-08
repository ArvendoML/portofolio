import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "primecashx",
    name: "PrimecashX",
    shortDescription: "Internal web application for product prototyping.",
    role: "Frontend Developer",
    technologies: ["React.js", "TypeScript"],
    type: "Web Banking Application",
    images: [],
    keyContribution:
      "Built and developed new modules, improved application performance, and collaborated on product prototyping.",
    overview:
      "An internal web application suite used by the product team for prototyping.",
    challenges: [
      "Implementing requirements for rapid prototyping",
      "Maintaining rendering performance",
    ],
    solution:
      "Used React.js and TypeScript to build new modules and improve the overall application performance.",
  },
  {
    id: "kopra-mandiri",
    name: "Bank Mandiri – KOPRA",
    shortDescription: "UI web application for wholesale digital banking.",
    role: "Frontend Developer",
    technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    type: "Web Banking Application",
    images: [],
    keyContribution:
      "Created new UI components, optimized UI performance, and improved code structure for maintainability.",
    overview:
      "KOPRA is a wholesale digital super platform providing comprehensive financial services for enterprise clients.",
    challenges: [
      "Working with complex enterprise architecture",
      "Meeting UI/UX and performance requirements",
    ],
    solution:
      "Built reusable components using Angular and Tailwind CSS, optimizing rendering performance and improving code maintainability.",
  },
  {
    id: "ccu-cib",
    name: "CCU Bank – Corporate Internet Banking",
    shortDescription: "Web banking modules and features for corporate clients.",
    role: "Frontend Developer",
    technologies: ["AngularJS"],
    type: "Web Banking Application",
    images: [],
    keyContribution:
      "Created new banking modules and features, optimized UI performance, and integrated APIs.",
    overview:
      "Corporate Internet Banking (CIB) platform enabling corporate clients to manage finances securely.",
    challenges: [
      "Working within AngularJS codebase constraints",
      "Integrating APIs securely",
    ],
    solution:
      "Built new features, integrated external APIs, and improved the legacy AngularJS code structure for better maintainability.",
  },
  {
    id: "ccu-pmb",
    name: "CCU Bank – Premier Mobile Banking",
    shortDescription: "Mobile banking application modules and features.",
    role: "Frontend Developer",
    technologies: ["Flutter", "Dart"],
    type: "Mobile Banking Application",
    images: [
      "/projects/ccu_pmb/CCU-premier-banner.png",
      "/projects/ccu_pmb/1.png",
      "/projects/ccu_pmb/2.png",
      "/projects/ccu_pmb/3.png",
      "/projects/ccu_pmb/4.png",
      "/projects/ccu_pmb/5.png",
    ],
    keyContribution:
      "Created new mobile banking modules, optimized UI performance, and integrated APIs.",
    overview:
      "A consumer-facing mobile banking application designed for seamless transfers, payments, and account management.",
    challenges: [
      "Ensuring smooth UI performance on mobile devices",
      "Integrating banking APIs securely",
    ],
    solution:
      "Developed new modules using Flutter, optimized UI rendering, and integrated APIs while improving code structure for maintainability.",
  },
];
