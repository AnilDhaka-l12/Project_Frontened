import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { downloadUserCsv } from "../components/admin/Export/userExportCsv";
import { downloadUserExcel } from "../components/admin/Export/userExportExcel";
import UserStats from "../components/UserStats/UserStats";
import UserActivity from "../components/UserActivity/UserActivity";
import UserEndpoints from "../components/admin/UserEndpoints/UserEndpoints";
import AdminSearch from "../components/admin/Search/AdminSearch";
import "../styles/Admin.css";

function Admin() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

          <div className="admin-right-panel">
            <div className="admin-actions">
              <button className="export-btn csv-btn" onClick={downloadUserCsv}>
                Export CSV
              </button>

              <button
                className="export-btn excel-btn"
                onClick={downloadUserExcel}
              >
                Export Excel
              </button>

              <button className="admin-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>

            <AdminSearch value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>

        <button
          className="admin-detail-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails
            ? "Hide Detail Static View"
            : "For detail static view click here"}
        </button>

        {showDetails && <UserEndpoints searchTerm={searchTerm} />}

        <div className="admin-sections">
          <UserStats />
          <UserActivity />
        </div>
      </div>
    </div>
  );
}

export default Admin;