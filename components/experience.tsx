"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Briefcase, Calendar, Zap } from "lucide-react";
import { useState } from "react";

// Calculate total experience
const calculateTotalExperience = () => {
  const experiences = portfolio.experience;
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const [startStr, endStr] = exp.period.split(" – ");
    const startDate = parseDate(startStr);
    const endDate = endStr === "Present" ? new Date() : parseDate(endStr);
    
    if (startDate && endDate) {
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (endDate.getMonth() - startDate.getMonth());
      totalMonths += Math.max(0, months);
    }
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
};

const parseDate = (dateStr: string) => {
  const months: Record<string, number> = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const [monthStr, yearStr] = dateStr.split(' ');
  const month = months[monthStr];
  const year = parseInt(yearStr);
  
  if (month !== undefined && !isNaN(year)) {
    return new Date(year, month);
  }
  return null;
};

export default function Experience() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const totalExperience = calculateTotalExperience();

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My journey through the tech industry, building innovative solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {portfolio.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredExp(index)}
              onHoverEnd={() => setHoveredExp(null)}
              className="relative"
            >
              {/* Card */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500"
                  initial={false}
                  animate={{
                    opacity: hoveredExp === index ? 1 : 0,
                  }}
                />

                {/* Content */}
                <div className="relative p-5 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3 pr-16 sm:pr-24">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center space-x-3 mb-3">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <Briefcase size={24} className="text-blue-400" />
                        </motion.div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors break-words">
                            {exp.company}
                          </h3>
                          <p className="text-blue-400 font-medium">{exp.position}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm md:mt-0">
                      <div className="flex items-center space-x-2 min-w-0">
                        <Calendar size={16} className="shrink-0" />
                        <span className="break-words">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Zap size={16} className="mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20"
                  whileHover={{ scale: 1.1 }}
                >
                  {index === 0 ? "Current" : "Previous"}
                </motion.div>
              </motion.div>

              {/* Connector Line */}
              {index < portfolio.experience.length - 1 && (
                <motion.div
                  className="absolute left-8 top-full w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
