import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { ProjectProps } from "./types";

interface ProjectModalProps {
  project: ProjectProps | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <motion.div 
            onClick={onClose} 
            className="absolute inset-0 bg-tech-navy/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }} 
            className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-20 z-50 bg-electric-teal/10 backdrop-blur-xl rounded-3xl border border-electric-teal/20 overflow-hidden flex flex-col max-w-450 mx-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-1">{project.year} • {project.category}</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-white/10 rounded-xl cursor-pointer transition-colors" 
                aria-label="Close modal"
              >
                <X className="text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-6xl mx-auto">
                {/* Video Preview */}
                <AspectRatio ratio={16 / 9} className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-800 to-gray-900 mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover"
                  />
                </AspectRatio>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-white mb-4">About this Project</h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>

                    <h4 className="text-2xl font-bold text-white mb-4">Challenge & Solution</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      This project presented unique challenges in creating an immersive user experience while maintaining performance across all devices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Key Features</h5>
                        <ul className="space-y-2">
                          {["Responsive Design", "Performance Optimized", "Accessible", "Modern UI"].map(feature => (
                            <li key={feature} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-current rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">My Role</h5>
                        <ul className="space-y-2">
                          {["Full-stack Development", "UI/UX Design", "Project Management", "Deployment"].map(role => (
                            <li key={role} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-current rounded-full mr-3" />
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          // <span key={index} className="px-3 py-2 bg-white/10 rounded-lg text-sm text-gray-300 border border-white/10">{tech.label}</span>
                          <Icon key={index} icon={`simple-icons:${tech.icon}`} color={tech.color} />
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Live Demo</h5>
                      <div className="space-y-3">
                        {project.liveUrl && (
                          <motion.a 
                            whileHover={{ scale: 1.02 }} 
                            whileFocus={{ scale: 1.02 }}
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between p-4 bg-electric-teal/10 rounded-xl border border-electric-teal/10 hover:border-electric-teal/20 transition-colors group"
                          >
                            <span className="text-white font-semibold">View Live Site</span>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-white" />
                          </motion.a>
                        )}
                        <motion.a 
                          whileHover={{ scale: 1.02 }} 
                          whileFocus={{ scale: 1.02 }}
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-between p-4 bg-electric-teal/10 rounded-xl border border-electric-teal/10 hover:border-electric-teal/20 transition-colors group"
                        >
                          <span className="text-white font-semibold">Source Code</span>
                          <Icon icon="simple-icons:github" className="text-gray-400 group-hover:text-white" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Mood */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Design Mood</h5>
                      <div className={`px-4 py-3 rounded-xl bg-linear-to-r ${project.color} text-white font-semibold text-center`}>
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}