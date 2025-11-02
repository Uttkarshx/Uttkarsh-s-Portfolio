"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiC } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "C", icon: SiC, color: "text-slate-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
    { name: "Firebase", icon: FaDatabase, color: "text-amber-400" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Skills ⚙️
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-lg border border-cyan-400/30 neon-border-hover group"
            >
              <skill.icon className={`text-4xl ${skill.color} group-hover:neon-glow-text`} />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
