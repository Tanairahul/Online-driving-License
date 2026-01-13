import React from "react";

export default function SarathiTextLink() {
  const handleClick = () => {
    // redirect to the real Parivahan state selection page
    window.location.href = "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Parivahan Sewa</h2>

      <p style={styles.text}>
        To select your state for Sarathi services (Learner License / Driving License / Appointments),
        please use the official Parivahan state selection page.
      </p>

      <p style={styles.link} onClick={handleClick}>
        👉 Go to Sarathi State Selection
      </p>

      <p style={styles.note}>
        (Click the above link to proceed to the state selection page on Parivahan)
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px"
  },
  title: {
    color: "#0a3d62",
    fontSize: "24px",
    marginBottom: "12px"
  },
  text: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "18px"
  },
  link: {
    fontSize: "18px",
    color: "#0b3c5d",
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "8px"
  },
  note: {
    fontSize: "12px",
    color: "#555"
  }
};
