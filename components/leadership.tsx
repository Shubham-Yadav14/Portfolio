"use client";

import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12"
        >
          Leadership & Activities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-5 sm:p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
                  {index === 0 ? (
                    <Award className="text-blue-400" size={24} />
                  ) : (
                    <Users className="text-blue-400" size={24} />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.role}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
