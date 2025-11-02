"use client"

import { motion } from "framer-motion"

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
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/60 hover:text-cyan-400 transition-colors"
            >
              Email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
