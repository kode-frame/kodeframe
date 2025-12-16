"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <motion.div 
            className="fixed inset-0 bg-tech-navy/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-tech-navy shadow-lg z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-soft-grey focus:outline-none z-60"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6 pt-16 text-xl">
          <Navbar />
          <Button variant="tealPrimary" onClick={onClose} className="mt-8">
            Mulai Proyek
          </Button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
