import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {
  const [data, setData] = useState(null);

  const fetchSummary = async () => {
    try {
      const res = await API.get("/summary");
      setData(res.data.data);
    } catch {
      alert("Failed to load summary");
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!data) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      
      {/* NAVBAR */}
      <div style={nav}>
        <h2>Dashboard</h2>
        <div>
          <button style={navBtn} onClick={() => window.location.href="/records"}>
            Records
          </button>
          <button style={logoutBtn} onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div style={cardContainer}>
        <Card title="Income" value={data.totalIncome} color="#16a34a" />
        <Card title="Expense" value={data.totalExpense} color="#dc2626" />
        <Card title="Balance" value={data.netBalance} color="#2563eb" />
      </div>

      {/* RECENT */}
      <h3>Recent Transactions</h3>
      {data.recentTransactions.map((r) => (
        <div key={r._id} style={item}>
          <b>{r.category}</b> — ₹{r.amount} ({r.type})
        </div>
      ))}
    </div>
  );
}

const Card = ({ title, value, color }) => (
  <div style={{ ...card, borderLeft: `5px solid ${color}` }}>
    <h4>{title}</h4>
    <p>₹ {value}</p>
  </div>
);

const nav = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px"
};

const navBtn = {
  marginRight: "10px",
  padding: "8px",
  background: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const logoutBtn = {
  padding: "8px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const cardContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px"
};

const card = {
  padding: "20px",
  background: "white",
  borderRadius: "10px",
  width: "180px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const item = {
  background: "white",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px"
};

export default Dashboard;