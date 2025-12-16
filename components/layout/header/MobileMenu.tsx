"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { container, slideInRight } from "@/lib/animations/slideInRight";

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
          exit="hidden"
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <motion.div 
            className="fixed inset-0 bg-tech-navy/50"
            onClick={onClose}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-tech-navy shadow-lg z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
