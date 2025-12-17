"use client";

import { container, fadeInUp } from "@/lib/animations/fadeInUp";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  inView?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", center && "text-center mx-auto")}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        custom={0}
        variants={fadeInUp}
        className={cn("text-3xl md:text-4xl font-semibold text-tech-navy")}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          custom={1}
          variants={fadeInUp}
          className={cn("text-lg text-gray-600 max-w-3xl", center ? "mx-auto" : "mx-auto md:mx-0")}>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
