import React from "react";

export default function PUCDashboard() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>PUC Dashboard</h1>
        <p>Pollution Under Control Certificate Statistics</p>
      </header>

      {/* SUMMARY STATISTICS */}
      <section style={styles.summarySection}>
        <div style={styles.summaryCard}>
          <h2>Total PUC Certificates</h2>
          <p>3,90,40,746</p>
        </div>
        <div style={styles.summaryCard}>
          <h2>Total Revenue (₹)</h2>
          <p>₹ 1,24,58,32,190</p>
        </div>
        <div style={styles.summaryCard}>
          <h2>PUC Centres</h2>
          <p>45,212</p>
        </div>
        <div style={styles.summaryCard}>
          <h2>Defaulters</h2>
          <p>1,24,578</p>
        </div>
      </section>

      {/* CHARTS */}
      <section style={styles.chartSection}>
        <div style={styles.chartBox}>
          <h3>Certificates Issued — Last 5 Years</h3>
          <div style={styles.chart}>
            <div style={{ ...styles.bar, height: "60%" }}>2019</div>
            <div style={{ ...styles.bar, height: "75%" }}>2020</div>
            <div style={{ ...styles.bar, height: "85%" }}>2021</div>
            <div style={{ ...styles.bar, height: "90%" }}>2022</div>
            <div style={{ ...styles.bar, height: "70%" }}>2023</div>
          </div>
        </div>

        <div style={styles.chartBox}>
          <h3>Revenue Trend (in ₹ Crores)</h3>
          <div style={styles.chart}>
            <div style={{ ...styles.bar, background: "#28a745", height: "50%" }}>2019</div>
            <div style={{ ...styles.bar, background: "#28a745", height: "60%" }}>2020</div>
            <div style={{ ...styles.bar, background: "#28a745", height: "80%" }}>2021</div>
            <div style={{ ...styles.bar, background: "#28a745", height: "90%" }}>2022</div>
            <div style={{ ...styles.bar, background: "#28a745", height: "75%" }}>2023</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © PUC Dashboard | Ministry of Road Transport & Highways
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Verdana, sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  summarySection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "18px",
    padding: "25px",
  },
  summaryCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    borderLeft: "6px solid #1e3a8a",
  },
  chartSection: {
    display: "flex",
    gap: "20px",
    padding: "25px",
    justifyContent: "center",
  },
  chartBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  chart: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: "220px",
    marginTop: "18px",
  },
  bar: {
    width: "48px",
    backgroundColor: "#0a58ca",
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    borderRadius: "6px 6px 0 0",
    paddingBottom: "4px",
  },
  footer: {
    textAlign: "center",
    padding: "14px",
    backgroundColor: "#111827",
    color: "#fff",
    marginTop: "30px",
    fontSize: "14px",
  },
};
