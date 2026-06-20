import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Analytics() {
  const data = [
    {
      name: "Crew",
      value: 120,
    },
    {
      name: "Flights",
      value: 45,
    },
    {
      name: "Assignments",
      value: 98,
    },
    {
      name: "Leaves",
      value: 12,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <h1>📈 Analytics Dashboard</h1>

        <BarChart
          width={700}
          height={350}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>
    </div>
  );
}

export default Analytics;