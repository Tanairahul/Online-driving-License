import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ApplyLicense({ user }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    address: "",
    dob: "",
    pincode: "",
    bloodGroup: "",
    photo: "",
    state: "Haryana",
    stateCode: "HR",
    vehicleType: "MCWG"
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= PHOTO ================= */
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setForm({ ...form, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  /* ================= PAYMENT ================= */
  const startPayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Create Order
      const orderRes = await axios.post(
        "http://localhost:5000/api/create-order"
      );

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // 🔴 frontend key
        amount: orderRes.data.amount,
        currency: "INR",
        name: "Driving License",
        description: "License Application Fee",
        order_id: orderRes.data.id,

        handler: async function (response) {
          // 2️⃣ VALID DATE
          const validFrom = new Date();
          const validUpto = new Date();
          validUpto.setFullYear(validFrom.getFullYear() + 20);

          // 3️⃣ VERIFY PAYMENT + SAVE LICENSE
          const verifyRes = await axios.post(
            "http://localhost:5000/api/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,

              licenseData: {
                ...form,
                mobile: user.mobile,
                validFrom,
                validUpto
              }
            }
          );

          if (verifyRes.data.success) {
            alert("✅ License Generated Successfully");
            navigate("/dashboard");
          } else {
            alert("❌ Payment Verification Failed");
          }
        },

        prefill: {
          name: form.name,
          contact: user.mobile,
        },

        theme: { color: "#0984e3" }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("❌ Payment Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2>📝 Apply Driving License</h2>

        <form onSubmit={startPayment}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="fatherName" placeholder="Father Name" onChange={handleChange} required />

          <label>DOB</label>
          <input type="date" name="dob" onChange={handleChange} required />

          <textarea name="address" placeholder="Address" onChange={handleChange} required />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} required />
          <input name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required />

          <label style={styles.uploadBtn}>
            📷 Upload Photo
            <input type="file" accept="image/*" hidden onChange={handlePhoto} required />
          </label>

          {preview && <img src={preview} alt="License holder" style={styles.preview} />}

          <button disabled={loading} style={styles.payBtn}>
            {loading ? "Processing..." : "💳 Pay ₹100 & Generate License"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#74ebd5,#acb6e5)",
    paddingTop: 40
  },
  box: {
    width: 360,
    margin: "auto",
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  },
  uploadBtn: {
    display: "block",
    margin: "10px 0",
    padding: 10,
    background: "#0984e3",
    color: "#fff",
    borderRadius: 8,
    cursor: "pointer"
  },
  preview: {
    width: 100,
    height: 120,
    border: "2px solid #000",
    objectFit: "cover",
    margin: "10px auto",
    display: "block"
  },
  payBtn: {
    marginTop: 15,
    width: "100%",
    padding: 12,
    background: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  }
};
