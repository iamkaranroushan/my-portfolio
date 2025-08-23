import About from "@/Components/About/about";
import Connect from "@/Components/Connect/connect";
import Hero from "@/Components/Hero/hero";
import Layout from "@/Components/layout";
import Navbar from "@/Components/Navbar/navbar";
import Projects from "@/Components/Projects/projects";
import React from "react";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />

      {/* Stacked zone */}
      <div className="relative min-h-screen flex flex-col">
        {/* Connect pinned to bottom half of the viewport */}
        <div className="flex-grow z-[10]">
          <About />
        </div>

        {/* Connect always pinned to bottom */}
        <div className="sticky bottom-0">
          <Connect />
        </div>
      </div>
    </Layout>
  );
}
