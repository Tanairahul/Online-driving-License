import React from "react";

export default function ParivahanContact() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Contact Us</h1>
        <p>Parivahan.gov.in – Ministry of Road Transport & Highways</p>
      </header>

      {/* Contact Cards */}
      <section style={styles.cardsSection}>
        <div style={styles.card}>
          <h3>Website / Web Information Manager</h3>
          <p><strong>Name:</strong> Sh. S.K. Geeva</p>
          <p><strong>Designation:</strong> Under Secretary (MVL)</p>
          <p><strong>Email:</strong> <a href="mailto:wim.rth@nic.in">wim.rth@nic.in</a></p>
        </div>

        <div style={styles.card}>
          <h3>Helpdesk – Vehicle Registration & Services</h3>
          <p><strong>Email:</strong> <a href="mailto:helpdesk-vahan@gov.in">helpdesk-vahan@gov.in</a></p>
          <p><strong>Phone:</strong> +91-120-4925505</p>
          <p><strong>Timing:</strong> 06:00 AM – 12:00 Midnight</p>
        </div>

        <div style={styles.card}>
          <h3>Helpdesk – Driving Licence & Learner License</h3>
          <p><strong>Email:</strong> <a href="mailto:helpdesk-sarathi@gov.in">helpdesk-sarathi@gov.in</a></p>
        </div>

        <div style={styles.card}>
          <h3>mParivahan Support</h3>
          <p><strong>Email:</strong> <a href="mailto:helpdesk-mparivahan@gov.in">helpdesk-mparivahan@gov.in</a></p>
        </div>

        <div style={styles.card}>
          <h3>eChallan Support</h3>
          <p><strong>Email:</strong> <a href="mailto:helpdesk-echallan@gov.in">helpdesk-echallan@gov.in</a></p>
        </div>

        <div style={styles.card}>
          <h3>Transport Analytics Team</h3>
          <p>5th Floor, National Informatics Centre</p>
          <p>A-Block CGO Complex, Lodhi Road, New Delhi – 110003</p>
          <p><strong>Email:</strong> <a href="mailto:parivahan.analytics@nic.in">parivahan.analytics@nic.in</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © Parivahan.gov.in | Ministry of Road Transport & Highways
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
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  cardsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "25px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  footer: {
    textAlign: "center",
    background: "#222",
    color: "#fff",
    padding: "14px",
    marginTop: "20px",
  },
};
