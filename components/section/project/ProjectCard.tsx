import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectProps } from "./types";

interface ProjectCardProps {
  project: ProjectProps;
  onSelect: (project: ProjectProps) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card 
      onClick={() => onSelect(project)}
      className="group relative pt-0 h-full bg-electric-teal/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-500"
    >
      <AspectRatio ratio={16 / 9} className="relative w-full h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
          priority
        />
      </AspectRatio>
      <CardHeader>
        <Badge className="px-3 py-1 mb-2 rounded-full text-xs font-semibold backdrop-blur-sm border bg-soft-gray/10 text-soft-gray">
          {project.category}
        </Badge>
        <CardTitle className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-soft-gray transition-all duration-300">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400">{project.year}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <div className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</div>
        </CardDescription>
      </CardContent>
      
      <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
    </Card>
  )
}
