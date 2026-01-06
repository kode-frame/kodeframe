"use client";

import { MotionButton } from "@/components/motion/motion-button";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedLines } from "./animations";
import { HERO_SECTION } from "./constants";

export default function Hero() {
  return (
    <section className="min-h-screen bg-tech-navy flex items-center justify-center relative overflow-hidden">
      <AnimatedLines />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              {HERO_SECTION.headline}
            </motion.h1>
      
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              {HERO_SECTION.subheadline}
            </motion.p>
      
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row gap-4 mt-8 items-center justify-center lg:justify-start"
            >
              <MotionButton size="lg" className="rounded-full">
                <Link href={HERO_SECTION.ctaPrimary.href}>
                  {HERO_SECTION.ctaPrimary.label}
                </Link>
              </MotionButton>
              <MotionButton variant="outline" size="lg" className="rounded-full">
                <Link href={HERO_SECTION.ctaSecondary.href}>
                  {HERO_SECTION.ctaSecondary.label}
                </Link>
              </MotionButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}