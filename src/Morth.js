import React from "react";
import { Link } from "react-router-dom";
const MORTHUI = () => {
  return (
    <div style={styles.body}>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <img
            src="https://morth.nic.in/sites/default/themes/morth/logo.png"
            alt="MoRTH Logo"
            style={styles.logo}
          />
          <div style={{ textAlign: "left" }}>
            <h2 style={{ margin: 0 }}>Ministry of Road Transport & Highways</h2>
            <p style={styles.subTitle}>
              Government of India
            </p>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        {[
          "Home",
          "About Us",
          "Acts & Rules",
          "Projects",
          "Schemes",
          "Contacts",
        ].map((item) => (
          < Link key={item} to="#" style={styles.navLink}>
            {item}
          </Link>
        ))}
      </nav>

      {/* BANNER */}
      <section style={styles.banner}>
        <h1>Dedicated to Road Safety and Development</h1>
        <p>
          Serving the Nation with Sustainable Transport & Infrastructure Initiatives
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div style={styles.gridContainer}>
        <Card title="About MoRTH">
          The Ministry is responsible for formulation and administration of rules,
          regulations and laws relating to road transport, national highways and
          transport research.
        </Card>

        <Card title="Vision">
          Safe, Efficient and Sustainable Transport Infrastructure Network for
          Economic Growth.
        </Card>

        <Card title="Key Initiatives">
          <ul>
            <li>National Highways Development Project</li>
            <li>Road Safety Initiatives</li>
            <li>Infrastructure Investments</li>
          </ul>
        </Card>

        <Card title="Contact Information">
          <p>Phone: +91-11-2306XXXX</p>
          <p>Email: support@morth.nic.in</p>
        </Card>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2025 Ministry of Road Transport & Highways | Government of India
      </footer>

    </div>
  );
};

const Card = ({ title, children }) => (
  <div style={styles.card}>
    <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
    {children}
  </div>
);

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#f7f7f7",
    margin: 0,
    padding: 0,
  },
  header: {
    background: "#004080",
    color: "white",
    padding: "20px 30px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logo: {
    width: "60px",
    height: "60px",
  },
  subTitle: {
    fontSize: "14px",
    marginTop: "4px",
  },
  navbar: {
    background: "#003366",
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "15px",
  },
  banner: {
    background: "#e2ebf7",
    textAlign: "center",
    padding: "30px 20px",
    margin: "10px 0",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  footer: {
    background: "#003366",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    marginTop: "20px",
    fontSize: "14px",
  },
};

export default MORTHUI;
