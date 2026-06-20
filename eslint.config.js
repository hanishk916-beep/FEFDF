import { useState } from "react";
import Sidebar from "../components/Sidebar";

function LeaveRequest() {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employee: "Sarah Johnson",
      startDate: "2026-06-20",
      endDate: "2026-06-22",
      status: "Pending",
    },
  ]);

  const [employee, setEmployee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      id: Date.now(),
      employee,
      startDate,
      endDate,
      status: "Pending",
    };

    setLeaveRequests((prev) => [...prev, newLeave]);

    setEmployee("");
    setStartDate("");
    setEndDate("");
  };

  // ✅ Approve function
  const approveLeave = (id) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
  };

  // ❌ Reject function
  const rejectLeave = (id) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Leave Requests</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Employee Name"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              required
            />
          </div>

          <br />

          <div>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <br />

          <div>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <br />

          <button type="submit">Submit Leave Request</button>
        </form>

        <hr />

        <h2>All Requests</h2>

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
              <th>Employee</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th> {/* ✅ added */}
            </tr>
          </thead>

          <tbody>
            {leaveRequests.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employee}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.status}</td>

                <td>
                  <button onClick={() => approveLeave(leave.id)}>
                    Approve
                  </button>

                  <button
                    onClick={() => rejectLeave(leave.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveRequest;