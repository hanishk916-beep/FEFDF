import Sidebar from "../components/Sidebar";

function Compliance() {
  const complianceData = [
    {
      id: 1,
      name: "John Smith",
      licenseStatus: "Valid",
      dutyHours: 85,
      restHours: 12,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      licenseStatus: "Expired",
      dutyHours: 110,
      restHours: 8,
    },
    {
      id: 3,
      name: "David Lee",
      licenseStatus: "Valid",
      dutyHours: 75,
      restHours: 14,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Compliance Dashboard</h1>

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
              <th>Name</th>
              <th>License</th>
              <th>Duty Hours</th>
              <th>Rest Hours</th>
              <th>Compliance Status</th>
            </tr>
          </thead>

          <tbody>
            {complianceData.map((crew) => (
              <tr key={crew.id}>
                <td>{crew.name}</td>
                <td>{crew.licenseStatus}</td>
                <td>{crew.dutyHours}</td>
                <td>{crew.restHours}</td>

                <td>
                  {crew.licenseStatus === "Expired" ? (
                    "🚨 License Expired"
                  ) : crew.restHours < 10 ? (
                    "⚠ Rest Violation"
                  ) : crew.dutyHours > 100 ? (
                    "⚠ Duty Limit Exceeded"
                  ) : (
                    "✅ Compliant"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Compliance;