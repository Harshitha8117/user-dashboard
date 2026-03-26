export default function SearchBar({ users, setFiltered }) {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(value) ||
        u.email.toLowerCase().includes(value)
    );

    setFiltered(filtered);
  };

  return <input placeholder="Search..." onChange={handleSearch} />;
}