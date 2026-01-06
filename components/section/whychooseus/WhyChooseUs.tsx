"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ASSURANCE_PROPS, VALUE_PROPS, WHYCHOOSEUS_SECTION } from "./constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="why-choose" className="relative w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {WHYCHOOSEUS_SECTION.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {WHYCHOOSEUS_SECTION.subtitle}
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {VALUE_PROPS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: item.delay ?? index * 0.1, type: 'spring', stiffness: 100 }}
              className="group relative"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                whileInView={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Card className="h-full bg-electric-teal/10 rounded-3xl border border-electric-teal/20">
                  <CardHeader>
                    <div className={`shrink-0 w-12 h-12 bg-electric-teal/10 text-electric-teal rounded-lg flex items-center justify-center group-hover:bg-linear-to-br ${item.color} group-hover:text-white transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <CardTitle>
                      <h3 className="text-2xl">
                        {item.title}
                      </h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-soft-gray/50 text-base md:text-lg leading-relaxed line-clamp-2">
                    {item.description}
                  </CardContent>
                </Card>

                <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                <AnimatePresence>
                  {hovered === item.id && (
                    <>
                      {item.float.map((list, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className={`hidden md:block absolute ${list} w-3 h-3 bg-linear-to-br ${item.color} rounded-full pointer-events-none`} />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="text-center mt-16 border border-electric-teal/20 bg-transparent rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-soft-gray mb-4">
              {ASSURANCE_PROPS.icon}
              <p>
                {ASSURANCE_PROPS.title}
              </p>
            </div>
            <p className="text-graphite-black max-w-2xl mx-auto">
              {ASSURANCE_PROPS.description}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
