"use client";

import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations/animate";
import { motion } from "framer-motion";
import { AnimatedLines } from "./animate";
import { HERO_SECTION } from "./constant";

export default function Hero() {
  return (
    <section className="min-h-screen bg-tech-navy flex items-center justify-center relative overflow-hidden">
      <AnimatedLines />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-hero mb-4 md:mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            {HERO_SECTION.headline}
          </motion.h1>
    
          {/* Subheadline */}
          <motion.p
            className="mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 text-hero"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            {HERO_SECTION.subheadline}
          </motion.p>
    
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            <Button variant="tealPrimary">
              {HERO_SECTION.ctaPrimary}
            </Button>
            <Button variant="tealSecondary">
              {HERO_SECTION.ctaSecondary}
            </Button>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}