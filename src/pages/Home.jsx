// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import ModelShowcase from '../components/ModelShowcase'
import ProjectsGrid from '../components/ProjectsGrid'

export default function Home() {
  return (
    <main className="page-home">
      <Hero />

      <section id="showcase" className="section--pt">
        <ModelShowcase />
      </section>

      <section id="projects" className="section--pt">
        <ProjectsGrid />
      </section>
    </main>
  )
}
