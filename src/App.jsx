import React, { useEffect, useState } from "react";
import TopNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModelShowcase from "./components/ModelShowcase";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNavbar className={scrolled ? "scrolled" : ""} />
      <Hero />
      <ModelShowcase />
      {/* placeholder sections to test scroll */}
      <section id="projects" style={{ height: "100vh", background: "#111" }}></section>
      <section id="about" style={{ height: "100vh", background: "#222" }}></section>
      <section id="contact" style={{ height: "100vh", background: "#333" }}></section>
    </>
  );
}
