// // src/components/ui/Footer.jsx
// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="site-footer">
//       <div className="container footer-inner">
//         <div className="footer-brand">
//           <strong>UD Design Solutions</strong>
//           <p className="muted">3D • AI • AR/VR Studio</p>
//         </div>

//         <div className="footer-contact">
//           <a href="mailto:hello@uddesign.io" className="footer-link">
//             hello@uddesign.io
//           </a>
//           <p className="muted">Based in India 🇮🇳</p>
//         </div>

//         <div className="footer-social">
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <i className="bi bi-linkedin"></i>
//           </a>
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <i className="bi bi-github"></i>
//           </a>
//         </div>
//       </div>
//       <p className="footer-copy muted">© {new Date().getFullYear()} UD Design Solutions</p>
//     </footer>
//   )
// }


import React from 'react'
import '../../styles/components/_footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Brand + tagline */}
        <div className="footer-brand">
          <h3 className="footer-logo">UD Design Solutions</h3>
          <p className="footer-tagline">AI • 3D • AR/VR Innovation Studio</p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://linkedin.com/company/uddesignsolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/uddesignsolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://instagram.com/uddesignsolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">
          © {year} UD Design Solutions. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
