import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !idNumber) {
      alert("Email and ID required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, idNumber })
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>User Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="ID Number" value={idNumber} onChange={e => setIdNumber(e.target.value)} />
        <button onClick={login} disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>
        <p style={{ marginTop: 15 }}>
          New user? <span style={styles.link} onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffe0b2"
  },
  card: {
    width: 350,
    padding: 25,
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 0 15px rgba(0,0,0,.2)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
