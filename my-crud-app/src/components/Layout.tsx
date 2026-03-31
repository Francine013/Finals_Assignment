import { NavLink } from "react-router-dom";
import { useAppTheme } from "../context/ThemeContext";

// Theme Switcher — consumes ThemeContext via useAppTheme
const ThemeToggle = () => {
  const { setTheme } = useAppTheme();
  return (
    <div className="theme-toggle">
      <button className="theme-btn btn-default"   onClick={() => setTheme("default")}   title="Default"   />
      <button className="theme-btn btn-midnight"  onClick={() => setTheme("midnight")}  title="Midnight"  />
      <button className="theme-btn btn-emerald"   onClick={() => setTheme("emerald")}   title="Emerald"   />
      <button className="theme-btn btn-solarized" onClick={() => setTheme("solarized")} title="Solarized" />
    </div>
  );
};

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
    <ThemeToggle />
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
