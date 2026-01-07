import { Box, CheckCircle, Layers, Wrench, Zap } from "lucide-react"
import { AssuranceProp, ValueProps, WhyChooseUsSection } from "./types"

export const WHYCHOOSEUS_SECTION: WhyChooseUsSection = {
  title:"Why Kodeframe",
  subtitle: "Hal-hal yang bikin layanan kami layak dipercaya."
}

export const VALUE_PROPS: ValueProps[] = [
  {
    id: 1,
    icon: <Layers size={24} />,
    title: "Modern Desain",
    description: "Clean layouts. Konsisten dan enak dilihat.",
    color: "from-blue-500 to-cyan-500",
    position: { x: -5, y: -5 }
  },
  {
    id: 2,
    icon: <Zap size={24} />,
    title: "Fast Performance",
    description: "Kode ringan, loading cepat.",
    color: "from-purple-500 to-pink-500",
    position: { x: 5, y: -5 }
  },
  {
    id: 3,
    icon: <Box size={24} />,
    title: "Scalable Build",
    description: "Struktur modular. Easy to grow.",
    color: "from-green-500 to-emerald-500",
    position: { x: -5, y: 5 }
  },
  {
    id: 4,
    icon: <Wrench size={24} />,
    title: "Clear Process",
    description: "Tanpa drama, tanpa ribet.",
    color: "from-orange-500 to-red-500",
    position: { x: 5, y: 5 }
  }
]

export const ASSURANCE_PROPS: AssuranceProp = {
  icon: <CheckCircle size={20} />,
  title: "No Surprises, Just Results",
  description: "Yang Anda dapatkan sesuai dengan yang dijanjikan. Tidak lebih, tidak kurang. Itu komitmen kami."
}
