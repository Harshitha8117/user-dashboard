import { useNavigate } from "react-router-dom";

export default function UserTable({ users }) {
  const navigate = useNavigate();

  return (
    <table border="1">
      <thead>
        <tr style={{ transition: "0.2s" }}>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}