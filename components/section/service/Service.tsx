"use client";

import { motion } from "framer-motion";
import { SERVICE_SECTION, SERVICES } from "./constants";
import { ServiceItem } from "./ServiceItem";

export default function Service() {
  return (
    <section id="services" className="relative w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-50">
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
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}