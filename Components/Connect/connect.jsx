"use client";

import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-full ">
      {/* Header */}
      <div className="px-6 py-10 sm:py-16 sm:px-10 lg:px-28">
        <h3 className="mt-20 sm:mt-4 md:mt-0 text-[40px] sm:text-[100px] md:text-[120px] xl:text-[130px] 2xl:text-[150px] 3xl:text-[160px] 4xl:text-[180px] leading-none font-bold text-neutral-800 mb-6">
          LET'S CONNECT
        </h3>
        <h2 className="text-base sm:text-xl lg:text-3xl text-muted-foreground max-w-4xl">
          Have an idea, challenge, or just want to collaborate? Let me help turn
          your problem into a powerful solution.
        </h2>
      </div>

      {/* Contact + Socials */}
      <div className="px-6 sm:px-10 lg:px-28 py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-10 text-neutral-700 text-base sm:text-lg lg:text-xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
                Contact
              </h4>
              <p className="hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer transition-all duration-300">
                Phone: +91-7765031021
              </p>
              <p className="hover:scale-[1.02] hover:font-semibold hover:text-black cursor-pointer transition-all duration-300">
                Email: karan.122roushan@gmail.com
              </p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
                Socials
              </h4>
              <div className="flex gap-6 text-2xl sm:text-3xl text-black">
                <Link
                  href="https://github.com/iamkaranroushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:text-gray-800 transition-transform duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:text-blue-600 transition-transform duration-300"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 hover:text-pink-500 transition-transform duration-300"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t  pt-6 px-6 sm:px-10 lg:px-28  text-xs lg:text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>
            designed and coded with{" "}
            <GoHeart className="inline w-4 h-4 text-red-500" /> by KARAN ROUSHAN
          </p>
        </div>
        <p className="text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://www.karanroushan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-700 transition-colors duration-300"
          >
            www.karanroushan.com
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Connect;
