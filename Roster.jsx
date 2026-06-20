import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <DashboardCard
            title="Total Crew"
            value="120"
          />

          <DashboardCard
            title="Flights Today"
            value="45"
          />

          <DashboardCard
            title="Pending Leaves"
            value="8"
          />

          <DashboardCard
            title="Compliance Alerts"
            value="3"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;