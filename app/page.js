import About from "@/Components/About/about";
import Connect from "@/Components/Connect/connect";
import Hero from "@/Components/Hero/hero";
import Layout from "@/Components/layout";
import Navbar from "@/Components/Navbar/navbar";
import Projects from "@/Components/Projects/projects";
import React from "react";

export default function home() {
  return (
    <Layout>
      <Hero />
      <Projects />

      {/* Stack Container */}
      <div className="relative h-[600vh] sm:h-[480vh] md:h-[470vh] lg:h-[600vh]">
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
  );
}
