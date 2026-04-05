import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import Register from "./pages/Register";

function App() {
  const path = window.location.pathname;

  if (path === "/register") return <Register />;
  if (path === "/dashboard") return <Dashboard />;
  if (path === "/records") return <Records />;

  return <Login />;
}

export default App;