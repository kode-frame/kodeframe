"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "px-6 py-3 rounded-xl shadow-lg w-full sm:w-auto",
  {
    variants: {
      variant: {
        tealPrimary: "bg-electric-teal text-white font-medium hover:shadow-lg",
        tealSecondary: "border border-electric-teal font-medium text-electric-teal hover:bg-electric-teal/10",
        navyPrimary: "bg-tech-navy text-white font-medium hover:shadow-tech-navy/30",
        navySecondary: "border border-white text-white font-medium hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "tealPrimary",
    },
  }
);

export interface ButtonProps 
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({
  children, 
  variant,
  className,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      className={cn(buttonVariants({ variant, className }))}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export { buttonVariants };
