// // src/pages/About.jsx
// import React from 'react'
// import '../styles/pages/_about.scss'

// export default function About() {
//   return (
//     <main className="page-about">
//       <section className="about-hero container">
//         <h1 className="about-title">About UD Design Solutions</h1>
//         <p className="about-lead">
//           UD Design Solutions is a multidisciplinary studio driven by design,
//           technology, and innovation. We specialize in crafting stunning 3D
//           visuals, intelligent AI systems, and immersive AR/VR experiences that
//           bridge creativity with technical excellence.
//         </p>
//       </section>

//       <section className="about-section container">
//         <h2>Our Expertise</h2>
//         <p className="muted">
//           Our work integrates artistry and advanced engineering to deliver
//           exceptional digital products and visual experiences across industries.
//         </p>

//         <ul className="about-list">
//           <li>
//             <strong>3D Modeling & Rendering</strong> – High-detail assets,
//             lighting, and photorealistic visualization for architecture,
//             products, and environments.
//           </li>
//           <li>
//             <strong>AI & Automation</strong> – Intelligent tools leveraging
//             NLP, generative models, and computer vision to enhance storytelling
//             and design workflows.
//           </li>
//           <li>
//             <strong>AR / VR Applications</strong> – Interactive experiences
//             built on WebXR & Three.js for product showcases and training
//             simulations.
//           </li>
//           <li>
//             <strong>Full-Stack Development</strong> – Scalable React / Node
//             ecosystems, API integration, and deployment pipelines.
//           </li>
//           <li>
//             <strong>Performance & Optimization</strong> – Delivering smooth,
//             responsive 3D and AI solutions optimized for real-world use.
//           </li>
//         </ul>
//       </section>

//       <section className="about-section container">
//         <h2>Our Vision</h2>
//         <p>
//           We believe the future of digital interaction lies at the intersection
//           of intelligence, design, and immersion. Our vision is to lead this
//           transformation — creating experiences that inspire emotion, tell
//           stories, and expand what’s possible through technology.
//         </p>
//       </section>

//       <section className="about-section container">
//         <h2>Our Approach</h2>
//         <p>
//           Every project begins with curiosity and collaboration. We combine
//           creative direction with data-driven insight, ensuring each concept is
//           not only visually powerful but technically refined and scalable.  
//           From concept to final deployment, we maintain a commitment to craft,
//           innovation, and measurable impact.
//         </p>
//       </section>
//     </main>
//   )
// }




// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/pages/_about.scss'

export default function About() {
  return (
    <main className="page-about">
      {/* Hero Section */}
      <section className="about-hero container">
        <motion.h1
          className="about-glow-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Merging <span className="highlight">Creativity</span> with{' '}
          <span className="highlight">Intelligence</span>
        </motion.h1>

        <motion.p
          className="about-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We pioneer human-centric AI, 3D design, and immersive technology for
          global brands — pushing the boundaries of what’s possible in digital
          innovation.
        </motion.p>
      </section>

      {/* Expertise Section */}
      <section className="about-expertise container">
        <h2>What We Do</h2>
        <p className="muted">
          Expertise across the full spectrum of immersive technology.
        </p>

        <div className="expertise-grid">
          {[
            {
              icon: 'bi-cube',
              title: '3D Modeling & Rendering',
              desc: 'Creating photorealistic 3D assets and immersive environments with cutting-edge tools.',
            },
            {
              icon: 'bi-cpu',
              title: 'AI Development',
              desc: 'Natural Language Processing, Computer Vision, and Generative AI solutions for intelligent systems.',
            },
            {
              icon: 'bi-vr',
              title: 'Web-based AR/VR',
              desc: 'WebXR experiences that work seamlessly across devices — no app downloads required.',
            },
            {
              icon: 'bi-code-slash',
              title: 'Full Stack Integration',
              desc: 'Complete system architecture from frontend to backend and everything in between.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="icon-circle">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision container">
        <h2>Our Vision</h2>
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            To pioneer human-centric AI and 3D experiences for global brands,
            creating digital interactions that feel natural, intuitive, and
            transformative.
          </p>
          <p>
            We believe the future of digital experience lies at the intersection
            of artificial intelligence, three-dimensional visualization, and
            immersive reality. Our mission is to make these technologies
            accessible and impactful for businesses and users worldwide.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
