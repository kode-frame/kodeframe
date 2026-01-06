import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { ServiceProps } from "./types";

interface ServiceItemProps {
  service: ServiceProps;
  index: number;
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity:0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <ServiceCard service={service} />

      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="hidden lg:block absolute -top-3 -right-3 pointer-events-none">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className={`w-4 h-4 ${service.color}`} />
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="hidden lg:block absolute -bottom-2 -left-2 pointer-events-none">
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className={`w-3 h-3 ${service.color}`} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}