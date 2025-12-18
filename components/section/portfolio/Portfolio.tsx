"use client";

import { Button } from "@/components/ui/button";
import { container, fadeInUp } from "@/lib/animations/fadeInUp";
import { motion } from "framer-motion";
import { PORTFOLIO_SECTION, PORTFOLIOS } from "./constants";
import { PortfolioCard } from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24"
      >
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col items-center space-y-3">
            <motion.h2 variants={fadeInUp}>
              {PORTFOLIO_SECTION.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              {PORTFOLIO_SECTION.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[...PORTFOLIOS].sort((a, b) => b.id - a.id).map(portfolio => (
            <motion.div 
              key={portfolio.id}
              variants={fadeInUp}
            >
              <PortfolioCard
                title={portfolio.title}
                category={portfolio.category}
                image={portfolio.image}
                alt={portfolio.alt}
                description={portfolio.description}
                tech={portfolio.tech}
                link={portfolio.link}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <Button variant="tealPrimary" className="hidden md:block">
            {PORTFOLIO_SECTION.ctaButton}
          </Button>
        </div> */}
      </motion.div>
    </section>
  );
}