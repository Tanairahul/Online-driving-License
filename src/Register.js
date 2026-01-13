import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    vehicleType: "",
    bloodGroup: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    if (Object.values(form).some((val) => !val)) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.success) {
        navigate("/login"); // Redirect to login page
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Create Account</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="vehicleType" placeholder="Vehicle Type" onChange={handleChange} />
        <input name="bloodGroup" placeholder="Blood Group" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />

        <button onClick={register} disabled={loading}>
          {loading ? "Please wait..." : "Register"}
        </button>

        <p style={{ marginTop: 15 }}>
          Already registered?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
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
    background: "#e0f7fa"
  },
  card: {
    width: 400,
    padding: 30,
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
