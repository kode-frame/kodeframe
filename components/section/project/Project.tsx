"use client";

import { motion } from "framer-motion";
import { PROJECT_SECTION, PROJECTS } from "./constants";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { ProjectProps } from "./types";
import { ProjectModal } from "./ProjectModal";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <section id="projects" className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-16">
            <div className="flex flex-col items-center space-y-3">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {PROJECT_SECTION.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {PROJECT_SECTION.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...PROJECTS].sort((a, b) => b.id - a.id).map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}