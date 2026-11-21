import type { SkillCategory } from "@/types";

export const technicalSkills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "REST API Design"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Engineering",
    skills: [
      "Component Architecture",
      "State Management",
      "API Integration",
      "Responsive Design",
      "Accessibility",
      "Web Performance",
      "Testing",
      "AI-Assisted Development",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "CI/CD",
      "AI Coding Assistants",
    ],
  },
];

export const engineeringApproach = [
  {
    id: "01",
    title: "Maintainability",
    description:
      "Build modular applications with clear boundaries, reusable components, and strict adherence to clean TypeScript and separation of concerns.",
  },
  {
    id: "02",
    title: "Reliability",
    description:
      "Handle loading, error, empty, and validation states as first-class citizens so financial and enterprise workflows stay predictable.",
  },
  {
    id: "03",
    title: "Performance",
    description:
      "Minimize unnecessary re-renders, payload overhead, and client-side complexity to keep data-heavy applications responsive.",
  },
  {
    id: "04",
    title: "User Experience",
    description:
      "Craft accessible, keyboard-navigable, and responsive interfaces that hold up across desktop, tablet, and mobile viewports.",
  },
];
