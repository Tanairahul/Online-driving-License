import React from "react";
import { Link } from "react-router-dom";

const NICUI = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f2f2f2" }}>

      {/* ===== HEADER ===== */}
      <div style={{
        background: "#0050a0",
        color: "#fff",
        padding: "15px",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0 }}>National Informatics Centre</h1>
        <p style={{ margin: 0 }}>Government of India</p>
      </div>

      {/* ===== NAVBAR ===== */}
      <div style={{
        background: "#003366",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        {["Home", "About NIC", "Services", "Projects", "Contact"].map(item => (
          <Link
            key={item}
           to="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px"
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* ===== BANNER ===== */}
      <div style={{
        background: "#e6eef7",
        padding: "30px",
        textAlign: "center"
      }}>
        <h2>Digital Governance for a Connected India</h2>
        <p>
          NIC provides end-to-end ICT solutions to Central & State Governments
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>

        <div style={cardStyle}>
          <h3>About NIC</h3>
          <p>
            NIC is the technology partner of the Government of India,
            supporting e-Governance initiatives nationwide.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Key Services</h3>
          <ul>
            <li>e-Governance</li>
            <li>Cloud & Data Centres</li>
            <li>Cyber Security</li>
            <li>GIS Services</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Latest Initiatives</h3>
          <p>
            Digital India, UMANG, DigiLocker, e-Office, and National Cloud
            MeghRaj.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Contact</h3>
          <p>Email: support@nic.in</p>
          <p>Phone: +91-11-2430-0000</p>
        </div>

      </div>

      {/* ===== FOOTER ===== */}
      <div style={{
        background: "#003366",
        color: "#fff",
        textAlign: "center",
        padding: "15px",
        marginTop: "20px"
      }}>
        © 2025 National Informatics Centre | Government of India
      </div>

    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

export default NICUI;
