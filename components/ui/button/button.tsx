"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export function Button({
  className, variant, size, ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      {...props}
    />
  );
}
