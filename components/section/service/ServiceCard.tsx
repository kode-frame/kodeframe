import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ServiceProps } from "./types";
import { StackState } from "./stack";

interface ServiceCardProps {
  service: ServiceProps;
  motionProps: StackState;
  style?: React.CSSProperties;
}

export function ServiceCard({ service, motionProps, style }: ServiceCardProps) {
  // Extract only the animation-related properties
  const { blur, ...animationProps } = motionProps;
  
  return (
    <motion.div
      initial={false}
      animate={animationProps}
      style={style}
      transition={{ 
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      }}
      className="absolute w-65 lg:w-100 aspect-4/3 bg-tech-navy rounded-xl border border-white/20 shadow-2xl p-4 lg:p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Card Content */}
      <div className="space-y-4">
        {/* Header Badge */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-soft-grey/5 border border-soft-grey/10 w-fit`}>
            <Sparkles className={`w-3.5 h-3.5 ${service.color}`} />
            <span className="text-soft-grey/90 text-sm font-medium">{service.badge}</span>
          </div>
        </div>

        {/* Main Title */}
        <div>
          <div className="flex items-center gap-2 mb-1 lg:mb-4">
            <div className={`p-1.5 rounded-lg bg-white/5 ${service.color}`}>
              {service.icon}
            </div>
            <div className="text-xl lg:text-2xl font-bold text-soft-grey">
              {service.title}
            </div>
          </div>
          <div className="text-soft-grey/50 leading-relaxed line-clamp-2">
            {service.description}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-soft-grey/5 flex items-center justify-between">
        <div></div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-soft-grey/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-soft-grey/20" />
          <div className="w-8 h-1.5 rounded-full bg-soft-grey/20" />
          </div>
        </div>
      
      {/* Glass gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  )
}
