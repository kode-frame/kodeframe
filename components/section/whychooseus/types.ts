export interface WhyChooseUsSection {
  title: string;
  subtitle: string;
}

export interface ValueProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  position: {
    x: number;
    y: number;
  };
}

export interface AssuranceProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}