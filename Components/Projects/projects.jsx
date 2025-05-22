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
      <div className="flex justify-center bg-black text-white py-48 px-10">
        <h2 className="text-7xl text-stone-400">Projects</h2>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-32 py-36 px-28">
        {projectData.map((project, index) => {
          const isEven = index % 2 === 0
          const projectNumber = `0${index + 1}`
          return (
            <div
              key={index}
              className={`flex h-screen flex-col lg:flex-row items-end justify-between gap-36 ${!isEven ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image/Visual */}
              <div className="w-full lg:w-[900px] h-[600px] bg-stone-200 rounded-3xl overflow-hidden shadow-lg" />

              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-left space-y-4">
                <p className="text-[250px] font-semibold text-primary/10 mb-6">
                  {projectNumber}
                </p>
                <p className="text-3xl text-muted-foreground">
                  {project.description}
                </p>
                <h3 className="text-9xl font-bold text-stone-800">{project.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
