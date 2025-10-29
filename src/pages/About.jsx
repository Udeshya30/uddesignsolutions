// src/pages/About.jsx
import React from 'react'
import '../styles/pages/_about.scss'

export default function About() {
  return (
    <main className="page-about">
      <section className="about-hero container">
        <h1 className="about-title">About UD Design Solutions</h1>
        <p className="about-lead">
          UD Design Solutions is a multidisciplinary studio driven by design,
          technology, and innovation. We specialize in crafting stunning 3D
          visuals, intelligent AI systems, and immersive AR/VR experiences that
          bridge creativity with technical excellence.
        </p>
      </section>

      <section className="about-section container">
        <h2>Our Expertise</h2>
        <p className="muted">
          Our work integrates artistry and advanced engineering to deliver
          exceptional digital products and visual experiences across industries.
        </p>

        <ul className="about-list">
          <li>
            <strong>3D Modeling & Rendering</strong> – High-detail assets,
            lighting, and photorealistic visualization for architecture,
            products, and environments.
          </li>
          <li>
            <strong>AI & Automation</strong> – Intelligent tools leveraging
            NLP, generative models, and computer vision to enhance storytelling
            and design workflows.
          </li>
          <li>
            <strong>AR / VR Applications</strong> – Interactive experiences
            built on WebXR & Three.js for product showcases and training
            simulations.
          </li>
          <li>
            <strong>Full-Stack Development</strong> – Scalable React / Node
            ecosystems, API integration, and deployment pipelines.
          </li>
          <li>
            <strong>Performance & Optimization</strong> – Delivering smooth,
            responsive 3D and AI solutions optimized for real-world use.
          </li>
        </ul>
      </section>

      <section className="about-section container">
        <h2>Our Vision</h2>
        <p>
          We believe the future of digital interaction lies at the intersection
          of intelligence, design, and immersion. Our vision is to lead this
          transformation — creating experiences that inspire emotion, tell
          stories, and expand what’s possible through technology.
        </p>
      </section>

      <section className="about-section container">
        <h2>Our Approach</h2>
        <p>
          Every project begins with curiosity and collaboration. We combine
          creative direction with data-driven insight, ensuring each concept is
          not only visually powerful but technically refined and scalable.  
          From concept to final deployment, we maintain a commitment to craft,
          innovation, and measurable impact.
        </p>
      </section>
    </main>
  )
}
