"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { SERVICE_SECTION, SERVICES } from "./service/constants";
import { container, fadeInUp } from "@/lib/animations/fadeInUp";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the top card (last index)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000); // Auto-cycle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reorder services based on active index to simulate the infinite stack
  // We want the activeIndex to be the "top" card.
  
  return (
    <section id="services" className="bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="tracking-tight">
              {SERVICE_SECTION.title}
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="leading-relaxed max-w-lg mb-8">
              {SERVICE_SECTION.subtitle}
            </motion.p>
          </div>

          {/* Right Column: Stacked Cards (Dark Mode Style) */}
          <div className="w-full h-70 lg:h-100 flex items-center justify-center lg:justify-end perspective-1000">
            <motion.div 
              variants={fadeInUp}
              className="relative max-w-md w-full h-50 flex items-center justify-center"
            >
              <AnimatePresence mode="popLayout">
                {SERVICES.map((service, i) => {
                  // Calculate relative index for circular display
                  // activeIndex is the front card
                  
                  // We want to show 3 cards. 
                  // Let's just hardcode the logic to match the screenshot "stack" feel
                  // The "active" one is front. The previous ones are behind.
                  
                  // Simple distance logic
                  const offset = (i - activeIndex + SERVICES.length) % SERVICES.length;
                  
                  // We only want to show 3 cards visually effectively? 
                  // Let's use a simpler stack approach where we map specific positions based on offset
                  
                  // 0 = Front
                  // 1 = Middle
                  // 2 = Back
                  
                  // If we have more cards, we'd hide the others. Since we have 3, it's perfect.
                  // Wait, offset 0 is active. offset 1 is "next" (behind?). offset 2 is "prev" (behind further?)
                  
                  // In the screenshot:
                  // Front card: "New"
                  // Middle card (behind left): "Popular"
                  // Back card (behind further left): "Featured"
                  
                  // So the stack goes back-left.
                  
                  let zIndex = 0;
                  let x = 0;
                  let y = 0;
                  let scale = 1;
                  let opacity = 1;
                  let blur = 0;

                  if (offset === 0) {
                    // Front
                    zIndex = 30;
                    x = 40; // Shifted right slightly to match screenshot composition
                    y = 0;
                    scale = 1;
                    opacity = 1;
                  } else if (offset === 1) {
                    // Middle (Behind) - "Next" in array, but visually "Behind"
                    zIndex = 20;
                    x = 0;
                    y = -20;
                    scale = 0.95;
                    opacity = 0.6;
                    blur = 1;
                  } else if (offset === 2) {
                    // Back (Furthest)
                    zIndex = 10;
                    x = -40;
                    y = -40;
                    scale = 0.9;
                    opacity = 0.4;
                    blur = 2;
                  }

                  return (
                    <motion.div
                      key={service.id}
                      initial={false}
                      animate={{ 
                        zIndex,
                        x,
                        y,
                        scale,
                        opacity,
                        filter: `blur(${blur}px)`
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="absolute w-70 lg:w-100 aspect-4/3 bg-tech-navy rounded-xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                      }}
                    >

                      {/* Card Content */}
                      <div className="space-y-4">
                        {/* Header Badge */}
                        <div className="flex items-center gap-2">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-soft-grey/5 border border-soft-grey/10 w-fit`}>
                            <Sparkles className={`w-3.5 h-3.5 ${service.color}`} />
                            <span className="text-soft-grey/90 text-sm font-medium">{service.badge}</span>
                          </div>
                        </div>

                        {/* Main Title */}
                        <div>
                          <div className="flex items-center gap-2 mb-1 lg:mb-4">
                            <div className={`p-1.5 rounded-lg bg-white/5 ${service.color}`}>
                              {service.icon}
                            </div>
                            <div className="text-xl lg:text-2xl font-bold text-soft-grey">
                              {service.title}
                            </div>
                          </div>
                          <div className="text-soft-grey/50 leading-relaxed line-clamp-2">
                            {service.description}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-soft-grey/5 flex items-center justify-between">
                        <div></div>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-soft-grey/20" />
                          <div className="w-1.5 h-1.5 rounded-full bg-soft-grey/20" />
                          <div className="w-8 h-1.5 rounded-full bg-soft-grey/20" />
                          </div>
                        </div>
                      
                      {/* Glass gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}