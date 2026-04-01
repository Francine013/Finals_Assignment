import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type ContactValues = { sender: string; message: string };

// ContactInfo — displayed alongside the form
export const ContactInfo = () => (
  <div className="card-grid" style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
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

// Submission Modal — theme-aware, no alert()
export const Modal = ({
  isOpen, onClose, data
}: { isOpen: boolean; onClose: () => void; data: ContactValues | null }) => {
  if (!isOpen || !data) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
        <h2 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
          Message Sent!
        </h2>
        <p style={{ fontWeight: 600 }}>Thank you, <strong>{data.sender}</strong>.</p>
        <div style={{
          padding: "1.5rem", background: "rgba(0,0,0,0.06)",
          borderRadius: "1rem", margin: "1.5rem 0", textAlign: "left"
        }}>
          <p style={{ fontStyle: "italic", marginBottom: 0, opacity: 0.9 }}>
            "{data.message}"
          </p>
        </div>
        <button onClick={onClose} style={{
          padding: "0.85rem 2.5rem", background: "var(--primary)",
          color: "white", border: "none", borderRadius: "0.75rem",
          cursor: "pointer", fontWeight: 700, fontSize: "1rem",
          transition: "var(--transition)"
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

// ContactForm — react-hook-form, uncontrolled inputs
export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>();
  const [modalData, setModalData] = useState<ContactValues | null>(null);

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setModalData(data);
    reset();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "1rem 1.25rem",
    borderRadius: "0.75rem", border: "1px solid rgba(128,128,128,0.25)",
    background: "rgba(255,255,255,0.07)", color: "inherit",
    fontSize: "1rem", outline: "none", transition: "var(--transition)"
  };

  return (
    <div style={{ maxWidth: "620px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Your Name
          </label>
          <input
            {...register("sender", { required: "Name is required" })}
            placeholder="Francine Obis"
            style={inputStyle}
          />
          {errors.sender && (
            <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>
              {errors.sender.message}
            </span>
          )}
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message here..."
            rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          {errors.message && (
            <span style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem", display: "block" }}>
              {errors.message.message}
            </span>
          )}
        </div>

        <button type="submit" style={{
          padding: "1rem", background: "var(--primary)", color: "white",
          border: "none", borderRadius: "0.75rem", fontSize: "1.125rem",
          fontWeight: 700, cursor: "pointer", transition: "var(--transition)"
        }}>
          Send Message 🚀
        </button>
      </form>

      <Modal isOpen={!!modalData} onClose={() => setModalData(null)} data={modalData} />
    </div>
  );
};
