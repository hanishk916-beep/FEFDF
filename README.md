import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Roster() {
  const [crewData, setCrewData] = useState([
    {
      id: 1,
      name: "John Smith",
      role: "Captain",
      flight: "AI101",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Cabin Crew",
      flight: "AI202",
    },
    {
      id: 3,
      name: "David Lee",
      role: "First Officer",
      flight: "AI303",
    },
  ]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newFlight, setNewFlight] = useState("");

  const addCrew = () => {
    if (!newName || !newRole || !newFlight) {
      alert("Please fill all fields");
      return;
    }

    const newCrew = {
      id: Date.now(),
      name: newName,
      role: newRole,
      flight: newFlight,
    };

    setCrewData([...crewData, newCrew]);

    setNewName("");
    setNewRole("");
    setNewFlight("");
  };

  const deleteCrew = (id) => {
    setCrewData(
      crewData.filter((crew) => crew.id !== id)
    );
  };

  const filteredCrew = crewData.filter((crew) => {
    const matchesSearch = crew.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" ||
      crew.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <h1>👨‍✈️ Crew Roster Management</h1>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            width: "250px",
            marginBottom: "20px",
          }}
        >
          <h3>Total Crew</h3>
          <h2>{crewData.length}</h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search Crew"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Captain</option>
            <option>First Officer</option>
            <option>Cabin Crew</option>
          </select>
        </div>

        <h3>Add New Crew</h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Crew Name"
            value={newName}
            onChange={(e) =>
              setNewName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Role"
            value={newRole}
            onChange={(e) =>
              setNewRole(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Flight"
            value={newFlight}
            onChange={(e) =>
              setNewFlight(e.target.value)
            }
          />

          <button onClick={addCrew}>
            Add Crew
          </button>
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
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Flight</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCrew.map((crew) => (
              <tr key={crew.id}>
                <td>{crew.id}</td>
                <td>{crew.name}</td>
                <td>{crew.role}</td>
                <td>{crew.flight}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteCrew(crew.id)
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

export default Roster;