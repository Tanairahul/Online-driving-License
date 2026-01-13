import React, { useState } from "react";

export default function VahanLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2>VAHAN Login</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button style={styles.btn}>Login</button>
        </form>

        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e6e6e6",
    fontFamily: "Arial",
  },
  box: {
    width: "350px",
    padding: "25px",
    background: "#fff",
    borderRadius: "6px",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#0a58ca",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
