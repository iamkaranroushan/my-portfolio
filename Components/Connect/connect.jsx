import React from 'react'
import { Separator } from '@radix-ui/react-separator'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Connect = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      {/* Two-column layout */}
      <div className="px-56 py-36">
        <h3 className="text-5xl font-semibold mb-20 text-center text-neutral-800">
          Feel free to ask something or talk over a problem
        </h3>

        <div className="flex gap-24 justify-around">
          {/* Contact Form */}
          <form className="w-full lg:w-1/2 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 border border-gray-300 rounded-xl text-xl"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 border border-gray-300 rounded-xl text-xl"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-5 border border-gray-300 rounded-xl text-xl"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-5 border border-gray-300 rounded-xl text-xl"
            />

            <button
              type="submit"
              className="px-10 py-4 w-full text-white text-xl bg-black rounded-2xl hover:bg-neutral-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Separator */}
          <Separator
            orientation="vertical"
            className="hidden lg:block w-px bg-gray-300"
          />

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 space-y-8 text-neutral-700 text-xl">
            <div>
              <h4 className="text-3xl font-semibold mb-2">Contact</h4>
              <p>Phone: +91 9876543210</p>
              <p>Email: karan@example.com</p>
            </div>

            <div>
              <h4 className="text-3xl font-semibold mb-2">Socials</h4>
              <div className="flex gap-6 text-3xl text-black">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
