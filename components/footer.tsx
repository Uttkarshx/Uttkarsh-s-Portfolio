"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-background/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center">
          <p className="text-foreground/70">
            © 2025 Uttkarsh Srivastava | Built with ❤️ using React + Tailwind CSS + Framer Motion
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <motion.a
              href="https://github.com/Uttkarshx"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/uttkarsh-srivastava-217699325/"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </motion.a>
            <motion.a
              href="mailto:offcuttkarsh@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
