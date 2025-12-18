import { TechIcon } from "@/types/tech"
import { PortfolioProps, PortfolioSection } from "./types"

export const PORTFOLIO_SECTION: PortfolioSection = {
  title: "Selected Work",
  subtitle: "Proyek pilihan dengan fokus pada clarity dan modern design.",
  ctaButton: "Lihat Semua Project"
}

export const PORTFOLIOS: PortfolioProps[] = [
  {
    id: 1,
    title: "Galeriz.ka",
    category: "Landing Page",
    image: "/images/portfolio/galerizka.png",
    alt: "Galeriz.ka",
    description: "Website perusahaan IT dengan focus pada showcase produk dan layanan.",
    tech: [
      TechIcon.nextjs, 
      TechIcon.react, 
      TechIcon.javascript, 
      TechIcon.tailwind,
      TechIcon.resend,
      TechIcon.zod,
    ],
    link: "https://galerizka.vercel.app/"
  },
  {
    id: 2,
    title: "Mocking by Jay",
    category: "Landing Page",
    image: "/images/portfolio/mocking-by-jay.png",
    alt: "Mocking by Jay",
    description: "Landing page konversi tinggi untuk platform edukasi online.",
    tech: [
      TechIcon.nextjs, 
      TechIcon.react, 
      TechIcon.typescript, 
      TechIcon.tailwind
    ],
    link: "https://mockin-by-jay.vercel.app/"
  },
  // {
  //   id: 3,
  //   title: "HealthTrack Dashboard",
  //   category: "Web Application",
  //   image: "/images/logo/logo.png",
  //   alt: "",
  //   description: "Dashboard monitoring kesehatan dengan real-time analytics.",
  //   tech: [
  //     TechIcon.nextjs, 
  //     TechIcon.react, 
  //     TechIcon.javascript, 
  //     TechIcon.tailwind
  //   ],
  //   link: ""
  // }
]