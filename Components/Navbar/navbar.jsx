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
  const DesktopNavLinks = ["Home", "About", "Connect"];

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
        className="hidden lg:flex fixed top-0 left-0 w-full z-[100] backdrop-blur   px-28 py-12 justify-between items-center"
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
            delay: 1.6,
          }}
          className="flex space-x-20 text-lg   font-medium items-center justify-between text-gray-600"
        >
          {" "}
          {DesktopNavLinks.map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative group "
            >
              <span className="hover:text-gray-900 transition duration-300">
                {label}
              </span>
              <span className="absolute opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full">
                {" "}
              </span>{" "}
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
            delay: 1.6,
          }}
          className="flex justify-center"
        >
          <Link href="#projects">
            <motion.span className="bg-gray-500 text-[16px] sm:text-[20px] text-gray-200  hover:bg-gray-800 text-white px-6 py-4 lg:px-10 lg:py-4 text-xl font-medium transition duration-300">
              Projects{" "}
            </motion.span>{" "}
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
            delay: 1.6,
          }}
          onClick={toggleMenu}
          className="transition-all duration-300 cursor-pointer"
        >
          {menuOpen ? (
            <RxCross2 className="text-gray-600 text-4xl transition-transform duration-300 rotate-90" />
          ) : (
            <IoIosMenu className="text-gray-600 text-4xl transition-transform duration-300" />
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
