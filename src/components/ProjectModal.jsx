// src/components/ProjectModal.jsx
import React, { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEsc)
    return () => window.removeEventListener('keydown', closeOnEsc)
  }, [onClose])

  if (!project) return null

  return (
    <div className="project-modal" role="dialog" aria-modal="true">
      <div className="modal-inner">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project modal"
        >
          ×
        </button>

        <div className="modal-media">
          {project.model ? (
            <model-viewer
              src={project.model}
              poster={project.poster || '/models/poster.webp'}
              camera-controls
              auto-rotate
              interaction-prompt="auto"
              style={{ width: '100%', height: 420 }}
            />
          ) : project.demo ? (
            <video controls src={project.demo} style={{ width: '100%' }} />
          ) : (
            <img src={project.thumb} alt={project.title} />
          )}
        </div>

        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.short}</p>
          <h4>Tech Used</h4>
          <p>{(project.tags || []).join(', ')}</p>

          <div className="modal-actions">
            <a className="btn btn-primary" href="#contact">
              Request Quote
            </a>
            <a className="btn btn-outline" href={project.repo || '#'}>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
