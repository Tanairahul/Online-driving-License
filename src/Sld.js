import React from "react";

export default function VahanWelcome() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>VAHAN Portal</h1>
        <p>Welcome to Vehicle Registration System</p>
      </header>

      {/* WELCOME BOX */}
      <section style={styles.welcomeSection}>
        <h2>Welcome to VAHAN</h2>
        <p style={styles.subtitle}>
          This is a static UI clone of the Vahan welcome page.
        </p>

        {/* MENU / OPTIONS */}
        <div style={styles.menuGrid}>
          <div style={styles.card}>Vehicle Details</div>
          <div style={styles.card}>Driver Details</div>
          <div style={styles.card}>Registration Services</div>
          <div style={styles.card}>Permit Services</div>
          <div style={styles.card}>Reports</div>
          <div style={styles.card}>Help & Support</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © VAHAN Parivahan | Ministry of Road Transport & Highways
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7f9",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#0a58ca",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
  },
  welcomeSection: {
    margin: "30px auto",
    width: "80%",
    textAlign: "center",
  },
  subtitle: {
    color: "#444",
    marginBottom: "22px",
    fontSize: "16px",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "18px",
    padding: "0 30px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "22px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#222",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    cursor: "default",
  },
  footer: {
    marginTop: "40px",
    padding: "12px",
    textAlign: "center",
    background: "#222",
    color: "#fff",
    fontSize: "14px",
  },
};
