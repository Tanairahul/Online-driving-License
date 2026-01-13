import React, { useState } from "react";

export default function SarathiAppointment() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Appointment Submitted");
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>SARATHI PARIVAHAN</h1>
        <p>Driving Licence Appointment</p>
      </header>

      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>

        <input
          name="name"
          placeholder="Applicant Name"
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email ID"
          onChange={handleChange}
        />

        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="DL">Driving Licence</option>
          <option value="LL">Learner Licence</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    background: "#eef2f5",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  header: {
    background: "#0a58ca",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
  },
  form: {
    background: "#fff",
    width: "380px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
