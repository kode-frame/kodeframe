"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function MotionButton(props: React.ComponentProps<typeof Button>) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <Button {...props} />
    </motion.div>
  );
}
