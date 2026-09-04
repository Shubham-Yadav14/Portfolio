"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-5 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
              <GraduationCap className="text-blue-400" size={32} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 break-words">
                {portfolio.education.university}
              </h3>
              <p className="text-blue-400 font-medium mb-2">{portfolio.education.degree}</p>
              <p className="text-gray-500 mb-4">{portfolio.education.period}</p>
              <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                CGPA: {portfolio.education.cgpa}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
