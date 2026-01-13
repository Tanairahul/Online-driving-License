import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user, setUser }) {
  const role = user.role || "user";
  const navigate = useNavigate();

  const [showLicenseForm, setShowLicenseForm] = useState(false);
  const [license, setLicense] = useState(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [showFind, setShowFind] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const [formData, setFormData] = useState({
    name: user.name,
    dob: "",
    address: "",
    bloodGroup: "",
    vehicleType: "",
    state: ""
  });

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  /* ================= LOAD LICENSE ================= */
  useEffect(() => {
    if (role !== "admin") {
      fetch(`http://localhost:5000/api/my-license/${user.idNumber}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.userId) {
            setLicense(data);
          }
        });
    }
  }, [user, role]);

  /* ================= FORM CHANGE ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= PAYMENT ================= */
  const handlePayment = async () => {
  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded. Refresh page.");
    return;
  }

  const res = await fetch("http://localhost:5000/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 500 })
  });

  const data = await res.json();

  const options = {
    key: "rzp_test_RvVigdnCuLwUop", // test key ok
    amount: data.order.amount,
    currency: "INR",
    name: "Driving License Portal",
    description: "License Fee",
    order_id: data.order.id,

    handler: function (response) {
      alert("Payment Successful");
      setPaymentDone(true);
      localStorage.setItem("paymentDone", "yes");
    },

    prefill: {
      name: user.name,
      email: user.email
    },

    theme: { color: "#3399cc" }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  /* ================= SUBMIT LICENSE ================= */
  const submitLicense = async (e) => {
    e.preventDefault();

    if (!paymentDone) {
      return alert("Please complete payment first");
    }

    const payload = {
      userId: user.idNumber,
      email: user.email,
      status: "PENDING",
      ...formData
    };

    await fetch("http://localhost:5000/api/apply-license", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLicense(payload);
    setShowLicenseForm(false);
    alert("Application submitted. Status: PENDING");
  };

  /* ================= FIND LICENSE ================= */
  const findMyLicense = async () => {
    const res = await fetch(
      `http://localhost:5000/api/my-license/${user.idNumber}`
    );
    const data = await res.json();

    if (!data || !data.userId) {
      setSearchResult({ error: "No license application found" });
    } else {
      setSearchResult(data);
    }
  };

  /* ================= UI ================= */
  return (
    <div style={styles.container}>
      <h1>Welcome, {user.name}</h1>

      {/* USER INFO */}
      <div style={styles.card}>
        <p><b>ID:</b> {user.idNumber}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {role}</p>
        <button onClick={logout} style={styles.logout}>Logout</button>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
        <button style={styles.btn} onClick={() => {
          setShowFind(!showFind);
          findMyLicense();
        }}>
          Find My License
        </button>

        {!license && role === "user" && (
          <button style={styles.btn} onClick={() => setShowLicenseForm(true)}>
            Apply for License
          </button>
        )}
      </div>

      {/* FIND RESULT */}
      {showFind && (
        <div style={styles.card}>
          <h3>My License Details</h3>

          {searchResult?.error && (
            <p style={{ color: "red" }}>{searchResult.error}</p>
          )}

          {searchResult?.userId && (
            <>
              <p><b>Status:</b> {searchResult.status}</p>

              {searchResult.status === "APPROVED" && (
                <>
                  <p><b>License No:</b> {searchResult.licenseNumber}</p>
                  <p><b>Valid Till:</b> {searchResult.validTill}</p>

                  {/* ✅ VIEW LICENSE BUTTON */}
                  <button
                    style={{ ...styles.btn, marginTop: 10 }}
                    onClick={() => navigate("/view-license", { state: { license } })}
                  >
                    View License
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}

      {/* LICENSE STATUS CARD */}
      {license && (
        <div style={styles.card}>
          <h3>License Status</h3>
          <p><b>Status:</b> {license.status}</p>

          {license.status === "APPROVED" && (
            <>
              <p><b>License No:</b> {license.licenseNumber}</p>
              <p><b>Valid Till:</b> {license.validTill}</p>

              {/* ✅ VIEW LICENSE BUTTON */}
            <button
  style={{ ...styles.btn, marginTop: 10 }}
  onClick={() => navigate("/view-license", { state: { license } })}
>
  View License
</button>
            </>
          )}
        </div>
      )}

      {/* APPLY FORM */}
      {showLicenseForm && !license && role === "user" && (
        <form style={styles.form} onSubmit={submitLicense}>
          <input type="date" name="dob" onChange={handleChange} required />
          <textarea name="address" placeholder="Address" onChange={handleChange} required />

          <select name="bloodGroup" onChange={handleChange} required>
            <option value="">Blood Group</option>
            <option>A+</option><option>B+</option><option>O+</option>
          </select>

          <select name="vehicleType" onChange={handleChange} required>
            <option value="">Vehicle</option>
            <option>Two Wheeler</option>
            <option>Four Wheeler</option>
          </select>

          <select name="state" onChange={handleChange} required>
            <option value="">State</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>UP</option>
          </select>

          {!paymentDone && (
            <button type="button" onClick={handlePayment} style={styles.pay}>
              Pay ₹500
            </button>
          )}

          <button type="submit" style={styles.submit}>
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  container: { padding: 30, background: "#f2f2f2", minHeight: "100vh" },
  card: { background: "#fff", padding: 20, marginBottom: 15, borderRadius: 8 },
  btn: { padding: 12, background: "#1890ff", color: "#fff", border: "none", borderRadius: 6 },
  logout: { background: "red", color: "#fff", padding: 8, border: "none" },
  form: { background: "#fff", padding: 20, display: "flex", gap: 10, flexDirection: "column" },
  pay: { background: "#fa8c16", color: "#fff", padding: 10 },
  submit: { background: "#52c41a", color: "#fff", padding: 10 }
};
