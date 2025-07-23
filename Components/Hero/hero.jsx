"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative w-full  flex items-center justify-center overflow-hidden"
    >
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/hero-eye.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  backdrop-blur-[50px]" />
      </div>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-full backdrop-blur-xl  w-full  text-center"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-white font-extrabold text-[56px] sm:text-[64px] md:text-[180px] leading-tight pt-70 lg:pt-80 "
        >
          KARAN 
        </motion.h1>
        

        <div className="mt-20 lg:mt-36">
          <motion.div
            className="flex justify-center  space-x-6 text-white text-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="https://github.com/iamkaranroushan" target="_blank">
              <PiGithubLogoBold className="hover:text-gray-300 text-2xl  hover:scale-110 transition duration-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/iamkaranroushan"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-blue-400 text-2xl  hover:scale-110 transition duration-300" />
            </Link>
            <Link href="https://instagram.com/iamkaranroushan" target="_blank">
              <FaInstagram className="hover:text-pink-400 text-2xl  hover:scale-110 transition duration-300" />
            </Link>
          </motion.div>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-200 mt-4  text-lg sm:text-2xl leading-tight"
          >
            Full Stack Web Developer &
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-200 text-lg sm:text-2xl leading-tight"
          >
            UI/UX Designer, based in India
          </motion.p>
        </div>

        {/* Social Icons */}

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 mb-10 lg:mb-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="#connect"
            className="bg-white text-[16px] sm:text-[20px] text-black hover:bg-gray-100 px-6 py-4 lg:px-20 lg:py-6 text-xl font-medium transition duration-300"
          >
            Connect
          </Link>
          <Link
            href="#projects"
            className="border text-[16px] sm:text-[20px] border-white hover:bg-white/30 text-white px-6 py-4 backdrop-blur-md lg:px-20 lg:py-6 text-xl font-medium transition duration-300"
          >
            Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
