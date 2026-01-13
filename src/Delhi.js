import React from "react";
import { Link } from "react-router-dom";

const DelhiTrafficUI = () => {
  return (
    <div style={styles.body}>

      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Delhi Traffic Police</h1>
        <p style={styles.headerSub}>Information & Services</p>
      </header>

      {/* NAVIGATION */}
      <nav style={styles.nav}>
        {[
          "Home",
          "About Traffic Police",
          "Road Safety & Education",
          "Maps",
          "Online Notice",
          "Feedback",
          "Helpline"
        ].map((label) => (
          <Link key={label} to="#" style={styles.navLink}>
            {label}
          </Link>
        ))}
      </nav>

      {/* MAIN CONTENT */}
      <main style={styles.main}>

        <section style={styles.section}>
          <h2>About This Portal</h2>
          <p>
            This portal provides essential traffic information, online notice
            payment, helpline numbers, road safety guidelines, maps and contact
            information for citizens navigating traffic regulations and enquiries.
          </p>
        </section>

        <section style={styles.cardsContainer}>
          <Card title="Online Notice / Challan">
            Check or pay your e‑challan/notice using vehicle number or notice
            number through the official portal links.
          </Card>

          <Card title="Road Safety & Education">
            Road safety tips, educational material, advisory for citizens and
            driving rules awareness programs.
          </Card>

          <Card title="Maps & Locations">
            Official traffic maps showing zones, checkpoints and routes.
          </Card>

          <Card title="Feedback & Help">
            Public feedback section to report issues, suggestions and complaints.
          </Card>
        </section>

        <section style={styles.helpline}>
          <h3>Helpline Numbers</h3>
          <ul>
            <li>Traffic Helpline: 25844444</li>
            <li>Women Helpline: 1091</li>
            <li>North East People Helpline: 1093</li>
            <li>Senior Citizen Helpline: 1291</li>
          </ul>
          <p>
            Email: <a href="mailto:info@traffic.delhipolice.gov.in">info@traffic.delhipolice.gov.in</a>
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2025 Delhi Traffic Police | All Rights Reserved
      </footer>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div style={styles.card}>
    <h4 style={styles.cardTitle}>{title}</h4>
    <p style={styles.cardText}>{children}</p>
  </div>
);

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    background: "#f7f7f7"
  },
  header: {
    background: "#003366",
    color: "#fff",
    padding: "20px",
    textAlign: "center"
  },
  headerTitle: { fontSize: "28px", margin: 0 },
  headerSub: { fontSize: "16px", marginTop: "4px" },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    background: "#00509e",
    padding: "10px 0"
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px"
  },
  main: {
    padding: "20px"
  },
  section: {
    marginBottom: "20px"
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginTop: "10px"
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "6px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
  },
  cardTitle: { fontSize: "18px", margin: "0 0 8px 0" },
  cardText: { fontSize: "14px", margin: 0 },
  helpline: {
    marginTop: "30px",
    padding: "15px",
    background: "#eef3fb",
    borderRadius: "6px"
  },
  footer: {
    background: "#003366",
    color: "#fff",
    textAlign: "center",
    padding: "14px",
    marginTop: "30px",
    fontSize: "14px"
  }
};

export default DelhiTrafficUI;
