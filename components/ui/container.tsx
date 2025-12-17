import React, { JSX } from "react";
import { cn } from "@/lib/utils/cn";
import { motion, HTMLMotionProps } from "framer-motion";

interface ContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "default" | "small" | "large" | "full";
  withPaddingY?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
  withPaddingY = true,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl px-4 sm:px-6 lg:px-8",
    small: "max-w-4xl px-4 sm:px-6 lg:px-8",
    large: "max-w-7xl px-4 sm:px-6 lg:px-12",
    full: "max-w-full px-4 sm:px-6"
  };

  return (
    <motion.div 
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        withPaddingY && "py-12 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
