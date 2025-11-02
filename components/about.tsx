"use client"

import { motion } from "framer-motion"
import { FaCode, FaChess, FaGamepad, FaGlobe } from "react-icons/fa"

export default function About() {
  const interests = [
    { icon: FaCode, label: "Coding", color: "text-cyan-400" },
    { icon: FaChess, label: "Chess", color: "text-blue-400" },
    { icon: FaGamepad, label: "Gaming", color: "text-violet-400" },
    { icon: FaGlobe, label: "Tech for Good", color: "text-cyan-400" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            About Me 👨‍💻
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 glow-pulse">
              <img src="/futuristic-illustration-web-developer.jpg" alt="Uttkarsh Srivastava" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Computer Science student specializing in AI & ML, passionate about web development, creative design,
              and building meaningful digital experiences. I love turning ideas into reality with code.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                >
                  <interest.icon className={`text-2xl ${interest.color}`} />
                  <span className="font-medium">{interest.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent origin-center"
        />
      </div>
    </section>
  )
}
