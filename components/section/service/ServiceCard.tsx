import { Card } from "@/components/ui/card";
import { ServiceProps } from "./types";

export function ServiceCard({ icon, title, description }: ServiceProps) {
  return (
    <Card>
      {icon && 
        <div className="mb-6 p-3 w-16 h-16 rounded-xl bg-tech-navy text-electric-teal group-hover:bg-electric-teal group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
          {icon}
        </div>
      }
      <h3 className="text-2xl font-semibold text-tech-navy mb-4">
        {title}
      </h3>
      <p className="text-graphite-black leading-relaxed grow">
        {description}
      </p>
      <div className="mt-6 w-12 h-1 bg-electric-teal/30 rounded-full group-hover:bg-electric-teal transition-all duration-300 shrink-0" />
    </Card>
  )
}
