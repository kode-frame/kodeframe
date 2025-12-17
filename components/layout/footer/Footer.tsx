"use client";

import { Logo } from "@/components/ui/logo";
import { CONTACT_LIST } from "@/constants/contact";
import Link from "next/link";
import { BOTTOM_LINK, FOOTER_LINK, FOOTER_SECTION, SOCIAL_ICON } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-tech-navy text-soft-grey">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Logo />

            {/* Tagline */}
            <div className="text-soft-grey mb-6 max-w-md text-sm leading-relaxed">
              {FOOTER_SECTION.tagline}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {CONTACT_LIST.map((list, index) => (
                <div key={index} className="flex items-center space-x-3 text-soft-grey text-sm">
                  {list.icon}
                  <span>{list.label}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_ICON.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-soft-grey rounded-lg flex items-center justify-center text-tech-navy hover:text-soft-grey hover:bg-electric-teal transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {FOOTER_LINK.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-footer">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-grey hover:text-electric-teal transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-soft-grey">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-soft-grey text-sm">
              {FOOTER_SECTION.copy}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              {BOTTOM_LINK.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-soft-grey hover:text-electric-teal transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
