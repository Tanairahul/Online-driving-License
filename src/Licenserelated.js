import React from "react";

export default function SarathiStatePage() {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1>SARATHI PARIVAHAN</h1>
        <p>State Selection Portal</p>
      </header>

      {/* MAIN BOX */}
      <main style={styles.mainBox}>
        <h2>Select Your State</h2>

        {/* Placeholder for removed dropdown */}
        <div style={styles.placeholder}>
          State selection dropdown removed<br/>
          Static UI only
        </div>

        <button style={styles.continueBtn}>Continue</button>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © Sarathi Parivahan | Ministry of Road Transport & Highways
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f2f4f7",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#0a58ca",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  mainBox: {
    backgroundColor: "#fff",
    width: "380px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  placeholder: {
    margin: "25px 0",
    padding: "20px",
    border: "2px dashed #ccc",
    borderRadius: "6px",
    color: "#555",
    fontSize: "14px",
  },
  continueBtn: {
    padding: "12px 20px",
    backgroundColor: "#0a58ca",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
  },
};
