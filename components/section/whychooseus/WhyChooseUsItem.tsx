import { motion } from "framer-motion";
import { ValueProps } from "./types";
import { WhyChooseUsCard } from "./WhyChooseUsCard";

interface WhyChooseUsItemProps {
  value: ValueProps;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export function WhyChooseUsItem({ value, index, activeIndex, setActiveIndex }: WhyChooseUsItemProps) {
  const isActive = activeIndex === index;
  const isInactive = activeIndex !== null && activeIndex !== index;

  return (
    <motion.div
      key={index}
      initial={{ opacity:0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      className="relative group"
    >
      <motion.div
        animate={{
          scale: isActive ? 1.05 : 1,
          opacity: isInactive ? 0.5 : 1,
          x: isInactive ? value.position.x : 0,
          y: isInactive ? value.position.y : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative h-full"
      >
        <WhyChooseUsCard value={value} isActive={isActive} />
      </motion.div>
    </motion.div>
  )
}