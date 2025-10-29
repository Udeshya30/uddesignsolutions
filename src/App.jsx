// // src/App.jsx
// import React, { Suspense, lazy } from 'react'
// import { Routes, Route } from 'react-router-dom'

// // shared layout components
// import Navbar from './components/ui/Navbar'
// import Footer from './components/ui/Footer'
// import ScrollTop from './components/ui/ScrollTop'

// // lazy-loaded pages
// const Home = lazy(() => import('./pages/Home'))
// const Projects = lazy(() => import('./pages/Projects'))
// const About = lazy(() => import('./pages/About'))
// const Contact = lazy(() => import('./pages/Contact'))

// export default function App() {
//   return (
//     <div className="app-root">
//       <Navbar />

//       <Suspense fallback={<div className="page-loading">Loading…</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>

//       <Footer />
//       <ScrollTop />
//     </div>
//   )
// }



// src/App.jsx
import React, { Suspense, lazy, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import ScrollTop from './components/ui/ScrollTop'
import IntroOverlay from './components/IntroOverlay'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && <IntroOverlay onFinish={() => setEntered(true)} />}

      {entered && (
        <div className="app-root">
          <Navbar />
          <Suspense fallback={<div className="page-loading">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollTop />
        </div>
      )}
    </>
  )
}
