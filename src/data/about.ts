import type { Stat } from "@/components/ui/StatsGrid";

const experienceStartDate = new Date("2023-12-01");
const currentDate = new Date();
const yearsOfExperience = Math.max(
  1,
  Math.floor(
    (currentDate.getTime() - experienceStartDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  ),
);

export const aboutData: {
  paragraphs: string[];
  stats: Stat[];
} = {
  paragraphs: [
    "Specializing in frontend and mobile engineering with React, Angular, TypeScript, and Flutter across enterprise platforms, fintech products, and internal tools, while expanding into fullstack API and database development with Node.js, Express.js, and PostgreSQL.",
  ],
  stats: [
    {
      value: `${yearsOfExperience}+`,
      label: "Years of Experience",
    },
    {
      value: "Frontend-First",
      label: "Engineering Focus",
      subtext: "Web & Mobile · Growing into Fullstack",
    },
    {
      value: "Enterprise & Product",
      label: "Background",
      subtext: "Fintech · Internal Tools · Consumer Apps",
    },
    {
      value: "South Jakarta, ID",
      label: "Current Location",
    },
  ],
};
