export type MascotPose = 
  | 'welcome' 
  | 'waving' 
  | 'laptop' 
  | 'coding' 
  | 'thinking' 
  | 'celebrating' 
  | 'researching' 
  | 'observing'
  | 'sleeping';

export interface Project {
  id: string;
  episode: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & Research' | 'Hardware / IoT';
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'Completed' | 'Research Prototype' | 'In Progress';
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'programming' | 'web' | 'tools' | 'ml' | 'creative';
  description: string;
  proficiencyLevel: string;
  mascotReaction: MascotPose;
  tags: string[];
  connections?: string[];
}

export interface ExperienceItem {
  role: string;
  institution: string;
  period: string;
  topic: string;
  contributions: string[];
  methodologies: string[];
  metrics: { label: string; value: string; detail: string }[];
}

export interface EducationItem {
  cardTitle: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  highlights: string[];
  badge: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  impactPoints: string[];
}

