function CrewTable({ data }) {
  return (
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
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((crew) => (
          <tr key={crew.id}>
            <td>{crew.id}</td>
            <td>{crew.name}</td>
            <td>{crew.role}</td>
            <td>{crew.flight}</td>
            <td>{crew.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CrewTable;