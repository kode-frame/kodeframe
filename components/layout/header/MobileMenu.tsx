import { NAV_ITEMS } from "@/constants/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-tech-navy/95 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-4 text-soft-gray focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <nav className="text-center space-y-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  onClick={onClose} 
                  className="text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
