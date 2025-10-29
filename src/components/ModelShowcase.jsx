// // src/components/ModelShowcase.jsx
// import React, { useEffect, useState } from 'react'
// import '../styles/components/_modelshowcase.scss'

// export default function ModelShowcase() {
//   const [ready, setReady] = useState(false)

//   useEffect(() => {
//     // dynamically import to prevent SSR issues and speed up initial load
//     import('@google/model-viewer').then(() => setReady(true))
//   }, [])

//   return (
//     <section id="models" className="model-showcase">
//       <div className="container text-center">
//         <h2 className="section-title">3D Model Showcase</h2>
//         <p className="section-subtitle">
//           Explore interactive 3D models — rotate, zoom, and view in AR.
//         </p>

//         <div className="model-wrapper">
//           {ready ? (
//             <model-viewer
//               src="/models/sample1.glb"
//               poster="/models/poster.webp"
//               alt="3D sample model"
//               ar
//               ar-modes="webxr scene-viewer quick-look"
//               camera-controls
//               auto-rotate
//               interaction-prompt="auto"
//               loading="lazy"
//               shadow-intensity="1"
//               style={{ width: '100%', height: '480px' }}
//             />
//           ) : (
//             <div className="model-placeholder" role="img" aria-label="Model loading">
//               <div className="skeleton" />
//               <p>Loading 3D model…</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }






// src/components/ModelShowcase.jsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/components/_modelshowcase.scss'

export default function ModelShowcase() {
  const [ready, setReady] = useState(false)
  const [activeModel, setActiveModel] = useState(0)
  const [loading, setLoading] = useState(true)

  const models = [
    {
      name: 'Aviation Drone',
      file: '/models/sample1.glb',
      poster: '/models/poster.webp',
      thumb: '/models/poster.webp'
    },
    {
      name: 'Sports Car',
      file: '/models/sample.glb',
      poster: '/models/poster.webp',
      thumb: '/models/poster.webp'
    },
    {
      name: 'Modern Chair',
      file: '/models/sample1.glb',
      poster: '/models/poster.webp',
      thumb: '/models/poster.webp'
    },
    {
      name: 'Sci-Fi Helmet',
      file: '/models/sample.glb',
      poster: '/models/poster.webp',
      thumb: '/models/poster.webp'
    }
  ]

  useEffect(() => {
    import('@google/model-viewer').then(() => setReady(true))
  }, [])

  useEffect(() => {
    if (ready) {
      setLoading(true)
      const timeout = setTimeout(() => setLoading(false), 1500)
      return () => clearTimeout(timeout)
    }
  }, [activeModel, ready])

  const model = models[activeModel]

  return (
    <section id="models" className="model-showcase">
      <div className="container">
        <h2 className="section-title">3D Model Showcase</h2>
        <p className="section-subtitle">
          Explore high-fidelity 3D models rendered in real-time — with AR
          viewing and camera control.
        </p>

        <div className="model-content">
          {/* Sidebar selector */}
          <div className="model-sidebar">
            {models.map((m, i) => (
              <button
                key={m.name}
                className={`model-option ${i === activeModel ? 'active' : ''}`}
                onClick={() => setActiveModel(i)}
              >
                <img src={m.thumb} alt={m.name} />
                <span>{m.name}</span>
              </button>
            ))}
          </div>

          {/* Main viewer */}
          <div className="model-viewer-area">
            {ready ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={model.name}
                  className="model-wrapper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {loading && (
                    <div className="model-placeholder">
                      <div className="skeleton" />
                      <p>Loading {model.name}...</p>
                    </div>
                  )}

                  <model-viewer
                    key={model.file}
                    src={model.file}
                    poster={model.poster}
                    alt={model.name}
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    auto-rotate
                    shadow-intensity="1"
                    exposure="1"
                    interaction-prompt="auto"
                    reveal="auto"
                    onLoad={() => setLoading(false)}
                    style={{
                      opacity: loading ? 0 : 1,
                      transition: 'opacity 0.5s ease'
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="model-placeholder">
                <div className="skeleton" />
                <p>Loading 3D environment...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
