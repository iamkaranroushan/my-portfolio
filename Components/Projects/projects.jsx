"use client";

import React from "react";
import uiCardAnimation from "@/public/animation/ui_card.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { RiNextjsLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { SiTailwindcss, SiPrisma } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";
// ICON MAP
const iconMap = {
  RiNextjsLine: RiNextjsLine,
  GrGraphQl: GrGraphQl,
  SiTailwindcss: SiTailwindcss,
  SiPrisma: SiPrisma,
  IoLogoFirebase: IoLogoFirebase,
};

const Projects = () => {
  const projectData = [
    {
      title: "Client CRM",
      description:
        "Client CRM is my custom-built tool designed to help freelancers and solopreneurs manage their client outreach more efficiently. Inspired by Notion's simplicity and flexibility, this CRM includes all essential features, lead tracking, follow-ups, notes, and pipeline management, into one streamlined interface.",
      image: "/images/project1.png",
      tech_used: [
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
        "Prisma",
        "Cloudinary",
        "Socket.IO",
        "Firebase Auth",
      ],
      icons: [
        "RiNextjsLine",
        "SiTailwindcss",
        "GrGraphQl",
        "SiPrisma",
        "IoLogoFirebase",
      ],
      live: "https://client-tracker-iamkaranroushans-projects.vercel.app/",
      github: "https://github.com/iamkaranroushan/Client-Tracker",
    },
    {
      title: "AE to JSON Exporter",
      description:
        "This is an After Effects extension plug-in to export .ae files to JSON. This plug-in allows users to render even complex gradients, a feature Bodymovin and Lottie typically don’t support for the browser. A useful tool for developers and animators working on the web.",
      image: "/images/project2.png",
      tech_used: [
        "After Effects Scripting",
        "ExtendScript",
        "JSON Exporting",
        "Lottie (Custom Format)",
        "Gradient Animation Engine",
      ],
      icons: [
        "RiNextjsLine",
        "SiTailwindcss",
        "GrGraphQl",
        "SiPrisma",
        "IoLogoFirebase",
      ],
      live: "https://deepakmart.com",
      github: "https://github.com/iamkaranroushan/grocery_application_frontend",
    },
    {
      title: "In-Progress Applications",
      description: "Some of the under development SAAS projects",
      image: "/images/project3.png",
      tech_used: [
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
        "Prisma",
        "Node.js",
        "Firebase",
        "Stripe",
      ],
      icons: [
        "RiNextjsLine",
        "SiTailwindcss",
        "GrGraphQl",
        "SiPrisma",
        "IoLogoFirebase",
      ],
      live: "https://deepakmart.com",
      github: "https://github.com/iamkaranroushan/grocery_application_frontend",
    },
  ];

  return (
    <motion.div
      className="w-full overflow-x-hidden">
      {" "}

      {/* Header */}{" "}
      <motion.div
        className="flex justify-center bg-black text-white py-[clamp(8rem,10vw,20rem)]">

        <motion.h2
          initial={{ scale: 0, }}
          whileInView={{ scale: 1, }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-[clamp(2rem,4vw,4rem)] text-stone-400">
          Projects{" "}
        </motion.h2>{" "}
      </motion.div>{" "}




      <span id="projects" />
      {/* Project Cards */}{" "}
      <div className="flex flex-col space-y-24 lg:space-y-40 py-24 lg:mb-30 px-6 sm:px-10 lg:px-28">
        {" "}
        {projectData.map((project, index) => {
          const isEven = index % 2 === 0;
          const projectNumber = `0${index + 1}`;

          return (
            <div key={index}>
              {" "}
              {/* 👇 Mobile Layout */}{" "}
              <motion.div
                initial={{ x: "clamp(-200px, 10vw, -300px)", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:hidden w-full bg-white rounded-3xl overflow-hidden relative group">
                <div className="w-full h-[400px] bg-cover bg-center">
                  <motion.div

                    className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-300" />
                  <motion.div
                    className="absolute flex flex-col gap-2 bottom-0 w-full p-6 text-white z-10">
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-[60px] sm:text-[90px] font-semibold text-white/20">
                      {" "}
                      {projectNumber}{" "}
                    </motion.p>{" "}
                    {/* Tech Icons */}
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {project.icons.map((iconName, i) => {
                        const Icon = iconMap[iconName.trim()];
                        return Icon ? (
                          <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            key={i} className="text-white text-2xl">
                            <Icon />
                          </motion.span>
                        ) : null;
                      })}{" "}
                    </div>
                    {/*title*/}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-[clamp(1.5rem,5vw,4rem)] font-bold">
                      {" "}
                      {project.title}{" "}
                    </motion.h3>{" "}
                    {/*description*/}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 1, ease: "easeInOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="text-[clamp(0.8rem,1.7vw,1.5rem)] text-white/80">
                      {" "}
                      {project.description}{" "}
                    </motion.p>{" "}

                  </motion.div>{" "}
                </div>{" "}
              </motion.div>


              {/* 👇 Desktop Layout */}{" "}
              <motion.div
                className={`hidden lg:flex h-[80vh] justify-between items-center gap-[clamp(2rem,5vw,8rem)] ${!isEven ? "flex-row-reverse" : ""
                  }`}
              >
                {/* 👇 Image or Lottie Section */}{" "}
                <motion.div
                  initial={{ opacity: 0, x: !isEven ? 500 : -500, }}
                  whileInView={{ opacity: 1, x: 0, }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-[clamp(300px,40vw,700px)] rounded-3xl overflow-hidden bg-gray-100"
                  style={{ height: "clamp(300px, 50vw, 600px)" }} // 👈 responsive height }}
                >
                  {" "}
                  {project.image ? (
                    <div className="w-full h-full bg-cover bg-gradient-to-b from-gray-100 to-gray-500 " />
                  ) : (
                    <Lottie
                      animationData={uiCardAnimation}
                      loop={true}
                      autoplay
                      className="w-full h-full object-contain origin-center"
                    />
                  )}{" "}
                </motion.div>

                {/* 👇 Text Section */}{" "}
                <motion.div
                  className="flex-1 flex flex-col items-start gap-4">

                  <motion.div
                    initial={{ opacity: 0, y: 60, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex justify-between items-center w-full">
                    <p className="text-[clamp(2rem,6vw,6rem)] font-semibold text-primary/10">
                      {" "}
                      {projectNumber}{" "}
                    </p>{" "}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap gap-2">
                    {" "}
                    {project.tech_used.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-black text-[clamp(0.2rem,1.7vw,0.8rem)] rounded"
                      >
                        {tech}{" "}
                      </span>
                    ))}{" "}
                  </motion.div>
                  {/*title*/}
                  <motion.p
                    initial={{ opacity: 0, y: 60, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-[clamp(1rem,1.7vw,1.5rem)] text-muted-foreground">
                    {" "}
                    {project.description}{" "}
                  </motion.p>
                  {/*description*/}
                  <motion.h3
                    initial={{ opacity: 0, y: 60, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-[clamp(2rem,5vw,4rem)] font-bold text-stone-800 leading-tighter">
                    {" "}
                    {project.title}{" "}
                  </motion.h3>
                  {/*links*/}
                  <motion.div
                    initial={{ opacity: 0, y: 60, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex items-center">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-white text-gray-200 hover:bg-gray-800 transition-all bg-gray-500 p-4 duration-300"
                    >
                      Live View{" "}
                    </Link>{" "}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-gray-900 text-gray-100 hover:bg-gray-300 transition-all bg-gray-400 p-4 duration-300"
                    >
                      GitHub{" "}
                    </Link>{" "}
                  </motion.div>{" "}

                </motion.div>{" "}

              </motion.div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </motion.div>
  );
};

export default Projects;
