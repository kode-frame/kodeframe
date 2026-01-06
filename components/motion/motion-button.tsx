"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export function MotionButton(props: React.ComponentProps<typeof Button>) {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      // onMouseEnter={() => setHoveredService(true)}
      // onMouseLeave={() => setHoveredService(null)}
    >
      <Button {...props} />

      {/* <AnimatePresence>
        {hoveredService && (
          <>
            <div className="hidden md:block absolute top-0 right-0 pointer-events-none">
              <motion.div initial={{ opacity: 0, x: 0, y: 0 }} animate={{ opacity: 1, x:8, y: -12 }} exit={{ opacity: 0, x: 0, y: 0 }}>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Sparkles size={12} />
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 0, y: 0 }} animate={{ opacity: 1, x:18, y: -12 }} exit={{ opacity: 0, x: 0, y: 0 }} transition={{ delay: 0.03 }}>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ delay: 0.3, duration: 2, repeat: Infinity }}>
                  <Sparkles size={8} />
                </motion.div>
              </motion.div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 pointer-events-none">
              <motion.div initial={{ opacity: 0, x: 0, y: 0 }} animate={{ opacity: 1, x:-8, y: 12 }} exit={{ opacity: 0, x: 0, y: 0 }}>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Sparkles size={10} />
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence> */}
    </motion.div>
  )
}