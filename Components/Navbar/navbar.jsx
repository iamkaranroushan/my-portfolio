"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mobileNavLinks = ["Home", "Projects", "About", "Connect"];
  const DesktopNavLinks = ["HOME", "ABOUT", "PROJECTS"];

  return (
    <>
      {" "}
      {/* Desktop Navigation */}{" "}
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: showNavbar ? 1 : 0,
          y: showNavbar ? 0 : -20,
        }}
        transition={{
          duration: 0.6,
        }}
        className="hidden backdrop-blur lg:flex fixed top-0 left-0 w-full z-[100]  px-28 py-8 justify-between items-center"
      >
        {/* Logo / Name */} {/* Menu Items */}{" "}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration:0.6
          }}
          className="flex space-x-6 text-lg  items-center justify-between text-gray-600"
        >
          {" "}
          {DesktopNavLinks.map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative group "
            >
              <span className="text-stone-900 hover:text-stone-400 font-semibold  transition duration-300">
                {label}
              </span>
             
            </Link>
          ))}{" "}
        </motion.div>{" "}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration:0.6
          }}
          className="flex justify-center"
        >
          <Link href="#connect">
            <motion.span className="bg-black/90 rounded-md  text-gray-200  hover:bg-black/80 text-white px-6 py-5 lg:px-14 lg:py-5 font-semibold transition duration-300">
              CONNECT
            </motion.span>
          </Link>{" "}
        </motion.div>{" "}
      </motion.nav>{" "}
      {/* Mobile Menu Button */}{" "}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: showNavbar ? 1 : 0,
          y: showNavbar ? 0 : -20,
        }}
        transition={{
          duration: 0.6,
        }}
        className="lg:hidden fixed top-6 left-6 z-[100]"
      >
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration:0.6
          }}
          onClick={toggleMenu}
          className="transition-all duration-300 cursor-pointer backdrop-blur rounded-md"
        >
          {menuOpen ? (
            <RxCross2 className="text-stone-600 text-4xl transition-transform duration-300 rotate-90" />
          ) : (
            <IoIosMenu className="text-stone-600 text-4xl transition-transform duration-300" />
          )}{" "}
        </motion.button>{" "}
      </motion.div>{" "}
      {/* Mobile Fullscreen Overlay */}{" "}
      <AnimatePresence>
        {" "}
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[99] bg-white flex flex-col justify-center items-center gap-12 text-3xl text-stone-800 px-4"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {mobileNavLinks.map((label) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 40,
                }}
                transition={{
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition duration-300"
                >
                  {label}{" "}
                </Link>{" "}
              </motion.div>
            ))}{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </>
  );
};

export default Navbar;
