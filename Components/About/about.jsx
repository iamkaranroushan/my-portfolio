'use client'
import React from 'react'
import Lottie from "lottie-react"
import techUsedAnimation from "@/public/animation/tech_used.json"

import {
  FaReact, FaNodeJs, FaGithub, FaHtml5,
  FaCss3Alt, FaFigma,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTailwindcss, SiPrisma,
  SiGraphql, SiTypescript,
} from 'react-icons/si'

const About = () => {
  const AboutData = [
    {
      title: "Who Am I ?",
      description:
        "I was always curious about how things work behind the screen. What began as late-night tinkering with HTML and inspecting elements turned into a real obsession with building digital experiences. That curiosity still drives everything I do.",
      video: "who_am_i.mp4"
    },
    {
      title: "What I Build ?",
      description:
        "I’m a full stack developer who believes clean code and clean design go hand in hand. My stack includes Next.js, React, Tailwind, GraphQL, and Prisma — but what really matters to me is shipping things that are fast, scalable, and delightful to use.",
      video: "who_am_i.mp4"
    },
    {
      title: "What Technologies I Use ?",
      description:
        "Technology is a tool to amplify impact. Whether I’m solving a UI/UX challenge or building out backend logic, I care about the people using what I create. I value simplicity, empathy, and working on things that make a real difference.",
      lottie: techUsedAnimation
    },
  ]

  const frontend = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Figma', icon: <FaFigma /> },
  ]

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Prisma', icon: <SiPrisma /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-center bg-black text-white py-32 lg:py-48 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-stone-400">Me ?</h2>
      </div>

      {/* About Cards */}
      <div className="flex flex-col px-6 py-16 gap-20 lg:gap-48 lg:py-36 lg:px-28">
        {AboutData.map((about, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-28 
              ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-800">{about.title}</h3>
                <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground">{about.description}</p>
              </div>

              {/* Media (Video or Lottie) */}
              <div className="w-full lg:w-[900px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
                {about.video ? (
                  <video
                    className="w-full h-full object-cover"
                    src={`/animation/${about.video}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : about.lottie ? (
                  <Lottie
                    animationData={about.lottie}
                    loop
                    autoplay
                    className="w-full h-full"
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Stack */}
      <div className="py-20 sm:py-32 px-6 sm:px-10 lg:px-48">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
          {/* Frontend */}
          <div className="flex-1 space-y-10 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              {frontend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-lg text-stone-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px h-[300px] bg-stone-300" />

          {/* Backend */}
          <div className="flex-1 space-y-10 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              {backend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-lg text-stone-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="flex justify-center bg-black text-white py-32 lg:py-48 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-stone-400">Next Steps</h2>
      </div>
    </div>
  )
}

export default About
