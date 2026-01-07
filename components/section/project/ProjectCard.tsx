import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectProps } from "./types";

interface ProjectCardProps {
  project: ProjectProps;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative pt-0 h-full bg-electric-teal/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-500">
      <AspectRatio ratio={16 / 9} className="relative w-full h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={768}
          height={432}
          loading="lazy"
          className="object-cover"
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
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1}}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: index * 0.1 }}
              >
                <Icon key={index} icon={`simple-icons:${tech.icon}`} color={tech.color} />
              </motion.div>
            ))}
          </div>
        </CardDescription>
      </CardContent>
      
      <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
    </Card>
  )
}
