import { motion } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { ProjectProps } from "./types"

type ProjectItemProps = {
  project: ProjectProps
  index: number
  onSelect: (project: ProjectProps) => void
}

export function ProjectItem({ project, index, onSelect }: ProjectItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
    >
      <ProjectCard project={project} />
    </motion.div>
  )
}