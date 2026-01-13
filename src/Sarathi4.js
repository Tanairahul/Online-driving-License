import React from "react";

export default function SarathiDashboard() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>SARATHI Dashboard</h1>
        <p>Driving Licence & Learner Licence Statistics</p>
      </div>

      {/* SUMMARY BOXES */}
      <div style={styles.summary}>
        <div style={styles.box}>
          <h3>Total Applications</h3>
          <h2>8.4 Cr</h2>
        </div>
        <div style={styles.box}>
          <h3>Driving Licences Issued</h3>
          <h2>6.9 Cr</h2>
        </div>
        <div style={styles.box}>
          <h3>Learner Licences</h3>
          <h2>1.5 Cr</h2>
        </div>
        <div style={styles.box}>
          <h3>Revenue Collected</h3>
          <h2>₹ 9,240 Cr</h2>
        </div>
      </div>

      {/* FILTER + CHART */}
      <div style={styles.content}>
        {/* FILTER PANEL */}
        <div style={styles.filter}>
          <h3>Filter</h3>

          <label>State</label>
          <select style={styles.select}>
            <option>All States</option>
            <option>Rajasthan</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
          </select>

          <label>Licence Type</label>
          <select style={styles.select}>
            <option>All</option>
            <option>DL</option>
            <option>LL</option>
          </select>

          <label>Year</label>
          <select style={styles.select}>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>

          <button style={styles.btn}>Apply</button>
        </div>

        {/* CHART PANEL */}
        <div style={styles.chartBox}>
          <h3>Licence Issuance Trend</h3>

          <div style={styles.chart}>
            <div style={{ ...styles.bar, height: "60%" }}>Jan</div>
            <div style={{ ...styles.bar, height: "75%" }}>Feb</div>
            <div style={{ ...styles.bar, height: "55%" }}>Mar</div>
            <div style={{ ...styles.bar, height: "85%" }}>Apr</div>
            <div style={{ ...styles.bar, height: "70%" }}>May</div>
            <div style={{ ...styles.bar, height: "90%" }}>Jun</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © Sarathi Dashboard | Ministry of Road Transport & Highways
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f2f4f7",
    minHeight: "100vh",
  },
  header: {
    background: "#0a58ca",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    padding: "20px",
  },
  box: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  content: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  filter: {
    width: "260px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  select: {
    width: "100%",
    padding: "8px",
    margin: "8px 0 15px",
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#0a58ca",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  chartBox: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  chart: {
    display: "flex",
    alignItems: "flex-end",
    height: "220px",
    gap: "14px",
    marginTop: "20px",
  },
  bar: {
    width: "45px",
    background: "#0a58ca",
    color: "#fff",
    fontSize: "12px",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#222",
    color: "#fff",
  },
};
