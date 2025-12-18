"use client";

import { container, fadeInUp } from "@/lib/animations/fadeInUp";
import { motion } from "framer-motion";
import { SERVICE_SECTION, SERVICES } from "./constants";
import { ServiceStack } from "./ServiceStack";
import { useStack } from "./useStack"

export default function Service() {
  const activeIndex = useStack(SERVICES.length);

  return (
    <section id="services" className="bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="space-y-4">
            <motion.h2 variants={fadeInUp}>
              {SERVICE_SECTION.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="max-w-lg mb-8"
            >
              {SERVICE_SECTION.subtitle}
            </motion.p>
          </div>

          {/* Right Column: Stacked Cards */}
          <motion.div 
            variants={fadeInUp}
            className="relative h-50 md:h-40 lg:h-70 flex justify-center"
          >
            <ServiceStack
              services={SERVICES}
              activeIndex={activeIndex}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}