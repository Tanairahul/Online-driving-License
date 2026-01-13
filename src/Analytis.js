import React from "react";

const ParivahanAnalytics = () => {
  return (
    <div style={styles.body}>

      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>Parivahan Analytics Portal</h1>
        <p style={{ margin: 0 }}>
          Data Dashboard by Ministry of Road Transport & Highways
        </p>
      </header>

      {/* STAT CARDS */}
      <div style={styles.container}>

        {/* Vahan Analytics */}
        <InfoCard title="Vahan Public Dashboard">
          <p>Total Vehicle Registered (Till Date): 41.24 Cr</p>
          <p>Current Year: 2.74 Cr</p>
          <p>Total Applications Submitted (Till Date): 54.10 Cr</p>
          <p>Total Revenue Generated (Till Date): 888,721.48 Cr</p>
        </InfoCard>

        {/* Sarathi Analytics */}
        <InfoCard title="Sarathi Public Dashboard">
          <p>Total Driving Licence Issued (Till Date): 22.53 Cr</p>
          <p>Current Year: 64.71 L</p>
          <p>Total Applications Submitted (Till Date): 29.93 Cr</p>
          <p>Total Revenue Generated (Till Date): 18,198.57 Cr</p>
        </InfoCard>

        {/* E‑Challan Analytics */}
        <InfoCard title="E‑Challan Public Dashboard">
          <p>Total Challans Issued (Till Date): 40.00 Cr</p>
          <p>Current Year: 9.25 Cr</p>
          <p>Challans Sent to Court (Till Date): 11.10 Cr</p>
          <p>Total Revenue Generated (Till Date): 60,802.71 Cr</p>
        </InfoCard>

      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        Analytics by NIC • Government of India
      </footer>

    </div>
  );
};

const InfoCard = ({ title, children }) => (
  <div style={styles.card}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    {children}
  </div>
);

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#f6f6f6",
    margin: 0,
    padding: 0
  },
  header: {
    textAlign: "center",
    background: "#003366",
    color: "#fff",
    padding: "20px"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    minHeight: "180px"
  },
  footer: {
    textAlign: "center",
    padding: "14px",
    background: "#003366",
    color: "#fff",
    marginTop: "30px"
  }
};

export default ParivahanAnalytics;
