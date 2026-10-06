export interface Technology {
  name: string;
  icon?: string;
}

export type ProjectCategory = 'Enterprise' | 'Financial Technology' | 'Web Application' | 'Mobile Application' | 'Personal Project';

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  type: ProjectCategory;
  keyContribution: string;
  overview: string;
  challenges: string[];
  solution: string;
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
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

export type SkillCategory = 'Frontend' | 'Backend' | 'Mobile' | 'Engineering' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}
