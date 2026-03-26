import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div
      style={{
        padding: "40px",
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          background: "#ffffff",
          borderRadius: "14px",
          padding: "30px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: "20px",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "#ffffff",
            fontWeight: "500",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.target.style.background = "#1d4ed8")
          }
          onMouseOut={(e) =>
            (e.target.style.background = "#2563eb")
          }
        >
          ← Back
        </button>

        {/* 👤 Name */}
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "26px",
          }}
        >
          {user.name}
        </h2>

        {/* 📌 Basic Info */}
        <div style={{ marginBottom: "25px", lineHeight: "1.8" }}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>

        <hr style={{ margin: "20px 0", opacity: 0.2 }} />

        {/* 🏢 Company */}
        <div style={{ marginTop: "20px" }}>
          <h3>Company</h3>
          <p style={{ fontWeight: "600" }}>
            {user.company.name}
          </p>
          <p style={{ color: "#6b7280" }}>
            {user.company.catchPhrase}
          </p>
        </div>

        <hr style={{ margin: "20px 0", opacity: 0.2 }} />

        {/* 📍 Address */}
        <div style={{ marginTop: "20px" }}>
          <h3>Address</h3>
          <p>
            {user.address.street}, {user.address.city}
          </p>
          <p>{user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
}