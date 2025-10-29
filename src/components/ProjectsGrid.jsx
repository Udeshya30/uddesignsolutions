// src/components/ProjectsGrid.jsx
import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import '../styles/components/_projects.scss'

// sample data; replace with your real projects
const PROJECTS = [
  {
    id: 'p3d',
    title: '3D Interactive Robot',
    thumb: '/thumbnails/project1.jpg',
    tags: ['Maya', 'substance painter', 'Keyshot', 'blender'],
    short: 'High-fidelity robot model with real-time rendering.',
    model: '/models/sample.glb'
  },
  {
    id: 'pai',
    title: 'GalactiView - AR Space Exploration',
    thumb: '/thumbnails/GalactiView.png',
    tags: ['Android', 'ARFoundation', 'C#', 'Unity' ],
    short: 'An AR-powered educational Android app built with Unity & ARCore.',
    demo: '/demos/GalactiView.mp4'
  },
  {
    id: 'par',
    title: 'Desert Tactical Training - VR Sniper Challenge',
    thumb: '/thumbnails/Desert Tactical Training.png',
    tags: ['VR', 'Quest 2', 'Unity', 'C#'],
    short: 'Standalone Oculus Quest 2 VR training mission in a harsh desert environment.',
    demo: '/demos/Desert Tactical Training.mp4'
  }
]

export default function ProjectsGrid() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          A selection of our latest 3D, AI, and AR/VR works.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
            >
              <img src={p.thumb} alt={`${p.title} preview`} />
              <div className="card-content">
                <h4>{p.title}</h4>
                <p className="muted">{p.short}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  )
}
