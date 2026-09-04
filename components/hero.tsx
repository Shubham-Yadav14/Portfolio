"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { socialLinks } from "@/data/socialLinks";
import { useSnackbar } from "@/contexts/snackbar-context";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/social-icons";

const techStack = ["Next.js","React.js", "TypeScript", "Node.js","Express.js","Golang","FastApi", "PostgreSQL", "MongoDB"];

export default function Hero() {
  const { showSnackbar } = useSnackbar();
  const emailAddress = "shubhamrao14102002@gmail.com";

  const handleEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    showSnackbar("Email address copied to clipboard!", "success");
  };
  return (
    <section id="home" className="min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white break-words"
          >
            {portfolio.personal.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-400 font-medium"
          >
            {portfolio.personal.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl"
          >
            {portfolio.personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={socialLinks.resume}
              download="Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors font-medium"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center space-x-4 sm:space-x-6 pt-2 sm:pt-4"
          >
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="GitHub"
                onClick={() => showSnackbar("Opening GitHub profile...", "info")}
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
                onClick={() => showSnackbar("Opening LinkedIn profile...", "info")}
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
                onClick={() => showSnackbar("Opening LeetCode profile...", "info")}
              >
                <LeetcodeIcon size={24} />
              </a>
            )}
            <button
              onClick={handleEmailClick}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Copy email"
              title="Copy email address"
            >
              <Mail size={24} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full min-w-0"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 px-4 py-3 bg-black/50 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400 font-mono">terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-6 font-mono text-sm overflow-x-auto">
              <div className="text-green-400 mb-2">$ tech-stack</div>
              <div className="space-y-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-gray-300"
                  >
                    <span className="text-blue-400">→</span> {tech}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="mt-4 text-green-400"
              >
                <span className="animate-pulse">_</span>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
