"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import Link from "next/link";
import { LuGlobe } from "react-icons/lu";
import { SiScrollreveal } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  return (
    <section
      id="Home"
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      {<motion.div
        initial={{
          opacity: 0,

        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        className="absolute z-[50] bottom-10  left-[clamp(1.5rem,9vw,8rem)] lg:hidden"
      >
        <motion.div
          className="flex justify-center space-x-3"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
        >
          <Link href="https://github.com/iamkaranroushan" target="_blank">
            <PiGithubLogoBold className="cursor-pointer hover:text-gray-800 text-2xl lg:text-4xl text-stone-500 hover:scale-110 transition duration-300" />
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
      </motion.div>}
      {<motion.div
        initial={{
          opacity: 0,

        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        className="absolute z-[50] bottom-10 right-[clamp(2rem,9vw,8rem)] hidden lg:block"
      >
        <motion.div
          className="flex justify-center space-x-3"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
        >
          <Link href="https://github.com/iamkaranroushan" target="_blank">
            <PiGithubLogoBold className="cursor-pointer hover:text-gray-800 text-2xl lg:text-4xl text-stone-500 hover:scale-110 transition duration-300" />
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
      </motion.div>}

      {/* Blurred Background Image */} {/* Glassmorphic Card */}{" "}
      <motion.div
        initial={{
          opacity: 0,

        }}
        animate={{
          opacity: 1,

        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="flex flex-col lg:items-center  z-10 h-full   w-full "
      >
        {/* Name */}{" "}


        <motion.div className="flex flex-col  justify-center py-[clamp(3rem,14vw,28rem)] px-[clamp(1.5rem,6vw,16rem)] pt-[clamp(13rem,30vw,20rem)]">
          {/* Masking wrapper */}
          <div className="overflow-hidden  ">
            <motion.h2
              initial={{ opacity: 0, y: "clamp(2rem,6vw,20rem)" }} // start hidden below
              whileInView={{ opacity: 1, y: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(3.9rem,10vw,28rem)] text-stone-800 font-semibold leading-[clamp(3.5rem,8vw,9rem)]"
            >
              KARAN
            </motion.h2>
          </div>
          <div className="overflow-hidden  ">
            <motion.h2
              initial={{ opacity: 0, y: "clamp(2rem,3vw,20rem)" }} // start hidden below
              whileInView={{ opacity: 1, y: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(3.9rem,10vw,28rem)] text-stone-800 font-semibold leading-[clamp(3.5rem,8vw,9rem)]"
            >
              ROUSHAN
            </motion.h2>
          </div>


          <motion.div
            initial={{ opacity: 0,}} // start hidden below
            whileInView={{ opacity: 1,}} // slide up into view
            transition={{  duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row flex-wrap mt-2  space-x-6 px-[clamp(0.1rem,1vw,0.8rem)] leading-[1.05]">

            <motion.h2
              initial={{  x: -50 }} // start hidden below
              whileInView={{  x: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(1rem,2vw,1.5rem)] text-stone-700  font-semibold"
            >
              FULL STACK DEVELOPER
            </motion.h2>
            
            <motion.h2
              initial={{  x: -50 }} // start hidden below
              whileInView={{  x: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(1rem,2vw,1.5rem)] text-stone-700 font-semibold"
            >
              UI/UX DESIGNER
            </motion.h2>
            <motion.h2
              initial={{  x: -50 }} // start hidden below
              whileInView={{  x: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(1rem,2vw,1.5rem)] text-stone-700 font-semibold"
            >
              FREELANCER
            </motion.h2>
            <motion.h2
              initial={{  x: -50 }} // start hidden below
              whileInView={{  x: 0 }} // slide up into view
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-[clamp(1rem,2vw,1.5rem)] text-stone-700 font-semibold"
            >
              BUILDING SAAS
            </motion.h2>
          </motion.div>
        </motion.div>
        {/* Social Icons */}
        {/* CTA Buttons */}{" "}
        <motion.div
          className="mt-16 mb-38 flex gap-4 items-center lg:hidden px-[clamp(1.8rem,7vw,20rem)]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay:0.4,
            duration:0.8,
            amount:0.1
          }}
        >
          <Link
            href="#connect"
            className="transition duration-300 text-[clamp(1.5rem,5vw,5rem)] font-bold text-stone-900 active:text-black/60 tracking-tight"
          >
            Connect
          </Link>{" "}

          <span className="mx-4 text-stone-400 ">|</span>
          <Link
            href="#projects"
            className="transition duration-300 text-[clamp(1.5rem,5vw,5rem)] font-bold text-stone-900 active:text-black/60 tracking-tight"
          >
            projects
          </Link>{" "}
          
        </motion.div>{" "}


      </motion.div>{" "}
    </section>
  );
};

export default Hero;
