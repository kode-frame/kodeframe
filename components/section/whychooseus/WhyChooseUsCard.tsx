import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ValueProps } from "./types";

interface WhyChooseUsCardProps {
  value: ValueProps;
  isActive: boolean;
}

export function WhyChooseUsCard({ value, isActive }: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileInView={{ y: isActive ? [0, 5, 0] : [0, 0, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative h-full"
    >
      <Card className="h-full bg-electric-teal/10 rounded-3xl border border-electric-teal/20">
        <CardHeader>
          <div className={`shrink-0 w-12 h-12 bg-electric-teal/10 text-electric-teal rounded-lg flex items-center justify-center group-hover:bg-linear-to-br ${value.color} group-hover:text-white transition-all duration-300`}>
            {value.icon}
          </div>
          <CardTitle>
            <h3 className="text-2xl">
              {value.title}
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-soft-gray/50 text-base md:text-lg leading-relaxed line-clamp-2">
          {value.description}
        </CardContent>
      </Card>

      <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
    </motion.div>
  )
}