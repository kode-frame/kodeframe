export interface WhyChosseUsSection {
  title: string;
  subtitle: string;
}

export interface ValueProp {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  float: string[];
  delay: number;
}

export interface AssuranceProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}