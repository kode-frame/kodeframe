export interface FooterSection {
  tagline: string;
  copy: string;
}

export interface FooterLink {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface SocialIcon {
  icon: string;
  label: string;
  href: string;
}

export interface BottomLink {
  label: string;
  href: string;
}