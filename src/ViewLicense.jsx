import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function ViewLicense() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef();

  /* ================= FETCH LICENSE ================= */
  useEffect(() => {
    if (!user?.idNumber) return;

    fetch(`http://localhost:5000/api/my-license/${user.idNumber}`)
      .then(res => res.json())
      .then(data => {
        setLicense(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  /* ================= DOWNLOAD ================= */
  const downloadLicense = async () => {
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "Driving-License.png";
    link.click();
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login"; // ya "/" agar home page login hai
  };

  if (loading) return <p style={{ padding: 30 }}>Loading...</p>;
  if (!license) return <p style={{ padding: 30 }}>License not found</p>;

  return (
    <div style={styles.page}>
      {/* LICENSE CARD */}
      <div ref={cardRef} style={styles.card}>
        {/* HEADER */}
        <div style={styles.header}>
          <h2 style={{ margin: 0 }}>Driving License</h2>
          <p style={styles.sub}>Government of India</p>
        </div>

        {/* BODY */}
        <div style={styles.body}>
          <div style={styles.row}>
            <span>Name</span>
            <b>{license.name}</b>
          </div>

          <div style={styles.row}>
            <span>Email</span>
            <b>{license.email}</b>
          </div>

          <div style={styles.row}>
            <span>License No</span>
            <b style={styles.licenseNo}>{license.licenseNumber}</b>
          </div>

          <div style={styles.row}>
            <span>Vehicle Type</span>
            <b>{license.vehicleType}</b>
          </div>

          <div style={styles.row}>
            <span>Issue Date</span>
            <b>{license.issueDate}</b>
          </div>

          <div style={styles.row}>
            <span>Valid Till</span>
            <b>{license.validTill}</b>
          </div>
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>Status: APPROVED</div>
      </div>

      {/* ACTION BUTTONS */}
      <div style={styles.actions}>
        <button style={styles.downloadBtn} onClick={downloadLicense}>
          ⬇ Download License
        </button>

        <button style={styles.printBtn} onClick={() => window.print()}>
          🖨 Print
        </button>
      </div>

      {/* LOGOUT BUTTON */}
      <button style={styles.logoutBtn} onClick={logout}>
        🚪 Logout
      </button>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f2f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40
  },

  card: {
    width: 380,
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
    overflow: "hidden"
  },

  header: {
    background: "linear-gradient(135deg, #1d39c4, #597ef7)",
    color: "#fff",
    padding: 20,
    textAlign: "center"
  },

  sub: {
    margin: 0,
    fontSize: 13,
    opacity: 0.9
  },

  body: {
    padding: 20
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
    fontSize: 14
  },

  licenseNo: {
    color: "#1d39c4",
    letterSpacing: 1
  },

  footer: {
    background: "#f6ffed",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#237804"
  },

  actions: {
    marginTop: 20,
    display: "flex",
    gap: 12
  },

  downloadBtn: {
    background: "#52c41a",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14
  },

  printBtn: {
    background: "#1677ff",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14
  },

  logoutBtn: {
    marginTop: 16,
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "10px 30px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14
  }
};
