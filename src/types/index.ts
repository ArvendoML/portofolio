export type ProjectCategory =
  | "Web Application"
  | "Mobile Application"
  | "Personal Project";

export type ProjectStatus = "Production" | "Internal" | "Open Source";

export interface ArchitectureLayer {
  layer: string;
  tech: string;
  detail: string;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  type: ProjectCategory;
  keyContribution: string;
  overview: string;
  challenges: string[];
  solution: string;
  architecture?: string;
  architectureLayers?: ArchitectureLayer[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
  projectId?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities?: string[];
  projects?: ExperienceProject[];
  technologies?: string[];
}

export type SkillGroupName =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Engineering"
  | "Tools";

export interface SkillCategory {
  category: SkillGroupName;
  skills: string[];
}

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
