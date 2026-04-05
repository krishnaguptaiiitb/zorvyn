import { useEffect, useState } from "react";
import API from "../api/api";

function Records() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    type: "income",
    category: "",
    notes: ""
  });

  const fetchRecords = async () => {
    const res = await API.get("/records");
    setRecords(res.data.data.records);
  };

  const handleAdd = async () => {
    await API.post("/records", form);
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
      <button onClick={() => window.location.href="/dashboard"}>
        ← Back
      </button>

      <h2>Records</h2>

      {/* FORM */}
      <div style={card}>
        <input style={input} placeholder="Amount"
          onChange={(e) => setForm({...form, amount: e.target.value})} />

        <select style={input}
          onChange={(e) => setForm({...form, type: e.target.value})}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input style={input} placeholder="Category"
          onChange={(e) => setForm({...form, category: e.target.value})} />

        <input style={input} placeholder="Notes"
          onChange={(e) => setForm({...form, notes: e.target.value})} />

        <button style={btn} onClick={handleAdd}>Add</button>
      </div>

      {/* LIST */}
      {records.map((r) => (
        <div key={r._id} style={item}>
          {r.category} — ₹{r.amount} ({r.type})
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px"
};

const input = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "8px"
};

const btn = {
  padding: "10px",
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "6px"
};

const item = {
  background: "white",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px"
};

export default Records;