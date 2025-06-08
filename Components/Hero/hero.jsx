'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Github, Linkedin } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { PiGithubLogoBold } from "react-icons/pi";
const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen mt-24 lg:mt-0 lg:flex lg:items-end lg:justify-around px-4 lg:px-28 py-56">

      {/* Name Section (slides in from far right) */}
      <div className="overflow-hidden">
        <motion.div
          className="flex flex-col leading-[0.9]"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-[75px] md:text-[160px] lg:text-[210px] text-stone-800 font-bold">KARAN</h1>
          <h1 className="text-[75px] md:text-[160px] lg:text-[210px] text-stone-800 font-bold">ROUSHAN</h1>
        </motion.div>
      </div>

      {/* Separator (quick scale from bottom) */}
      <motion.div
        className="hidden lg:block w-0.5 h-[400px] bg-stone-600 mx-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Description & Icons */}
      <div className="flex flex-col gap-4 lg:gap-6 mt-10">

        {/* Social Icons (fade + slide up) */}
        <motion.div
          className="flex w-full space-x-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <span className="lg:text-5xl text-4xl text-[#575757]"> <FaInstagram /></span>
          <span className="lg:text-5xl text-4xl text-[#575757]"> <PiGithubLogoBold /></span>
          <span className="lg:text-5xl text-4xl text-[#575757]"> <FaLinkedinIn /></span>

        </motion.div>
        {/* Description Text (slides in from far left) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col leading-[0.9]"
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className=" text-xl lg:text-3xl text-stone-700">Full Stack Web Developer &</h1>
            <h1 className=" text-xl lg:text-3xl text-stone-700">UI/UX Designer, based in India</h1>
          </motion.div>
        </div>



      </div>
    </div>
  )
}

export default Hero
