import React from "react";

export default function VahanCNGWelcome() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>VAHAN CNG Maker</h1>
        <p>Welcome to CNG Vehicle Management</p>
      </header>

      {/* MAIN CONTENT */}
      <section style={styles.content}>
        <h2>Welcome!</h2>
        <p style={styles.subtitle}>
          This is a static UI clone of the Vahan CNG Maker welcome page.
        </p>

        {/* MENU / OPTIONS */}
        <div style={styles.cardGrid}>
          <div style={styles.card}>Register CNG Vehicle</div>
          <div style={styles.card}>CNG Conversion Details</div>
          <div style={styles.card}>CNG Certificate Upload</div>
          <div style={styles.card}>CNG Fees & Charges</div>
          <div style={styles.card}>CNG Status Check</div>
          <div style={styles.card}>Help & Support</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © VAHAN CNG Maker | Ministry of Road Transport & Highways
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fa",
    minHeight: "100vh",
  },
  header: {
    background: "#0a58ca",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  content: {
    textAlign: "center",
    padding: "30px 20px",
  },
  subtitle: {
    color: "#444",
    marginBottom: "24px",
    fontSize: "16px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "18px",
    padding: "0 30px",
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#222",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    cursor: "default",
  },
  footer: {
    marginTop: "40px",
    background: "#222",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
    fontSize: "14px",
  },
};
