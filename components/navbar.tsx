"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    setActiveLink(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-cyan-glow/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Uttkarsh
        </motion.div>

        <div className="hidden md:flex gap-1">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              {activeLink === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </motion.nav>
  )
}
