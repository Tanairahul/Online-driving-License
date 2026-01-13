import React from "react";

export default function TCLogin() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2>VAHAN TC Reports</h2>
          <p>Transport Commissioner Reports Portal</p>
        </div>

        <div style={styles.formBox}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input type="text" style={styles.input} disabled />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" style={styles.input} disabled />
          </div>

          <button style={styles.button} disabled>
            Login
          </button>

          <p style={styles.note}>
            * This is a static UI — no input or action will work
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eef2f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "360px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  input: {
    padding: "10px 12px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#f4f4f4",
  },
  button: {
    padding: "12px",
    backgroundColor: "#0a58ca",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
  },
  note: {
    textAlign: "center",
    fontSize: "12px",
    color: "#888",
    marginTop: "10px",
  },
};
