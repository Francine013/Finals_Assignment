import React from "react";

// Home Components
export const Hero = () => (
  <section className="hero">
    <h1>Welcome to My Finals Portfolio</h1>
    <p>A modern React application showcasing state management, routing, and form handling.</p>
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <button className="theme-btn btn-default" style={{ width: "auto", padding: "0.75rem 1.5rem", borderRadius: "0.5rem" }}>Get Started</button>
      <button className="theme-btn btn-emerald" style={{ width: "auto", padding: "0.75rem 1.5rem", borderRadius: "0.5rem" }}>View Projects</button>
    </div>
  </section>
);

export const Features = () => (
  <div className="card-grid">
    <div className="card">
      <h3>Vite-Powered</h3>
      <p>Fast builds and Hot Module Replacement for a seamless developer experience.</p>
    </div>
    <div className="card">
      <h3>Context API</h3>
      <p>Centralized state management avoids prop-drilling and simplifies theme logic.</p>
    </div>
    <div className="card">
      <h3>React Router</h3>
      <p>Clean, declarative routing and navigation for modern web applications.</p>
    </div>
  </div>
);

// About Components
export const Bio = () => (
  <section>
    <h2>Creative Visionary</h2>
    <p>I am a developer focused on building an user-friendly interfaces that bridge the gap between design and technology. My work emphasizes clarity, responsiveness, and aesthetic excellence.</p>
  </section>
);

export const Skills = () => {
  const skills = ["React", "TypeScript", "ASP.NET Core", "CSS Grid", "Context API", "Vite"];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "2rem 0" }}>
      {skills.map(s => (
        <span key={s} style={{ padding: "0.5rem 1rem", background: "rgba(99, 102, 241, 0.1)", borderRadius: "2rem", fontWeight: 600 }}>{s}</span>
      ))}
    </div>
  );
};

export const Journey = () => (
  <div style={{ padding: "2rem", borderLeft: "4px solid var(--primary)", margin: "2rem 0" }}>
    <h3>Module 1-4 Complete</h3>
    <p>Successfully navigated through Infrastructure, Routing, and State Management.</p>
  </div>
);
