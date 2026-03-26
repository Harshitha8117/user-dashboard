import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFiltered(data);
    });
  }, []);

  return (
    <div className="container">
      {/* 🔥 Title */}
      <h1>User Intelligence Dashboard</h1>

      {/* 🔍 Controls Section */}
      <div className="controls">
        <SearchBar users={users} setFiltered={setFiltered} />
        <SortControls users={filtered} setFiltered={setFiltered} />
      </div>

      {/* 📊 Table */}
      <UserTable users={filtered} />
    </div>
  );
}