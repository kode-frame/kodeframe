"use client";

import { Logo } from "@/components/ui/logo";
import { Navbar } from "@/components/ui/navbar";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useScroll } from "@/hooks/useScroll";
import { fadeIn } from "@/lib/animations/animate";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const isScrolled = useScroll();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-tech-navy md:bg-tech-navy/85 md:backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[clamp(14px,1vw,18px)]">
            <Navbar />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-soft-grey focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </motion.header>
  );
}
