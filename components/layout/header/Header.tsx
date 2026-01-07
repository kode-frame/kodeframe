"use client";

import { Logo } from "@/components/ui/logo";
import { NavBar } from "@/components/ui/navbar";
import { useOverlay } from "@/hooks/useOverlay";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const isScrolled = useHeaderScroll();
  const mobileMenu = useOverlay();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="fixed w-full z-50"
    >
      <div className={`relative mx-auto top-0 p-4 transition-all duration-700 ${isScrolled 
        ? "max-w-6xl lg:top-6 lg:px-6 lg:py-2.5 bg-tech-navy/50 lg:bg-electric-teal/10 backdrop-blur-md lg:rounded-full" 
        : "max-w-7xl bg-transparent"
      }`}>
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 text-[clamp(14px,1vw,18px)]">
            <NavBar />
          </nav>

          <button
            onClick={mobileMenu.toggle}
            className="lg:hidden text-soft-gray focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenu.isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={mobileMenu.isOpen} 
        onClose={mobileMenu.close} 
      />
    </motion.header>
  );
}
