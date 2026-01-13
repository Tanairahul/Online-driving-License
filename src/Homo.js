import React from "react";

export default function VahanDashboard() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>VAHAN Dashboard</h1>
        <p>Vehicle Registration Statistics</p>
      </div>

      {/* SUMMARY CARDS */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Total Vehicles</h3>
          <h2>13.1 Cr</h2>
        </div>
        <div style={styles.card}>
          <h3>Transport</h3>
          <h2>2.8 Cr</h2>
        </div>
        <div style={styles.card}>
          <h3>Non-Transport</h3>
          <h2>10.3 Cr</h2>
        </div>
      </div>

      {/* FILTER + CHART SECTION */}
      <div style={styles.main}>
        {/* FILTER */}
        <div style={styles.filter}>
          <h3>Filters</h3>

          <label>State</label>
          <select style={styles.select}>
            <option>All States</option>
            <option>Delhi</option>
            <option>Rajasthan</option>
            <option>Maharashtra</option>
          </select>

          <label>Vehicle Type</label>
          <select style={styles.select}>
            <option>All</option>
            <option>Transport</option>
            <option>Non-Transport</option>
          </select>

          <button style={styles.button}>Apply Filter</button>
        </div>

        {/* CHART */}
        <div style={styles.chartBox}>
          <h3>Vehicle Registration Chart</h3>

          <div style={styles.chart}>
            <div style={{ ...styles.bar, height: "60%" }}>2019</div>
            <div style={{ ...styles.bar, height: "80%" }}>2020</div>
            <div style={{ ...styles.bar, height: "50%" }}>2021</div>
            <div style={{ ...styles.bar, height: "90%" }}>2022</div>
            <div style={{ ...styles.bar, height: "70%" }}>2023</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © VAHAN Dashboard | Government of India
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
  cards: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  card: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  main: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  filter: {
    width: "250px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  select: {
    width: "100%",
    padding: "8px",
    margin: "8px 0 15px",
  },
  button: {
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
    height: "200px",
    gap: "15px",
    marginTop: "20px",
  },
  bar: {
    width: "50px",
    background: "#0a58ca",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#222",
    color: "#fff",
  },
};
