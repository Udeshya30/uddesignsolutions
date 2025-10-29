// src/pages/Projects.jsx
import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'

export default function Projects() {
  return (
    <main className="page-projects">
      <header className="page-header container text-center" style={{ padding: '80px 0 40px' }}>
        <h1>Case Studies</h1>
        <p className="muted">
          Explore our best work across 3D design, AR/VR, and AI innovation.
        </p>
      </header>

      <ProjectsGrid />
    </main>
  )
}
