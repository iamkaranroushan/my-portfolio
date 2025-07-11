'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { PiGithubLogoBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-28 py-36  lg:py-70 mt-24 lg:mt-0 flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-20 lg:gap-0">

      {/* Name Section */}
      <div className="overflow-hidden text-center lg:text-left">
        <motion.div
          className="leading-[0.8]"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-[65px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] 3xl:text[210px] text-stone-800 font-extrabold ">KARAN</h1>
          <h1 className="text-[65px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] 3xl:text[210px] text-stone-800 font-extrabold ">ROUSHAN</h1>
        </motion.div>
      </div>

      {/* Vertical Separator */}
      <motion.div
        className="hidden lg:block w-0.5 h-[300px] bg-stone-600"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Description + Icons */}
      <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
        <span className="text-3xl sm:text-4xl lg:text-5xl text-[#575757]"><PiGithubLogoBold /></span>
        <span className="text-3xl sm:text-4xl lg:text-5xl text-[#575757]"><FaLinkedinIn /></span>
        <span className="text-3xl sm:text-4xl lg:text-5xl text-[#575757]"><FaInstagram /></span>
        </motion.div>

        {/* Description Text */}
        <div className="overflow-hidden">
          <motion.div
            className="space-y-1"
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl text-stone-700">Full Stack Web Developer &</h1>
            <h1 className="text-lg sm:text-xl lg:text-2xl text-stone-700">UI/UX Designer, based in India</h1>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero
