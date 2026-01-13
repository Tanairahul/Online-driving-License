import React from "react";

export default function VahanNPermit() {
  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <h1>National Permit System</h1>
        <p>Online National Permit — Vahan Parivahan</p>
      </header>

      {/* INTRO INFO */}
      <section style={styles.intro}>
        <p>
          The National Permit System enables centralized online framework for
          issuance and management of permits for goods vehicles across India.
        </p>
      </section>

      {/* PERMIT CARDS */}
      <section style={styles.cardGrid}>
        <div style={styles.card}>
          <h3>Apply for National Permit</h3>
          <p>Information about online application process.</p>
        </div>

        <div style={styles.card}>
          <h3>Renew National Permit</h3>
          <p>Guidelines for renewal process.</p>
        </div>

        <div style={styles.card}>
          <h3>Permit Fees & Charges</h3>
          <p>Fee structure and payment details.</p>
        </div>

        <div style={styles.card}>
          <h3>Documents Required</h3>
          <p>List of documents for National Permit application.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © Vahan National Permit | Ministry of Road Transport & Highways
      </footer>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eef2f5",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#0a58ca",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
  },
  intro: {
    padding: "20px 30px",
    fontSize: "15px",
    textAlign: "center",
    color: "#333",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
    padding: "25px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  footer: {
    textAlign: "center",
    padding: "12px",
    backgroundColor: "#222",
    color: "#fff",
    marginTop: "30px",
  },
};
