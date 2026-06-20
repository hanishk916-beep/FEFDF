import Sidebar from "../components/Sidebar";

function Admin() {
  const stats = {
    crew: 120,
    flights: 45,
    assignments: 98,
    leaves: 12,
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>🛠 Admin Panel</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Total Crew</h3>
            <h2>{stats.crew}</h2>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Total Flights</h3>
            <h2>{stats.flights}</h2>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Assignments</h3>
            <h2>{stats.assignments}</h2>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
            }}
          >
            <h3>Leave Requests</h3>
            <h2>{stats.leaves}</h2>
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>
          System Controls
        </h2>

        <button>Add Crew</button>

        <button style={{ marginLeft: "10px" }}>
          Remove Crew
        </button>

        <button style={{ marginLeft: "10px" }}>
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default Admin;