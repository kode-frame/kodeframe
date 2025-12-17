import { Box, Code, Monitor } from "lucide-react";
import { ServiceProps, ServiceSection } from "./types";

export const SERVICE_SECTION: ServiceSection = {
  title: "Services",
  subtitle: "Layanan yang kami tawarkan untuk kebutuhan digital bisnismu.",
};

export const SERVICES: ServiceProps[] = [
  {
    icon: <Monitor size={48} />,
    title: "Landing Page",
    description: "Simple, fast, dan fokus pada konversi."
  },
  {
    icon: <Box size={48} />,
    title: "Business Website",
    description: "Struktur lengkap untuk brand profesional."
  },
  {
    icon: <Code size={48} />,
    title: "Custom Build",
    description: "Tailored untuk kebutuhan kamu."
  }
];