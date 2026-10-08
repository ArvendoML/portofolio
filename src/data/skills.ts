import { Monitor, Smartphone, Cpu, Wrench, LucideIcon } from "lucide-react";

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Monitor,
    skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "Dart"]
  },
  {
    category: "Engineering",
    icon: Cpu,
    skills: ["Component Architecture", "State Management", "REST API", "Responsive Design", "Accessibility", "Web Performance", "Testing"]
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "CI/CD"]
  }
];

export const engineeringApproach = [
  {
    id: "01",
    title: "Maintainability",
    description: "Build modular applications with clear boundaries, reusable components, and strict adherence to clean code principles."
  },
  {
    id: "02",
    title: "Reliability",
    description: "Handle loading, error, empty and edge cases as first-class citizens to ensure a resilient user experience."
  },
  {
    id: "03",
    title: "Performance",
    description: "Minimize unnecessary renders, network requests, and client-side complexity to deliver fast, fluid applications."
  },
  {
    id: "04",
    title: "User Experience",
    description: "Create highly responsive, accessible, and predictable interfaces that delight users on any device."
  }
];
