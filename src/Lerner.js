import React, { useState, useEffect } from "react";

const API = "http://localhost:5000";

export default function App() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("login"); // login | otp | dashboard | register
  const [msg, setMsg] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    dob: "",
    mobile: "",
    address: "",
    vehicleType: ""
  });
  const [license, setLicense] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedInEmail");
    if (saved) {
      setLoggedInEmail(saved);
      setStep("dashboard");
      fetchLicense(saved);
    }
  }, []);

  // ========== FETCH LICENSE ==========
  const fetchLicense = async (email) => {
    const res = await fetch(`${API}/api/check-license/${email}`);
    const data = await res.json();
    if (data.success) setLicense(data.data);
  };

  // ========== SEND OTP ==========
  const sendOtp = async () => {
    if (!email) return setMsg("Email is required");

    const res = await fetch(`${API}/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setStep("otp");
      setMsg("OTP sent to your email");
    } else {
      setStep("register");
      setMsg("Email not registered. Please register first.");
    }
  };

  // ========== VERIFY OTP ==========
  const verifyOtp = async () => {
    if (!otp) return setMsg("Enter OTP");
    const res = await fetch(`${API}/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("loggedInEmail", email);
      setLoggedInEmail(email);
      setStep("dashboard");
      fetchLicense(email);
    } else {
      setMsg("Invalid OTP");
    }
  };

  // ========== REGISTER ==========
  const register = async () => {
    if (!email) return setMsg("Email required");
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setStep("otp");
      setMsg("OTP sent to your email. Enter OTP to login.");
    } else {
      setMsg(data.message || "Registration failed");
    }
  };

  // ========== FORM HANDLER ==========
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ========== PAYMENT ==========
  const payNow = async () => {
    for (let key in form) {
      if (!form[key]) {
        alert("Please fill all fields");
        return;
      }
    }
    try {
      const orderRes = await fetch(`${API}/api/create-order`, { method: "POST" });
      const order = await orderRes.json();

      const options = {
        key: "rzp_test_Rtq5kCn7m7l",
        amount: order.amount,
        currency: "INR",
        name: "Learner License",
        description: "Learner License Fee ₹100",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch(`${API}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              licenseData: { ...form, email: loggedInEmail, stateCode: "DL" }
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setLicense(verifyData.data);
            alert("License created successfully! Pending approval.");
          } else {
            alert("Payment verification failed");
          }
        },
        theme: { color: "#0a3d62" }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInEmail");
    setLoggedInEmail("");
    setStep("login");
    setLicense(null);
  };

  // ================= RENDER =================
  if (step === "login")
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Login</h2>
        <input placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <button onClick={sendOtp} style={styles.button}>Send OTP</button>
        <p style={{ color: "red" }}>{msg}</p>
      </div>
    );

  if (step === "register")
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Register</h2>
        <input placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <button onClick={register} style={styles.button}>Register</button>
        <button onClick={() => setStep("login")} style={{...styles.button, background: "gray", marginLeft: "10px"}}>Back to Login</button>
        <p style={{ color: "red" }}>{msg}</p>
      </div>
    );

  if (step === "otp")
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Enter OTP</h2>
        <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
        <br /><br />
        <button onClick={verifyOtp} style={styles.button}>Verify OTP</button>
        <p style={{ color: "red" }}>{msg}</p>
      </div>
    );

  if (step === "dashboard")
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <h2>Welcome, {loggedInEmail}</h2>
        <button onClick={logout} style={{ ...styles.button, background: "red" }}>Logout</button>

        {!license && (
          <>
            <h3>Learner License Form</h3>
            <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
            <input name="fatherName" placeholder="Father Name" onChange={handleChange} /><br /><br />
            <input type="date" name="dob" onChange={handleChange} /><br /><br />
            <input name="mobile" placeholder="Mobile" onChange={handleChange} /><br /><br />
            <input name="address" placeholder="Address" onChange={handleChange} /><br /><br />
            <select name="vehicleType" onChange={handleChange}>
              <option value="">Select Vehicle</option>
              <option value="Two Wheeler">Two Wheeler</option>
              <option value="Four Wheeler">Four Wheeler</option>
            </select><br /><br />
            <button onClick={payNow} style={styles.button}>Pay ₹100 & Submit</button>
          </>
        )}

        {license && (
          <div style={styles.licenseCard}>
            <div style={styles.header}>
              GOVERNMENT OF INDIA
              <div style={styles.subHeader}>Learner Driving License</div>
            </div>
            <div style={styles.body}>
              <div style={styles.photoBox}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Holder" style={styles.photo} />
              </div>
              <div style={styles.details}>
                <p><b>LL No:</b> {license.licenseNumber}</p>
                <p><b>Name:</b> {license.name}</p>
                <p><b>Father:</b> {license.fatherName}</p>
                <p><b>DOB:</b> {license.dob}</p>
                <p><b>Mobile:</b> {license.mobile}</p>
                <p><b>Vehicle:</b> {license.vehicleType}</p>
                <p><b>Status:</b> {license.status}</p>
              </div>
            </div>
            <div style={styles.footer}>
              Issued by Transport Department • Valid for Learning Purpose Only
            </div>
          </div>
        )}
      </div>
    );

}

const styles = {
  button: { padding: "10px 25px", background: "#0a3d62", color: "#fff", border: "none", cursor: "pointer", borderRadius: "5px" },
  licenseCard: { width: "360px", margin: "30px auto", borderRadius: "12px", border: "2px solid #0a3d62", background: "#fff", boxShadow: "0 8px 20px rgba(0,0,0,0.2)", overflow: "hidden", textAlign: "left" },
  header: { background: "#0a3d62", color: "#fff", padding: "10px", textAlign: "center", fontWeight: "bold", fontSize: "14px" },
  subHeader: { fontSize: "12px", fontWeight: "normal" },
  body: { display: "flex", padding: "12px" },
  photoBox: { width: "90px", height: "110px", border: "1px solid #ccc", marginRight: "10px" },
  photo: { width: "100%", height: "100%", objectFit: "cover" },
  details: { fontSize: "12px", lineHeight: "1.6" },
  footer: { background: "#f1f2f6", textAlign: "center", fontSize: "10px", padding: "6px", borderTop: "1px solid #ccc" }
};
