import Sidebar from "../components/Sidebar";

function ConflictAlerts() {
  const alerts = [
    {
      id: 1,
      crew: "Sarah Johnson",
      issue: "Insufficient Rest Period",
      severity: "High",
    },
    {
      id: 2,
      crew: "John Smith",
      issue: "Overlapping Flight Assignment",
      severity: "Medium",
    },
    {
      id: 3,
      crew: "David Lee",
      issue: "Crew Unavailable",
      severity: "Low",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>🚨 Conflict Alerts</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid red",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Total Alerts</h3>
            <h2>3</h2>
          </div>

          <div
            style={{
              border: "1px solid orange",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>High Priority</h3>
            <h2>1</h2>
          </div>

          <div
            style={{
              border: "1px solid green",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>Resolved</h3>
            <h2>0</h2>
          </div>
        </div>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Crew Member</th>
              <th>Issue</th>
              <th>Severity</th>
              <th>Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.crew}</td>
                <td>{alert.issue}</td>
                <td>{alert.severity}</td>

                <td>
                  {alert.severity === "High"
                    ? "Reassign immediately"
                    : alert.severity === "Medium"
                    ? "Review schedule"
                    : "Monitor"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConflictAlerts;