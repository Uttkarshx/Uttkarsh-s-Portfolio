"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projectsData = [
 
  {
    id: 1,
    title: "Beyond Classes NGO Website",
    description: "An accessibility-focused NGO website built with empathy and modern design.",
    image: "/ngo-website-design.jpg",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Chess Arena Web App",
    description: "An online multiplayer chess platform for college players to compete and track stats.",
    image: "/chess-game-interface.jpg",
    live: "#",
    github: "#",
  },
  {
  id: 3,
  title: "AI-Based Pneumonia Detection",
  description:
    "A deep learning project that classifies chest X-ray images as normal or pneumonia-affected using CNN with real-time predictions and accuracy metrics.",
  image: "/chest-xray-ai-medical-imaging-deep-learning.jpg",
  live: "https://pneumonia-detection-brown.vercel.app/",
  github: "https://github.com/Uttkarshx/Pneumonia-Detection-",
},

]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects 💡
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-lg overflow-hidden border border-cyan-400/30 neon-border-hover"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === project.id ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>

                <div className="flex gap-3">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 rounded bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 font-semibold text-center text-sm hover:bg-cyan-500/30 transition-colors"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 rounded bg-violet-500/20 border border-violet-400/50 text-violet-400 font-semibold text-center text-sm hover:bg-violet-500/30 transition-colors"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/50 text-foreground font-semibold hover:border-cyan-400 transition-colors"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
