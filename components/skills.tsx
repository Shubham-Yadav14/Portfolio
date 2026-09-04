"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { skillLogos } from "@/data/skillLogos";
import { useSnackbar } from "@/contexts/snackbar-context";
import { useState } from "react";

// Flatten all skills into a single array
const allSkills = [
  ...portfolio.skills.languages,
  ...portfolio.skills.frontend,
  ...portfolio.skills.backend,
  ...portfolio.skills.databases,
  ...portfolio.skills.aiCloud,
  ...portfolio.skills.toolsSecurity,
].filter((skill, index, self) => self.indexOf(skill) === index); // Remove duplicates

// Assign different sizes for visual variety
const skillSizes = allSkills.map((_, index) => {
  if (index % 5 === 0) return "large"; // Every 5th skill is large
  if (index % 3 === 0) return "medium"; // Every 3rd skill is medium
  return "small"; // Rest are small
});

const sizeClasses = {
  large: "col-span-1 sm:col-span-2",
  medium: "col-span-1",
  small: "col-span-1",
};

const cardSizes = {
  large: "min-h-[8rem] sm:h-40",
  medium: "min-h-[8rem] sm:h-40",
  small: "min-h-[8rem] sm:h-32",
};

export default function Skills() {
  const { showSnackbar } = useSnackbar();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    showSnackbar(`${skill} - ${getSkillDescription(skill)}`, "info", 2000);
  };

  const getSkillDescription = (skill: string): string => {
    const descriptions: Record<string, string> = {
      "TypeScript": "Type-safe JavaScript",
      "JavaScript": "Dynamic web language",
      "Python": "Versatile programming",
      "Java": "Enterprise development",
      "C++": "High-performance systems",
      "C": "Low-level programming",
      "SQL": "Database querying",
      "PHP": "Server-side scripting",
      "Go": "Concurrent systems",
      "Next.js": "React framework",
      "React.js": "UI library",
      "React Native": "Mobile development",
      "Tailwind CSS": "Utility-first CSS",
      "NativeWind CSS": "Tailwind for React Native",
      "HTML": "Web structure",
      "CSS": "Web styling",
      "Node.js": "JavaScript runtime",
      "Express.js": "Web framework",
      "FastAPI": "Python web framework",
      "Socket.IO": "Real-time communication",
      "PostgreSQL": "Relational database",
      "MongoDB": "NoSQL database",
      "AWS S3": "Cloud storage",
      "Docker": "Containerization",
      "Git": "Version control",
      "GitHub": "Code hosting",
      "OAuth": "Authentication",
      "JWT": "Token-based auth",
      "LaTeX": "Document preparation",
    };
    return descriptions[skill] || "Technical skill";
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => handleSkillClick(skill)}
              className={`${sizeClasses[skillSizes[index] as keyof typeof sizeClasses]} relative group cursor-pointer`}
            >
              <motion.div
                className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-3 sm:p-4 ${cardSizes[skillSizes[index] as keyof typeof cardSizes]} hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col items-center justify-center`}
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)"
                }}
              >
                {/* Logo */}
                {skillLogos[skill] ? (
                  <motion.img
                    src={skillLogos[skill]}
                    alt={skill}
                    className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                ) : (
                  <motion.div
                    className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-blue-400 text-2xl md:text-3xl font-bold">
                      {skill.charAt(0)}
                    </span>
                  </motion.div>
                )}

                {/* Skill Name */}
                <motion.span
                  className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white text-center font-medium px-1 break-words"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>

                {/* Floating Tooltip */}
                {hoveredSkill === skill && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-2 rounded-full z-20 shadow-lg max-w-[min(16rem,calc(100vw-2rem))] text-center pointer-events-none hidden sm:block"
                  >
                    {getSkillDescription(skill)}
                  </motion.div>
                )}

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredSkill === skill ? 1 : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border border-white/10 text-sm sm:text-base">
            <span className="text-2xl">🚀</span>
            <span className="text-gray-300">
              <span className="text-blue-400 font-bold">{allSkills.length}</span> Technologies Mastered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
