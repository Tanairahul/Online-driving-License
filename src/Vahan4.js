import React from "react";

export default function Vahan4Dashboard() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>VAHAN Dashboard</h1>
        <p>Vehicle Registration & Trends Overview</p>
      </div>

      {/* STATISTICS CARDS */}
      <div style={styles.summary}>
        <div style={styles.card}>
          <h3>Total Vehicles Registered</h3>
          <h2>1,42,77,329</h2>
        </div>
        <div style={styles.card}>
          <h3>Personal Vehicles</h3>
          <h2>87,25,487</h2>
        </div>
        <div style={styles.card}>
          <h3>Commercial Vehicles</h3>
          <h2>55,51,842</h2>
        </div>
      </div>

      {/* CHART SECTIONS */}
      <div style={styles.chartsContainer}>
        {/* Registrations Trend */}
        <div style={styles.chartBox}>
          <h3>Registrations Over Time</h3>
          <div style={styles.chart}>
            <div style={{ ...styles.bar, height: "50%" }}>2019</div>
            <div style={{ ...styles.bar, height: "65%" }}>2020</div>
            <div style={{ ...styles.bar, height: "80%" }}>2021</div>
            <div style={{ ...styles.bar, height: "90%" }}>2022</div>
            <div style={{ ...styles.bar, height: "75%" }}>2023</div>
          </div>
        </div>

        {/* Vehicle Type Distribution */}
        <div style={styles.chartBox}>
          <h3>Vehicle Type Breakdown</h3>
          <div style={styles.chart}>
            <div style={{ ...styles.bar, background: "#28a745", height: "60%" }}>2W</div>
            <div style={{ ...styles.bar, background: "#ffc107", height: "45%" }}>3W</div>
            <div style={{ ...styles.bar, background: "#dc3545", height: "30%" }}>4W</div>
            <div style={{ ...styles.bar, background: "#007bff", height: "20%" }}>CV</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © VAHAN4 Dashboard | Ministry of Road Transport & Highways
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f7f7f7",
    minHeight: "100vh",
  },
  header: {
    background: "#0a58ca",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  summary: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginTop: "20px",
    padding: "0 20px",
  },
  card: {
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  chartsContainer: {
    display: "flex",
    gap: "20px",
    padding: "20px 40px",
    justifyContent: "center",
  },
  chartBox: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    flex: 1,
    textAlign: "center",
  },
  chart: {
    display: "flex",
    alignItems: "flex-end",
    height: "180px",
    gap: "10px",
    marginTop: "15px",
    justifyContent: "center",
  },
  bar: {
    width: "40px",
    background: "#0a58ca",
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    borderRadius: "4px 4px 0 0",
    paddingBottom: "4px",
  },
  footer: {
    marginTop: "40px",
    background: "#222",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
};
