// // import React from "react";
// // import { Container, Button } from "react-bootstrap";
// // import "./hero.scss";

// // export default function Hero() {
// //   return (
// //     <section className="hero-section d-flex align-items-center justify-content-center text-center">
// //       {/* Background circles */}
// //       <div className="floating-circles">
// //         <span className="circle c1"></span>
// //         <span className="circle c2"></span>
// //         <span className="circle c3"></span>
// //         <span className="circle c4"></span>
// //     </div>


// //       <Container className="hero-content">
// //         <h1 className="hero-title">Ud Design Solutions</h1>
// //         <p className="hero-subtitle">
// //           AI Software Developer &amp; AR/VR/MR Specialist
// //         </p>

// //         <h2 className="hero-tagline">
// //           Building the Future with <span className="highlight">AI</span> and{" "}
// //           <span className="highlight">Immersive Tech</span>
// //         </h2>

// //         <div className="hero-buttons mt-4">
// //           <Button variant="primary" className="me-3 px-4 py-2">
// //             View Work
// //           </Button>
// //           <Button variant="outline-light" className="px-4 py-2">
// //             Contact Me
// //           </Button>
// //         </div>

// //         <div className="scroll-indicator mt-5">
// //           <div className="mouse">
// //             <div className="wheel"></div>
// //           </div>
// //           <span className="scroll-text">Scroll</span>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { Container, Button } from "react-bootstrap";
// import "./hero.scss";

// export default function Hero() {
//   const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setIsVisible(false);
//     };

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section className="hero-section d-flex align-items-center justify-content-center text-center">
//       {/* Background circles */}
//       <div className="floating-circles">
//         <span className="circle c1"></span>
//         <span className="circle c2"></span>
//         <span className="circle c3"></span>
//         <span className="circle c4"></span>
//       </div>

//       <Container className="hero-content">
//         <h1 className="hero-title">Ud Design Solutions</h1>
//         <p className="hero-subtitle">
//           AI Software Developer &amp; AR/VR/MR Specialist
//         </p>

//         <h2 className="hero-tagline">
//           Building the Future with <span className="highlight">AI</span> and{" "}
//           <span className="highlight">Immersive Tech</span>
//         </h2>

//         <div className="hero-buttons mt-4">
//           <Button variant="primary" className="me-3 px-4 py-2">
//             View Work
//           </Button>
//           <Button variant="outline-light" className="px-4 py-2">
//             Contact Me
//           </Button>
//         </div>

//         {/* Floating scroll indicator — follows mouse and hides on scroll */}
//         {!isMobile && isVisible && (
//           <div
//             className="scroll-indicator"
//             style={{
//               left: `${mousePos.x}px`,
//               top: `${mousePos.y}px`,
//             }}
//           >
//             <div className="mouse">
//               <div className="wheel"></div>
//             </div>
//             <span className="scroll-text">Scroll</span>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// }



import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import "./hero.scss";

export default function Hero() {
  const [targetPos, setTargetPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
  const [smoothPos, setSmoothPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => setTargetPos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setIsVisible(false);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Smooth animation loop
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.08, // adjust factor for smoothness
        y: prev.y + (targetPos.y - prev.y) * 0.08,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [targetPos]);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      {/* Background circles */}
      <div className="floating-circles">
        <span className="circle c1"></span>
        <span className="circle c2"></span>
        <span className="circle c3"></span>
        <span className="circle c4"></span>
      </div>

      <Container className="hero-content">
        <h1 className="hero-title">Ud Design Solutions</h1>
        <p className="hero-subtitle">
          AI Software Developer &amp; AR/VR/MR Specialist
        </p>

        <h2 className="hero-tagline">
          Building the Future with <span className="highlight">AI</span> and{" "}
          <span className="highlight">Immersive Tech</span>
        </h2>

        <div className="hero-buttons mt-4">
          <Button variant="primary" className="me-3 px-4 py-2">
            View Work
          </Button>
          <Button variant="outline-light" className="px-4 py-2">
            Contact Me
          </Button>
        </div>

        {/* Floating scroll indicator */}
        {!isMobile && isVisible && (
          <div
            className="scroll-indicator"
            style={{
              left: `${smoothPos.x}px`,
              top: `${smoothPos.y}px`,
            }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span className="scroll-text">Scroll</span>
          </div>
        )}
      </Container>
    </section>
  );
}
