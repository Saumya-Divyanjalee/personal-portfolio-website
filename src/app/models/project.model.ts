export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'backend' | 'ai-ml' | 'java';
  technologies: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
}