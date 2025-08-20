"use client";

import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

const Connect = () => {
  const socialLinks = [
    {
      Icon: <FaGithub />,
      title: "Github",
      display_text: "/iamkaranroushan",
      link: "https://github.com/iamkaranroushan"
    },
    {
      Icon: <FaLinkedin />,
      title: "Linked In",
      display_text: "/karanroushan",
      link: "https://linkedin.com/in/karanroushan"
    },
    {
      Icon: <FaInstagram />,
      title: "Instagram",
      display_text: "/karandoescode",
      link: "https://instagram.com/karandoescode"
    },
  ]

  return (
    <div className="w-full min-h-screen flex flex-col ">

      {/* Main Content */}
      <div className="px-6  sm:py-30 sm:px-10 lg:px-28 flex-grow">
        {/* Header */}
        <motion.h3
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 sm:mt-4 md:mt-0 text-[clamp(2rem,5vw,4rem)] leading-none font-bold text-neutral-800 mb-6">
          LET'S CONNECT
        </motion.h3>

        <motion.h2
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-[clamp(1rem,1.7vw,1.5rem)] max-w-4xl text-muted-foreground ">
          Have an idea, challenge, or just want to collaborate ? Let me help
          turn your problem into a powerful solution.
        </motion.h2>

        {/* Contact + Socials */}
        <div className="py-10 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="flex-1 space-y-10 text-neutral-700 text-base sm:text-lg lg:text-xl">
              <div>
                {/*<h4 className="text-[clamp(1.5rem,1.7vw,1.8rem)] font-semibold text-stone-700"  >
                  Contact
                </h4>*/}

                <button className="bg-stone-700 hover:bg-stone-600  active:bg-stone-600  text-stone-200 px-[clamp(0.8rem,2vw,1rem)] py-[clamp(0.8rem,1vw,1.5rem)] rounded-md text-[clamp(1rem,1vw,1.2rem)] rounded-ee-none rounded-se-none  cursor-pointer transition-all hover:text-white ease-in-out duration-300">
                  Mail me
                </button>
                <button className="bg-stone-200 hover:bg-stone-600 hover:text-white text-stone-600 active:bg-stone-600 active:text-white px-[clamp(0.8rem,2vw,1rem)] py-[clamp(0.8rem,1vw,1.5rem)] rounded-md text-[clamp(1rem,1vw,1.2rem)]  rounded-ss-none rounded-es-none cursor-pointer  transition-all ease-in-out duration-300">
                 Book a call
                </button>

              </div>

              {/*socials*/}

              <div className="flex flex-col space-y-4 justify-center">
                {/*icons heading */}
                {/*<span className="text-[clamp(1.5rem,1.7vw,1.8rem)] font-semibold text-stone-700">Socials</span>
                {/*icons */}
                <motion.div
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  className=" flex lg:flex-row flex-wrap items-center gap-6">
                  {
                    socialLinks.map((Item, index) => (

                      <div
                        key={index}
                        className=""
                      >
                        <Link
                          href={Item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 text-stone-500 hover:text-stone-800 transition-all ease-in-out duration-300"
                        >
                          <span className="text-[clamp(1.5rem,1.7vw,1.5rem)]">
                            {Item.Icon}
                          </span>
                          <h3 className="hidden lg:block text-[clamp(0.8rem,2vw,1rem)] font-normal  ">{Item.display_text}</h3>
                        </Link>
                      </div>
                    ))
                  }

                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */} {/* Footer */} {/* Footer */}

      <div className="border-t border-b px-6 sm:px-10 lg:px-28 text-xs lg:text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 w-full py-4">

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
