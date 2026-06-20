import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Assignment() {
const [assignments, setAssignments] = useState([
{
id: 1,
flight: "AI101",
crew: "John Smith",
role: "Captain",
status: "Assigned",
},
{
id: 2,
flight: "AI202",
crew: "Sarah Johnson",
role: "Cabin Crew",
status: "Assigned",
},
]);

const [flight, setFlight] = useState("");
const [crew, setCrew] = useState("");
const [role, setRole] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

```
if (!flight || !crew || !role) {
  alert("Please fill all fields");
  return;
}

const newAssignment = {
  id: Date.now(),
  flight,
  crew,
  role,
  status: "Assigned",
};

setAssignments([...assignments, newAssignment]);

setFlight("");
setCrew("");
setRole("");
```

};

const removeAssignment = (id) => {
setAssignments(
assignments.filter(
(assignment) => assignment.id !== id
)
);
};

const conflictCount = assignments.filter(
(assignment, index, arr) =>
arr.findIndex(
(a) =>
a.crew.toLowerCase() ===
assignment.crew.toLowerCase()
) !== index
).length;

return (
<div style={{ display: "flex" }}> <Sidebar />

```
  <div
    style={{
      padding: "20px",
      flex: 1,
    }}
  >
    <h1>✈ Flight Assignments</h1>

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          minWidth: "180px",
        }}
      >
        <h3>Total Assignments</h3>
        <h2>{assignments.length}</h2>
      </div>

      <div
        style={{
          border: "1px solid red",
          padding: "15px",
          borderRadius: "8px",
          minWidth: "180px",
        }}
      >
        <h3>Conflicts</h3>
        <h2>{conflictCount}</h2>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Flight Number"
        value={flight}
        onChange={(e) =>
          setFlight(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Crew Member"
        value={crew}
        onChange={(e) =>
          setCrew(e.target.value)
        }
        style={{ marginLeft: "10px" }}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
        style={{ marginLeft: "10px" }}
      />

      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "5px 12px",
        }}
      >
        Assign
      </button>
    </form>

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
          <th>Flight</th>
          <th>Crew Member</th>
          <th>Role</th>
          <th>Status</th>
          <th>Conflict Check</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {assignments.map((assignment) => (
          <tr key={assignment.id}>
            <td>{assignment.flight}</td>
            <td>{assignment.crew}</td>
            <td>{assignment.role}</td>
            <td>{assignment.status}</td>

            <td>
              {assignments.filter(
                (a) =>
                  a.crew.toLowerCase() ===
                  assignment.crew.toLowerCase()
              ).length > 1
                ? "🚨 Duplicate Assignment"
                : "✅ No Conflict"}
            </td>

            <td>
              <button
                onClick={() =>
                  removeAssignment(
                    assignment.id
                  )
                }
              >
                Delete
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

export default Assignment;
