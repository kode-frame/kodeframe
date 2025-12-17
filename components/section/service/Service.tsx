"use client";

import { container, fadeInUp } from "@/lib/animations/fadeInUp";
import { motion } from "framer-motion";
import { SERVICE_SECTION, SERVICES } from "./constants";
import { ServiceCard } from "./ServiceCard";

export default function Service() {
  return (
    <section id="services" className="bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24"
      >
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="space-y-3 text-center mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-tech-navy"
            >
              {SERVICE_SECTION.title}
            </motion.h2>
            {SERVICE_SECTION.subtitle && (
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0"
              >
                {SERVICE_SECTION.subtitle}
              </motion.p>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}