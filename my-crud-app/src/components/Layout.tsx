import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h3 style={{ fontWeight: 800, letterSpacing: "-1px" }}>FRANCINE_FINALS</h3>
    </div>
    <div className="nav-links">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </div>
  </nav>
);

export const Footer = () => (
  <footer style={{ padding: "4rem 2rem", borderTop: "1px solid rgba(0,0,0,0.1)", textAlign: "center", opacity: 0.6 }}>
    <p>&copy; 2026 Francine Finals Assignment. Built with React + Vite.</p>
  </footer>
);

export const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <header style={{ marginBottom: "3rem" }}>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </header>
);
