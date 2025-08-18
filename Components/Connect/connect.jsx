"use client";

import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
import {motion} from "framer-motion";
const Connect = () => {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      {" "}
      {/* Main Content */}
      <div className="px-6  sm:py-30 sm:px-10 lg:px-28 flex-grow">
        {" "}
        {/* Header */}{" "}
        <motion.h3 
        initial={{  y:30 }}
        whileInView={{ y:0}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 sm:mt-4 md:mt-0 text-[40px] sm:text-[100px] md:text-[120px] xl:text-[130px] 2xl:text-[150px] 3xl:text-[160px] 4xl:text-[180px] leading-none font-bold text-neutral-800 mb-6">
          LET'S CONNECT{" "}
        </motion.h3>{" "}
        <motion.h2 
        initial={{  y:30 }}
        whileInView={{ y:0}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-base sm:text-xl lg:text-3xl text-muted-foreground max-w-4xl">
          Have an idea, challenge, or just want to collaborate ? Let me help
          turn your problem into a powerful solution.{" "}
        </motion.h2>
        {/* Contact + Socials */}{" "}
        <div className="py-10 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {" "}
            {/* Contact Info */}{" "}
            <div className="flex-1 space-y-10 text-neutral-700 text-base sm:text-lg lg:text-xl">
              <div>
                <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Contact{" "}
                </h4>{" "}
                <p className="hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer transition-all duration-300">
                  Phone : +91 - 7765031021{" "}
                </p>{" "}
                <p className="hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer transition-all duration-300">
                  Email: karan .122 roushan @gmail.com{" "}
                </p>{" "}
              </div>
              <div>
                <motion.h4 
                initial={{  y:10 }}
                whileInView={{ y:0}}
                transition={{delay:0.8, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-2xl sm:text-3xl font-semibold mb-4">
                  Socials{" "}
                </motion.h4>{" "}
                <motion.div 
                initial={{ y:10 }}
                whileInView={{ y:0}}
                transition={{delay:0.8, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex gap-6 text-2xl sm:text-3xl text-black">
                  <Link
                    href="https://github.com/iamkaranroushan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 hover:text-gray-800 transition-transform duration-300"
                  >
                    <FaGithub />
                  </Link>{" "}
                  <Link
                    href="https://linkedin.com/in/karanroushan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 hover:text-blue-600 transition-transform duration-300"
                  >
                    <FaLinkedin />
                  </Link>{" "}
                  <Link
                    href="https://instagram.com/karandoescode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 hover:text-pink-500 transition-transform duration-300"
                  >
                    <FaInstagram />
                  </Link>{" "}
                </motion.div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Footer */} {/* Footer */} {/* Footer */}
      <div
        className="border-t border-b px-6 sm:px-10 lg:px-28 text-xs lg:text-sm text-gray-500 
                flex flex-col md:flex-row justify-between items-center gap-4 w-full py-4"
      >
        <div className="text-left text-stone-400">
          <p>
            designed and coded with{" "}
            <GoHeart className="inline w-4 h-4 text-red-500" /> by KARAN ROUSHAN
          </p>
        </div>
        <p className="text-xs text-stone-400 text-left md:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://www.karanroushan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-stone-600 hover:text-stone-700 transition-colors duration-300"
          >
            www.karanroushan.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Connect;
