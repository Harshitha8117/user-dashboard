import { useState } from "react";

export default function SortControls({ users, setFiltered }) {
  const [nameOrder, setNameOrder] = useState("asc");
  const [companyOrder, setCompanyOrder] = useState("asc");

  const sortByName = () => {
    const newOrder = nameOrder === "asc" ? "desc" : "asc";

    const sorted = [...users].sort((a, b) =>
      newOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFiltered(sorted);
    setNameOrder(newOrder);
  };

  const sortByCompany = () => {
    const newOrder = companyOrder === "asc" ? "desc" : "asc";

    const sorted = [...users].sort((a, b) =>
      newOrder === "asc"
        ? a.company.name.localeCompare(b.company.name)
        : b.company.name.localeCompare(a.company.name)
    );

    setFiltered(sorted);
    setCompanyOrder(newOrder);
  };

  return (
    <div>
      <button onClick={sortByName}>
        Sort Name ({nameOrder})
      </button>

      <button onClick={sortByCompany}>
        Sort Company ({companyOrder})
      </button>
    </div>
  );
}