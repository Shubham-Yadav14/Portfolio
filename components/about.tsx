"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {portfolio.personal.summary}
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I specialize in building production-ready applications with a focus on scalability,
              performance, and user experience. My expertise spans across full-stack development,
              AI integration, and real-time systems.
            </p>
          </motion.div>

          {/* Right - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Core Focus Areas</h3>
            <div className="space-y-4">
              {portfolio.about.focus.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
