import { useState } from "react";
import API from "../api/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "viewer"
  });

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully ✅");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Register</h2>

        <input style={input} placeholder="Name"
          onChange={(e) => setForm({...form, name: e.target.value})} />

        <input style={input} placeholder="Email"
          onChange={(e) => setForm({...form, email: e.target.value})} />

        <input style={input} type="password" placeholder="Password"
          onChange={(e) => setForm({...form, password: e.target.value})} />

        <select style={input}
          onChange={(e) => setForm({...form, role: e.target.value})}>
          <option value="viewer">Viewer</option>
          <option value="analyst">Analyst</option>
          <option value="admin">Admin</option>
        </select>

        <button style={button} onClick={handleRegister}>
          Register
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span style={link} onClick={() => window.location.href="/"}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f5f7fb"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "300px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const link = {
  color: "#4f46e5",
  cursor: "pointer"
};

export default Register;