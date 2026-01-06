import { TechItem } from "@/types/tech";

export interface ProjectSection {
  title: string,
  subtitle: string,
  ctaButton: string
}

export interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  color: string;
  techStack: TechItem[];
  liveUrl: string;
  repoUrl: string;
}