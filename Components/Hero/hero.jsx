'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-end justify-around px-28 py-56">
      {/* Name Section (slides in from right toward left) */}
      <motion.div
        className="flex flex-col leading-[0.9]"
        initial={{ opacity: 0, x: 50 }}  // from right side
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-[210px] text-stone-800 font-bold">KARAN</h1>
        <h1 className="text-[210px] text-stone-800 font-bold">ROUSHAN</h1>
      </motion.div>

      {/* Separator (fast animation, scaling from bottom) */}
      <motion.div
        className="w-0.5 h-[400px] bg-stone-600 mx-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Description & Icons */}
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex w-full space-x-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
        <span><Linkedin size={48} color='#575757' /></span>
        <span><Github size={48} color='#575757' /></span>
        <span><Instagram size={48} color='#575757' /></span>
        </motion.div>
        {/* Description Text (slides in from left toward right) */}
        <motion.div
          className="flex flex-col leading-[0.9]"
          initial={{ opacity: 0, x: -50 }} // from left side
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-3xl text-stone-700">Full Stack Web Developer &</h1>
          <h1 className="text-3xl text-stone-700">UI/UX Designer, based in India</h1>
        </motion.div>

        {/* Social Icons (from bottom, delayed) */}


      </div>
    </div>
  )
}

export default Hero
