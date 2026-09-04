"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { socialLinks } from "@/data/socialLinks";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/social-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Build Something Great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 mb-12"
        >
          <a
            href={socialLinks.email}
            className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors min-w-0"
          >
            <Mail size={20} className="shrink-0" />
            <span className="text-sm sm:text-lg break-all">{portfolio.personal.email}</span>
          </a>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Phone size={20} className="shrink-0" />
            <span className="text-sm sm:text-lg">{portfolio.personal.phone}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center space-x-6 mb-12"
        >
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          )}
          {socialLinks.leetcode && (
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="LeetCode"
            >
              <LeetcodeIcon size={24} />
            </a>
          )}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          href={socialLinks.resume}
          download="Resume.pdf"
          className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </motion.a>
      </div>
    </section>
  );
}
