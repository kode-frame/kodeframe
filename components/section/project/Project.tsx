"use client";

import { useOverlay } from "@/hooks/useOverlay";
import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECT_SECTION, PROJECTS } from "./constants";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import { ProjectProps } from "./types";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const overlay = useOverlay();

  return (
    <section id="projects" className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {PROJECT_SECTION.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {PROJECT_SECTION.subtitle}
          </p>
        </motion.div>

        <ProjectGrid 
          projects={PROJECTS}
          onSelect={(project) => {
            setSelectedProject(project);
            overlay.open();
          }}
        />

        <ProjectModal
          project={overlay.isOpen ? selectedProject : null}
          onClose={() => {
            setSelectedProject(null);
            overlay.close();
          }}
        />
      </div>
    </section>
  );
}