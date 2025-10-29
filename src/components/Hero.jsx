// // src/components/Hero.jsx
// import React, { useEffect, useState, useRef } from 'react'
// import '../styles/components/_hero.scss'

// export default function Hero() {
//   const isClient = typeof window !== 'undefined'
//   const [target, setTarget] = useState({
//     x: isClient ? window.innerWidth / 2 : 0,
//     y: isClient ? window.innerHeight / 2 : 0
//   })
//   const [pos, setPos] = useState(target)
//   const rafRef = useRef(null)

//   useEffect(() => {
//     if (!isClient) return

//     const onMove = (e) => setTarget({ x: e.clientX, y: e.clientY })

//     const animate = () => {
//       setPos((prev) => ({
//         x: prev.x + (target.x - prev.x) * 0.08,
//         y: prev.y + (target.y - prev.y) * 0.08
//       }))
//       rafRef.current = requestAnimationFrame(animate)
//     }

//     window.addEventListener('mousemove', onMove)
//     rafRef.current = requestAnimationFrame(animate)

//     return () => {
//       cancelAnimationFrame(rafRef.current)
//       window.removeEventListener('mousemove', onMove)
//     }
//   }, [target, isClient])

//   return (
//     <section className="hero" id="home" aria-label="Intro section">
//       <div className="hero-inner container">
//         <div className="hero-copy">
//           <h1>
//             Building the Future with <span className="highlight">AI</span> &
//             <span className="highlight"> Immersive Tech</span>
//           </h1>
//           <p className="lead">
//             We combine 3D design, AI, and AR/VR innovation to create visually
//             striking digital experiences.
//           </p>

//           <div className="hero-actions">
//             <a className="btn btn-primary" href="#projects">
//               View Work
//             </a>
//             <a className="btn btn-outline" href="#contact">
//               Contact Us
//             </a>
//           </div>
//         </div>

//         <div className="hero-visual" aria-hidden>
//           <div
//             className="floating-dot"
//             style={{
//               transform: `translate(${pos.x / 60}px, ${pos.y / 60}px)`
//             }}
//           />
//           <img
//             src="/thumbnails/project1.jpg"
//             alt="3D showcase preview"
//             className="hero-preview"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
// src/components/Hero.jsx
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/components/_hero.scss'

export default function Hero() {
  const isClient = typeof window !== 'undefined'
  const [target, setTarget] = useState({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isClient) return

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setTarget({ x, y })
    }

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.08,
        y: prev.y + (target.y - prev.y) * 0.08
      }))
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
    }
  }, [target, isClient])

  return (
    <section className="hero" id="home" aria-label="Intro section">
      <div className="hero-bg" aria-hidden />
      <div className="hero-inner container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>
            <span className="fade-line">Crafting Tomorrow’s</span>
            <br />
            <span className="highlight">3D, AI & Immersive Experiences</span>
          </h1>
          <p className="lead">
            We blend <strong>art, code, and intelligence</strong> — designing visuals that move and
            technologies that inspire.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Work
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-hidden
          style={{
            transform: `translate(${pos.x * 20}px, ${pos.y * 20}px)`
          }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <div
            className="floating-dot"
            style={{
              transform: `translate(${pos.x * 60}px, ${pos.y * 60}px)`
            }}
          />
          <img
            src="/thumbnails/project1.jpg"
            alt="3D showcase preview"
            className="hero-preview"
          />
        </motion.div>
      </div>
    </section>
  )
}
