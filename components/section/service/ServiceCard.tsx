import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { ServiceProps } from "./types";

interface ServiceCardProps {
  service: ServiceProps;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full bg-electric-teal/10 rounded-3xl border border-electric-teal/20 flex flex-col justify-between overflow-hidden">
      <CardHeader>
        <Badge 
          variant="outline"
          className="flex items-center gap-1.5 px-2 py-1 bg-soft-gray/5 border border-soft-gray/10"
        >
          <Sparkles className={`w-3.5 h-3.5 ${service.color}`} />
          <span className="text-soft-gray/90 text-sm font-medium">{service.badge}</span>
        </Badge>
        <CardTitle className="flex items-center gap-2 mb-1 lg:mb-2">
          <div className={`p-2 rounded-lg bg-electric-teal/5 ${service.color}`}>
            {service.icon}
          </div>
          <h3 className="text-2xl">
            {service.title}
          </h3>
        </CardTitle>
        <CardDescription className="text-soft-gray/50 text-base md:text-lg leading-relaxed line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="border-t border-electric-teal/5 flex items-center justify-between">
        <div></div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-electric-teal/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-electric-teal/20" />
          <div className="w-8 h-1.5 rounded-full bg-electric-teal/20" />
        </div>
      </CardFooter>
    </Card>
  )
}
