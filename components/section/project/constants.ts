import { TECH_LIST } from "@/constants/tech"
import { ProjectProps, ProjectSection } from "./types"

export const PROJECT_SECTION: ProjectSection = {
  title: "Selected Work",
  subtitle: "Proyek pilihan dengan fokus pada clarity dan modern design.",
  ctaButton: "Lihat Semua Project"
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "Galeriz.ka",
    category: "Landing Page",
    image: "/images/project/galerizka.png",
    description: "Website jasa jahit profesional dengan layanan custom tailoring dan alteration.",
    year: "2025",
    color: "from-[#f7e8ec] to-[#c57c8a]",
    techStack: [ 
      TECH_LIST.nextjs,
      TECH_LIST.react,
      TECH_LIST.javascript,
      TECH_LIST.tailwind,
      TECH_LIST.zod,
      TECH_LIST.resend,
    ],
    liveUrl: "https://galerizka.vercel.app/",
    repoUrl: "https://github.com/misk24/galerizka"
  },
  {
    id: 2,
    title: "Mocking by Jay",
    category: "Landing Page",
    image: "/images/project/mocking-by-jay.png",
    description: "Website independent record label yang fokus pada pengembangan bakat musik urban.",
    year: "2025",
    color: "from-[#dc2828] to-[#9a1919]",
    techStack: [
      TECH_LIST.nextjs, 
      TECH_LIST.react, 
      TECH_LIST.typescript, 
      TECH_LIST.tailwind
    ],
    liveUrl: "https://mockin-by-jay.vercel.app/",
    repoUrl: "https://github.com/misk24/mocking-by-jay"
  },
]