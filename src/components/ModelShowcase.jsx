import React, { useEffect } from "react";
import "@google/model-viewer";
import "./modelshowcase.scss";

export default function ModelShowcase() {
  useEffect(() => {
    // Optional: dynamically import for SSR safety
    import("@google/model-viewer");
  }, []);

  return (
    <section id="models" className="model-showcase-section">
      <div className="container text-center">
        <h2 className="section-title">3D Interactive Showcase</h2>
        <p className="section-subtitle">
          Explore interactive 3D models — rotate, zoom, and experience our design quality.
        </p>

        <div className="model-viewer-wrapper">
          <model-viewer
            src="/models/sample.glb"  // 👈 Replace with your model path
            alt="3D robot model"
            auto-rotate
            camera-controls
            shadow-intensity="1"
            exposure="1"
            interaction-prompt="none"
            ar
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
          ></model-viewer>
        </div>
      </div>
    </section>
  );
}
