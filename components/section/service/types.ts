export interface ServiceSection {
  title: string;
  subtitle: string;
}

export interface ServiceProps {
  id: number,
  badge: string,
  icon: React.ReactNode,
  title: string,
  description: string,
  color: string,
}
