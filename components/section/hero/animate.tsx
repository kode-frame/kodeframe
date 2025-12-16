"use client";

import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";

interface AnimatedLinesProps {
  horizontalCount?: number;
  verticalCount?: number;
}

export function AnimatedLines({
  horizontalCount = 8,
  verticalCount = 6
}: AnimatedLinesProps): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Horizontal Lines */}
      {Array.from({ length: horizontalCount }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px w-full bg-linear-to-r from-transparent via-electric-teal to-transparent"
          style={{ top: `${(i + 1) * 12}%` }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical Lines */}
      {Array.from({ length: verticalCount }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px h-full bg-linear-to-b from-transparent via-electric-teal to-transparent"
          style={{ left: `${(i + 1) * 15}%` }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8 + i * 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}
