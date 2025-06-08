import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { GoHeart } from 'react-icons/go'

const Connect = () => {
  return (
    <div className="w-full ">
      {/* Header */}
      <div className="px-6 py-2 sm:px-10 lg:px-28 mb-10 sm:mb-20">
        <h3 className="text-[60px] sm:text-[120px] mt-30 lg:mt-8 md:text-[160px] lg:text-[220px] leading-none font-bold text-start text-neutral-800 mb-6">
          LET'S CONNECT
        </h3>
        <h2 className="text-lg sm:text-xl lg:text-3xl text-muted-foreground">
          Have an idea, challenge, or just want to collaborate? Let me help turn your problem into a powerful solution.
        </h2>
      </div>

      {/* Contact + Socials */}
      <div className=" sm:py-28 px-6 sm:px-10 lg:px-28">
        <div className="flex flex-col items-end lg:flex-row gap-10">
          {/* Contact Info */}

          <div className="w-full space-y-8 text-neutral-700 text-base sm:text-lg lg:text-xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-2">Contact</h4>
              <p className="transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer">
                Phone: +91-7765031021
              </p>
              <p className="transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer">
                Email: karan.122roushan@gmail.com
              </p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4">Socials</h4>
              <div className="flex gap-6 text-2xl sm:text-3xl text-black">
                <Link
                  href="https://github.com/iamkaranroushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-800"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-blue-600"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-sky-500"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 px-6 mt-28 lg:mt-24 sm:px-10 lg:px-28 flex flex-col md:flex-row justify-between items-center border-t pt-4 gap-2">
        <div className="flex flex-wrap gap-2 text-center">
          <p>
            made with <GoHeart className="inline w-4 h-4" /> by KARAN ROUSHAN
          </p>
        </div>
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://www.karanroushan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-700 transition-colors duration-300"
          >
            www.karanroushan.com
          </Link>{' '}
          — All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Connect
