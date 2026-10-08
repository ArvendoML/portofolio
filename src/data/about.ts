const experienceStartDate = new Date("2023-12-01"); // Started professional role as Software Engineer
const currentDate = new Date();
const yearsOfExperience = Math.floor(
  (currentDate.getTime() - experienceStartDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25),
);

export const aboutData = {
  paragraphs: [
    "Frontend Developer with experience developing web and mobile applications using React.js, Angular, and Flutter, including enterprise and financial technology projects. Passionate about learning new technologies and continuously improving technical skills to build reliable and user-friendly applications.",
  ],
  stats: [
    {
      value: `${yearsOfExperience}+`,
      label: "Years of Experience",
    },
    {
      value: "Frontend",
      label: "Main Focus",
      subtext: "React · Angular · TypeScript · Flutter",
    },
    {
      value: "Enterprise & Fintech",
      label: "Experience",
      subtext: "Banking · Payments · Financial Services",
    },
    {
      value: "Jakarta, Indonesia",
      label: "Location",
    },
  ],
};
