import About from '@/Components/About/about'
import Connect from '@/Components/Connect/connect'
import Hero from '@/Components/Hero/hero'
import Layout from '@/Components/layout'
import Navbar from '@/Components/Navbar/navbar'
import Projects from '@/Components/Projects/projects'
import React from 'react'

export default function home() {
  return (
    <Layout className="">
      <Hero />
      <Projects />
      {/* Stack Container */}
      <div className="relative h-[410vh] lg:h-[560vh]">
        {/* Connect (background layer) */}
        <div className="sticky top-0 h-screen">
          <Connect />
        </div>
        {/* About (scrolling above) */}
        <div className="bg-white absolute top-0 w-full z-10">
          <About />
        </div>
      </div>
    </Layout>



  )
}