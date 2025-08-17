"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import Link from "next/link";
import { LuGlobe } from "react-icons/lu";

const Hero = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  return (
    <section
      id="Home"
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{
          opacity: 0,
          
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 0.6,
        }}
        className="absolute bottom-0 right-0 "
      >
        <div className="bg-black px-6 py-3 lg:px-10 lg:py-6 rounded-ss-lg ">
          <span className=" flex flex-col justify-center items-center text-xs sm:text-sm font-medium text-stone-400">
            Scroll to see projects
          </span>
        </div>
      </motion.div>
      {/* Blurred Background Image */} {/* Glassmorphic Card */}{" "}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col items-center z-10 h-full  text-center  w-full "
      >
        {/* Name */}{" "}
        <motion.h1
          initial={{ letterSpacing: "clamp(-0.2rem, -1vw, -0.5rem)" }}
          animate={{ letterSpacing: "clamp(1rem, 6vw, 6rem)" }}   
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: "easeOut",
            times: [0, 0.4, 1],
          }}
          className="text-stone-800 font-semibold text-[clamp(4rem,12vw,40rem)] pt-48 lg:pt-80 "
        >
           <span className="inline-block translate-x-2 md:translate-x-8">KARAN</span>
        </motion.h1>

        
        <div className="mt-10 lg:mt-10 lg:mb-40">
          
          {
            <motion.div
              className="flex justify-center mb-4  space-x-6 text-white text-3xl  "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.6,
              }}
            >
              <Link href="https://github.com/iamkaranroushan" target="_blank">
                <PiGithubLogoBold className="hover:text-gray-800 text-2xl lg:text-4xl text-stone-500 hover:scale-110 transition duration-300" />
              </Link>{" "}
              <Link
                href="https://linkedin.com/in/karanroushan"
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-blue-400 text-2xl lg:text-4xl text-stone-500 hover:scale-110 transition duration-300" />
              </Link>{" "}
              <Link
                href="https://instagram.com/karandoescode"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-400 text-2xl lg:text-4xl text-stone-500  hover:scale-110 transition duration-300" />
              </Link>{" "}
            </motion.div>
          }{" "}
          {/* Description */}{" "}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.6,
              duration: 0.6,
            }}
            className="text-stone-700 mt-4 px-20 text-lg sm:text-2xl lg:text-3xl "
          >
            Full Stack Web Developer & UI / UX Designer
          </motion.p>{" "}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2,
              duration: 0.6,
            }}
            className="flex items-center justify-center gap-3 text-stone-500 mt-2 text-lg sm:text-2xl lg:text-3xl "
          >
            Based in India{" "}
          </motion.p>{" "}
        </div>
        {/* Social Icons */}
        {/* CTA Buttons */}{" "}
        <motion.div
          className="mt-16 mb-38 flex justify-center lg:hidden"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.6,
          }}
        >
          <Link
            href="#connect"
            className="bg-gray-400 text-[16px] sm:text-[20px] text-gray-200  hover:bg-gray-600 text-white px-6 py-4 lg:px-20 lg:py-6 text-xl font-medium transition duration-300"
          >
            Connect{" "}
          </Link>{" "}
          <Link
            href="#projects"
            className="text-[16px] sm:text-[20px]  bg-gray-200 hover:bg-gray-600 hover:text-white text-gray-600 px-6 py-4 backdrop-blur-md lg:px-20 lg:py-6 text-xl font-medium transition duration-300"
          >
            Projects{" "}
          </Link>{" "}
        </motion.div>{" "}
      </motion.div>{" "}
    </section>
  );
};

export default Hero;
