"use client";

import { Button } from "@/components/ui/button";
import { container, fadeInUp } from "@/lib/animations/fadeInUp";
import { motion } from "framer-motion";
import { AnimatedLines } from "./animate";
import { HERO_SECTION } from "./constants";

export default function Hero() {
  return (
    <section className="min-h-screen bg-tech-navy flex items-center justify-center relative overflow-hidden">
      <AnimatedLines />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-hero mb-4 md:mb-6"
            >
              {HERO_SECTION.headline}
            </motion.h1>
      
            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 text-hero"
            >
              {HERO_SECTION.subheadline}
            </motion.p>
      
            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center"
            >
              <Button variant="tealPrimary">
                {HERO_SECTION.ctaPrimary}
              </Button>
              <Button variant="tealSecondary">
                {HERO_SECTION.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}