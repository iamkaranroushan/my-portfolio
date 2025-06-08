'use client'

import React from 'react'

const Projects = () => {
  const projectData = [
    {
      title: 'UI/UX',
      description:
        'A brief description of the first project, explaining what it does and technologies used.',
      image: '/images/project1.png',
    },
    {
      title: 'Full Stack',
      description:
        'Second project details, maybe with a different tech stack and unique features.',
      image: '/images/project2.png',
    },
    {
      title: '3d-Web',
      description:
        'Third project details — maybe a clone or a unique application.',
      image: '/images/project3.png',
    },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-center bg-black text-white py-32 lg:py-48 px-6 sm:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-stone-400">Projects</h2>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col space-y-24 lg:space-y-48 py-24 px-6 sm:px-10 lg:px-28">
        {projectData.map((project, index) => {
          const isEven = index % 2 === 0
          const projectNumber = `0${index + 1}`

          return (
            <div key={index}>
              {/* 👇 Mobile Layout */}
              <div className="lg:hidden w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col space-y-4">
                <div
                  className="w-full h-[300px] sm:h-[400px] bg-cover bg-center bg-stone-300"
                  // style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6 text-center space-y-3">
                  <p className="text-[70px] sm:text-[100px] font-semibold text-primary/10">{projectNumber}</p>
                  <h3 className="text-4xl sm:text-5xl font-bold text-stone-800">{project.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground">{project.description}</p>
                </div>
              </div>

              {/* 👇 Desktop Layout with Alternating Direction */}
              <div
                className={`hidden lg:flex h-[90vh] items-end justify-between gap-20 xl:gap-36 ${!isEven ? 'flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div
                  className="w-[45%] h-[500px] xl:h-[600px] bg-stone-300 bg-cover bg-center rounded-3xl"
                  // style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Text Section */}
                <div className="w-[45%] space-y-6">
                  <p className="text-[120px] xl:text-[200px] font-semibold text-primary/10 mb-4">{projectNumber}</p>
                  <p className="text-2xl xl:text-3xl text-muted-foreground">{project.description}</p>
                  <h3 className="text-6xl xl:text-8xl font-bold text-stone-800">{project.title}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
