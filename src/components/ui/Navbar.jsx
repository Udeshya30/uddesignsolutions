// // src/components/ui/Navbar.jsx
// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import logo from '/logo.png' // place logo.png in your public/ folder
// import '../../styles/components/_navbar.scss'

// export default function Navbar() {
//   return (
//     <header className="site-navbar">
//       <div className="container nav-inner">
//         <Link to="/" className="brand" aria-label="UD Design Solutions">
//           <img
//             src={logo}
//             alt="UD Design Solutions logo"
//             width="40"
//             height="40"
//             className="brand-logo"
//           />
//           <span className="brand-text">UD Design Solutions</span>
//         </Link>

//         <nav className="main-nav" aria-label="Main navigation">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               isActive ? 'nav-link active' : 'nav-link'
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               isActive ? 'nav-link active' : 'nav-link'
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'nav-link active' : 'nav-link'
//             }
//           >
//             About
//           </NavLink>

//           <a className="nav-cta" href="#contact">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   )
// }



import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/logo.png'
import '../../styles/components/_navbar.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="UD Design Solutions" onClick={closeMenu}>
          <img
            src={logo}
            alt="UD Design Solutions logo"
            width="40"
            height="40"
            className="brand-logo"
          />
          <span className="brand-text">UD Design Solutions</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className= "nav-cta"
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
