import React from "react";

export default function SarathiContactUI() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Parivahan Sewa</h2>
        <p style={styles.subtitle}>Ministry of Road Transport & Highways</p>

        <hr style={styles.hr} />

        <p style={styles.text}>
          For any assistance related to Learner License, Driving License,
          appointment booking, or application status, please contact the
          Parivahan Helpdesk.
        </p>

        <div style={styles.section}>
          <p><b>📞 Helpline Number:</b></p>
          <p style={styles.contact}>+91-120-2459169</p>
        </div>

        <div style={styles.section}>
          <p><b>📧 Email Support:</b></p>
          <p style={styles.contact}>support-parivahan@gov.in</p>
        </div>

        <div style={styles.section}>
          <p><b>🕘 Working Hours:</b></p>
          <p className="text">Monday to Friday (09:00 AM – 06:00 PM)</p>
        </div>

        <div style={styles.footer}>
          <p>© Government of India</p>
        </div>
      </div>
    </div>
  );
}

/* ======================
   Styles (Text UI)
====================== */
const styles = {
  page: {
    minHeight: "100vh",
    background: "#eef2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    width: "420px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  },
  title: {
    textAlign: "center",
    color: "#0b3c5d",
    marginBottom: "4px"
  },
  subtitle: {
    textAlign: "center",
    fontSize: "13px",
    color: "#555",
    marginBottom: "10px"
  },
  hr: {
    margin: "15px 0"
  },
  text: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.6"
  },
  section: {
    marginTop: "12px"
  },
  contact: {
    fontSize: "15px",
    color: "#0b3c5d",
    marginLeft: "10px"
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "#777"
  }
};
