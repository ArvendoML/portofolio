import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "PT. Wide Technology Indonesia",
    position: "Software Engineer",
    startDate: "12/2023",
    endDate: "Present",
    location: "South Jakarta",
    description:
      "Delivering production web and mobile applications across enterprise client platforms, fintech systems, and internal product teams.",
    responsibilities: [
      "Architect and implement modular frontend features across React, Angular, AngularJS, and Flutter applications.",
      "Collaborate closely with backend engineers, QA, and product teams to integrate REST APIs and verify complex edge-case flows.",
      "Refactor legacy UI modules, standardize reusable components, and optimize rendering performance.",
    ],
    projects: [
      {
        name: "Internal Product Team – PrimecashX",
        description:
          "Developed new product-prototyping modules with React.js and TypeScript while improving runtime rendering performance.",
        technologies: ["React.js", "TypeScript"],
        projectId: "primecashx",
      },
      {
        name: "Bank Mandiri – KOPRA",
        description:
          "Built reusable wholesale banking UI components using Angular, TypeScript, and Tailwind CSS with a focus on maintainability.",
        technologies: ["Angular", "TypeScript", "Tailwind CSS"],
        projectId: "kopra-mandiri",
      },
      {
        name: "CCU Bank – Corporate Internet Banking (CIB)",
        description:
          "Delivered new corporate banking modules, integrated REST APIs, and refactored legacy AngularJS views.",
        technologies: ["AngularJS"],
        projectId: "ccu-cib",
      },
      {
        name: "CCU Bank – Premier Mobile Banking (PMB)",
        description:
          "Implemented mobile banking screens, API integrations, and performance optimizations in Flutter.",
        technologies: ["Flutter", "Dart"],
        projectId: "ccu-pmb",
      },
    ],
  },
];
