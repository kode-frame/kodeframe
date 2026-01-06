export interface TechItem {
  label: string;
  icon: string;
  color: string;
}

export type TechList = Record<string, TechItem>