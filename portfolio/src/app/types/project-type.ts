export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  technologies: string[];
  stacks: Stack;
  authors: string[];
  websiteUrl?: string | null;
  projectType: ProjectType;
}

export enum Stack {
  FRONT = 'Frontend',
  BACK = 'Backend',
  FULL = 'Fullstack'
}

export enum ProjectType {
  PROFESSIONAL = "Professional",
  STUDY = "Study"
}
