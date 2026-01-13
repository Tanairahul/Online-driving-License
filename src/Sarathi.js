import React from "react";

function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1>Sarathi Parivahan</h1>
        <p>Ministry of Road Transport & Highways</p>
      </div>

      {/* Services Section */}
      <div style={styles.container}>
        <h2>Online Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Driving Licence</h3>
            <ul>
              <li>Apply for Driving Licence</li>
              <li>DL Status</li>
              <li>Renewal of DL</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Learning Licence</h3>
            <ul>
              <li>Apply for Learner Licence</li>
              <li>LL Slot Booking</li>
              <li>LL Status</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Appointments</h3>
            <ul>
              <li>Slot Booking</li>
              <li>Modify Appointment</li>
              <li>Cancel Appointment</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Other Services</h3>
            <ul>
              <li>DL Extract</li>
              <li>Address Change</li>
              <li>Duplicate DL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2025 Sarathi Parivahan | Government of India</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#0a58ca",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  container: {
    padding: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  footer: {
    marginTop: "40px",
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
};

export default App;
