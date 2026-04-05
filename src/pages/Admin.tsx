import { useNavigate } from "react-router-dom";
import UserStats from "../components/UserStats/UserStats";
import UserActivity from "../components/UserActivity/UserActivity";
import "../styles/Admin.css";

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const authData = localStorage.getItem("auth");
  const user = authData ? JSON.parse(authData).user : "Admin";

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <p className="admin-label">Admin Panel</p>
            <h1 className="admin-title">Dashboard</h1>
            <p className="admin-subtitle">
              Welcome, {user}. Manage your application from here.
            </p>
          </div>

          <UserStats />
          <UserActivity />

          <button className="admin-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;