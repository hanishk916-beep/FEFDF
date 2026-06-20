import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#1e293b",
        color: "white",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>✈ Airline Crew</h2>

      <hr />

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <Link to="/dashboard" style={linkStyle}>
          📊 Dashboard
        </Link>

        <Link to="/roster" style={linkStyle}>
          👨‍✈️ Crew Roster
        </Link>

        <Link to="/leave" style={linkStyle}>
          📝 Leave Requests
        </Link>

        <Link to="/assignment" style={linkStyle}>
          ✈ Flight Assignments
        </Link>

        <Link to="/duty" style={linkStyle}>
          ⏱ Duty Tracker
        </Link>

        <Link to="/compliance" style={linkStyle}>
          ✅ Compliance
        </Link>

        <Link to="/alerts" style={linkStyle}>
          🚨 Conflict Alerts
        </Link>

        <Link to="/notifications" style={linkStyle}>
          🔔 Notifications
        </Link>

        <Link to="/admin" style={linkStyle}>
          🛠 Admin Panel
        </Link>

        <Link to="/analytics" style={linkStyle}>
          📈 Analytics
        </Link>

        <Link to="/profile" style={linkStyle}>
          👤 Profile
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;