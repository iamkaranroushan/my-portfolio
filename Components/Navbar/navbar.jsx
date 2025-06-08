'use client'

import { Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false) // Scrolling down
      } else {
        setShowNavbar(true) // Scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Animated Menu Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 flex flex-col items-start mx-10  transform -translate-x-1/2 z-[100]"
      >
        <button onClick={toggleMenu} className=" transition-all duration-300 cursor-pointer">
          {menuOpen ? (
            <RxCross2  className="text-white text-4xl lg:text-5xl transition-transform duration-300 rotate-90" />
          ) : (
            <IoIosMenu  className="text-neutral-600 text-4xl lg:text-5xl transition-transform duration-300" />
          )}
        </button>
      </motion.div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-black flex flex-col justify-center items-center gap-12 text-3xl lg:text-5xl font-semibold text-stone-200 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {['Home', 'Projects', 'About', 'Contact'].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/${label.toLowerCase() === 'Home' ? '' : label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition duration-300"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
