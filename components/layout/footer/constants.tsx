import { NAV_ITEMS } from "@/constants/navigation";
import { Github, Instagram, Linkedin } from "lucide-react";
import { BottomLink, FooterLink, FooterSection, SocialIcon } from "./types";

export const FOOTER_SECTION: FooterSection = {
  tagline: "Membangun website profesional & modern untuk mengembangkan bisnis Anda di era digital.",
  copy: `© ${new Date().getFullYear()} Kodeframe. All rights reserved.`
};

export const FOOTER_LINK: FooterLink[] = [
  {
    title: "Tautan",
    links: NAV_ITEMS,
  },
  {
    title: "Layanan",
    links: [
      { label: "Company Profile", href: "#services" },
      { label: "Landing Page", href: "#services" },
      { label: "Custom Development", href: "#services" },
      { label: "Website Audit", href: "#services" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Kontak", href: "#contact" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#blog" },
    ],
  },
];

export const SOCIAL_ICON: SocialIcon[] = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
  { icon: <Github size={20} />, label: "GitHub", href: "#" },
  { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
];

export const BOTTOM_LINK: BottomLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Sitemap", href: "#" },
];
