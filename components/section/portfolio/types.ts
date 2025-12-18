import { ReactNode } from "react"

export interface PortfolioSection {
  title: string,
  subtitle: string,
  ctaButton: string
}

export interface TechStack {
  icon: string;
  label: string;
}

export interface PortfolioProps {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  tech: TechStack[];
  link: string;
}