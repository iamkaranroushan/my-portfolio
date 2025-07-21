"use client";
import React from "react";
import Lottie from "lottie-react";
import techUsedAnimation from "@/public/animation/tech_used.json";

import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMongodb } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextui,
  SiSocketdotio,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
  SiTypescript,
  j,
} from "react-icons/si";

const About = () => {
  const AboutData = [
    {
      title: "Who Am I ?",
      description:
        "I'm Karan, a professional full-stack software engineer with over 4 years of hands-on experience building scalable web applications and designing robust system architectures. I love challenges, and always excited to solve and learn something new from it.",
      video: "who_am_i.mp4",
    },
    {
      title: "What I Build ?",
      description:
        "I build full-fledged platforms, admin panels, and developer-focused tools using modern frameworks. I'm experienced in designing and developing user-friendly interfaces and seamless user experiences. I also create custom animations, like the ones used in this portfolio, to elevate product aesthetics. Recently, I've been focusing on building SaaS tools that solve real problems and offer standout UX.",
      video: "who_am_i.mp4",
    },
    {
      title: "What Technologies I Use ?",
      description:
        "As a full-stack developer, my core expertise lies in building frontend interfaces, backend systems, and efficient APIs. But I don't limit myself there. I'm always tinkering with tools and technologies beyond my main stack. Lately, I've been exploring machine learning and AI, driven by curiosity and the potential they hold in shaping tomorrow's products.",
      lottie: techUsedAnimation,
    },
  ];

  const frontend = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "NextUI", icon: <SiNextui /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Firebase", icon: <RiFirebaseLine /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Postgres", icon: <BiLogoPostgresql /> },
    { name: "MongoDB", icon: <TbBrandMongodb /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Socket.io", icon: <SiSocketdotio /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-center bg-black text-white py-32 lg:py-48 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-stone-400">
          Me ?
        </h2>
      </div>
      <span  id="about"/>

      {/* About Cards */}
      <div className="flex flex-col px-6 py-16 gap-20 lg:gap-48 lg:py-36 lg:px-28">
        {AboutData.map((about, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-20 xl:gap-36
              ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-800">
                  {about.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground">
                  {about.description}
                </p>
              </div>

              {/* Media (Video or Lottie) */}
              <div className="w-full lg:w-[900px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
                {about.video ? (
                  <div className="w-full h-full bg-cover bg-center bg-gray-200" />
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
                  <p className="text-lg text-stone-600 font-medium">
                    {tech.name}
                  </p>
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
                  <p className="text-lg text-stone-600 font-medium">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div  className="flex justify-center bg-black text-white py-32 lg:py-48 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-stone-400">
          Connect
        </h2>
      </div>
      <span id="connect" />
    </div>
  );
};

export default About;
