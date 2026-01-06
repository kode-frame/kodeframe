"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SERVICE_SECTION, SERVICES } from "./constants";
import { ServiceCard } from "./ServiceCard";
import { Sparkles } from "lucide-react";

export default function Service() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="relative w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {SERVICE_SECTION.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {SERVICE_SECTION.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity:0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <ServiceCard service={service} />

              <AnimatePresence>
                {hoveredService === service.id && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="hidden lg:block absolute -top-3 -right-3 pointer-events-none">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <Sparkles className={`w-4 h-4 ${service.color}`} />
                      </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="hidden lg:block absolute -bottom-2 -left-2 pointer-events-none">
                      <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <Sparkles className={`w-3 h-3 ${service.color}`} />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}