export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

export const education: Education[] = [
  {
    id: "edu-1",
    school: "Universitas Multimedia Nusantara",
    degree: "Bachelor's Degree",
    fieldOfStudy: "Computer Science / Informatics",
    startDate: "2019",
    endDate: "2023",
    location: "Tangerang, Indonesia",
    description:
      "Completed a comprehensive undergraduate program with a focus on software engineering and application development.",
    achievements: [],
  },
  {
    id: "edu-2",
    school: "Binar Academy",
    degree: "Studi Independen Bersertifikat Kampus Merdeka",
    fieldOfStudy: "Fullstack Web",
    startDate: "2022",
    endDate: "2022",
    location: "Remote, Indonesia",
    description:
      "Intensive Fullstack Web Development bootcamp program as part of the Kampus Merdeka initiative.",
    achievements: [],
  },
  {
    id: "edu-3",
    school: "Dicoding",
    degree: "Studi Independen Bersertifikat Kampus Merdeka",
    fieldOfStudy: "Front-End Web and React Developer",
    startDate: "2022",
    endDate: "2022",
    location: "Remote, Indonesia",
    description:
      "Comprehensive Front-End Web and React Developer bootcamp program as part of the Kampus Merdeka initiative.",
    achievements: [],
  },
];
