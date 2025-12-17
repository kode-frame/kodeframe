import { Box, Code, Globe, Layers, Monitor } from "lucide-react";
import { ServiceProps, ServiceSection } from "./types";

export const SERVICE_SECTION: ServiceSection = {
  title: "Services",
  subtitle: "Layanan yang kami tawarkan untuk kebutuhan digital bisnismu.",
};

export const SERVICES: ServiceProps[] = [
  {
    id: 1,
    badge: "Popular",
    icon: <Globe className="w-4 h-4" />,
    title: "Landing Page",
    description: "Simple, fast, dan fokus pada konversi.",
    color: "text-blue-400",
  },
  {
    id: 2,
    badge: "Featured",
    icon: <Layers className="w-4 h-4" />,
    title: "Business Website",
    description: "Struktur lengkap untuk brand profesional.",
    color: "text-indigo-400",
  },
  {
    id: 3,
    badge: "New",
    icon: <Code className="w-4 h-4" />,
    title: "Custom Build",
    description: "Tailored untuk kebutuhan kamu.",
    color: "text-emerald-400"
  }
];