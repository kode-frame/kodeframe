"use client";

import { Logo } from "@/components/ui/logo";
import { CONTACT_LIST } from "@/constants/contact";
import { Icon } from "@iconify/react";
import { motion, spring } from "framer-motion";
import Link from "next/link";
import { BOTTOM_LINK, FOOTER_LINK, FOOTER_SECTION, SOCIAL_ICON } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-tech-navy text-soft-gray">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
              <div className="text-soft-gray mb-6 max-w-md text-sm leading-relaxed">
                {FOOTER_SECTION.tagline}
              </div>
            </motion.div>

            <div className="space-y-3 mb-6">
              {CONTACT_LIST.map((list, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-soft-gray text-sm"
                >
                  <Icon icon={`simple-icons:${list.icon}`} />
                  <span>{list.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4">
              {SOCIAL_ICON.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: spring, stiffness: 200, delay: index * 0.1   }}
                >
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-soft-gray rounded-lg flex items-center justify-center text-tech-navy hover:text-soft-gray hover:bg-electric-teal transition-all duration-300"
                  >
                    <Icon icon={`simple-icons:${social.icon}`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {FOOTER_LINK.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="footer mb-4">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.div 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + linkIndex * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray hover:text-electric-teal transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-soft-gray">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-soft-gray text-sm">
              {FOOTER_SECTION.copy}
            </div>

            <div className="flex space-x-6 text-sm">
              {BOTTOM_LINK.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-soft-gray hover:text-electric-teal transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
