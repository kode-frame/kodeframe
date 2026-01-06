import { Box, CheckCircle, Layers, Wrench, Zap } from "lucide-react"
import { AssuranceProp, ValueProp, WhyChosseUsSection } from "./types"

export const WHYCHOOSEUS_SECTION: WhyChosseUsSection = {
  title:"Why Kodeframe",
  subtitle: "Hal-hal yang bikin layanan kami layak dipercaya."
}

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 1,
    icon: <Layers size={24} />,
    title: "Modern Desain",
    description: "Clean layouts. Konsisten dan enak dilihat.",
    color: "from-blue-500 to-cyan-500",
    float: ["-top-2 -left-2", "-bottom-2 -right-2"],
    delay: 0.1
  },
  {
    id: 2,
    icon: <Zap size={24} />,
    title: "Fast Performance",
    description: "Kode ringan, loading cepat.",
    color: "from-purple-500 to-pink-500",
    float: ["-top-2 -right-2", "-bottom-2 -left-2"],
    delay: 0.2
  },
  {
    id: 3,
    icon: <Box size={24} />,
    title: "Scalable Build",
    description: "Struktur modular. Easy to grow.",
    color: "from-green-500 to-emerald-500",
    float: ["-bottom-2 -left-2", "-top-2 -right-2"],
    delay: 0.3
  },
  {
    id: 4,
    icon: <Wrench size={24} />,
    title: "Clear Process",
    description: "Tanpa drama, tanpa ribet.",
    color: "from-orange-500 to-red-500",
    float: ["-top-2 -left-2", "-bottom-2 -right-2"],
    delay: 0.4
  }
]

export const ASSURANCE_PROPS: AssuranceProp = {
  icon: <CheckCircle size={20} />,
  title: "No Surprises, Just Results",
  description: "Yang Anda dapatkan sesuai dengan yang dijanjikan. Tidak lebih, tidak kurang. Itu komitmen kami."
}
