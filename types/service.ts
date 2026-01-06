export interface ServiceList {
  id: number;
  badge: string
  icon: React.ReactNode;
  title: string;
  href: string;
  description: string;
  color: {
    text: string;
    bg: string;
  }
}