import React from "react";

export default function EChallanDashboard() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>e‑Challan Report</h1>
        <p>Parivahan e‑Challan Reporting Portal</p>
      </header>

      {/* TOP STATISTICS */}
      <section style={styles.stats}>
        <div style={styles.statCard}>
          <h3>Total Challans</h3>
          <h2>54,32,879</h2>
        </div>
        <div style={styles.statCard}>
          <h3>Pending Challans</h3>
          <h2>12,45,210</h2>
        </div>
        <div style={styles.statCard}>
          <h3>Cleared</h3>
          <h2>41,87,669</h2>
        </div>
      </section>

      {/* MIDDLE CONTENT */}
      <section style={styles.middle}>
        <div style={styles.mapPlaceholder}>
          <p>Map / Graph View Placeholder</p>
        </div>
        <div style={styles.summaryList}>
          <h3>Top Violations</h3>
          <ul>
            <li>Speeding</li>
            <li>Signal Jump</li>
            <li>Helmet Missing</li>
            <li>Seatbelt Not Worn</li>
            <li>Overloading</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © e‑Challan Parivahan | Government of India
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f2f4f7",
    minHeight: "100vh",
  },
  header: {
    background: "#0a58ca",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
  },
  stats: {
    display: "flex",
    gap: "18px",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap",
  },
  statCard: {
    background: "#fff",
    padding: "18px 25px",
    textAlign: "center",
    borderRadius: "8px",
    flex: "0 1 250px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  middle: {
    display: "flex",
    gap: "22px",
    padding: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  mapPlaceholder: {
    background: "#fff",
    flex: "2 1 450px",
    height: "260px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "18px",
  },
  summaryList: {
    background: "#fff",
    flex: "1 1 250px",
    padding: "18px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  footer: {
    marginTop: "36px",
    textAlign: "center",
    background: "#222",
    color: "#fff",
    padding: "10px",
    fontSize: "13px",
  },
};
