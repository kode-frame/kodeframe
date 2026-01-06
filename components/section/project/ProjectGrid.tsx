import { motion } from "framer-motion"
import { ProjectItem } from "./ProjectItem";
import { ProjectProps } from "./types"

type ProjectGridProps = {
  projects: ProjectProps[];
  onSelect: (project: ProjectProps) => void
}

export function ProjectGrid({ projects, onSelect }: ProjectGridProps) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...projects].sort((a, b) => b.id - a.id).map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </motion.div>
  )
}