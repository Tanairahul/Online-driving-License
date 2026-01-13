import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";





export default function AdminPage() {
  const [applications, setApplications] = useState([]);
const navigate = useNavigate();

  // 🔐 admin info (login ke time localStorage me save hota hai)
  const admin = JSON.parse(localStorage.getItem("user"));

   const logout = () => {
  localStorage.removeItem("user");   // same as Dashboard
  navigate("/admin-login");          // admin login page
};

useEffect(() => {
  if (!admin) navigate("/admin-login");
}, [admin, navigate]);




  /* ================= LOAD ONLY PENDING ================= */
  const loadPending = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/pending", {
        headers: {
          email: admin?.email,
          password: admin?.password || "admin123" // demo ke liye
        }
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("HTML received:", text);
        alert("Server error: admin API not responding");
        return;
      }

      setApplications(data || []);
    } catch (err) {
      console.error("Error loading applications:", err);
    }
  }, [admin]);

  useEffect(() => {
    loadPending();
  }, [loadPending]);

  /* ================= APPROVE / REJECT ================= */
  const updateStatus = async (id, action) => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email: admin?.email,
          password: admin?.password || "admin123"
        },
        body: JSON.stringify({ id, action })
      });

      const data = await res.json();

      if (data.success) {
        alert(`Application ${action}`);
        loadPending();
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Panel – Pending Applications</h2>

      <button
  onClick={logout}
  style={{
    background: "#333",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: 5,
    cursor: "pointer"
  }}
>
  Logout
</button>


      {applications.length === 0 ? (
        <p>No pending applications</p>
      ) : (
        applications.map(app => (
          <div
            key={app._id}
            style={{
              background: "#fff",
              padding: 15,
              marginBottom: 10,
              borderRadius: 5
            }}
          >
            <p><b>User ID:</b> {app.userId}</p>
            <p><b>Email:</b> {app.email}</p>
            <p><b>Status:</b> {app.status}</p>

            <button
              style={{ background: "green", color: "#fff", marginRight: 10 }}
              onClick={() => updateStatus(app._id, "APPROVE")}
            >
              Approve
            </button>

            <button
              style={{ background: "red", color: "#fff" }}
              onClick={() => updateStatus(app._id, "REJECT")}
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}
