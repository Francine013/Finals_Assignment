import { Navbar, Footer, Header } from "../components/Layout";
import { Hero, Features, Bio, Skills, Journey } from "../components/PageComponents";
import { ContactInfo, ContactForm } from "../components/ContactComponents";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <Navbar />
    <Hero />
    <main className="container">
      <Header title="Innovative Features" subtitle="Explore the core technologies used in this project." />
      <Features />
    </main>
    <Footer />
  </>
);

export const About = () => (
  <>
    <Navbar />
    <main className="container">
      <Header title="About Me" subtitle="Francine Mei Obis — BSIT student at Lyceum of Alabang" />
      <Bio />
      <Skills />
      <Journey />
    </main>
    <Footer />
  </>
);

export const Contact = () => (
  <>
    <Navbar />
    <main className="container">
      <Header title="Get In Touch" subtitle="Have a question or just want to say hello? Send a message below!" />
      <ContactInfo />
      <ContactForm />
    </main>
    <Footer />
  </>
);

export const NotFound = () => (
  <div style={{
    height: "100vh", display: "flex", flexDirection: "column",
    justifyContent: "center", alignItems: "center", textAlign: "center"
  }}>
    <h1 style={{ fontSize: "8rem", opacity: 0.2 }}>404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The link you followed may be broken, or the page may have been removed.</p>
    <Link to="/" style={{
      textDecoration: "none", background: "var(--primary)",
      color: "white", padding: "1rem 2rem", borderRadius: "0.5rem", fontWeight: 700
    }}>
      Back to Safety
    </Link>
  </div>
);
