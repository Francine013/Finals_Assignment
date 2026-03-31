// A1: ContactInfo — static contact info component only (no form, no modal yet)
export const ContactInfo = () => (
  <div className="card-grid" style={{ maxWidth: "800px", margin: "0 auto" }}>
    <div className="card" style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📧</div>
      <h3>Email</h3>
      <p style={{ marginBottom: 0 }}>francine@example.com</p>
    </div>
    <div className="card" style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📍</div>
      <h3>Location</h3>
      <p style={{ marginBottom: 0 }}>Manila, Philippines</p>
    </div>
    <div className="card" style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💼</div>
      <h3>LinkedIn</h3>
      <p style={{ marginBottom: 0 }}>linkedin.com/in/francine</p>
    </div>
  </div>
);
