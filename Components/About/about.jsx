import React from 'react'
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiGraphql, SiTypescript } from 'react-icons/si'

const About = () => {
  const AboutData = [
    {
      title: "Who Am I ?",
      description:
        "I was always curious about how things work behind the screen. What began as late-night tinkering with HTML and inspecting elements turned into a real obsession with building digital experiences. That curiosity still drives everything I do.",
      image: "/images/about1.png"
    },
    {
      title: "What I Build ?",
      description:
        "I’m a full stack developer who believes clean code and clean design go hand in hand. My stack includes Next.js, React, Tailwind, GraphQL, and Prisma — but what really matters to me is shipping things that are fast, scalable, and delightful to use.",
      image: "/images/about2.png"
    },
    {
      title: "What Technologies I Use ?",
      description:
        "Technology is a tool to amplify impact. Whether I’m solving a UI/UX challenge or building out backend logic, I care about the people using what I create. I value simplicity, empathy, and working on things that make a real difference.",
      image: "/images/about3.png"
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
      <div className="flex justify-center bg-black text-white py-48 px-10">
        <h2 className="text-7xl text-stone-400">Me ?</h2>
      </div>

      {/* About Cards */}
      <div className="flex flex-col gap-32 py-36 px-28">
        {AboutData.map((about, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={index}
              className={`flex h-screen flex-col lg:flex-row items-end justify-between gap-36 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-[900px] h-[600px] bg-stone-200 rounded-3xl overflow-hidden shadow-lg" />
              <div className="w-full lg:w-1/2 text-left space-y-10">
                <h3 className="text-9xl font-bold text-stone-800">{about.title}</h3>
                <p className="text-3xl text-muted-foreground">{about.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tech Stack */}
      <div className="py-56 px-48">
        <div className="flex flex-col lg:flex-row  justify-center items-center px-10">
          {/* Frontend */}
          <div className="flex-1 space-y-12 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              {frontend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-xl text-stone-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden lg:block w-px h-[300px] bg-stone-300" />

          {/* Backend & Tools */}
          <div className="flex-1 space-y-12 gap-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              {backend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-xl text-stone-600 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-black text-white py-48 px-10">
        <h2 className="text-7xl text-stone-400">Let's Connect</h2>
      </div>
    </div>
  )
}

export default About
